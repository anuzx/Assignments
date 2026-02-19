import type { Request, Response } from "express";
import { ReviewSchema } from "../schema/schema";
import { prisma } from "../../client";
import { ErrorResponse, SuccessResponse } from "../utils/ApiResponse";

export const submitReviews = async (req: Request, res: Response) => {
  const userId = req.user?.id as string;

  if (!userId) {
    return res.status(401).json(ErrorResponse("UNAUTHORIZED"));
  }

  const parsedData = ReviewSchema.safeParse(req.body);
  if (!parsedData.success) {
    return res.status(400).json(ErrorResponse("INVALID_REQUEST"));
  }

  const { bookingId, rating, comment } = parsedData.data;

  try {
    //  Booking exists
    const booking = await prisma.booking.findUnique({
      where: { id: bookingId },
    });

    if (!booking) {
      return res.status(404).json(ErrorResponse("BOOKING_NOT_FOUND"));
    }

    //  Ownership check
    if (booking.userId !== userId) {
      return res.status(403).json(ErrorResponse("FORBIDDEN"));
    }

    // Cancelled check
    if (booking.status !== "confirmed") {
      return res.status(400).json(ErrorResponse("BOOKING_NOT_ELIGIBLE"));
    }

    //  Date check (DO NOT mutate hours)
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const checkOut = new Date(booking.checkOutDate);

    const canReview = checkOut < today && booking.status === "confirmed";

    if (!canReview) {
      return res.status(400).json(ErrorResponse("BOOKING_NOT_ELIGIBLE"));
    }

    //  Duplicate review check (composite unique)
    const existingReview = await prisma.review.findUnique({
      where: {
        userId_bookingId: {
          userId,
          bookingId,
        },
      },
    });

    if (existingReview) {
      return res.status(400).json(ErrorResponse("ALREADY_REVIEWED"));
    }

    // Fetch hotel
    const hotel = await prisma.hotel.findUnique({
      where: { id: booking.hotelId },
    });

    if (!hotel) {
      return res.status(404).json(ErrorResponse("HOTEL_NOT_FOUND"));
    }

    // Calculate new rating safely (Decimal → number)
    const currentRating = Number(hotel.rating);
    const currentTotal = hotel.totalReviews;

    const newTotal = currentTotal + 1;
    const newRating = Number(
      ((currentRating * currentTotal + rating) / newTotal).toFixed(1),
    );

    // Transaction
    const review = await prisma.$transaction(async (tx) => {
      const createdReview = await tx.review.create({
        data: {
          hotelId: booking.hotelId,
          userId,
          bookingId,
          rating,
          comment,
        },
      });

      await tx.hotel.update({
        where: { id: booking.hotelId },
        data: {
          rating: newRating,
          totalReviews: newTotal,
        },
      });

      return createdReview;
    });

    return res.status(201).json(SuccessResponse(review));
  } catch (error) {
    return res.status(500).json(ErrorResponse("SERVER_ERROR"));
  }
};
