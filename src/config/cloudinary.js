const cloudinary = {
  enabled: Boolean(process.env.CLOUDINARY_CLOUD_NAME),
  cloudName: process.env.CLOUDINARY_CLOUD_NAME || "",
  apiKey: process.env.CLOUDINARY_API_KEY || "",
  apiSecret: process.env.CLOUDINARY_API_SECRET || "",
};

export default cloudinary;
