import bcrypt from "bcryptjs";

const hashPassword = (password) => bcrypt.hash(password, 12);
const comparePassword = (password, passwordHash) =>
  bcrypt.compare(password, passwordHash);

const authService = { hashPassword, comparePassword };

export default authService;
