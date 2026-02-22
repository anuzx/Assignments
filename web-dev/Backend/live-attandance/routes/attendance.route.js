import Router from "express"
import { startAttendance } from "../controllers/attandance.controller.js";
import { OnlyTeacher, VerifyUser } from "../middleware/auth.middleware.js"

const router = Router()


router.post("/start", VerifyUser, OnlyTeacher, startAttendance);

export default router