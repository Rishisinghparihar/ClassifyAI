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
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const tommorrow = new Date(today);
  tommorrow.setDate(today.getDate() + 1);
  try {
    const attendances = await prisma.attendance.findMany({
      where: {
        studentId,
        markedAt: {
          gte: today,
          lt: tommorrow,
        },
      },
      orderBy: {
        markedAt: "desc",
      },
    });

    return NextResponse.json(attendances);
  } catch (error) {
    console.error("Error fetching today's attendance:", error);
    return NextResponse.json(
      { error: "Failed to fetch today's attendance" },
      { status: 500 }
    );
  }
}
