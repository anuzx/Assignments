import { Router } from "express";
import { handleLogin, handleSignup } from "../controllers/auth.controller.js";
const router = Router();
router.post("/signup", handleSignup);
router.post("/login", handleLogin);
export default router;
//# sourceMappingURL=auth.route.js.map