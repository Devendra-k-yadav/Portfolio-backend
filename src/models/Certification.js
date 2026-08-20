import mongoose from "mongoose";

const certificationSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    issuer: String,
    issueDate: Date,
    credentialUrl: String,
  },
  { timestamps: true },
);

const Certification = mongoose.model("Certification", certificationSchema);

export default Certification;
