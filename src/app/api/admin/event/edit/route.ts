// /app/api/event/route.ts

import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
const updateEventSchema = z.object({
  eventId: z.string().min(1, "Event ID is required"),
  title: z.string().optional(),
  description: z.string().optional(),
  date: z.string().datetime().optional(), // Expects ISO 8601 date string
  type: z.string().optional(),
  active: z.boolean().optional(),
});
export async function PATCH(req: NextRequest) {
  try {
    const body = await req.json();
    const validation = updateEventSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json({ error: validation.error.errors }, { status: 400 });
    }
    const { eventId, ...dataToUpdate } = validation.data;
    const updatedEvent = await prisma.event.update({
      where: { id: eventId },
      data: {
        ...dataToUpdate,
        ...(dataToUpdate.date && { date: new Date(dataToUpdate.date) }),
      },
    });
    return NextResponse.json({ success: true, message: "Event updated", event: updatedEvent });
  } catch (err) {
    if (
      typeof err === 'object' &&
      err !== null &&
      'code' in err &&
      (err as { code: unknown }).code === 'P2025'
    ) {
      console.log(err)
      return NextResponse.json({ error: "Event not found" }, { status: 404 });
    }
    console.error("Error editing event:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}