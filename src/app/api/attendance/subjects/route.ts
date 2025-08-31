// /api/attendance/subjects/route.ts
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const studentId = req.nextUrl.searchParams.get("studentId");
    if (!studentId) {
        return NextResponse.json(
            { error: "Student ID is required" },
            { status: 400 }
        );
    }
    
    try {
        // Get all attendance records with their class sessions
        const attendances = await prisma.attendance.findMany({
            where: {
                studentId,
                classSession: {
                    isNot: null // Only include records with valid class sessions
                }
            },
            include: {
                classSession: {
                    select: {
                        subject: true
                    }
                }
            }
        });

        // Extract unique subjects
        const uniqueSubjects = Array.from(
            new Set(
                attendances
                    .map(att => att.classSession?.subject)
                    .filter(subject => subject !== null && subject !== undefined)
            )
        );

        // Format to match expected output structure
        const subjects = uniqueSubjects.map(subject => ({ subject }));

        return NextResponse.json(subjects);
    } catch (error) {
        console.error("Error fetching subjects:", error);
        return NextResponse.json(
            { error: "Error fetching subjects" },
            { status: 500 }
        );
    }
}