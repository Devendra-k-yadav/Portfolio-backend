import { Router } from "express";
import authMiddleware from "../middlewares/authMiddleware.js";
import asyncHandler from "../utils/asyncHandler.js";
import messageController from "../controllers/messageController.js";
import validateMessage from "../validators/messageValidator.js";

const router = Router();
router.get("/", asyncHandler(messageController.list));
router.post("/", validateMessage, asyncHandler(messageController.create));
router.get("/:id", asyncHandler(messageController.getById));
router.patch("/:id", authMiddleware, asyncHandler(messageController.update));
router.delete("/:id", authMiddleware, asyncHandler(messageController.remove));

export default router;
