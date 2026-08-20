import app from "../src/app.js";
import connectDatabase from "../src/config/db.js";

const handler = async (request, response) => {
  await connectDatabase();
  return app(request, response);
};

export default handler;
