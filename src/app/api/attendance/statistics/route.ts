import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  // This studentId parameter is the USER ID from the frontend
  const studentId = req.nextUrl.searchParams.get("studentId");

  if (!studentId) {
    return NextResponse.json(
      { error: "Student ID is required" },
      { status: 400 }
    );
  }

  try {
    // --- OPTIMIZATION ---
    // Use a single groupBy query to get all counts in one database call.
    const attendanceGroups = await prisma.attendance.groupBy({
      by: ["status"],
      where: {
        // --- CORRECTION ---
        // Query using the 'userId' field, which matches the User ID.
        userId: studentId,
      },
      _count: {
        status: true,
      },
    });

    // Initialize counts
    let presents = 0;
    let absents = 0;
    let late = 0;

    // Process the grouped results
    for (const group of attendanceGroups) {
      const count = group._count.status;
      switch (group.status) {
        case "PRESENT":
          presents = count;
          break;
        case "ABSENT":
          absents = count;
          break;
        case "LATE":
          late = count;
          break;
      }
    }

    const totalClasses = presents + absents + late;
    const percentage =
      totalClasses > 0
        ? (((presents + late) / totalClasses) * 100).toFixed(2) // Often 'late' is counted as present for percentage
        : "0.00";

    return NextResponse.json({
      totalClasses,
      presents,
      absents,
      late,
      presentPercentage: percentage,
    });
  } catch (error) {
    console.error("Error fetching attendance statistics:", error);
    return NextResponse.json(
      { error: "Error fetching attendance statistics" },
      { status: 500 }
    );
  }
}
