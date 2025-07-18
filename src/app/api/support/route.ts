import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All Fields are required" },
        { status: 400 }
      );
    }
    const supportRequest = await prisma.supportRequest.create({
      data: {
        name,
        email,
        message,
      },
    });

    return NextResponse.json(
      { message: "Support request submitted", data: supportRequest },
      { status: 201 }
    );
  } catch (error) {
        console.error(error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );

  }
}
