

import { Router } from "express";
import { createOrganization, getOrganization } from "../controllers/organization.controller.js";
import { VerifyUser } from "../middlewares/verify.js";

const router = Router()

router.post("/create", VerifyUser, createOrganization)
router.post("/", VerifyUser, getOrganization)
export default router
