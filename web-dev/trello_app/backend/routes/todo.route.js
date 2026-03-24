
import { Router } from "express";
import { createIssue, getIssues, updateIssues } from "../controllers/todo.controller.js";
import { VerifyUser } from "../middlewares/verify.js";
const router = Router()

router.post("/create", VerifyUser, createIssue)
router.post("/", VerifyUser, getIssues)
router.patch("/status", VerifyUser, updateIssues)
export default router
