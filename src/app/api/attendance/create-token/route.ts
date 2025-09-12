// /api/attendance/create-token/route.ts
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import QRCode from "qrcode";
import { prisma } from "@/lib/prisma";
import { logActivity } from "@/lib/helper";

export async function POST(request: Request) {
  try {
    const { subject, professorID } = await request.json();
    if (!subject || !professorID) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }
       const professor = await prisma.user.findUnique({
      where: { id: professorID },
      select: { name: true },
    });

    if (!professor) {
      return NextResponse.json(
        { message: "Professor not found" },
        { status: 404 }
      );
    }
    const token = uuidv4();
    const issuedAt = new Date();
    const expiresAt = new Date(issuedAt.getTime() + 10 * 60 * 1000);

    const professorId = professorID;
    await prisma.attendanceToken.create({
      data: {
        token,
        subjectId: subject,
        professorId,
        issuedAt,
        expiresAt,
      },
    });
    await logActivity(professorId, professor.name,`attendance token generated for ${subject}`);
    const payload = JSON.stringify({ token });

    const qrCodeDataUrl = await QRCode.toDataURL(payload);

    return NextResponse.json({ qrCodeDataUrl, token }, { status: 200 });
  } catch (error) {
    console.error("Error generating QR code:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
