import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import QRCode from "qrcode";

export async function POST(request: Request) {
  try {
    const { subject, professorID } = await request.json();
    if (!subject || !professorID) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }
    const attendanceToken = uuidv4();

    const payload = JSON.stringify({
      token: attendanceToken,
      subject,
      issuedAt: Date.now(),
      professorID,
    });

    const qrCodeDataUrl = await QRCode.toDataURL(payload);

    //? TODO : Save the attendance token and QR code to the database
    return NextResponse.json(
      { qrCodeDataUrl, attendanceToken },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error generating QR code:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
