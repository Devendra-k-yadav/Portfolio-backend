import app from "../src/app.js";
import connectDatabase from "../src/config/db.js";

const handler = async (request, response) => {
  try {
    await connectDatabase();
    return app(request, response);
  } catch (error) {
    console.error("Database connection failed:", error);

    return response.status(500).json({
      success: false,
      message: "Database connection failed",
    });
  }
};

export default handler;