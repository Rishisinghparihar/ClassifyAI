// /api/attendance/percentage/route.ts
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const studentId = searchParams.get("studentId");
  
  if (!studentId) {
    return NextResponse.json({ error: "Missing details" }, { status: 400 });
  }
  
  try {
    const attendances = await prisma.attendance.findMany({
      where: {
        studentId,
        classSession: {
          isNot: null // Only include attendance records with valid class sessions
        }
      },
      include: {
        classSession: {
          select: {
            subject: true // Get the subject from the related class session
          }
        }
      }
    });

    if (attendances.length === 0) {
      return NextResponse.json([]);
    }

    const subjectMap: Record<string, { present: number; total: number }> = {};

    for (const att of attendances) {
      const subject = att.classSession?.subject;
      
      // Skip if no subject found
      if (!subject) continue;
      
      if (!subjectMap[subject]) {
        subjectMap[subject] = { present: 0, total: 0 };
      }
      
      subjectMap[subject].total++;
      
      // Use the enum value directly instead of converting to lowercase
      if (att.status === "PRESENT") {
        subjectMap[subject].present++;
      }
    }

    const result = Object.entries(subjectMap).map(([subject, stats]) => {
      const percentage = ((stats.present / stats.total) * 100).toFixed(1);
      return { subject, percentage };
    });

    return NextResponse.json(result);
  } catch (error) {
    console.error("Error fetching attendance percentage:", error);
    return NextResponse.json(
      { error: "Failed to fetch attendance percentage" },
      { status: 500 }
    );
  }
}