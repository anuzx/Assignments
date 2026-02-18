import Router from "express";
import {
  cancelBooking,
  CreateNewBooking,
  GetBookingsOfCurrentUser,
} from "../controllers/bookings.controller";
import { VerifyUser ,AccessibleOnlyTo } from "../middleware/auth.middleware";

const router = Router();

router
  .route("/")
  .post(VerifyUser, AccessibleOnlyTo(["customer"]), CreateNewBooking)
  .get(VerifyUser, AccessibleOnlyTo(["customer"]), GetBookingsOfCurrentUser);

router
  .route("/:bookingId/cancel")
  .put(VerifyUser, AccessibleOnlyTo(["customer"]), cancelBooking);

export default router;
