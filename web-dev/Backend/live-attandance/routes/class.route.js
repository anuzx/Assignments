import { Router } from "express";
import { VerifyUser , OnlyTeacher ,OnlyStudent } from "../middleware/auth.middleware.js";
import {
  createClass,
  addStudent,
  getClass,
  myAttendance,
} from "../controllers/class.controller.js";
const router = Router()

router.post("/", VerifyUser, OnlyTeacher, createClass)

router.post("/:id/add-student", VerifyUser, OnlyTeacher, addStudent)

router.get("/:id", VerifyUser, getClass)

router.get("/:id/my-attendance" , VerifyUser ,OnlyStudent, myAttendance)

export default router