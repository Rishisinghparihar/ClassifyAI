import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const today = new Date();
    const exams = await prisma.event.findMany({
      where: {
        type: "EXAM",
        date: {
          gte: today,
        },
      },
      orderBy: {
        date: "asc",
      },
    });
    return NextResponse.json({ success: true, exams });
  } catch (error) {
    console.error("Error fetching exams: " + error);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
