import type { Request, Response } from "express";
import { HotelSchema, RoomSchema } from "../schema/schema";
import { ErrorResponse, SuccessResponse } from "../utils/ApiResponse";
import { prisma } from "../../client";

export const CreateHotel = async (req: Request, res: Response) => {
  const parsedData = HotelSchema.safeParse(req.body);

  if (!parsedData.success) {
    return res.status(400).json(ErrorResponse("INVALID_REQUEST"));
  }

  try {
    const hotel = await prisma.hotel.create({
      data: {
        name: parsedData.data?.name,
        description: parsedData.data?.description ?? null,
        city: parsedData.data?.city,
        country: parsedData.data?.country,
        amenities: parsedData.data?.amenities ?? [],
        owner: {
          //Link this record to an existing record in another table.(used in create and update)
          connect: { id: req.user?.id },
        },
      },
    });

    return res.status(201).json(SuccessResponse(hotel));
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

  //Fetch multiple rows from the Hotel table.
  const hotels = await prisma.hotel.findMany({
    where: {
      // Hotel filters
      city: city ? { equals: String(city), mode: "insensitive" } : undefined,

      country: country
        ? { equals: String(country), mode: "insensitive" }
        : undefined,

      //gte -> greater than or equal 
      rating: minRating ? { gte: Number(minRating) } : undefined,

      // Room filters (exclude hotels with no rooms automatically)
      //
      rooms: {
        some: {
          pricePerNight: {
            gte: minPrice ? Number(minPrice) : undefined,
            lte: maxPrice ? Number(maxPrice) : undefined,
          },
        },
      },
    },

    include: {
      rooms: {
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

  const hotelId = req.params.hotelId as string;

  if (!parsedData.success) {
    return res.status(400).json(ErrorResponse("INVALID_REQUEST"));
  }

  if (!hotelId) {
    return res.status(404).json(ErrorResponse("HOTEL_NOT_FOUND"));
  }

  try {
    const roomExist = await prisma.room.findUnique({
      where: {
        hotelId_roomNumber: {
          hotelId: hotelId,
          roomNumber: parsedData.data.roomNumber,
        },
      },
    });

    if (roomExist) {
      return res.status(400).json(ErrorResponse("ROOM_ALREADY_EXISTS"));
    }

    const room = await prisma.room.create({
      data: {
        roomNumber: parsedData.data.roomNumber,
        roomType: parsedData.data.roomType,
        pricePerNight: parsedData.data.pricePerNight,
        maxOccupancy: parsedData.data.maxOccupancy,
        hotel: {
          connect: {
            id: hotelId,
          },
        },
      },
    });

    return res.status(200).json(SuccessResponse(room));
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "internal server error",
    });
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
