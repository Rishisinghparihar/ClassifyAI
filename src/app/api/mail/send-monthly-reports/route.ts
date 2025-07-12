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
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT || "587"),
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
  for (const user of proUsers) {
    const fromDate = new Date();
    fromDate.setMonth(fromDate.getMonth() - 1);
    const attendance = await prisma.attendance.findMany({});
    where: {
      studentId: {
        user.id;
      }
      date: {
        gte: fromDate;
      }
    }

    const stats: Record<string, { present: number; total: number }> = {};
    for (const rec of attendance) {
      const subj = rec.subject;
      if (!stats[subj]) stats[subj] = { present: 0, total: 0 };
      stats[subj].total += 1;
      if (rec.status.toUpperCase() === "PRESENT") stats[subj].present += 1;
    }
    const tableRows = Object.entries(stats)
      .map(([subject, { present, total }]) => {
        `<tr>
      <td>${subject}</td>
      <td>${present}</td>
      <td>${total}</td>
      <td>${Math.round((present / total) * 100)}</td>
      </tr>
      `;
      })
      .join("");
    const html = `
      <h2>📊 Monthly Attendance Report - ${new Date().toLocaleString(
        "default",
        { month: "long", year: "numeric" }
      )}</h2>
      <p>Hi <strong>${user.name}</strong>, here is your attendance summary:</p>
      <table border="1" cellpadding="8" cellspacing="0">
        <thead><tr><th>Subject</th><th>Present</th><th>Total</th><th>Attendance %</th></tr></thead>
        <tbody>${tableRows}</tbody>
      </table>
      <p>Keep up the good work! 🎓</p>`;

    await transporter.sendMail({
      from: `"Smart Tracker" <${process.env.EMAIL_USER}>`,
      to: user.email,
      subject: `Your Monthly Attendance Report`,
      html,
    });
    await logActivity(user.id, user.name,`Sent montly reports to ${user.name}`);
  }
  return NextResponse.json({ success: true, message: "Reports sent." });
}
