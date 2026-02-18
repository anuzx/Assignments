
import { z } from "zod"

export const SignupSchema = z.object({
  name: z.string().trim().nonempty(),
  email: z.email().trim().nonempty(),
  password: z.string().trim().nonempty(),
  role: z.enum(["customer", "owner"]).default("customer"),
  phone: z.string().optional(),
}).strict()


export const LoginSchema = z.object({
    email: z.email().trim().nonempty(),
    password: z.string().trim().nonempty()
    
}).strict()

export const HotelSchema = z.object({
    name: z.string(),
    description: z.string(),
    city: z.string(),
    country: z.string(),
    amenities: z.array(z.string()),
})


export const RoomSchema = z.object({
    roomNumber: z.string(),
    roomType: z.string(),
    pricePerNight: z.number(),
    maxOccupancy: z.number()
})


export const BookingSchema = z.object({
    roomId: z.string(),
    checkInDate: z.coerce.date(),
    checkOutDate: z.coerce.date(),
    guests:z.number()
    
})