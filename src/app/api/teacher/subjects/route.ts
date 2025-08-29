import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  try {
    const teacherUserId = req.nextUrl.searchParams.get("teacherId");
    if (!teacherUserId) {
      return NextResponse.json(
        { error: "Teacher ID is required" },
        { status: 400 }
      );
    }
    const teacher = await prisma.teacher.findUnique({
      where: { userId: teacherUserId },
      select: { id: true },
    });

    if (!teacher) {
      return NextResponse.json({ error: "Teacher not found" }, { status: 404 });
    }
    const subjects = await prisma.teacherSubject.findMany({
      where: { teacherId: teacher.id },
      select: {
        name: true,
        code: true,
        teacher: {
          select: { id: true, userId: true },
        },
      },
    });

    return NextResponse.json(subjects);
  } catch (err: any) {
    console.error("Error fetching subjects:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
