

import { Router } from "express";
import { createBoard, getBoards } from "../controllers/board.controller.js";
import { VerifyUser } from "../middlewares/verify.js";

const router = Router()

router.post("/create", VerifyUser, createBoard)
router.get("/", VerifyUser, getBoards)

export default router
