import { Router } from "express";
import asyncHandler from "../utils/asyncHandler.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import authController from "../controllers/authController.js";
import validateLogin from "../validators/authValidator.js";

const router = Router();
router.post("/login", validateLogin, asyncHandler(authController.login));
router.get("/me", authMiddleware, asyncHandler(authController.getCurrentAdmin));

export default router;
