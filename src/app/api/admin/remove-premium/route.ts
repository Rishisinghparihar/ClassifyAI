// /app/api/admin/remove-premium/route.ts
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma"; // adjust path if needed
import { logActivity } from "@/lib/helper";

export async function POST(req: NextRequest) {
  const { userId } = await req.json();

  if (!userId) {
    return NextResponse.json({ error: "User ID is required" }, { status: 400 });
  }

  try {
    await prisma.user.update({
      where: { id: userId },
      data: {
        isPremium: false,
        premiumExpiresAt: null,
        premiumFeatures: {
          set: [],
        },
      },
    });
    return NextResponse.json({
      success: true,
      message: "Premium features removed",
    });
  } catch (error) {
    console.error("Failed to remove premium:", error);
    return NextResponse.json(
      { error: "Failed to remove premium" },
      { status: 500 }
    );
  }
}
