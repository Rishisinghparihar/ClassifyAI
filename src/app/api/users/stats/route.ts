import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const totalUsers = await prisma.user.count();

    const premiumUsers = await prisma.user.count({
      where: { isPremium: true },
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

    return Response.json({
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
    return Response.json({ success: false, message: "Failed to get stats" }, { status: 500 });
  }
}
