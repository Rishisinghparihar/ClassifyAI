import { logActivity } from "@/lib/helper";
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { userId, reason } = await req.json();

  if (!userId || !reason) {
    return NextResponse.json(
      { error: "User ID and reason are required" },
      { status: 400 }
    );
  }

  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { name: true, email: true },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    await prisma.user.update({
      where: { id: userId },
      data: {
        isPremium: false,
        premiumExpiresAt: null,
        premiumFeatures: {
          set: [],
        },
      },
    });

    console.log({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      user: process.env.SMTP_USER,
    });

    // send email
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.EMAIL_PORT || "587"),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"ClassifyAI" <${process.env.SMTP_USER}>`,
      to: user.email,
      subject: "Your Premium Plan has been Cancelled",
      html: `
        <p>Dear ${user.name},</p>
        <p>Your premium plan has been cancelled by our admin team.</p>
        <p><strong>Reason:</strong> ${reason}</p>
        <p>If you have any questions, feel free to contact support.</p>
        <p>— ClassifyAI Team</p>
      `,
    });
    await logActivity(
      userId,
      user.name,
      `Removed premium by ClassifyAI-admin. Reason: ${reason}`
    );

    return NextResponse.json({
      success: true,
      message: "Premium features removed and email sent",
    });
  } catch (error) {
    console.error("Failed to remove premium:", error);
    return NextResponse.json(
      { error: "Failed to remove premium" },
      { status: 500 }
    );
  }
}
