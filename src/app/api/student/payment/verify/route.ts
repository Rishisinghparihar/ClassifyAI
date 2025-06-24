import crypto from "crypto";
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

const planFeatureMap: Record<string, string[]> = {
  Starter: [],
  Pro: ["AI_CHATBOT", "STUDY_PLAN"],
  Ultimate: ["AI_CHATBOT", "STUDY_PLAN", "CALENDAR_SYNC"],
};

export async function POST(req: NextRequest) {
  const {
    razorpay_order_id,
    razorpay_payment_id,
    razorpay_signature,
    userId,
    planName,
  } = await req.json();

  if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature || !userId || !planName) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  // Verify signature
  const body = `${razorpay_order_id}|${razorpay_payment_id}`;
  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET!)
    .update(body)
    .digest("hex");

  if (expectedSignature !== razorpay_signature) {
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  const features = planFeatureMap[planName] || [];

  try {
    // Ensure each PremiumFeature exists
    for (const featureName of features) {
      await prisma.premiumFeature.upsert({
        where: { name: featureName },
        update: {},
        create: { name: featureName },
      });
    }

    // Connect the user to premium features
    await prisma.user.update({
      where: { id: userId },
      data: {
        isPremium: planName !== "Starter",
        premiumFeatures: {
          connect: features.map((name) => ({ name })),
        },
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to assign premium features:", error);
    return NextResponse.json({ error: "Update failed" }, { status: 500 });
  }
}
