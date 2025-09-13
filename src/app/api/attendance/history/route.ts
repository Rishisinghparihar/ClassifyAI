import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  // This studentId parameter is the USER ID from the frontend
  const studentId = req.nextUrl.searchParams.get("studentId");

  if (!studentId) {
    return NextResponse.json(
      { success: false, error: "Student ID is required" },
      { status: 400 }
    );
  }

  try {
    const history = await prisma.attendance.findMany({
      where: {
        // --- CORRECTION ---
        // Query using the 'userId' field, which matches the User ID from the request.
        userId: studentId,
      },
      include: {
        // --- IMPROVEMENT ---
        // Include related class and subject data for a more informative response.
        classSession: {
          select: {
            subject: true, // Legacy field as a fallback
            subjectRel: {
              select: {
                name: true,
              },
            },
          },
        },
      },
      orderBy: {
        markedAt: "desc",
      },
    });

    // Process the data to send a cleaner, more useful response to the frontend.
    const formattedHistory = history.map((item) => ({
      id: item.id,
      status: item.status,
      markedAt: item.markedAt,
      subject:
        item.classSession?.subjectRel?.name ||
        item.classSession?.subject ||
        "Unknown Subject",
    }));

    return NextResponse.json({ success: true, history: formattedHistory });
  } catch (error) {
    console.error("Error fetching attendance history:", error);
    return NextResponse.json(
      { success: false, error: "Error fetching attendance history" },
      { status: 500 }
    );
  }
}
