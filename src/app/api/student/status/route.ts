// /api/student/status/route.ts
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const userId = req.nextUrl.searchParams.get("studentId");
  if (!userId) {
    return NextResponse.json({ error: "Missing Student ID" }, { status: 400 });
  }
  
  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        premiumExpiresAt: true, // Use actual field instead of isPremium
        premiumFeatures: { // This needs to be included, not selected
          select: {
            name: true,
          },
        },
      },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Calculate isPremium from premiumExpiresAt
    const isPremium = user.premiumExpiresAt && user.premiumExpiresAt > new Date();

    const featureSet = new Set(user.premiumFeatures.map((f) => f.name));
    
    let planName = "Starter";
    if (
      featureSet.has("AI_CHATBOT") &&
      featureSet.has("STUDY_PLAN") &&
      featureSet.has("CALENDAR_SYNC") &&
      featureSet.has("BUNK_MANAGER")
    ) {
      planName = "Ultimate";
    } else if (
      featureSet.has("AI_CHATBOT") && 
      featureSet.has("STUDY_PLAN") && 
      featureSet.has("BUNK_MANAGER")
    ) {
      planName = "Pro";
    }

    return NextResponse.json({
      isPremium: !!isPremium, // Convert to boolean
      plan: planName,
      features: Array.from(featureSet),
      premiumExpiresAt: user.premiumExpiresAt, // Optional: include expiry date
    });
  } catch (err) {
    console.error("Failed to fetch premium status: ", err);
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}