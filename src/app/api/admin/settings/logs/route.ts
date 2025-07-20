import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

// GET → return total log count & login log count
export async function GET() {
  try {
    const [totalCount, loginCount] = await Promise.all([
      prisma.recentActivity.count(),
      prisma.recentActivity.count({
        where: {
          action: {
            contains: "logged in to the ClassifyAI",
          },
        },
      }),
    ]);

    return NextResponse.json({ totalCount, loginCount });
  } catch (err) {
    console.error("Error fetching logs count:", err);
    return NextResponse.json(
      { error: "Failed to fetch logs count." },
      { status: 500 }
    );
  }
}

// DELETE → delete N logs of type (all/login)
export async function DELETE(req: NextRequest) {
  try {
    const { count, type } = await req.json();

    if (!count || typeof count !== "number" || count <= 0) {
      return NextResponse.json(
        { error: "Invalid count provided." },
        { status: 400 }
      );
    }

    if (!["all", "login"].includes(type)) {
      return NextResponse.json(
        { error: "Invalid type. Must be 'all' or 'login'." },
        { status: 400 }
      );
    }

    // build query
    const where =
      type === "login"
        ? { action: { contains: "logged in to the ClassifyAI" } }
        : {};

    const logsToDelete = await prisma.recentActivity.findMany({
      where,
      orderBy: { timestamp: "desc" },
      take: count,
      select: { id: true },
    });

    const deleted = await prisma.recentActivity.deleteMany({
      where: { id: { in: logsToDelete.map((log) => log.id) } },
    });

    return NextResponse.json({ success: true, deleted: deleted.count });
  } catch (err) {
    console.error("Error deleting logs:", err);
    return NextResponse.json(
      { error: "Failed to delete logs." },
      { status: 500 }
    );
  }
}
