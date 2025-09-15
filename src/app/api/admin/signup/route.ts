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
  section: z.string().optional(), // 1. ADDED 'section' TO THE VALIDATION SCHEMA
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = signupSchema.parse(body);

    const existingUser = await prisma.user.findUnique({
      where: { email: data.email },
    });

    // ==================== ADD USER ====================
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
            ? { connect: data.premiumFeatures.map((name) => ({ name })) }
            : undefined,
          branch: data.role === "STUDENT" ? data.branch ?? undefined : undefined,
          year: data.role === "STUDENT" && data.year ? Number(data.year) : undefined,
          // 2. (IMPROVEMENT) Made parsing the semester number safer
          semester: data.role === "STUDENT" && data.semester ? Number(data.semester.match(/\d+/)?.[0] || 0) : undefined,
        },
      });

      // --- KEEPS YOUR EXISTING TEACHER LOGIC ---
      if (newUser.role === "TEACHER") {
        await prisma.teacher.create({
          data: { userId: newUser.id },
        });
      }

      // --- 3. ADDED THIS ENTIRE BLOCK TO HANDLE STUDENT PROFILE CREATION ---
      if (newUser.role === "STUDENT") {
        let semesterRecord = null;
        if (data.semester) {
          semesterRecord = await prisma.semester.findFirst({ where: { name: data.semester } });
          if (!semesterRecord) {
            semesterRecord = await prisma.semester.create({
              data: {
                name: data.semester,
                number: Number(data.semester.match(/\d+/)?.[0] || 0),
              },
            });
          }
        }

        let sectionRecord = null;
        if (data.section) {
          sectionRecord = await prisma.section.findFirst({ where: { name: data.section } });
          if (!sectionRecord) {
            sectionRecord = await prisma.section.create({ data: { name: data.section } });
          }
        }
        
        // Creates the Student profile and links it to the User, Semester, and Section
        await prisma.student.create({
          data: {
            userId: newUser.id,
            semesterId: semesterRecord?.id, // Use optional chaining in case semester wasn't provided
            sectionId: sectionRecord?.id,   // Use optional chaining in case section wasn't provided
          },
        });
      }

      await logActivity(
        newUser.id,
        newUser.name,
        `${newUser.name} added by CLASSIFYAI-admin`
      );

      return NextResponse.json(newUser, { status: 201 });
    }

    // ==================== REMOVE USER (with improvements) ====================
    if (data.mode === "remove") {
      if (!existingUser) {
        return NextResponse.json({ error: "User not found" }, { status: 404 });
      }

      await logActivity(
        existingUser.id,
        existingUser.name,
        `${existingUser.name} removed by CLASSIFYAI-admin`
      );

      // --- KEEPS YOUR EXISTING REMOVAL LOGIC ---
      await prisma.recentActivity.deleteMany({ where: { userId: existingUser.id } });
      await prisma.attendance.deleteMany({ where: { userId: existingUser.id } }); // Note: Changed to userId
      await prisma.googleToken.deleteMany({ where: { userId: existingUser.id } });

      // --- KEEPS YOUR TEACHER DELETION LOGIC ---
      if (existingUser.role === "TEACHER") {
        await prisma.teacher.deleteMany({ where: { userId: existingUser.id } });
      }

      // --- 4. (IMPROVEMENT) ADDED LOGIC TO DELETE STUDENT PROFILE ON REMOVAL ---
      if (existingUser.role === "STUDENT") {
        await prisma.student.deleteMany({ where: { userId: existingUser.id } });
      }

      // Finally, delete the user
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