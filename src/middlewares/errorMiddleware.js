import env from "../config/env.js";

const notFoundMiddleware = (request, _response, next) => {
  const error = new Error(
    `Route not found: ${request.method} ${request.originalUrl}`,
  );
  error.statusCode = 404;
  next(error);
};

const errorMiddleware = (error, _request, response, _next) => {
  const statusCode = error.statusCode || 500;
  response.status(statusCode).json({
    message: error.message || "Internal server error",
    ...(env.nodeEnv === "development" && { stack: error.stack }),
  });
};

export { errorMiddleware, notFoundMiddleware };
