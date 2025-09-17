import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    
    // 1. Get both semesterId and sectionId from the URL
    const semesterId = searchParams.get('semesterId');
    const sectionId = searchParams.get('sectionId');

    if (!semesterId && !sectionId) {
      return NextResponse.json(
        { message: "Either semesterId or sectionId is required" },
        { status: 400 }
      );
    }

    // 2. Build a dynamic where clause based on the provided parameters
    const whereClause: any = {};
    if (semesterId) {
      whereClause.semesterId = semesterId;
    }
    if (sectionId) {
      whereClause.sectionId = sectionId;
    }

    // 3. Use the dynamic where clause in the Prisma query
    const students = await prisma.student.findMany({
      where: whereClause,
      include: {
        user: {
          select: { id: true, name: true }
        }
      },
      orderBy: { user: { name: 'asc' } }
    });

    return NextResponse.json(students);
  } catch (error) {
    console.error("Error fetching students:", error);
    return NextResponse.json({ message: "Failed to fetch students" }, { status: 500 });
  }
}