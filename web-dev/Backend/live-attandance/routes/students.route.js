import Router from "express"
import {getStudent} from "../controllers/class.controller.js"
import { OnlyTeacher, VerifyUser } from "../middleware/auth.middleware.js"
const router = Router()


router.get("/" ,VerifyUser , OnlyTeacher, getStudent)
export default router