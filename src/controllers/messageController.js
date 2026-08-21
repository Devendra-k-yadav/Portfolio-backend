import mongoose from "mongoose";
import Message from "../models/Message.js";
import sendMessageNotification from "../services/emailService.js";

const localMessages = [];

const create = async (request, response) => {
  const message =
    mongoose.connection.readyState === 1
      ? await Message.create(request.body)
      : {
          ...request.body,
          _id: `local-${Date.now()}`,
          read: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        };

  if (mongoose.connection.readyState !== 1) localMessages.push(message);
  let emailSent = false;

  try {
    emailSent = await sendMessageNotification(message);
  } catch (error) {
    console.error("Contact email failed:", error.message);
  }

  response.status(201).json({ message, emailSent });
};

export default { create };
