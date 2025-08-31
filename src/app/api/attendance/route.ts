// /api/attendance/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { studentId, subject, status, markedby } = await req.json();
    if (!studentId || !subject || !status || !markedby) {
      return NextResponse.json(
        { error: "Missing required fields!" }, // Fixed typo: "requried" -> "required"
        { status: 400 }
      );
    }

    const student = await prisma.user.findUnique({
      where: {
        id: studentId,
      },
    });

    if (!student) {
      return NextResponse.json({ error: "Student not found" }, { status: 404 });
    }

    // Find existing class session with the subject
    const classSession = await prisma.classSession.findFirst({
      where: {
        subject: subject, // Using the legacy scalar subject field
      },
    });

    if (!classSession) {
      return NextResponse.json(
        { error: `No class session found for subject: ${subject}` },
        { status: 404 }
      );
    }

    const attendance = await prisma.attendance.create({
      data: {
        studentId: studentId,
        classSessionId: classSession.id, // Link to class session instead of direct subject
        status: status as "PRESENT" | "ABSENT" | "LATE" | "PENDING", // Ensure proper typing
        markedBy: markedby,
        markedAt: new Date(),
      },
    });

    return NextResponse.json(
      { message: "Attendance marked successfully", attendance },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error marking attendance: ", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}