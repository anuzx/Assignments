

import { Router } from "express";
import { createMember, delMember, getMember } from "../controllers/members.controller.js";
import { VerifyUser } from "../middlewares/verify.js";

const router = Router()

router.post("/create", VerifyUser, createMember)
router.get("/", VerifyUser, getMember)
router.delete("/remove", VerifyUser, delMember)


export default router
