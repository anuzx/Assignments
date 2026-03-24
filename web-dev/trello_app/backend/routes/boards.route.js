

import { Router } from "express";
import { createBoard, getBoards } from "../controllers/board.controller";
import { VerifyUser } from "../middlewares/verify";

const router = Router()

router.post("/create", VerifyUser, createBoard)
router.get("/", VerifyUser, getBoards)

export default router
