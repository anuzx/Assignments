import { Router } from "express";
import { AccessibleBy, VerifyUser } from "../middleware/auth.middleware.js";
import { getDsaProblem, submitDsaSolution } from "../controllers/problem.controller.js";

const router = Router()

router.get("/:problemId", VerifyUser, getDsaProblem);
router.post("/:problemId/submit", VerifyUser,AccessibleBy(["contestee"])  ,submitDsaSolution);

export default router