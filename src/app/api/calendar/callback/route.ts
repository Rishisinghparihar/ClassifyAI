import { google } from "googleapis";
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { logActivity } from "@/lib/helper";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get("code");
  const userId = searchParams.get("userId"); // 👈 coming from query param

  if (!code || !userId) {
    return NextResponse.redirect("/dashboard/student"); // or error page
  }

  const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID!,
    process.env.GOOGLE_CLIENT_SECRET!,
    process.env.GOOGLE_REDIRECT_URI!
  );

  const { tokens } = await oauth2Client.getToken(code);

  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { name: true },
  });

  if (!user) {
    return NextResponse.json({ message: "Student not found" }, { status: 404 });
  }
  await prisma.googleToken.upsert({
    where: { userId },
    update: {
      accessToken: tokens.access_token!,
      refreshToken: tokens.refresh_token ?? undefined,
    },
    create: {
      userId,
      accessToken: tokens.access_token!,
      refreshToken: tokens.refresh_token ?? undefined,
    },
  });
  await logActivity(userId, user.name, `Calendar Synced.`);
  return NextResponse.redirect("/dashboard"); // ✅ redirect after storing token
}
