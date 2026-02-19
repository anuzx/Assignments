// bookings.controller.ts
import type { Request, Response } from "express";
import { prisma } from "../../client";
import { BookingSchema } from "../schema/schema";
import { ApiError, ErrorResponse, SuccessResponse } from "../utils/ApiResponse";

export const CreateNewBooking = async (req: Request, res: Response) => {
  const parsedData = BookingSchema.safeParse(req.body);

  if (!parsedData.success) {
    return res.status(400).json(ErrorResponse("INVALID_REQUEST"));
  }

  const { roomId, checkInDate, checkOutDate, guests } = parsedData.data;

  const userId = req.user?.id;

  if (!userId) {
    return res.status(401).json(ErrorResponse("UNAUTHORIZED"));
  }

  try {
    const result = await prisma.$transaction(async (tx) => {
      const room = await tx.room.findUnique({
        where: { id: roomId },
        include: { hotel: true },
      });

      if (!room) {
        throw new ApiError("ROOM_NOT_FOUND", 404);
      }

      if (room.hotel.ownerId === userId) {
        throw new ApiError("FORBIDDEN", 403);
      }

      const today = new Date();
      today.setHours(0, 0, 0, 0);

      const checkIn = new Date(checkInDate);
      const checkOut = new Date(checkOutDate);

      //checkout before checkin check FIRST, before date validation
      if (checkOut <= checkIn) {
        throw new ApiError("INVALID_REQUEST", 400);
      }

      // strictly less than — checkIn on a past date is invalid
      // Using < today means today itself is still valid (matches test behavior)
      if (checkIn < today) {
        throw new ApiError("INVALID_DATES", 400);
      }

      if (guests > room.maxOccupancy) {
        throw new ApiError("INVALID_CAPACITY", 400);
      }

      // FIX C: use tx not prisma, filter confirmed only
      const existingBookings = await tx.booking.findMany({
        where: {
          roomId,
          status: "confirmed",
        },
        select: {
          checkInDate: true,
          checkOutDate: true,
        },
      });

      const isOverlapping = existingBookings.some((booking) => {
        const existingCheckIn = new Date(booking.checkInDate);
        const existingCheckOut = new Date(booking.checkOutDate);
        return checkIn < existingCheckOut && checkOut > existingCheckIn;
      });

      if (isOverlapping) {
        throw new ApiError("ROOM_NOT_AVAILABLE", 400);
      }

      const nights =
        (checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24);
      const totalPrice = nights * room.pricePerNight.toNumber();

      const booking = await tx.booking.create({
        data: {
          userId,
          roomId,
          hotelId: room.hotelId,
          checkInDate: checkIn,
          checkOutDate: checkOut,
          guests,
          totalPrice,
        },
      });

      return booking;
    });

    const formattedResult = {
      ...result,
      totalPrice: result.totalPrice.toNumber(),
    };

    return res.status(201).json(SuccessResponse(formattedResult));
  } catch (error: any) {
    if (error instanceof ApiError) {
      return res.status(error.statusCode).json(ErrorResponse(error.message));
    }
    return res.status(500).json(ErrorResponse("SERVER_ERROR"));
  }
};

type BookingStatusType = "confirmed" | "cancelled";

export const GetBookingsOfCurrentUser = async (req: Request, res: Response) => {
  const userId = req.user?.id;

  if (!userId) {
    return res.status(401).json(ErrorResponse("UNAUTHORIZED"));
  }

  const status = req.query.status as BookingStatusType | undefined;

  const bookings = await prisma.booking.findMany({
    where: {
      userId,
      ...(status && { status }),
    },
    include: {
      room: {
        select: { roomNumber: true, roomType: true },
      },
      hotel: {
        select: { name: true },
      },
    },
    orderBy: { bookingDate: "desc" },
  });

  const formattedBookings = bookings.map((booking) => ({
    id: booking.id,
    roomId: booking.roomId,
    hotelId: booking.hotelId,
    hotelName: booking.hotel.name,
    roomNumber: booking.room.roomNumber,
    roomType: booking.room.roomType,
    checkInDate: booking.checkInDate,
    checkOutDate: booking.checkOutDate,
    guests: booking.guests,
    totalPrice: booking.totalPrice.toNumber(),
    status: booking.status,
    bookingDate: booking.bookingDate,
  }));

  return res.status(200).json(SuccessResponse(formattedBookings));
};

export const cancelBooking = async (req: Request, res: Response) => {
  const bookingId = req.params.bookingId as string;
  const userId = req.user?.id as string;

  if (!userId) {
    return res.status(401).json(ErrorResponse("UNAUTHORIZED"));
  }

  try {
    const result = await prisma.$transaction(async (tx) => {
      const availBooking = await tx.booking.findUnique({
        where: { id: bookingId },
      });

      if (!availBooking) {
        throw new ApiError("BOOKING_NOT_FOUND", 404);
      }

      // ownership check before status check
      if (availBooking.userId !== userId) {
        throw new ApiError("FORBIDDEN", 403);
      }

      if (availBooking.status === "cancelled") {
        throw new ApiError("ALREADY_CANCELLED", 400);
      }

      const now = new Date();
      const checkIn = new Date(availBooking.checkInDate);
      const hoursUntilCheckIn =
        (checkIn.getTime() - now.getTime()) / (1000 * 60 * 60);

      if (hoursUntilCheckIn < 24) {
        throw new ApiError("CANCELLATION_DEADLINE_PASSED", 400);
      }

      const updated = await tx.booking.update({
        where: { id: bookingId },
        data: { status: "cancelled", cancelledAt: new Date() },
        select: { id: true, status: true, cancelledAt: true },
      });

      return updated;
    });

    return res.status(200).json(SuccessResponse(result));
  } catch (error) {
    if (error instanceof ApiError) {
      return res.status(error.statusCode).json(ErrorResponse(error.message));
    }
    return res.status(500).json(ErrorResponse("SERVER_ERROR"));
  }
};
