import Router from "express";
import {
  handleSignup,
  handleLogin,
  authPage,
} from "../controllers/user.controller.js";
import { VerifyUser } from "../middleware/auth.middleware.js";

const router = Router();

router.post("/signup", handleSignup);
router.post("/login", handleLogin);
router.get("/me",VerifyUser, authPage);

export default router;
