import { Router } from "express";
import { VerifyUser } from "../middleware/auth.middleware.js";
import {createClass} from "../controllers/class.controller.js"
const router = Router()

router.post("/" ,VerifyUser ,createClass)

export default router