import { logActivity } from "@/lib/helper";
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
const createEventSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters long"),
  description: z.string().min(1, "Description is required"),
  date: z.string().datetime("A valid ISO date string is required"),
  type: z.string().min(1, "Type is required"),
  createdBy: z.string().cuid("A valid user ID is required"),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validation = createEventSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        {
          error: "Invalid request data",
          issues: validation.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }
    const { title, description, date, type, createdBy } = validation.data;
    const newEvent = await prisma.$transaction(async (tx) => {
      const event = await tx.event.create({
        data: {
          title,
          description,
          date: new Date(date), 
          type,
          createdBy, 
        },
      });
      await logActivity(createdBy, "CLASSIFYAI", `${title} Event created`);
      return event;
    });
    return NextResponse.json(
      { message: "Event created successfully", event: newEvent },
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