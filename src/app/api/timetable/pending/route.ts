import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { Weekday } from "@/generated/prisma";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const teacherId = searchParams.get("teacherId");

    if (!teacherId) {
      return NextResponse.json(
        { error: "teacherId is required" },
        { status: 400 }
      );
    }

    // Current IST datetime
    const nowUtc = new Date();
    const nowIST = new Date(
      nowUtc.toLocaleString("en-US", { timeZone: "Asia/Kolkata" })
    );

    // Today’s weekday as Prisma enum
    const weekdays: Weekday[] = [
      Weekday.SUNDAY,
      Weekday.MONDAY,
      Weekday.TUESDAY,
      Weekday.WEDNESDAY,
      Weekday.THURSDAY,
      Weekday.FRIDAY,
      Weekday.SATURDAY,
    ];
    const today = weekdays[nowIST.getDay()];

    // Pending classes: today’s classes with startTime > current time
    const pendingClasses = await prisma.classSession.findMany({
      where: {
        teacherId,
        weekday: today,
        startTime: { gt: nowIST }, // ✅ directly compare DateTime
      },
      orderBy: { startTime: "asc" },
      // ⚠ no `include.subject` because subject is just a String
    });

    return NextResponse.json({ success: true, pendingClasses });
  } catch (error) {
    console.error("Error fetching pending classes:", error);
    return NextResponse.json(
      { error: "Failed to fetch pending classes" },
      { status: 500 }
    );
  }
}
