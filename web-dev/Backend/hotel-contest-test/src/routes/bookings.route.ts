import Router from "express";
import {
  cancelBooking,
  CreateNewBooking,
  GetBookingsOfCurrentUser,
} from "../controllers/bookings.controller";

const router = Router();

router.route("/").post(CreateNewBooking).get(GetBookingsOfCurrentUser);

router.route("/:bookingId/cancel").put(cancelBooking);

export default router;
