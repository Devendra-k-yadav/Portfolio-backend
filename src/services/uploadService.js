const uploadFile = async (file) => {
  if (!file) throw new Error("File is required");
  return {
    url: null,
    fileName: file.originalname,
    status: "cloudinary-not-configured",
  };
};

export default uploadFile;
