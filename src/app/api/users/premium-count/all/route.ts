import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Fetch only users who have at least one premium feature
    const users = await prisma.user.findMany({
      where: {
        premiumFeatures: {
          some: {}, // at least one premium feature
        },
      },
      include: {
        premiumFeatures: true,
      },
    });

    const result = users.map((user) => {
      let plan = "PREMIUM";

      if (user.premiumFeatures.some((f: { name: string }) => f.name === "CALENDAR_SYNC")) {
        plan = "ULTIMATE";
      } else if (user.premiumFeatures.some((f: { name: string }) => f.name === "STUDY_PLAN")) {
        plan = "PRO";
      }

      const now = new Date();
      const status =
        user.premiumExpiresAt && user.premiumExpiresAt < now
          ? "EXPIRED"
          : "ACTIVE";

      return {
        id: user.id,
        name: user.name,
        email: user.email,
        plan,
        startDate: user.createdAt.toISOString().split("T")[0],
        endDate: user.premiumExpiresAt
          ? user.premiumExpiresAt.toISOString().split("T")[0]
          : null,
        status,
      };
    });

    return NextResponse.json({ success: true, users: result }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { success: false, message: "Failed to fetch premium users" },
      { status: 500 }
    );
  }
}
