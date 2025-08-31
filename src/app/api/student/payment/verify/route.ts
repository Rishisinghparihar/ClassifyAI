// /api/student/payment/verify/route.ts
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { logActivity } from "@/lib/helper";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

const planFeatureMap: Record<string, string[]> = {
  Starter: [],
  Pro: ["AI_CHATBOT", "STUDY_PLAN", "BUNK_MANAGER"],
  Ultimate: ["AI_CHATBOT", "STUDY_PLAN", "CALENDAR_SYNC", "BUNK_MANAGER"],
};

export async function POST(req: NextRequest) {
  const { sessionId } = await req.json();

  if (!sessionId) {
    return NextResponse.json({ error: "Missing sessionId" }, { status: 400 });
  }

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (!session || session.payment_status !== "paid") {
      return NextResponse.json(
        { error: "Payment not completed" },
        { status: 400 }
      );
    }

    const userId = session.metadata?.userId;
    const planName = session.metadata?.planName || "Starter";
    const billingCycle = session.metadata?.billingCycle || "monthly";

    if (!userId) {
      return NextResponse.json(
        { error: "User ID missing in session metadata" },
        { status: 400 }
      );
    }

    const now = new Date();
    const expiresAt =
      billingCycle === "yearly"
        ? new Date(now.setFullYear(now.getFullYear() + 1))
        : new Date(now.setMonth(now.getMonth() + 1));

    const features = planFeatureMap[planName] || [];

    // Ensure PremiumFeature records exist
    for (const featureName of features) {
      await prisma.premiumFeature.upsert({
        where: { name: featureName },
        update: {},
        create: { name: featureName },
      });
    }

    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { name: true },
    });

    if (!user) {
      return NextResponse.json(
        { error: "Student not found" },
        { status: 404 }
      );
    }

    // Fixed: Remove isPremium field and update logic
    const updateData: any = {
      premiumFeatures: {
        set: [], // Clear existing features first
        connect: features.map((name) => ({ name })),
      },
    };

    // Only set premiumExpiresAt for paid plans
    if (planName !== "Starter") {
      updateData.premiumExpiresAt = expiresAt;
    } else {
      // For starter plan, clear the premium expiry
      updateData.premiumExpiresAt = null;
    }

    await prisma.user.update({
      where: { id: userId },
      data: updateData,
    });

    await logActivity(
      userId,
      user?.name,
      `${userId} bought ${planName} premium.`
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Payment verification failed:", error);
    return NextResponse.json(
      { error: "Failed to verify payment" },
      { status: 500 }
    );
  }
}