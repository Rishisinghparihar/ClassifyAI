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

    // find teacher by userId
    const teacher = await prisma.teacher.findUnique({
      where: { userId: teacherUserId },
      select: { id: true },
    });

    if (!teacher) {
      return NextResponse.json({ error: "Teacher not found" }, { status: 404 });
    }

    // fetch subjects taught by teacher with semester & section
    const subjects = await prisma.teacherSubject.findMany({
      where: { teacherId: teacher.id },
      select: {
        id: true,
        subject: {          // ✅ relation to Subject
          select: {
            id: true,
            name: true,
            code: true,
          },
        },
        semester: {         // ✅ relation to Semester
          select: {
            id: true,
            name: true,
          },
        },
        section: {          // ✅ relation to Section
          select: {
            id: true,
            name: true,
          },
        },
      },
    });

    return NextResponse.json(subjects);
  } catch (err: any) {
    console.error("Error fetching subjects:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
