// app/api/students/route.ts
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const semesterId = searchParams.get('semesterId');

    if (!semesterId) {
      return NextResponse.json({ message: "Semester ID is required" }, { status: 400 });
    }

    const students = await prisma.student.findMany({
      where: { semesterId },
      include: {
        user: {
          select: { id: true, name: true }
        }
      },
      orderBy: { user: { name: 'asc' } }
    });
    return NextResponse.json(students);
  } catch (error) {
    return NextResponse.json({ message: "Failed to fetch students" }, { status: 500 });
  }
}