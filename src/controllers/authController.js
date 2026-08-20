import bcrypt from "bcryptjs";
import Admin from "../models/Admin.js";
import ApiError from "../utils/ApiError.js";
import generateToken from "../utils/generateToken.js";

const login = async (request, response, next) => {
  const { email, password } = request.body;
  const admin = await Admin.findOne({ email });
  if (!admin || !(await bcrypt.compare(password, admin.passwordHash)))
    return next(new ApiError(401, "Invalid credentials"));
  response.json({
    token: generateToken({ id: admin.id, role: "admin" }),
    admin: { id: admin.id, name: admin.name, email: admin.email },
  });
};

const getCurrentAdmin = (request, response) =>
  response.json({ admin: request.user });

const authController = { login, getCurrentAdmin };

export default authController;
