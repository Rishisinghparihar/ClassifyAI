import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { token, studentId } = await req.json();
    const today = new Date();
const startOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate());

    if (!token || !studentId) {
      return NextResponse.json({ message: "Missing Data" }, { status: 400 });
    }
    const tokenRecord = await prisma.attendanceToken.findUnique({
      where: { token },
    });
    if (!tokenRecord) {
      return NextResponse.json({ message: "Invalid token" }, { status: 404 });
    }
    if (tokenRecord.expiresAt < new Date()) {
      return NextResponse.json({ message: "Token expired" }, { status: 410 });
    }
    const existing = await prisma.attendance.findFirst({
      where: {
        studentId,
        subject: tokenRecord.subject,
        date: new Date(new Date().toDateString()), 
      },
    });
    if (existing) {
      return NextResponse.json({ message: "Already marked" }, { status: 409 });
    }

    await prisma.attendance.create({
      data: {
        student: { connect: { id: studentId } },
        subject: tokenRecord.subject,
        date: startOfDay,
        status: "ABSENT", // or the appropriate status value
        markedBy: "SYSTEM", // or the appropriate user identifier
      },
    });

    return NextResponse.json({ message: "Attendance marked" }, { status: 200 });
  } catch (error) {
    console.error("Error marking attendance:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
