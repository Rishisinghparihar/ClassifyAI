import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { logActivity } from "@/lib/helper";

export async function DELETE(req: NextRequest) {
  // TIP AT DEVELOPMENT::::::*====::::::  =>AUTHENTICATION: Implement middleware here to ensure the user is an ADMIN.

  try {
    const body = await req.json();
    const { eventId } = body;

    if (!eventId) {
      return NextResponse.json({ error: "Event ID is required" }, { status: 400 });
    }

    await prisma.$transaction(async (tx) => {
      const eventToDelete = await tx.event.findFirstOrThrow({
        where: { id: eventId },
      });

      await tx.event.delete({
        where: { id: eventId },
      });

      await logActivity(
        eventToDelete.createdBy,
        "CLASSIFYAI_ADMIN",
        `Event deleted: ${eventToDelete.title}`
      );
    });

    return NextResponse.json({ success: true, message: "Event deleted" });

  } catch (err) {
    console.error("Error deleting event:", err);
    if (
      typeof err === 'object' &&
      err !== null &&
      'code' in err &&
      (err as { code: unknown }).code === 'P2025'
    ) {
      return NextResponse.json({ error: "Event not found" }, { status: 404 });
    }
    
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}