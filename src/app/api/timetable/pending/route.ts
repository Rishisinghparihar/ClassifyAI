import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
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
    const nowIST = new Date(
      new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" })
    );

    const today = WEEKDAYS[nowIST.getDay()];

    const sessions = await prisma.classSession.findMany({
      where: {
        teacherId,
        weekday: today as any,
        startTime: { gt: nowIST },
      },
      orderBy: { startTime: "asc" },
      include: {
        subjectRel: {
          select: { id: true, name: true, code: true },
        },
        teacher: {
          select: { id: true, userId: true },
        },
      },
    });
    const formattedSessions = sessions.map(session => ({
      ...session,
      subject: session.subjectRel,
    }));

    return NextResponse.json({ success: true, sessions: formattedSessions });
  } catch (error) {
    console.error("Error fetching pending classes:", error);
    return NextResponse.json(
      { error: "Failed to fetch pending classes" },
      { status: 500 }
    );
  }
}