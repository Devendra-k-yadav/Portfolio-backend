import nodemailer from "nodemailer";
import env from "../config/env.js";

const createTransporter = () => {
  if (!env.smtp.user || !env.smtp.password) return null;

  return nodemailer.createTransport({
    host: env.smtp.host,
    port: env.smtp.port,
    secure: env.smtp.port === 465,
    auth: { user: env.smtp.user, pass: env.smtp.password },
  });
};

const escapeHtml = (value) =>
  value.replace(
    /[&<>'"]/g,
    (character) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[
        character
      ],
  );

const sendMessageNotification = async (message) => {
  const transporter = createTransporter();
  if (!transporter) {
    console.warn("SMTP is not configured; contact email was not sent.");
    return false;
  }

  await transporter.sendMail({
    from: {
      name: `${message.name} via Portfolio`,
      address: env.smtp.user,
    },
    to: env.smtp.recipient,
    replyTo: message.email,
    subject: `Portfolio contact: ${message.name}`,
    text: [
      `Name: ${message.name}`,
      `Email: ${message.email}`,
      "",
      message.message,
    ].join("\n"),
    html: `<h2>New portfolio message</h2><p><strong>Name:</strong> ${escapeHtml(message.name)}</p><p><strong>Email:</strong> ${escapeHtml(message.email)}</p><p>${escapeHtml(message.message).replace(/\n/g, "<br />")}</p>`,
  });

  return true;
};

export default sendMessageNotification;
