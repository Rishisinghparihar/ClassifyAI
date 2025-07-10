import crypto from "crypto";
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { logActivity } from "@/lib/helper";

const planFeatureMap: Record<string, string[]> = {
  Starter: [],
  Pro: ["AI_CHATBOT", "STUDY_PLAN", "BUNK_MANAGER"],
  Ultimate: ["AI_CHATBOT", "STUDY_PLAN", "CALENDAR_SYNC", "BUNK_MANAGER"],
};

export async function POST(req: NextRequest) {
  const {
    razorpay_order_id,
    razorpay_payment_id,
    razorpay_signature,
    userId,
    planName,
    billingCycle,
  } = await req.json();

  if (
    !razorpay_order_id ||
    !razorpay_payment_id ||
    !razorpay_signature ||
    !userId ||
    !planName ||
    !billingCycle
  ) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  const now = new Date();
  const expiresAt =
    billingCycle === "yearly"
      ? new Date(now.setFullYear(now.getFullYear() + 1))
      : new Date(now.setMonth(now.getMonth() + 1));

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
        premiumExpiresAt: expiresAt,
        premiumFeatures: {
          connect: features.map((name) => ({ name })),
        },
      },
    });
  await logActivity(userId, `${userId} bought ${planName} premium.`)
    if (features.includes("CALENDAR_SYNC")) {
      const { google } = await import("googleapis");
      const userTokens = await prisma.googleToken.findUnique({
        where: { userId },
      });
      if (userTokens?.accessToken) {
        const oauth2Client = new google.auth.OAuth2(
          process.env.GOOGLE_CLIENT_ID!,
          process.env.GOOGLE_CLIENT_SECRET!,
          process.env.GOOGLE_REDIRECT_URI!
        );

        oauth2Client.setCredentials({
          access_token: userTokens.accessToken,
          refresh_token: userTokens.refreshToken,
        });

        const calendar = google.calendar({ version: "v3", auth: oauth2Client });
        const upcomingEvents = await prisma.event.findMany({
          where: {
            date: {
              gte: new Date(),
            },
          },
        });

        for (const event of upcomingEvents) {
          await calendar.events.insert({
            calendarId: "primary",
            requestBody: {
              summary: event.title,
              description: `${event.description ?? ""}\nType: ${event.type}`,
              start: {
                dateTime: event.date.toISOString(),
                timeZone: "Asia/Kolkata",
              },
              end: {
                dateTime: new Date(
                  new Date(event.date).getTime() + 60 * 60 * 1000
                ).toISOString(),
                timeZone: "Asia/Kolkata",
              },
            },
          });
        }
      } else {
        console.log("User has not authorized Google Calendar yet.");
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to assign premium features:", error);
    return NextResponse.json({ error: "Update failed" }, { status: 500 });
  }
}
