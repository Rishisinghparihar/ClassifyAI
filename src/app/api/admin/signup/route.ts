// /api/admin/signup/route.ts
import { logActivity } from "@/lib/helper";
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const signupSchema = z.object({
  mode: z.enum(["add", "remove"]),
  name: z.string().min(1),
  email: z.string().email(),
  role: z.enum(["STUDENT", "TEACHER", "ADMIN"]),
  premiumFeatures: z.array(z.string()).optional(),
  branch: z.string().optional(),
  year: z.string().optional(),
  semester: z.string().optional(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = signupSchema.parse(body);

    const existingUser = await prisma.user.findUnique({
      where: { email: data.email },
    });

    if (data.mode === "add") {
      if (existingUser) {
        return NextResponse.json(
          { error: "User already exists" },
          { status: 409 }
        );
      }

      const newUser = await prisma.user.create({
        data: {
          name: data.name,
          email: data.email,
          role: data.role,
          premiumFeatures: data.premiumFeatures
            ? {
                connect: data.premiumFeatures.map((featureName) => ({
                  name: featureName,
                })),
              }
            : undefined,
          branch: data.role === "STUDENT" ? data.branch ?? "" : undefined,
          year:
            data.role === "STUDENT" && data.year
              ? Number(data.year)
              : undefined,
          semester:
            data.role === "STUDENT" && data.semester
              ? Number(data.semester)
              : undefined,
        },
      });

      await logActivity(
        newUser.id,
        newUser.name,
        `${newUser.name} added by CLASSIFYAI-admin`
      );

      return NextResponse.json(newUser, { status: 201 });
    }

    if (data.mode === "remove") {
      if (!existingUser) {
        return NextResponse.json({ error: "User not found" }, { status: 404 });
      }

      await logActivity(
        existingUser.id,
        existingUser.name,
        `${existingUser.name} removed by CLASSIFYAI-admin`
      );

      await prisma.recentActivity.deleteMany({
        where: { userId: existingUser.id },
      });

      await prisma.attendance.deleteMany({
        where: { studentId: existingUser.id },
      });

      await prisma.googleToken.deleteMany({
        where: { userId: existingUser.id },
      });

      await prisma.user.delete({
        where: { email: data.email },
      });

      return NextResponse.json({ message: "User removed" }, { status: 200 });
    }

    return NextResponse.json({ error: "Invalid mode" }, { status: 400 });
  } catch (err) {
    console.error("Error during signup:", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
