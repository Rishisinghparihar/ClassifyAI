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
        isPremium: true,
        premiumFeatures: {
          select: {
            name: true,
          },
        },
      },
    });
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    const featureSet = new Set(user.premiumFeatures.map((f) => f.name));
    let planName = "Starter";
    if (
      featureSet.has("AI_CHATBOT") &&
      featureSet.has("STUDY_PLAN") &&
      featureSet.has("CALENDAR_SYNC")
    ) {
      planName = "Ultimate";
    } else if (featureSet.has("AI_CHATBOT") && featureSet.has("STUDY_PLAN")) {
      planName = "Pro";
    }

    return NextResponse.json({
      isPremium: user.isPremium,
      plan: planName,
      features: Array.from(featureSet),
    });
  } catch (err) {
    console.error("Failed to fetch premium status: ", err);
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}
