import cors from "cors";
import express from "express";
import env from "./config/env.js";
import apiRateLimiter from "./middlewares/rateLimitMiddleware.js";
import {
  errorMiddleware,
  notFoundMiddleware,
} from "./middlewares/errorMiddleware.js";
import messageRoutes from "./routes/messageRoutes.js";

const app = express();

app.use(cors({ origin: env.clientUrl }));
app.use(express.json());
app.use("/api", apiRateLimiter);

app.get("/api/health", (_request, response) =>
  response.json({ status: "ok", service: "portfolio-api" }),
);
app.use("/api/messages", messageRoutes);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

export default app;
