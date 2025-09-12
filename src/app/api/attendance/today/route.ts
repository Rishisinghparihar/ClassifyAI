import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  // This studentId parameter is the USER ID from the frontend
  const studentId = req.nextUrl.searchParams.get("studentId");

  if (!studentId) {
    return NextResponse.json(
      { error: "Student ID is required" },
      { status: 400 }
    );
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  try {
    const attendances = await prisma.attendance.findMany({
      where: {
        // --- CORRECTION ---
        // Query using the 'userId' field, which matches the User ID,
        // instead of the 'studentId' field, which holds the Student Profile ID.
        userId: studentId,
        markedAt: {
          gte: today,
          lt: tomorrow,
        },
      },
      include: {
        // Optionally include related data to make the response more useful
        classSession: {
          select: {
            subject: true,
            subjectRel: {
              select: {
                name: true
              }
            }
          }
        }
      },
      orderBy: {
        markedAt: "desc",
      },
    });

    // Map the result to a cleaner format if desired
    const formattedAttendances = attendances.map(att => ({
      id: att.id,
      subject: att.classSession?.subjectRel?.name || att.classSession?.subject || "Unknown Subject",
      status: att.status,
      markedAt: att.markedAt
    }));

    return NextResponse.json(formattedAttendances);
  } catch (error) {
    console.error("Error fetching today's attendance:", error);
    return NextResponse.json(
      { error: "Failed to fetch today's attendance" },
      { status: 500 }
    );
  }
}
