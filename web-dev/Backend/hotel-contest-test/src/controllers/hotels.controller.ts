import type { Request, Response } from "express";
import { HotelSchema, RoomSchema } from "../schema/schema";
import { ErrorResponse, SuccessResponse } from "../utils/ApiResponse";
import { prisma } from "../../client";
import { ApiError } from "../utils/ApiResponse";

export const CreateHotel = async (req: Request, res: Response) => {
  const parsedData = HotelSchema.safeParse(req.body);

  if (!parsedData.success) {
    return res.status(400).json(ErrorResponse("INVALID_REQUEST"));
  }

  try {
    const hotel = await prisma.hotel.create({
      data: {
        name: parsedData.data.name,
        description: parsedData.data.description ?? null,
        city: parsedData.data.city,
        country: parsedData.data.country,
        amenities: parsedData.data.amenities ?? [],
        owner: {
          //Link this record to an existing record in another table.(used in create and update)
          connect: { id: req.user?.id },
        },
      },
    });

    const formattedHotel = {
      ...hotel,
      rating: Number(hotel.rating),
    };

    return res.status(201).json(SuccessResponse(formattedHotel));
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "internal server error",
    });
  }
};

export const searchAndFilterHotels = async (req: Request, res: Response) => {
  //pricing depends on rooms in this hotel(rooms table)
  //rating depends on hotels table directly

  const { city, country, minPrice, maxPrice, minRating } = req.query;

  const whereClause: any = {
    city: city ? { equals: String(city), mode: "insensitive" } : undefined,
    country: country
      ? { equals: String(country), mode: "insensitive" }
      : undefined,
    rating: minRating ? { gte: Number(minRating) } : undefined,
  };

  const priceFilter: any = {};

  if (minPrice) {
    priceFilter.gte = Number(minPrice);
  }

  if (maxPrice) {
    priceFilter.lte = Number(maxPrice);
  }

  if (Object.keys(priceFilter).length > 0) {
    whereClause.rooms = {
      some: {
        pricePerNight: priceFilter,
      },
    };
  }

  const hotels = await prisma.hotel.findMany({
    where: whereClause,
    include: {
      rooms: {
        where:
          Object.keys(priceFilter).length > 0
            ? { pricePerNight: priceFilter }
            : undefined,
        select: {
          pricePerNight: true,
        },
      },
    },
  });

  const formattedHotels = hotels.map((hotel) => ({
    id: hotel.id,
    name: hotel.name,
    description: hotel.description,
    city: hotel.city,
    country: hotel.country,
    amenities: hotel.amenities,
    rating: hotel.rating,
    totalReviews: hotel.totalReviews,
    minPricePerNight: Math.min(
      ...hotel.rooms.map((room) => Number(room.pricePerNight)),
    ),
  }));

  return res.status(200).json(SuccessResponse(formattedHotels));
};

export const AddRoomToHotel = async (req: Request, res: Response) => {
  const parsedData = RoomSchema.safeParse(req.body);

  if (!parsedData.success) {
    return res.status(400).json(ErrorResponse("INVALID_REQUEST"));
  }

  const hotelId = req.params.hotelId as string;

  if (!hotelId) {
    return res.status(404).json(ErrorResponse("HOTEL_NOT_FOUND"));
  }

  try {
    const result = await prisma.$transaction(async (tx) => {
      const hotel = await tx.hotel.findUnique({
        where: { id: hotelId },
      });

      if (!hotel) {
        throw new ApiError("HOTEL_NOT_FOUND", 404);
      }

      const roomExist = await tx.room.findUnique({
        where: {
          hotelId_roomNumber: {
            hotelId,
            roomNumber: parsedData.data.roomNumber,
          },
        },
      });

      if (roomExist) {
        throw new ApiError("ROOM_ALREADY_EXISTS", 400);
      }

      const room = await tx.room.create({
        data: {
          roomNumber: parsedData.data.roomNumber,
          roomType: parsedData.data.roomType,
          pricePerNight: parsedData.data.pricePerNight,
          maxOccupancy: parsedData.data.maxOccupancy,
          hotelId: hotelId,
        },
      });

      return room;
    });

    const finalResult = {
      ...result,
      pricePerNight: result.pricePerNight.toNumber(),
    };

    return res.status(201).json(SuccessResponse(finalResult));
  } catch (error) {
    if (error instanceof ApiError) {
      return res.status(error.statusCode).json(ErrorResponse(error.message));
    }

    return res.status(500).json(ErrorResponse("SERVER_ERROR"));
  }
};

export const hotelInfoWithRooms = async (req: Request, res: Response) => {
  const hotelId = req.params.hotelId as string;

  try {
    const hotel = await prisma.hotel.findUnique({
      where: {
        id: hotelId,
      },
      include: {
        rooms: true,
      },
    });

    if (!hotel) {
      return res.status(404).json(ErrorResponse("HOTEL_NOT_FOUND"));
    }

    return res.status(200).json(SuccessResponse(hotel));
  } catch (error) {
    return res.status(500).json(ErrorResponse("INTERNAL_SERVER_ERROR"));
  }
};
