import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const todayStart = new Date();
    todayStart.setHours(0, 0, 0, 0);

    const allAttendance = await prisma.attendance.findMany({
      select: {
        studentId: true,
        status: true,
        student: {
          select: {
            user: {
              select: { name: true },
            },
          },
        },
      },
    });

    const studentMap: Record<
      string,
      { name: string; present: number; total: number }
    > = {};

    for (const record of allAttendance) {
      if (!record.studentId) continue;

      const studentName = record.student?.user?.name || "Unknown";

      if (!studentMap[record.studentId]) {
        studentMap[record.studentId] = {
          name: studentName,
          present: 0,
          total: 0,
        };
      }
      if (record.status.toLowerCase() === "present") {
        studentMap[record.studentId].present++;
      }
      studentMap[record.studentId].total++;
    }

    const studentList = Object.values(studentMap).map((s) => ({
      name: s.name,
      percentage: s.total > 0 ? Math.round((s.present / s.total) * 100) : 0,
    }));

    const topStudents = [...studentList]
      .sort((a, b) => b.percentage - a.percentage)
      .slice(0, 3);

    const atRiskStudents = [...studentList]
      .sort((a, b) => a.percentage - b.percentage)
      .slice(0, 3);

    const teacherAttendanceToday = await prisma.attendance.findMany({
      where: {
        markedAt: {
          gte: todayStart,
        },
      },
      select: {
        markedBy: true,
      },
    });

    const teacherMap: Record<string, number> = {};
    for (const rec of teacherAttendanceToday) {
      if (!rec.markedBy) continue;
      teacherMap[rec.markedBy] = (teacherMap[rec.markedBy] || 0) + 1;
    }

    const teacherActivity = await Promise.all(
      Object.entries(teacherMap).map(async ([teacherId, count]) => {
        const teacher = await prisma.user.findUnique({
          where: { id: teacherId },
          select: { name: true },
        });
        return {
          name: teacher?.name || "Unknown",
          count,
        };
      })
    );

    return NextResponse.json(
      {
        success: true,
        topStudents,
        atRiskStudents,
        teacherActivity,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in bottom-strip API:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch dashboard data" },
      { status: 500 }
    );
  }
}
