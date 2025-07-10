import { logActivity } from "@/lib/helper";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, name } = await req.json();
  if (!email || !name) {
    return NextResponse.json({ message: "Missing Fields" }, { status: 400 });
  }
  try {
    let user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }
    await logActivity(user.id, `Login By ${user.name}-${user.role}`)
    return NextResponse.json({ user }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: "Server Error" }, { status: 500 });
  }
}
