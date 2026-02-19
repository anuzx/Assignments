import type { Request, Response } from "express";
import { BookingSchema } from "../schema/schema";
import { ErrorResponse, SuccessResponse } from "../utils/ApiResponse";
import { prisma } from "../../client";
import {ApiError} from "../utils/ApiResponse"

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
      // Check room exists
      const room = await tx.room.findUnique({
        where: { id: roomId },
        include: { hotel: true },
      });

      if (!room) {
       throw new ApiError("ROOM_NOT_FOUND" , 404);
      }

      // Check past dates
      const today = new Date();
      if (checkInDate < today || checkOutDate <= checkInDate) {
       throw new ApiError("INVALID_DATES" , 400);
      }

      //  Check capacity
      if (guests > room.maxOccupancy) {
        throw new ApiError("INVALID_CAPACITY",400);
      }

      //  Check overlapping booking
      const overlappingBooking = await tx.booking.findFirst({
        where: {
          roomId,
          status: "confirmed",
          AND: [
            {
              checkInDate: { lt: checkOutDate },
            },
            {
              checkOutDate: { gt: checkInDate },
            },
          ],
        },
      });

      if (overlappingBooking) {
        throw new ApiError("ROOM_NOT_AVAILABLE" , 400);
      }

      // Calculate total price
      const nights =
        (checkOutDate.getTime() - checkInDate.getTime()) /
        (1000 * 60 * 60 * 24);

      const totalPrice = nights * room.pricePerNight.toNumber();

      // Create booking
      const booking = await tx.booking.create({
        data: {
          userId,
          roomId,
          hotelId: room.hotelId,
          checkInDate,
          checkOutDate,
          guests,
          totalPrice,
          status: "confirmed",
        },
      });

      return booking;
    });

    return res.status(201).json(SuccessResponse(result));
  } catch (error: any) {
    console.log(error);
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

  //one user can have multiple bookings therefore findMany
  const bookings = await prisma.booking.findMany({
    where: {
      userId: userId,
      ...(status && { status: {} }),
    },
    include: {
      room: {
        select: {
          roomNumber: true,
          roomType: true,
        },
      },
      hotel: {
        select: {
          name: true,
        },
      },
    },
    orderBy: {
      bookingDate: "desc",
    },
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
  //cancellation logic :
  // check booking exists > check booking belongs to user > check not alreay cancelled > check 24 hour rule > update booking > return selected fields 

  const bookingId = req.params.bookingId as string;

  const userId = req.user?.id;

  if (!userId) {
    return res.status(401).json(ErrorResponse("UNAUTHORIZED"));
  }

  try {
    const result = await prisma.$transaction(async (tx) => {
      const availBooking = await tx.booking.findUnique({
        where: {
          id: bookingId,
        },
      });

      if (!availBooking) {
        throw new ApiError("BOOKING_NOT_FOUND" ,404 );
      }

      if (availBooking.userId !== userId) {
        throw new ApiError("UNAUTHORIZED" ,401);
      }

      if (availBooking.status === "cancelled") {
        throw new ApiError("ALREADY_CANCELLED" ,400);
      }

      const now = new Date();
      const diff = availBooking.checkInDate.getTime() - now.getTime();

      if (diff < 24 * 60 * 60 * 1000) {
        throw new Error("CANCELLATION_DEADLINE_PASSED");
      }


      //cancel the booking and not del it
      const updated = await tx.booking.update({
        where: { id: bookingId },
        data: {
          status: "cancelled",
          cancelledAt: new Date(),
        },
        select: {
          id: true,
          status: true,
          cancelledAt: true,
        },
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
