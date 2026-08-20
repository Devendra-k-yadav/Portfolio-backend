import { Router } from "express";
import asyncHandler from "./asyncHandler.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const createCrudRouter = (controller, options = {}) => {
  const router = Router();
  router.get("/", asyncHandler(controller.list));
  router.get("/:id", asyncHandler(controller.getById));
  router.post(
    "/",
    authMiddleware,
    ...(options.createMiddleware || []),
    asyncHandler(controller.create),
  );
  router.patch("/:id", authMiddleware, asyncHandler(controller.update));
  router.delete("/:id", authMiddleware, asyncHandler(controller.remove));
  return router;
};

export default createCrudRouter;
