import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const totalPremiums = await prisma.user.count({
    where: { isPremium: true },
  });
  if (totalPremiums) {
    return NextResponse.json({ success: true, totalPremiums }, { status: 201 });
  } else {
    return NextResponse.json(
      { success: false, totalPremiums },
      { status: 404 }
    );
  }
}
