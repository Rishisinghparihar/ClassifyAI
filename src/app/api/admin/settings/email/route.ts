import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const admin = await prisma.user.findFirst({
      where: { role: "ADMIN" },
      select: { email: true },
    });

    if (!admin) {
      return NextResponse.json(
        { error: "Admin user not found." },
        { status: 404 }
      );
    }

    return NextResponse.json({ email: admin.email });
  } catch (err) {
    console.error("Error fetching admin email:", err);
    return NextResponse.json(
      { error: "Failed to fetch admin email." },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const { newEmail } = await req.json();

    if (!newEmail || typeof newEmail !== "string") {
      return NextResponse.json(
        { error: "Invalid email provided." },
        { status: 400 }
      );
    }

    const updated = await prisma.user.updateMany({
      where: { role: "ADMIN" },
      data: { email: newEmail },
    });

    if (updated.count === 0) {
      return NextResponse.json(
        { error: "No admin user found to update." },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      email: newEmail,
    });
  } catch (err) {
    console.error("Error updating admin email:", err);
    return NextResponse.json(
      { error: "Failed to update admin email." },
      { status: 500 }
    );
  }
}
