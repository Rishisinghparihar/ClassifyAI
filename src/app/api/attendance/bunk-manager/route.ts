// /api/attendance/bunk-manager/route.ts
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const studentId = req.nextUrl.searchParams.get("studentId");
  if (!studentId) {
    return NextResponse.json({ error: "Missing studentId" }, { status: 400 });
  }

  const MIN_PERCENTAGE = 75;

  try {
    // Fetch all attendance records with class session details
    const allAttendance = await prisma.attendance.findMany({
      where: { 
        studentId,
        classSession: {
          isNot: null
        }
      },
      include: {
        classSession: {
          select: {
            subject: true
          }
        }
      }
    });

    // Group by subject manually
    const subjectStats = allAttendance.reduce((acc, record) => {
      const subject = record.classSession?.subject;
      if (!subject) return acc;

      if (!acc[subject]) {
        acc[subject] = {
          total: 0,
          present: 0
        };
      }

      acc[subject].total += 1;
      if (record.status === "PRESENT") {
        acc[subject].present += 1;
      }

      return acc;
    }, {} as Record<string, { total: number; present: number }>);

    const result = Object.entries(subjectStats).map(([subject, stats]) => {
      const { total, present } = stats;
      const percentage = total > 0 ? (present / total) * 100 : 0;
      const safeBunks = Math.floor((present * 100) / MIN_PERCENTAGE - total);

      return {
        subject,
        total,
        present,
        percentage: Number(percentage.toFixed(2)),
        safeBunks: Math.max(safeBunks, 0), // ✅ prevent negatives
      };
    });

    return NextResponse.json({ status: true, data: result }, { status: 200 });
  } catch (error) {
    console.error("Error fetching attendance data:", error);
    return NextResponse.json(
      { status: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}