import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const today = new Date();

    const events = await prisma.event.findMany({
      where: {
        date: {
          gte: today,
        },
      },
      orderBy: {
        date: "asc",
      },
    });

    return NextResponse.json({ success: true, events }, { status: 200 });
  } catch (error) {
    console.error("Error fetching events:", error);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
