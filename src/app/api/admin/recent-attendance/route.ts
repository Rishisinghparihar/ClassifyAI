// /api/admin/recent-attendance/route.ts
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const recent = await prisma.attendance.findMany({
      orderBy: { createdAt: "desc" }, 
      take: 15,
      include: { student: true },
    });

    return NextResponse.json({ success: true, recent }, { status: 200 });
  } catch (error) {
    console.error("Error fetching recent attendance:", error);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
