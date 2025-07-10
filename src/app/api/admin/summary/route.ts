import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const [totalStudents, totalTeachers, totalAttendance, tokensToday] =
          await Promise.all([
            prisma.user.count({ where: { role: "STUDENT" } }),
            prisma.user.count({ where: { role: "TEACHER" } }),
            prisma.attendance.count({
              where: {
                date: {
                  gte: new Date(new Date().setHours(0, 0, 0, 0)),
                },
              },
            }),
            prisma.attendanceToken.count({
              where: {
                issuedAt: {
                  gte: new Date(new Date().setHours(0, 0, 0, 0)),
                },
              },
            }),
          ]);

        return NextResponse.json({
          totalStudents,
          totalTeachers,
          totalAttendance,
          tokensToday,
        });
    } catch (error) {
        console.error("Error fetching summary data:", error);
        return NextResponse.json(
          { error: "Failed to fetch summary data" },
          { status: 500 }
        );
    }
}
