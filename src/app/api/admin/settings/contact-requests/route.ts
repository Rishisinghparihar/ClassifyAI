import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const requests = await prisma.supportRequest.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ success: true, requests });
  } catch (err) {
    console.error("Error fetching support requests:", err);
    return NextResponse.json(
      { success: false, error: "Failed to fetch requests." },
      { status: 500 }
    );
  }
}
