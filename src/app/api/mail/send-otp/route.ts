import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { redis } from "@/lib/redis";

export async function POST(req: Request) {
  const { email } = await req.json();

  if (!email) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  const otp = Math.floor(100000 + Math.random() * 900000).toString();

  // Save OTP in Redis with 5 min expiry
  await redis.setex(`otp:${email}`, 300, otp);

  // Setup nodemailer
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMTP_USER!,
      pass: process.env.SMTP_PASS!,
    },
  });

const mailOptions = {
  from: `"ClassifyAI" <${process.env.SMTP_USER!}>`,
  to: email,
  subject: "Your ClassifyAI OTP Code",
  text: `Your OTP code is ${otp}. It is valid for 5 minutes.`,
  html: `
    <div style="
      font-family: Arial, sans-serif;
      max-width: 500px;
      margin: auto;
      padding: 20px;
      border: 1px solid #eaeaea;
      border-radius: 10px;
      background-color: #ffffff;
    ">
      <div style="text-align: center;">
        <img src="https://cdn-icons-png.flaticon.com/512/2910/2910768.png" alt="Lock Icon" width="50" style="margin-bottom: 10px;" />
      </div>
      <h2 style="color: #ff6f00; text-align: center;">🔐 Verify Your Email</h2>
      <p style="font-size: 16px; color: #333;">
        Hello,
      </p>
      <p style="font-size: 16px; color: #333;">
        Please use the following One-Time Password (OTP) to verify your email address on <strong>ClassifyAI</strong>.
      </p>
      <div style="text-align: center; margin: 30px 0;">
        <span style="
          display: inline-block;
          font-size: 32px;
          letter-spacing: 5px;
          padding: 10px 20px;
          background-color: #fff3e0;
          color: #ff6f00;
          border-radius: 8px;
          font-weight: bold;
        ">
          ${otp}
        </span>
      </div>
      <p style="font-size: 14px; color: #666; text-align: center;">
        This OTP is valid for <strong>5 minutes</strong>. If you did not request this, you can safely ignore this email.
      </p>
      <hr style="border: none; border-top: 1px solid #eaeaea; margin: 20px 0;">
      <p style="font-size: 12px; color: #aaa; text-align: center;">
        &copy; ${new Date().getFullYear()} <strong>ClassifyAI</strong>. All rights reserved.
      </p>
    </div>
  `,
};

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "OTP sent" }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to send OTP" }, { status: 500 });
  }
}
