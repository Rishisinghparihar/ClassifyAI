import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { Role } from "@/generated/prisma";

export async function GET(req: NextRequest) {
  const roleParam = req.nextUrl.searchParams.get("role");

  if (!roleParam || !["STUDENT", "TEACHER"].includes(roleParam)) {
    return NextResponse.json({ error: "Invalid role" }, { status: 400 });
  }

  const role = roleParam as Role; 

  const user = await prisma.user.findFirst({
    where: { role },
    orderBy: { createdAt: "desc" },
    select: {
      id: true,
      name: true,
      email: true,
      createdAt: true,
    },
  });

  if (!user) {
    return NextResponse.json({ message: `No ${role.toLowerCase()} found` });
  }

  return NextResponse.json(user);
}
