import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const sections = await prisma.section.findMany({
      orderBy: {
        name: 'asc', // Order the sections alphabetically
      },
    });

    return NextResponse.json(sections, { status: 200 });
  } catch (error) {
    console.error("Error fetching sections:", error);
    return NextResponse.json(
      { message: "Failed to fetch sections" },
      { status: 500 }
    );
  }
}