import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { Parser } from "json2csv";

export async function GET(req: NextRequest) {
  const type = req.nextUrl.searchParams.get("type") || "all";

  const logs = await prisma.recentActivity.findMany({
    where: type === "login" ? { action: { contains: "logged in" } } : {},
    orderBy: { timestamp: "desc" },
  });

  const parser = new Parser({ fields: ["id", "userName", "action", "timestamp"] });
  const csv = parser.parse(logs);

  return new NextResponse(csv, {
    headers: {
      "Content-Type": "text/csv",
      "Content-Disposition": `attachment; filename="${type}-logs.csv"`,
    },
  });
}
