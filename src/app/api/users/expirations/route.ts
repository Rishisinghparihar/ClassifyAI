import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Fetch all users who have premium features
    const users = await prisma.user.findMany({
      include: {
        premiumFeatures: true,
      },
    });

    // Filter users who actually have premium features or active premiumExpiresAt
    const premiumUsers = users.filter(
      (user) =>
        (user.premiumFeatures && user.premiumFeatures.length > 0) ||
        (user.premiumExpiresAt && user.premiumExpiresAt > new Date())
    );

    const result = premiumUsers.map((user) => {
      let plan = "PREMIUM";
      if (user.premiumFeatures.some((f) => f.name === "CALENDAR_SYNC")) {
        plan = "ULTIMATE";
      } else if (user.premiumFeatures.some((f) => f.name === "STUDY_PLAN")) {
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
