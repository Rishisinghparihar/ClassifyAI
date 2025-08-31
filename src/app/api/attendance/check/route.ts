import {prisma} from "@/lib/prisma";
import {NextRequest, NextResponse} from "next/server";

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
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1); // tomorrow ====> today
  try {
    const attendance = await prisma.attendance.findFirst({
      where: {
        studentId,
        markedAt: {
            gte: today,
            lt: tomorrow,
        }
    }
    });
    const marked = !!attendance;
    return NextResponse.json({marked});
  } catch (error) {
    console.error("Error fetching attendance records:", error);
    return NextResponse.json(
      { error: "Error fetching attendance records" },
      { status: 500 }
    );
  }
}