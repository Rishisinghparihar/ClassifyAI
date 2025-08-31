import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const [total, exams, holidays, others] = await Promise.all([
      prisma.event.count({
        where: { date: { gte: today } },
      }),
      prisma.event.count({
        where: { date: { gte: today }, type: "EXAM" },
      }),
      prisma.event.count({
        where: { date: { gte: today }, type: "HOLIDAY" },
      }),
      prisma.event.count({
        where: { date: { gte: today }, type: "EVENT" },
      }),
    ]);

    return NextResponse.json(
      {
        success: true,
        stats: {
          totalEvents: total,
          exams,
          holidays,
          others,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching event stats:", error);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
