import type { Request, Response } from "express";
import { BookingSchema } from "../schema/schema";
import { ErrorResponse, SuccessResponse } from "../utils/ApiResponse";
import { prisma } from "../../client";

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
        return res.status(401).json(ErrorResponse("ROOM_NOT_FOUND"));
      }

      // Check past dates
      const today = new Date();
      if (checkInDate < today || checkOutDate <= checkInDate) {
        return res.status(401).json(ErrorResponse("INVALID_DATES"));
      }

      //  Check capacity
      if (guests > room.maxOccupancy) {
        return res.status(401).json(ErrorResponse("INVALID_CAPACITY"));
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
        return res.status(401).json(ErrorResponse("ROOM_NOT_AVAILABLE"));
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
    return res.status(500).json(ErrorResponse("SERVER_ERROR"));
  }
};



export const GetBookingsOfCurrentUser = async (req: Request, res: Response) => {
  const userId = req.user?.id;

  if (!userId) {
    return res.status(401).json(ErrorResponse("UNAUTHORIZED"));
  }

  const { status } = req.query

  //one user can have multiple bookings therefore findMany
  const bookings = await prisma.booking.findMany({
    where: {
      userId: userId,
      ...(status && { status: String(status) }),
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
      roomType: booking.room.type,
      checkInDate: booking.checkInDate,
      checkOutDate: booking.checkOutDate,
      guests: booking.guests,
      totalPrice: booking.totalPrice.toNumber(),
      status: booking.status,
      bookingDate: booking.bookingDate,
    }));

  return res.status(200).json(
    SuccessResponse(formattedBookings))
};


export const cancelBooking = () => {};
