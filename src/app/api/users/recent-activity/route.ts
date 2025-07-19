import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const activities = await prisma.recentActivity.findMany({
      where: {
        action: {
          contains: "bought", // only premium upgrade logs
        },
      },
      orderBy: { timestamp: "desc" },
      take: 10,
    });

    const result = activities.map((a) => ({
      id: a.id,
      username: a.userName,
      text: a.action,
      date: a.timestamp.toISOString().split("T")[0],
    }));

    return NextResponse.json({ success: true, activities: result });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { success: false, message: "Failed to fetch recent premium activity" },
      { status: 500 }
    );
  }
}
