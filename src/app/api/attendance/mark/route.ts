// /api/attendance/mark/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { logActivity } from "@/lib/helper";

export async function POST(req: Request) {
  try {
    const { token, studentId } = await req.json();
    const today = new Date();
    const startOfDay = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate()
    );
    const endOfDay = new Date(startOfDay);
    endOfDay.setDate(endOfDay.getDate() + 1);

    if (!token || !studentId) {
      return NextResponse.json({ message: "Missing Data" }, { status: 400 });
    }

    const tokenRecord = await prisma.attendanceToken.findUnique({
      where: { token },
      include: {
        subject: {
          select: {
            name: true,
            id: true
          }
        }
      }
    });

    if (!tokenRecord) {
      return NextResponse.json({ message: "Invalid token" }, { status: 404 });
    }

    if (tokenRecord.expiresAt < new Date()) {
      return NextResponse.json({ message: "Token expired" }, { status: 410 });
    }

    if (tokenRecord.used) {
      return NextResponse.json({ message: "Token already used" }, { status: 410 });
    }

    // Check if attendance already marked today for this student and subject
    // We need to find attendance records for today that are related to class sessions of this subject
    const existing = await prisma.attendance.findFirst({
      where: {
        studentId,
        markedAt: {
          gte: startOfDay,
          lt: endOfDay,
        },
        classSession: {
          subject: tokenRecord.subject?.name || undefined, // Using the legacy scalar subject field
        }
      },
    });

    if (existing) {
      return NextResponse.json({ message: "Already marked" }, { status: 409 });
    }

    const student = await prisma.user.findUnique({
      where: { id: studentId },
      select: { name: true },
    });

    if (!student) {
      return NextResponse.json(
        { message: "Student not found" },
        { status: 404 }
      );
    }

    // Find or create a class session for today with this subject
    // This is a simplified approach - you might need to adjust based on your business logic
    let classSession = await prisma.classSession.findFirst({
      where: {
        subject: tokenRecord.subject?.name,
        // You might want to add more specific filters here like:
        // startTime: { lte: new Date() },
        // endTime: { gte: new Date() },
      }
    });

    // If no existing class session, you might need to create one or handle this differently
    if (!classSession) {
      return NextResponse.json(
        { message: "No active class session found" },
        { status: 404 }
      );
    }

    // Create attendance record
    await prisma.attendance.create({
      data: {
        studentId: studentId,
        classSessionId: classSession.id,
        status: "PRESENT", // Changed from "ABSENT" to "PRESENT" since they're marking attendance
        markedBy: tokenRecord.professorId,
        markedAt: new Date(),
      },
    });

    // Mark token as used
    await prisma.attendanceToken.update({
      where: { token },
      data: { used: true }
    });

    await logActivity(
      studentId,
      student.name,
      `Marked attendance for ${tokenRecord.subject?.name}.`
    );

    return NextResponse.json({ message: "Attendance marked" }, { status: 200 });
  } catch (error) {
    console.error("Error marking attendance:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}