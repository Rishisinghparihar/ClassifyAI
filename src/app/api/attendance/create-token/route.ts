// /api/attendance/create-token/route.ts
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import QRCode from "qrcode";
import { prisma } from "@/lib/prisma";
import { logActivity } from "@/lib/helper";
import { sendAttendanceQrEmail } from "@/lib/mail";

export async function POST(request: Request) {
  try {
    const { subjectId, teacherUserId, studentIds } = await request.json();

    if (!subjectId || !teacherUserId || !studentIds || !Array.isArray(studentIds) || studentIds.length === 0) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }

    const [teacherRecord, subjectRecord, students] = await Promise.all([
      prisma.teacher.findUnique({ where: { userId: teacherUserId }, include: { user: { select: { name: true } } } }),
      prisma.subject.findUnique({ where: { id: subjectId }, select: { name: true } }),
      prisma.student.findMany({ where: { id: { in: studentIds } }, include: { user: { select: { email: true } } } })
    ]);

    if (!teacherRecord || !subjectRecord || !teacherRecord.user) {
      return NextResponse.json({ message: "Invalid Teacher or Subject ID" }, { status: 404 });
    }
    const emailPromises = students.map(async (student) => {
      if (!student.user.email) return;

      const token = uuidv4();
      const expiresAt = new Date(Date.now() + 10 * 60 * 1000);
      const payload = JSON.stringify({ token, subjectId, studentId: student.id, teacherId: teacherRecord.id });
      const qrCodeDataUrl = await QRCode.toDataURL(payload);

      await prisma.attendanceToken.create({
        data: { token, expiresAt, subjectId, professorId: teacherRecord.id, studentId: student.id },
      });
      await sendAttendanceQrEmail(
        student.user.email,
        subjectRecord.name,
        teacherRecord.user.name,
        qrCodeDataUrl
      );
    });

    await Promise.all(emailPromises);

    await logActivity(
      teacherUserId,
      teacherRecord.user.name,
      `Sent attendance tokens for ${subjectRecord.name} to ${studentIds.length} students.`
    );

    return NextResponse.json({ message: `QR codes sent successfully to ${studentIds.length} students.` }, { status: 200 });

  } catch (error) {
    console.error("Error generating unique attendance tokens:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}