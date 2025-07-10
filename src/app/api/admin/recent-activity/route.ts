import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const activities = await prisma.recentActivity.findMany({
      take: 10,
      orderBy: { timestamp: "desc" },
      include: {
        user: {
          select: {
            name: true,
            role: true,
          },
        },
      },
    });

    return NextResponse.json({ success: true, activities }, { status: 200 });
  } catch (error) {
    console.error("Error fetching recent activity:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch recent activity" },
      { status: 500 }
    );
  }
}
