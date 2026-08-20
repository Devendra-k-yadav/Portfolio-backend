import mongoose from "mongoose";

const experienceSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    company: String,
    meta: String,
    description: String,
    order: { type: Number, default: 0 },
  },
  { timestamps: true },
);

const Experience = mongoose.model("Experience", experienceSchema);

export default Experience;
