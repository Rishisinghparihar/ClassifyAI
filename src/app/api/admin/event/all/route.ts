import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const events = await prisma.event.findMany({
      orderBy: {
        date: "asc",
      },
      select: {
        id: true,
        title: true,
        date: true,
        type: true,
        description: true,
        active: true,
      },
    });

    return NextResponse.json({ success: true, events });
  } catch (error) {
    console.error("Failed to fetch events:", error);
    return NextResponse.json({ success: false, message: "Failed to fetch events" }, { status: 500 });
  }
}
