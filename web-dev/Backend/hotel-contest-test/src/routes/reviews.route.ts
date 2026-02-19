import Router from "express"
import { VerifyUser, AccessibleOnlyTo } from "../middleware/auth.middleware"
import { submitReviews } from "../controllers/reviews.controller";

const router = Router()

router.post("/", VerifyUser, AccessibleOnlyTo(["customer"]) , submitReviews);

export default router
