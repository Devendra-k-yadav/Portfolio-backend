import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    number: String,
    title: { type: String, required: true },
    description: String,
    tags: [String],
    links: { github: String, live: String },
    published: { type: Boolean, default: true },
  },
  { timestamps: true },
);

const Project = mongoose.model("Project", projectSchema);

export default Project;
