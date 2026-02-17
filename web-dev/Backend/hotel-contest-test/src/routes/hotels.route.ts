import Router from "express";
import {
  AddRoomToHotel,
  CreateHotel,
  hotelInfoWithRooms,
  searchAndFilterHotels,
} from "../controllers/hotels.controller";
import { VerifyUser, AccessibleOnlyTo } from "../middleware/auth.middleware";

const router = Router();

router
  .route("/")
  .post(VerifyUser, AccessibleOnlyTo(["owner"]), CreateHotel)
  .get(VerifyUser ,searchAndFilterHotels);

router
  .route("/:hotelId/rooms")
  .post(VerifyUser, AccessibleOnlyTo(["owner"]), AddRoomToHotel);

router.route("/:hotelId").get(hotelInfoWithRooms);

export default router;
