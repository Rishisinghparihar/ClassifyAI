// src/app/api/admin/users/route.ts
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const userRole = req.nextUrl.searchParams.get("role");

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

    // if you still want an "isPremium" flag, derive it here
    const formattedUsers = users.map((u) => ({
      ...u,
      isPremium: u.premiumFeatures.length > 0,
    }));

    return NextResponse.json({ users: formattedUsers });
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json(
      { error: "Failed to fetch users." },
      { status: 500 }
    );
  }
}
