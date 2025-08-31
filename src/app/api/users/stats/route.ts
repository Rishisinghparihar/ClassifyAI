import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const totalUsers = await prisma.user.count();
    const premiumUsers = await prisma.user.count({
      where: {
        OR: [
          { premiumFeatures: { some: {} } },
          { premiumExpiresAt: { not: null } },
        ],
      },
    });
    const proUsers = await prisma.user.count({
      where: {
        premiumFeatures: {
          some: { name: "STUDY_PLAN" },
        },
      },
    });
    const ultimateUsers = await prisma.user.count({
      where: {
        premiumFeatures: {
          some: { name: "CALENDAR_SYNC" },
        },
      },
    });
    const expiredPremiums = await prisma.user.count({
      where: {
        premiumExpiresAt: {
          lt: new Date(),
        },
      },
    });

    return NextResponse.json({
      success: true,
      stats: {
        totalUsers,
        premiumUsers,
        proUsers,
        ultimateUsers,
        expiredPremiums,
      },
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { success: false, message: "Failed to get stats" },
      { status: 500 }
    );
  }
}
