import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  let userRole = req.nextUrl.searchParams.get("role");
  if (!userRole) {
    return NextResponse.json({ error: "Role is required" }, { status: 400 });
  }
  if (userRole !== "STUDENT" && userRole !== "TEACHER") {
    return NextResponse.json(
      { error: "Invalid role. Must be STUDENT or TEACHER." },
      { status: 400 }
    );
  }
  try {
const users = await prisma.user.findMany({
  where: { role: userRole },
  select: {
    id: true,
    name: true,
    email: true,
    isPremium: true,
    createdAt: true,
    premiumFeatures: {
      select: {
        name: true,
      },
    },
  },
  orderBy: {
    createdAt: "desc",
  },
});


    return NextResponse.json({ users });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch users." },
      { status: 500 }
    );
  }
}
