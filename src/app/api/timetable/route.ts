import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      subject,
      section,
      semester,
      weekday,
      startTime,
      endTime,
      teacherId, // 👈 ab teacherEmail hata diya, frontend se direct teacherId aayega
      room,
    } = body;

    if (
      !subject ||
      !section ||
      !semester ||
      !weekday ||
      !startTime ||
      !endTime ||
      !teacherId
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const teacher = await prisma.teacher.findUnique({
      where: { id: teacherId }, // 👈 teacher.id ka check
    });

    if (!teacher) {
      return NextResponse.json({ error: "Teacher not found" }, { status: 404 });
    }

    const session = await prisma.classSession.create({
      data: {
        subject,
        section,
        semester,
        weekday,
        room,
        startTime: new Date(startTime),
        endTime: new Date(endTime),
        teacherId: teacher.id, // 👈 direct teacherId save
      },
    });

    return NextResponse.json({ success: true, session });
  } catch (error: any) {
    console.error("Error creating timetable:", error);
    return NextResponse.json(
      { error: "Failed to create timetable" },
      { status: 500 }
    );
  }
}
// sab kuch de deti h free me (virgin h )
// export async function GET(req: Request) {
//   try {
//     const { searchParams } = new URL(req.url);
//     const teacherId = searchParams.get("teacherId");

//     if (!teacherId) {
//       return NextResponse.json(
//         { error: "teacherId is required" },
//         { status: 400 }
//       );
//     }

//     const teacher = await prisma.teacher.findUnique({
//       where: { userId: teacherId }, // 👈 yaha bhi teacher.id se check
//     });

//     if (!teacher) {
//       return NextResponse.json({ error: "Teacher not found" }, { status: 404 });
//     }

//     const sessions = await prisma.classSession.findMany({
//       where: { teacherId: teacher.id },
//       orderBy: [{ weekday: "asc" }, { startTime: "asc" }],
//     });

//     return NextResponse.json({ success: true, sessions });
//   } catch (error: any) {
//     console.error("Error fetching timetable:", error);
//     return NextResponse.json(
//       { error: "Failed to fetch timetable" },
//       { status: 500 }
//     );
//   }
// }

// 👇 Prisma enum ke values
const daysMap: Record<number, "SUNDAY"|"MONDAY"|"TUESDAY"|"WEDNESDAY"|"THURSDAY"|"FRIDAY"|"SATURDAY"> = {
  0: "SUNDAY",
  1: "MONDAY",
  2: "TUESDAY",
  3: "WEDNESDAY",
  4: "THURSDAY",
  5: "FRIDAY",
  6: "SATURDAY",
};

export async function GET() {
  try {
    // 👇 Aaj ka weekday nikalo
    const todayEnum = daysMap[new Date().getDay()];

    const sessions = await prisma.classSession.findMany({
      where: { weekday: todayEnum }, // ✅ Ab Prisma enum milega, string nahi
      orderBy: { startTime: "asc" },
    });

    return NextResponse.json({ success: true, sessions });
  } catch (error: any) {
    console.error("Error fetching today's classes:", error);
    return NextResponse.json(
      { error: "Failed to fetch today's classes" },
      { status: 500 }
    );
  }
}

