import { logActivity } from "@/lib/helper";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST() {
  const proUsers = await prisma.user.findMany({
    where: {
      isPremium: true,
    },
    select: {
      id: true,
      name: true,
      email: true,
    },
  });

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  for (const user of proUsers) {
    const fromDate = new Date();
    fromDate.setMonth(fromDate.getMonth() - 1);

    const attendance = await prisma.attendance.findMany({
      where: {
        studentId: user.id,
        date: {
          gte: fromDate,
        },
      },
    });

    const stats: Record<string, { present: number; total: number }> = {};

    for (const rec of attendance) {
      const subj = rec.subject;
      if (!stats[subj]) stats[subj] = { present: 0, total: 0 };
      stats[subj].total += 1;
      if (rec.status.toUpperCase() === "PRESENT") stats[subj].present += 1;
    }

    const tableRows = Object.entries(stats)
      .map(([subject, { present, total }]) => {
        const percent = total > 0 ? Math.round((present / total) * 100) : 0;
        return `
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd;">${subject}</td>
            <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">${present}</td>
            <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">${total}</td>
            <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">${percent}%</td>
          </tr>
        `;
      })
      .join("");

    const html = `
      <div style="font-family: 'Segoe UI', Roboto, sans-serif; color: #333; background: #f9f9f9; padding: 20px;">
        <div style="max-width: 600px; margin: auto; background: #fff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); overflow: hidden;">
          <div style="background: #4a90e2; padding: 16px; color: #fff; text-align: center;">
            <h2 style="margin: 0; font-size: 20px;">📊 ClassifyAI Monthly Attendance Report</h2>
            <p style="margin: 4px 0 0;">${new Date().toLocaleString("default", { month: "long", year: "numeric" })}</p>
          </div>

          <div style="padding: 20px;">
            <p style="font-size: 16px;">Hi <strong>${user.name}</strong>,</p>
            <p style="font-size: 15px;">Here is your attendance summary for the past month. We encourage you to keep up the great work and make the most of your learning journey with <strong>ClassifyAI</strong>!</p>

            <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
              <thead style="background: #f0f4f8;">
                <tr>
                  <th style="padding: 10px; border: 1px solid #ddd; text-align: left;">Subject</th>
                  <th style="padding: 10px; border: 1px solid #ddd;">Present</th>
                  <th style="padding: 10px; border: 1px solid #ddd;">Total</th>
                  <th style="padding: 10px; border: 1px solid #ddd;">Attendance %</th>
                </tr>
              </thead>
              <tbody>
                ${tableRows}
              </tbody>
            </table>

            <p style="margin-top: 20px; font-size: 14px; color: #555;">🎓 Keep learning and growing. We’re here to support you every step of the way!</p>
          </div>

          <div style="background: #f0f4f8; padding: 12px; text-align: center; font-size: 12px; color: #888;">
            This is an automated message from <strong>ClassifyAI</strong>. Please do not reply to this email.
          </div>
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"ClassifyAI" <${process.env.SMTP_USER}>`,
      to: user.email,
      subject: `Your Monthly Attendance Report`,
      html,
    });

    await logActivity(user.id, user.name, `Sent monthly report to ${user.name}`);
  }

  return NextResponse.json({ success: true, message: "Reports sent." });
}
