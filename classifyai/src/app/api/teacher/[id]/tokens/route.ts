import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const professorId = params.id;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const tokens = await prisma.attendanceToken.findMany({
      where: {
        professorId,
        issuedAt: {
          gte: today,
        },
      },
      orderBy: {
        issuedAt: "desc",
      },
    });
    return NextResponse.json(tokens);
  } catch (error) {
    console.error("Error fetching tokens:", error);
    return NextResponse.json(
      { error: "Failed to fetch tokens" },
      { status: 500 }
    );
  }
}
