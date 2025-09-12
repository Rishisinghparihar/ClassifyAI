import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { logActivity } from "@/lib/helper";

export async function POST(req: Request) {
  try {
    const { token, studentId } = await req.json();

    console.log("=== ATTENDANCE MARKING REQUEST ===");
    console.log("Input:", { token, studentId });

    if (!token || !studentId) {
      console.log("❌ Missing required fields");
      return NextResponse.json({ message: "Missing Data" }, { status: 400 });
    }

    const today = new Date();
    const startOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const endOfDay = new Date(startOfDay);
    endOfDay.setDate(endOfDay.getDate() + 1);

    const tokenRecord = await prisma.attendanceToken.findUnique({
      where: { token },
      include: {
        subject: { select: { name: true, id: true } },
      },
    });

    if (!tokenRecord) {
      console.log("❌ Token not found");
      return NextResponse.json({ message: "Invalid token" }, { status: 404 });
    }
    
    console.log("✅ Token found:", {
        id: tokenRecord.id,
        subjectName: tokenRecord.subject?.name,
        // This is the professor's USER ID
        professorUserId: tokenRecord.professorId, 
        expiresAt: tokenRecord.expiresAt,
        used: tokenRecord.used
    });

    const now = new Date();
    if (new Date(tokenRecord.expiresAt).getTime() <= now.getTime()) {
      console.log("❌ Token expired");
      return NextResponse.json({ message: "Token expired" }, { status: 410 });
    }

    if (tokenRecord.used) {
      console.log("❌ Token already used");
      return NextResponse.json({ message: "Token already used" }, { status: 410 });
    }

    const student = await prisma.user.findUnique({
      where: { id: studentId },
      include: { studentProfile: true },
    });

    if (!student || !student.studentProfile) {
      console.log("❌ Student or student profile not found");
      return NextResponse.json({ message: "Student not found" }, { status: 404 });
    }

    if (student.role !== "STUDENT") {
        return NextResponse.json({ message: "User is not a student" }, { status: 400 });
    }
    
    console.log("✅ Student found:", { id: student.id, name: student.name });

    // --- FIX IS HERE ---
    // 1. Find the Teacher profile using the User ID from the token
    const teacherProfile = await prisma.teacher.findUnique({
        where: { userId: tokenRecord.professorId }
    });

    if (!teacherProfile) {
        console.log("❌ Could not find a teacher profile for the user ID:", tokenRecord.professorId);
        return NextResponse.json({ message: "Professor profile not found" }, { status: 404 });
    }
    
    console.log("✅ Found teacher profile:", { teacherId: teacherProfile.id, userId: teacherProfile.userId });
    // --- END OF FIX ---


    const existingAttendance = await prisma.attendance.findFirst({
      where: {
        studentId: student.studentProfile.id, // Use the student profile ID
        markedAt: { gte: startOfDay, lt: endOfDay },
        classSession: { subjectId: tokenRecord.subjectId },
      },
    });

    if (existingAttendance) {
      console.log("❌ Attendance already marked today");
      return NextResponse.json({ message: "Already marked" }, { status: 409 });
    }
    
    console.log("✅ No existing attendance found for today");

    let classSession = await prisma.classSession.findFirst({
      where: {
        subjectId: tokenRecord.subjectId,
        teacherId: teacherProfile.id, // Use the correct teacher profile ID
        startTime: { gte: startOfDay, lt: endOfDay } // Look for a session created today
      },
    });

    if (!classSession) {
      console.log("⚠️ No existing class session found for today, creating a new one");
      classSession = await prisma.classSession.create({
        data: {
          subjectId: tokenRecord.subjectId,
          subject: tokenRecord.subject?.name, // Legacy field for compatibility
          semester: student.studentProfile.semesterId ? parseInt(student.studentProfile.semesterId) : 1,
          section: student.studentProfile.sectionId || "A",
          weekday: getCurrentWeekday(now),
          startTime: now,
          endTime: new Date(now.getTime() + 60 * 60 * 1000),
          // MODIFICATION: Use the correct Teacher Profile ID here
          teacherId: teacherProfile.id, 
          semesterId: student.studentProfile.semesterId,
          sectionId: student.studentProfile.sectionId,
          status: "COMPLETED",
          attendanceMarked: true,
        },
      });
      console.log("✅ Created new class session:", classSession.id);
    } else {
        console.log("✅ Found existing class session:", classSession.id);
    }

    const attendance = await prisma.attendance.create({
      data: {
        // Use the student's PROFILE id, not their user id
        studentId: student.studentProfile.id,
        userId: studentId,
        classSessionId: classSession.id,
        status: "PRESENT",
        markedBy: tokenRecord.professorId,
        markedAt: now,
        remarks: `Marked via QR code token: ${token.substring(0, 8)}...`,
      },
    });

    console.log("✅ Attendance record created:", attendance.id);

    await prisma.attendanceToken.update({
      where: { token },
      data: { used: true },
    });
    
    console.log("✅ Token marked as used");

    await logActivity(studentId, student.name, `Marked attendance for ${tokenRecord.subject?.name || 'Unknown Subject'}`);
    
    console.log("✅ Activity logged");

    return NextResponse.json({
        message: "Attendance marked successfully",
        data: {
          attendanceId: attendance.id,
          subject: tokenRecord.subject?.name,
          classSessionId: classSession.id,
          status: "PRESENT",
          markedAt: attendance.markedAt,
        },
      }, { status: 200 });
  } catch (error: unknown) {
    console.error("❌ Error marking attendance:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
    return NextResponse.json({
        message: "Internal Server Error",
        error: process.env.NODE_ENV === 'development' ? errorMessage : undefined,
      }, { status: 500 });
  }
}

function getCurrentWeekday(date: Date): "MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY" | "FRIDAY" | "SATURDAY" | "SUNDAY" {
  const days = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"] as const;
  return days[date.getDay()];
}
