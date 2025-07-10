import { logActivity } from "@/lib/helper";
import { prisma } from "@/lib/prisma";
import { error } from "console";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { title, description, date, type, createdBy } = body;
    if (!title || !description || !date || !type || !createdBy) {
      return NextResponse.json(
        {
          error: "Missing required fields",
        },
        { status: 400 }
      );
    }

    const newEvent = await prisma.event.create({
      data: {
        title,
        description,
        date: new Date(date),
        type,
        createdBy,
      },
    });
    await logActivity(createdBy, `${title} Event created`);
    return NextResponse.json(
      { message: "Event created successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating event:", error);
    return NextResponse.json(
      {
        error: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}
