// app/api/teacher/semesters/all/route.ts
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const semesters = await prisma.semester.findMany({
      orderBy: { name: 'asc' }
    });
    return NextResponse.json(semesters);
  } catch (error) {
    return NextResponse.json({ message: "Failed to fetch semesters" }, { status: 500 });
  }
}