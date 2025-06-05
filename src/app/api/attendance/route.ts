import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { studentId, subject, status, markedby } = await req.json();
    if (!studentId || !subject || !status || !markedby) {
      return NextResponse.json(
        { error: "Missing requried fields!" },
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
    const attendance = await prisma.attendance.create({
      data: {
        studentId,
        subject,
        status,
        markedBy: markedby,
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
