import mongoose from "mongoose";
import env from "./env.js";

const connectDatabase = async () => {
  if (!env.mongoUri) return;
  await mongoose.connect(env.mongoUri);
  console.log("MongoDB connected");
};

export default connectDatabase;
