import { logActivity } from "@/lib/helper";
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
const signupSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  role: z.enum(["STUDENT", "TEACHER", "ADMIN"]),
  isPremium: z.boolean().optional(),
  premiumFeatures: z.array(z.string()).optional(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = signupSchema.parse(body);
    const existingUser = await prisma.user.findUnique({
      where: { email: data.email },
    });
    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists" },
        {
          status: 409,
        }
      );
    }
    const newUser = await prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        role: data.role,
        isPremium: data.isPremium ?? false,
        premiumFeatures: data.premiumFeatures
          ? {
              connect: data.premiumFeatures.map((featureName) => ({
                name: featureName,
              })),
            }
          : undefined,
      },
      include: {
        premiumFeatures: false,
      },
    });
    await logActivity(newUser.id, `${newUser.name} added by CLASSIFYAI-admin`)
    return NextResponse.json(newUser, { status: 201 });
  } catch (err) {
    console.error("Error during signup:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
