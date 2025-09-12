// ./app/api/teacher/classes/route.ts
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

/**
 * GET /api/teacher/classes?teacherId=<userId>
 * - teacherId is the logged-in teacher's userId (same param you used for /api/teacher/subjects)
 *
 * Response: [
 *   {
 *     id: "<semesterId>::<sectionId>",
 *     semester: { id, name, number },
 *     section: { id, name },
 *     subjects: [{ id, name, code }]
 *   },
 *   ...
 * ]
 */
export async function GET(req: NextRequest) {
  try {
    const teacherUserId = req.nextUrl.searchParams.get("teacherId");
    if (!teacherUserId) {
      return NextResponse.json(
        { error: "Teacher ID (userId) is required as ?teacherId=" },
        { status: 400 }
      );
    }

    // Resolve teacher record from userId
    const teacher = await prisma.teacher.findUnique({
      where: { userId: teacherUserId },
      select: { id: true },
    });

    if (!teacher) {
      return NextResponse.json({ error: "Teacher not found" }, { status: 404 });
    }

    // Fetch all TeacherSubject records for this teacher with related subject/semester/section
    const teacherSubjects = await prisma.teacherSubject.findMany({
      where: { teacherId: teacher.id },
      include: {
        subject: { select: { id: true, name: true, code: true } },
        semester: { select: { id: true, name: true, number: true } },
        section: { select: { id: true, name: true } },
      },
      orderBy: [
        { semester: { number: "asc" } },
        { section: { name: "asc" } },
      ],
    });

    // Group by semesterId + sectionId and build class objects
    const classesMap = new Map<string, any>();

    for (const ts of teacherSubjects) {
      const semId = ts.semester?.id ?? "unknown-sem";
      const secId = ts.section?.id ?? "unknown-sec";
      const key = `${semId}::${secId}`;

      if (!classesMap.has(key)) {
        classesMap.set(key, {
          id: key,
          semester: ts.semester
            ? { id: ts.semester.id, name: ts.semester.name, number: ts.semester.number }
            : null,
          section: ts.section ? { id: ts.section.id, name: ts.section.name } : null,
          subjects: [],
        });
      }

      const cls = classesMap.get(key);
      if (ts.subject) {
        cls.subjects.push({
          id: ts.subject.id,
          name: ts.subject.name,
          code: ts.subject.code ?? null,
        });
      }
    }

    const classes = Array.from(classesMap.values());

    return NextResponse.json(classes);
  } catch (err: any) {
    console.error("Error fetching teacher classes:", err);
    return NextResponse.json({ error: err?.message ?? "Internal Server Error" }, { status: 500 });
  }
}
