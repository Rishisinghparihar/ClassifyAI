import { NextResponse } from "next/server";
import { redis } from "@/lib/redis";

export async function POST(req: Request) {
  const { email, otp } = await req.json();

  if (!email || !otp) {
    return NextResponse.json(
      { error: "Email & OTP required" },
      { status: 400 }
    );
  }

  const storedOtp = await redis.get(`otp:${email}`);

  if (!storedOtp) {
    return NextResponse.json(
      { error: "OTP expired or not found" },
      { status: 400 }
    );
  }

  if (storedOtp !== otp) {
    return NextResponse.json({ error: "Invalid OTP" }, { status: 400 });
  }

  // delete OTP after verification
  await redis.del(`otp:${email}`);

  return NextResponse.json({ message: "OTP verified" }, { status: 200 });
}
