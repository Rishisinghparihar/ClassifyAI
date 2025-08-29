import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: any
) {
  const { id } = params;

  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const tokens = await prisma.attendanceToken.findMany({
      where: {
        professorId: id,
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
