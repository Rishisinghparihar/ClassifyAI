import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(req: NextRequest) {
  try {
    const body = await req.json();
    const { eventId, title, description, date, type, active } = body;

    if (!eventId) {
      return NextResponse.json({ error: "Event ID is required" }, { status: 400 });
    }

    await prisma.event.update({
      where: { id: eventId },
      data: {
        title,
        description,
        date: new Date(date),
        type,
        active,
      },
    });

    return NextResponse.json({ success: true, message: "Event updated" });
  } catch (err) {
    console.error("Error editing event:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
