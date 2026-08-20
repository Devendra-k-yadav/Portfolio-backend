import mongoose from "mongoose";
import env from "./env.js";

const connectDatabase = async () => {
  if (!env.mongoUri) return;
  if (mongoose.connection.readyState === 1) return;
  await mongoose.connect(env.mongoUri);
  console.log("MongoDB connected");
};

export default connectDatabase;
