import { Router } from "express";
import asyncHandler from "../utils/asyncHandler.js";
import messageController from "../controllers/messageController.js";
import validateMessage from "../validators/messageValidator.js";

const router = Router();
router.post("/", validateMessage, asyncHandler(messageController.create));

export default router;
