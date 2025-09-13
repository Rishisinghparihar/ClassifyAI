import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  // This is the USER ID from the frontend
  const studentId = req.nextUrl.searchParams.get("studentId");
  if (!studentId) {
    return NextResponse.json({ error: "Missing studentId" }, { status: 400 });
  }

  // The minimum attendance percentage required
  const MIN_PERCENTAGE = 75;

  try {
    const allAttendance = await prisma.attendance.findMany({
      where: {
        // --- CORRECTION ---
        // Query using the 'userId' field to match the User ID from the request.
        userId: studentId,
        classSession: {
          isNot: null,
        },
      },
      include: {
        classSession: {
          select: {
            subject: true, // Legacy field as a fallback
            subjectRel: {
              // Proper relation for the subject name
              select: {
                name: true,
              },
            },
          },
        },
      },
    });

    // Group the attendance records by subject
    const subjectStats = allAttendance.reduce((acc, record) => {
      // Prioritize the proper subject name from the relation
      const subject =
        record.classSession?.subjectRel?.name || record.classSession?.subject;
      if (!subject) return acc;

      if (!acc[subject]) {
        acc[subject] = { total: 0, present: 0 };
      }

      acc[subject].total += 1;
      // --- IMPROVEMENT ---
      // Count both "PRESENT" and "LATE" as present for calculation.
      if (record.status === "PRESENT" || record.status === "LATE") {
        acc[subject].present += 1;
      }

      return acc;
    }, {} as Record<string, { total: number; present: number }>);

    // Calculate the percentage and safe bunks for each subject
    const result = Object.entries(subjectStats).map(([subject, stats]) => {
      const { total, present } = stats;
      const percentage = total > 0 ? (present / total) * 100 : 0;

      // Formula to calculate how many classes can be missed without dropping below the minimum percentage
      const safeBunks = Math.floor((present * 100) / MIN_PERCENTAGE - total);

      return {
        subject,
        totalClasses: total,
        attendedClasses: present,
        percentage: Number(percentage.toFixed(2)),
        // Ensure the number of bunks is never negative
        safeBunks: Math.max(safeBunks, 0),
      };
    });

    return NextResponse.json({ success: true, data: result }, { status: 200 });
  } catch (error) {
    console.error("Error fetching bunk manager data:", error);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
