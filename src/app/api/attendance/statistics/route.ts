import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const studentId = req.nextUrl.searchParams.get("studentId");
  if (!studentId) {
    return NextResponse.json(
      { error: "Student ID is required" },
      { status: 400 }
    );
  }
  try {
    const totalClasses = await prisma.attendance.count({
      where: {
        studentId,
      },
    });
    const presents = await prisma.attendance.count({
      where: {
        studentId,
        status: "PRESENT",
      },
    });
    const absents = await prisma.attendance.count({
      where: {
        studentId,
        status: "ABSENT",
      },
    });

    const late = await prisma.attendance.count({
      where: {
        studentId,
        status: "LATE",
      },
    });
    const precentage =
      totalClasses > 0 ? ((presents / totalClasses) * 100).toFixed(2) : "0.00";
    return NextResponse.json({
      totalClasses,
      presents,
      absents,
      late,
      presentPercentage: precentage,
    });
  } catch (error) {
    console.error("Error fetching attendance statistics:", error);
    return NextResponse.json(
      { error: "Error fetching attendance statistics" },
      { status: 500 }
    );
  }
}
