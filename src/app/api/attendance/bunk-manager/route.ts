import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const studentId = req.nextUrl.searchParams.get("studentId");
  if (!studentId) {
    return NextResponse.json({ error: "Missing studentId" }, { status: 400 });
  }
  const MIN_PERCENTAGE = 75;
  try {
    const totalSubject = await prisma.attendance.groupBy({
      by: ["subject"],
      where: { studentId },
      _count: { _all: true },
    });
    const presentBySubject = await prisma.attendance.groupBy({
      by: ["subject"],
      where: { studentId, status: "Present" },
      _count: { _all: true },
    });
    const result = totalSubject.map((subData) => {
      const subject = subData.subject;
      const total = subData._count._all;
      const presentEntry = presentBySubject.find((p) => p.subject === subject);
      const present = presentEntry ? presentEntry._count._all : 0;
      const percentage = total > 0 ? (present / total) * 100 : 0;
      const safeBunks = Math.floor((present * 100) / MIN_PERCENTAGE - total);
      return {
        subject,
        total,
        present,
        percentage: Number(percentage.toFixed(2)),
        safeBunks: Math.max(safeBunks),
      };
    });
    return NextResponse.json({ status: true, data: result }, { status: 200 });
  } catch (error) {
    console.error("Error fetching attendance data:", error);
    return NextResponse.json(
      { status: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
