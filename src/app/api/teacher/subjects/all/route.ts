// app/api/teacher/subjects/all/route.ts
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const subjects = await prisma.subject.findMany({
      orderBy: { name: 'asc' }
    });
    return NextResponse.json(subjects);
  } catch (error) {
    return NextResponse.json({ message: "Failed to fetch subjects" }, { status: 500 });
  }
}