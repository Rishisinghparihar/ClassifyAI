import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const attendances = await prisma.attendance.findMany({
        where:{
            date: {
                gte: today
            }
        },
        include: {
            student: true,
        },
        orderBy:{
            date: "desc"
        },
        take: 100
    });
    return NextResponse.json(attendances)
}