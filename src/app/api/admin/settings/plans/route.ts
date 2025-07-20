import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

// Get all plans
export async function GET() {
  try {
    const plans = await prisma.planConfig.findMany({
      orderBy: { name: "asc" },
    });

    return NextResponse.json({ success: true, plans });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false, message: "Failed to fetch plans" }, { status: 500 });
  }
}

// Update a specific plan
export async function POST(req: NextRequest) {
  try {
    const { name, price } = await req.json();

    if (!name || price == null) {
      return NextResponse.json({ success: false, message: "Name and price are required" }, { status: 400 });
    }

    const updated = await prisma.planConfig.update({
      where: { name },
      data: { price },
    });

    return NextResponse.json({ success: true, updated });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false, message: "Failed to update plan" }, { status: 500 });
  }
}
