import nodemailer from "nodemailer";
import { verificationEmailHTML } from "@/lib/helper";
export const sendMail = async (to: string, subject: string, code: string) => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const html = verificationEmailHTML(code);

  await transporter.sendMail({
    from: process.env.SMTP_USER,
    to,
    subject,
    html,
  });
};
