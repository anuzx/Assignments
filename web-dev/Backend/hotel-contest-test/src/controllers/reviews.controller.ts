import type { Request, Response } from "express"
import { ReviewSchema } from "../schema/schema"
import { prisma } from "../../client";
import { ApiError, ErrorResponse, SuccessResponse } from "../utils/ApiResponse";

export const submitReviews = async (req: Request, res: Response) => {
  const userId = req.user?.id;

  if (!userId) {
    return res.status(401).json(ErrorResponse("UNAUTHORIZED"));
  }

  const parsedData = ReviewSchema.safeParse(req.body);

  if (!parsedData.success) {
    return res.status(400).json(ErrorResponse("INVALID_REQUEST"));
  }

  const { bookingId, rating, comment } = parsedData.data;

  try {
    const result = await prisma.$transaction(async (tx) => {
      // Find booking
      const booking = await tx.booking.findUnique({
        where: { id: bookingId },
      });

      if (!booking) {
        throw new ApiError("BOOKING_NOT_FOUND",404);
      }

      // Check ownership
      if (booking.userId !== userId) {
        throw new ApiError("FORBIDDEN",403);
      }

      // Check eligibility
     const today = new Date();
     today.setHours(0, 0, 0, 0);

        const checkOut = new Date(booking.checkOutDate);
        checkOut.setHours(0, 0, 0, 0);

     const canReview =
       checkOut.getTime() < today.getTime() && booking.status === "confirmed";

     if (!canReview) {
       throw new ApiError("BOOKING_NOT_ELIGIBLE",400);
     }

      // Prevent duplicate review
      const existingReview = await tx.review.findUnique({
        where: {
          userId_bookingId: {
            userId,
            bookingId,
          },
        },
      });

      if (existingReview) {
        throw new ApiError("ALREADY_REVIEWED",400);
      }

      // Create review
      const review = await tx.review.create({
        data: {
          bookingId,
          userId,
          hotelId: booking.hotelId,
          rating,
          comment,
        },
      });

      //  Update hotel rating
      const hotel = await tx.hotel.findUnique({
        where: { id: booking.hotelId },
        select: {
          rating: true,
          totalReviews: true,
        },
      });

      if (!hotel) {
        throw new ApiError("SERVER_ERROR",500);
      }

     const currentRating = Number(hotel.rating);
     const currentTotal = hotel.totalReviews;

     const newTotal = currentTotal + 1;

     const newRating = (currentRating * currentTotal + rating) / newTotal;

      await tx.hotel.update({
        where: { id: booking.hotelId },
        data: {
          rating: newRating,
          totalReviews: newTotal,
        },
      });

      return review;
    });

    return res.status(201).json(SuccessResponse(result));
  } catch (error: any) {
  if (error instanceof ApiError) {
    return res.status(error.statusCode).json(ErrorResponse(error.message));
  }

  return res.status(500).json(ErrorResponse("SERVER_ERROR"));
  }
};
