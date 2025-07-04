  import { prisma } from "@/lib/prisma";
  import { NextRequest, NextResponse } from "next/server";

  export async function GET(req: NextRequest) {
    const studentId = req.nextUrl.searchParams.get("studentId");
    if (!studentId) {
      return NextResponse.json({ success: false, error: "Student ID is required" }, { status: 400 });
    }
    try {
      const history = await prisma.attendance.findMany({
        where: {
          studentId,
        },
        orderBy: {
          date: "desc",
        },
      });
      return NextResponse.json({ success: true, history });

    } catch (error) {
      return NextResponse.json({ success: false, error: "Error fetching attendance history" }, { status: 500 });
    }
  }
