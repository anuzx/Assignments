import { Router } from "express";
import { handleLogin, handleSignup } from "../controller/auth.controller";

const router = Router();

router.route("/signup").post(handleSignup);

router.route("/login").post(handleLogin);

export default router;
