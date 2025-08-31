import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const totalPremiums = await prisma.user.count({
      where: {
        OR: [
          { premiumFeatures: { some: {} } }, 
          { premiumExpiresAt: { not: null } }, 
        ],
      },
    });

    return NextResponse.json({ success: true, totalPremiums }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { success: false, message: "Failed to count premium users" },
      { status: 500 }
    );
  }
}
