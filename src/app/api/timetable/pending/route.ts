import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// keep this as a const tuple so TypeScript infers a string-literal union
const WEEKDAYS = [
  "SUNDAY",
  "MONDAY",
  "TUESDAY",
  "WEDNESDAY",
  "THURSDAY",
  "FRIDAY",
  "SATURDAY",
] as const;

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
    const nowIST = new Date(
      new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" })
    );

    // Today’s weekday (typed as a string-literal union)
    const today = WEEKDAYS[nowIST.getDay()];

    // Today’s pending classes for this teacher
    const sessions = await prisma.classSession.findMany({
      where: {
        teacherId,
        // cast to any to satisfy Prisma's enum type without importing it
        weekday: today as any,
        startTime: { gt: nowIST },
      },
      orderBy: { startTime: "asc" },
      include: {
        // Subject is a related model: id, name, code exist per your schema
        subject: {
          select: { id: true, name: true, code: true },
        },
      },
    });

    return NextResponse.json({ success: true, sessions });
  } catch (error) {
    console.error("Error fetching pending classes:", error);
    return NextResponse.json(
      { error: "Failed to fetch pending classes" },
      { status: 500 }
    );
  }
}
