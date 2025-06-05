import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest){
    const studentId = req.nextUrl.searchParams.get("studentId");
    if (!studentId) {
        return NextResponse.json(
            { error: "Student ID is required" },
            { status: 400 }
        );
    }
    try {
        const subjects = await prisma.attendance.findMany({
            where: {
                studentId,
            },
            select: {
                subject: true,
            },
            distinct: ['subject'],
        });

        return NextResponse.json(subjects);
    } catch (error) {
        console.error("Error fetching subjects:", error);
        return NextResponse.json(
            { error: "Error fetching subjects" },
            { status: 500 }
        );
    }
}
