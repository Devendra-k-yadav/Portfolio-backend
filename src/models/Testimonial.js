import mongoose from "mongoose";

const testimonialSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    role: String,
    quote: { type: String, required: true },
    avatarUrl: String,
    published: { type: Boolean, default: true },
  },
  { timestamps: true },
);

const Testimonial = mongoose.model("Testimonial", testimonialSchema);

export default Testimonial;
