import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: NextRequest) {
  try {
    const { userId, amount, planName, billingCycle } = await req.json();

    if (!userId || !amount || !planName || !billingCycle) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"], // use card for testing
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "inr",
            product_data: {
              name: `ClassifyAI ${planName} Subscription (${billingCycle})`,
            },
            unit_amount: amount * 100, // amount in paise
          },
          quantity: 1,
        },
      ],
      metadata: {
        userId,
        planName,
        billingCycle,
      },
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/dashboard/student/premium/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/dashboard/student/premium/cancel`,
    });

    return NextResponse.json({ id: session.id, url: session.url });
  } catch (err: any) {
    console.error("Stripe session creation failed:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
