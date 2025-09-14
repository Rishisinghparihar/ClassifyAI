import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const todayStart = new Date();
    todayStart.setHours(0, 0, 0, 0);
    const [totalCounts, presentCounts] = await Promise.all([
      prisma.attendance.groupBy({
        by: ["studentId"],
        where: { studentId: { not: null } },
        _count: { _all: true },
      }),
      prisma.attendance.groupBy({
        by: ["studentId"],
        where: {
          studentId: { not: null },
          status: "PRESENT",
        },
        _count: { _all: true },
      }),
    ]);
    const studentIds = totalCounts
      .map((record) => record.studentId)
      .filter((id): id is string => id !== null);

    const students = await prisma.student.findMany({
      where: { id: { in: studentIds } },
      select: {
        id: true,
        user: { select: { name: true } },
      },
    });

    const studentNameMap = new Map(
      students.map((s) => [s.id, s.user?.name || "Unknown"])
    );
    const presentMap = new Map(
      presentCounts.map((record) => [
        record.studentId,
        record._count?._all ?? 0,
      ])
    );

    const studentList = totalCounts
      .filter((record) => record.studentId)
      .map((record) => {
        const total = record._count?._all ?? 0;
        const present = presentMap.get(record.studentId!) || 0;
        return {
          name: studentNameMap.get(record.studentId!) || "Unknown",
          percentage: total > 0 ? Math.round((present / total) * 100) : 0,
        };
      });

    const teacherCounts = await prisma.attendance.groupBy({
      by: ["markedBy"],
      where: {
        markedBy: { not: null },
        markedAt: { gte: todayStart },
      },
      _count: { _all: true },
    });

    const teacherIds = teacherCounts
      .map((record) => record.markedBy)
      .filter((id): id is string => id !== null);

    const teachers = await prisma.user.findMany({
      where: { id: { in: teacherIds } },
      select: { id: true, name: true },
    });

    const teacherNameMap = new Map(
      teachers.map((t) => [t.id, t.name || "Unknown"])
    );

    const teacherActivity = teacherCounts
      .filter((record) => record.markedBy)
      .map((record) => ({
        name: teacherNameMap.get(record.markedBy!) || "Unknown",
        count: record._count?._all ?? 0,
      }));
    const topStudents = [...studentList]
      .sort((a, b) => b.percentage - a.percentage)
      .slice(0, 3);

    const atRiskStudents = [...studentList]
      .filter((student) => student.percentage < 75) 
      .sort((a, b) => a.percentage - b.percentage)
      .slice(0, 3);
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
    console.error("Error in dashboard API:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch dashboard data" },
      { status: 500 }
    );
  }
}
