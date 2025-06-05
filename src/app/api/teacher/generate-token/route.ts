import { prisma } from "@/lib/prisma";
import { randomUUID } from "crypto";
import { NextResponse } from "next/server";

export async function POST(req : Request){
    try{
        const { professorId, subject } = await req.json();
        if (!professorId || !subject) {
            return NextResponse.json({ error: "Professor ID and subject are required" }, { status: 400 });
        }
        const token = randomUUID();
        const expiresAt = new Date(Date.now() +  10 * 60 * 1000).toISOString(); 
        const newToken = await prisma.attendanceToken.create({
            data: {
                token,
                subject,
                professorId,
                expiresAt
            }
        })
        return NextResponse.json(newToken, { status: 201 });
    }catch(error){
        console.error("Error generating token:", error);
        return NextResponse.json({ error: "Failed to generate token" }, { status: 500 });
    }
}