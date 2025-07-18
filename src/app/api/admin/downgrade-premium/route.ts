import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { logActivity } from "@/lib/helper";
import nodemailer from "nodemailer";

const downgradeMap: Record<number, string[]> = {
  4: ["AI_CHATBOT", "STUDY_PLAN", "BUNK_MANAGER"], // Ultimate → Pro
  3: [], // Pro → Starter
};

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
      include: { premiumFeatures: true },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const currentFeatures = user.premiumFeatures.map((f) => f.name);
    const currentCount = currentFeatures.length;

    if (currentCount === 0) {
      return NextResponse.json(
        { error: "User is already at Starter plan" },
        { status: 400 }
      );
    }

    const targetFeatures = downgradeMap[currentCount] ?? [];

    await prisma.user.update({
      where: { id: userId },
      data: {
        isPremium: targetFeatures.length > 0,
        premiumFeatures: {
          set: targetFeatures.map((name) => ({ name })),
        },
        premiumExpiresAt:
          targetFeatures.length > 0 ? user.premiumExpiresAt : null,
      },
    });

    await logActivity(
      userId,
      user.name,
      `Downgraded premium from ${currentCount} features to ${targetFeatures.length} features. Reason: ${reason}`
    );

    // send email
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const newPlan =
      targetFeatures.length === 3
        ? "Pro"
        : targetFeatures.length === 0
        ? "Starter"
        : "Custom";

    await transporter.sendMail({
      from: `"ClassifyAI" <${process.env.SMTP_USER}>`,
      to: user.email,
      subject: "Your Premium Plan has been Downgraded",
      html: `
<html>
  <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f9fafb;">
    <table role="presentation" cellspacing="0" cellpadding="0" width="100%">
      <tr>
        <td align="center" style="padding: 40px 20px;">
          <table role="presentation" cellpadding="0" cellspacing="0" width="600" style="background: white; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
            <tr>
              <td style="background-color: #facc15; padding: 20px; text-align: center; border-top-left-radius: 8px; border-top-right-radius: 8px;">
                <h1 style="margin: 0; font-size: 24px; color: #1f2937; letter-spacing: 1px;">Classify<span style="font-weight: 300;">AI</span></h1>
              </td>
            </tr>
            <tr>
              <td style="padding: 30px;">
                <p style="font-size: 16px; color: #111827; margin: 0 0 16px;">
                  Dear <strong>${user.name}</strong>,
                </p>
                <p style="font-size: 16px; color: #374151; margin: 0 0 16px;">
                  We wanted to let you know that your premium plan has been <strong style="color: #d97706;">downgraded</strong> by our admin team.
                </p>
                <p style="font-size: 16px; color: #374151; margin: 0 0 16px;">
                  <strong>New Plan:</strong> <span style="color: #0f172a;">${newPlan}</span>
                </p>
                <p style="font-size: 16px; color: #374151; margin: 0 0 16px;">
                  <strong>Reason:</strong> <span style="color: #0f172a;">${reason}</span>
                </p>
                <p style="font-size: 16px; color: #374151; margin: 0 0 16px;">
                  If you have any questions or believe this was a mistake, please don’t hesitate to reach out to our support team.
                </p>
                <div style="text-align: center; margin: 30px 0;">
                  <a href="${process.env.NEXT_PUBLIC_BASE_URL}/support" 
                     style="background-color: #facc15; color: #1f2937; text-decoration: none; padding: 12px 24px; border-radius: 4px; font-size: 16px;">
                    Contact Support
                  </a>
                </div>
                <p style="font-size: 14px; color: #9ca3af; text-align: center; margin-top: 20px;">
                  — The ClassifyAI Team
                </p>
              </td>
            </tr>
          </table>
          <p style="font-size: 12px; color: #9ca3af; margin-top: 20px;">
            © ${new Date().getFullYear()} ClassifyAI. All rights reserved.
          </p>
        </td>
      </tr>
    </table>
  </body>
</html>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to downgrade:", error);
    return NextResponse.json({ error: "Failed to downgrade" }, { status: 500 });
  }
}
