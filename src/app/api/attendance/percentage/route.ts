import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  // This is the USER ID from the frontend
  const studentId = searchParams.get("studentId");

  if (!studentId) {
    return NextResponse.json({ error: "Missing student ID" }, { status: 400 });
  }

  try {
    const attendances = await prisma.attendance.findMany({
      where: {
        // --- CORRECTION ---
        // Query using the 'userId' field to match the User ID from the request.
        userId: studentId,
        classSession: {
          isNot: null, // Only include attendance records with valid class sessions
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

    if (attendances.length === 0) {
      return NextResponse.json([]);
    }

    const subjectMap: Record<string, { present: number; total: number }> = {};

    for (const att of attendances) {
      // Prioritize the proper subject name from the relation, fallback to the legacy field
      const subject =
        att.classSession?.subjectRel?.name || att.classSession?.subject;

      if (!subject) continue;

      if (!subjectMap[subject]) {
        subjectMap[subject] = { present: 0, total: 0 };
      }

      subjectMap[subject].total++;

      // --- IMPROVEMENT ---
      // Count both "PRESENT" and "LATE" towards the present percentage.
      if (att.status === "PRESENT" || att.status === "LATE") {
        subjectMap[subject].present++;
      }
    }

    const result = Object.entries(subjectMap).map(([subject, stats]) => {
      // --- FIX ---
      // Calculate the percentage and convert it to a number before sending.
      // The frontend will handle formatting (e.g., adding the '%' sign).
      const percentage = parseFloat(
        ((stats.present / stats.total) * 100).toFixed(1)
      );
      return { subject, percentage };
    });

    return NextResponse.json(result);
  } catch (error) {
    console.error("Error fetching attendance percentage by subject:", error);
    return NextResponse.json(
      { error: "Failed to fetch attendance percentage by subject" },
      { status: 500 }
    );
  }
}

