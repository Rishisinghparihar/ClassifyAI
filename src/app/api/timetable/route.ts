import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

/**
 * Weekdays as string-literals (match your Prisma enum values).
 * We don't import Prisma enums directly to avoid the "no exported member" issues.
 */
const WEEKDAYS = [
  "SUNDAY",
  "MONDAY",
  "TUESDAY",
  "WEDNESDAY",
  "THURSDAY",
  "FRIDAY",
  "SATURDAY",
] as const;

type WeekdayStr = (typeof WEEKDAYS)[number];

function isValidWeekday(v: any): v is WeekdayStr {
  return typeof v === "string" && (WEEKDAYS as readonly string[]).includes(v);
}

/**
 * POST: create a ClassSession
 * Accepts either `subjectId` (preferred) or `subjectName` (+ optional `subjectCode`) to upsert a Subject.
 * Required fields: (subjectId or subjectName), section, semester, weekday, startTime, endTime, teacherId
 */
export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      subjectId,
      subjectName,
      subjectCode,
      section,
      semester,
      weekday,
      startTime,
      endTime,
      teacherId,
      room,
    } = body;

    // Basic validation
    if (!teacherId || !section || semester == null || !weekday || !startTime || !endTime) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    if (!isValidWeekday(weekday)) {
      return NextResponse.json({ error: "Invalid weekday" }, { status: 400 });
    }

    const start = new Date(startTime);
    const end = new Date(endTime);
    if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime())) {
      return NextResponse.json({ error: "Invalid startTime or endTime" }, { status: 400 });
    }

    // Ensure teacher exists
    const teacher = await prisma.teacher.findUnique({ where: { id: teacherId } });
    if (!teacher) {
      return NextResponse.json({ error: "Teacher not found" }, { status: 404 });
    }

    // Resolve or create subject
    let finalSubjectId = subjectId as string | undefined;
    if (!finalSubjectId) {
      if (!subjectName) {
        return NextResponse.json(
          { error: "Either subjectId or subjectName must be provided" },
          { status: 400 }
        );
      }

      // Try to find by name (case-insensitive)
      const existing = await prisma.subject.findFirst({
        where: { name: { equals: subjectName, mode: "insensitive" } },
        select: { id: true },
      });

      if (existing) {
        finalSubjectId = existing.id;
      } else {
        const created = await prisma.subject.create({
          data: { name: subjectName, code: subjectCode ?? undefined },
          select: { id: true },
        });
        finalSubjectId = created.id;
      }
    } else {
      // verify subject exists
      const existing = await prisma.subject.findUnique({ where: { id: finalSubjectId } });
      if (!existing) {
        return NextResponse.json({ error: "subjectId not found" }, { status: 404 });
      }
    }

    // Create the ClassSession
    const session = await prisma.classSession.create({
      data: {
        subject: { connect: { id: finalSubjectId } },
        section,
        semester: Number(semester),
        weekday: weekday as any, // cast to satisfy Prisma enum type
        room: room ?? null,
        startTime: start,
        endTime: end,
        teacher: { connect: { id: teacher.id } },
      },
      include: {
        subject: { select: { id: true, name: true, code: true } },
        teacher: { select: { id: true, userId: true } },
      },
    });

    return NextResponse.json({ success: true, session }, { status: 201 });
  } catch (err: any) {
    console.error("Error creating timetable:", err);
    return NextResponse.json({ error: "Failed to create timetable", details: String(err) }, { status: 500 });
  }
}

/**
 * GET: fetch today's pending sessions.
 * Optional query param: teacherId  (if provided, returns sessions for that teacher only)
 * Returns sessions whose startTime > now (i.e. remaining classes today).
 */
export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const teacherId = url.searchParams.get("teacherId") || undefined;

    // Current IST datetime (keeping same approach you've used)
    const nowIST = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));
    const today = WEEKDAYS[nowIST.getDay()]; // e.g. "MONDAY"

    // Build where clause
    const where: any = {
      weekday: today as any,
      startTime: { gt: nowIST },
    };
    if (teacherId) where.teacherId = teacherId;

    const sessions = await prisma.classSession.findMany({
      where,
      orderBy: { startTime: "asc" },
      include: {
        subject: {
          select: {
            id: true,
            name: true,
            code: true,
          },
        },
        teacher: {
          select: {
            id: true,
            userId: true,
          },
        },
      },
    });

    return NextResponse.json({ success: true, sessions });
  } catch (err: any) {
    console.error("Error fetching today's classes:", err);
    return NextResponse.json({ error: "Failed to fetch today's classes", details: String(err) }, { status: 500 });
  }
}
