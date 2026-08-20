import mongoose from "mongoose";

const educationSchema = new mongoose.Schema(
  {
    institution: { type: String, required: true },
    degree: String,
    startDate: Date,
    endDate: Date,
    description: String,
  },
  { timestamps: true },
);

const Education = mongoose.model("Education", educationSchema);

export default Education;
