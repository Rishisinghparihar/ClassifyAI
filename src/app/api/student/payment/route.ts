import { NextRequest, NextResponse } from "next/server";
import Razorpay from "razorpay";
export async function POST(req: NextRequest) {
  const { userId, amount } = await req.json();
  const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID!,
    key_secret: process.env.RAZORPAY_KEY_SECRET!,
  });
  try {
    const options = {
      amount: amount * 100, // Amount in paise
      currency: "INR",
      receipt: `r_${userId.slice(0, 10)}_${Date.now()}`
    };
    const order = await razorpay.orders.create(options);
    return NextResponse.json(order);
  } catch (error) {
    console.error("Error creating Razorpay order:", error);
    return NextResponse.json(
      { error: "Failed to create payment order" },
      { status: 500 }
    );
  }
}
