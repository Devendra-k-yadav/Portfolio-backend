import jwt from "jsonwebtoken";
import env from "../config/env.js";
import ApiError from "../utils/ApiError.js";

const authMiddleware = (request, _response, next) => {
  const token = request.headers.authorization?.replace("Bearer ", "");
  if (!token) return next(new ApiError(401, "Authentication required"));

  try {
    request.user = jwt.verify(token, env.jwtSecret);
    next();
  } catch {
    next(new ApiError(401, "Invalid or expired token"));
  }
};

export default authMiddleware;
