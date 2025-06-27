"use client";
import { loadRazorpayScript, monthlyPlans, showSuccessMessage } from "@/lib/helper";
import { Check, X } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";



const yearlyPlans = monthlyPlans.map((plan) => ({
  ...plan,
  price: plan.price === 0 ? 0 : plan.price * 10, // 2 months free
}));

const Page = () => {
  const [isYearly, setIsYearly] = useState(false);
  const plans = isYearly ? yearlyPlans : monthlyPlans;
  const router = useRouter();

 const handlePayment = async (planName: string, price: number) => {
  if (price === 0) {
    router.push("/dashboard/student/home");
    return;
  }

  const res = await fetch("/api/student/payment", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      userId: localStorage.getItem("studentId"),
      amount: price,
    }),
  });

  const data = await res.json();

  const success = await loadRazorpayScript();
  if (!success) {
    alert("Failed to load Razorpay. Please try again.");
    return;
  }

  const options = {
    key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
    amount: data.amount,
    currency: "INR",
    name: "ClassifyAI",
    description: `${planName} Plan`,
    order_id: data.id,
    handler: async function (response: any) {
      await fetch("/api/student/payment/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          razorpay_order_id: data.id,
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_signature: response.razorpay_signature,
          userId: localStorage.getItem("studentId"),
          planName,
          billingCycle: isYearly ? "yearly" : "monthly",
        }),
      });

      showSuccessMessage("Payment successful & premium features activated!");
      router.push("/dashboard/student/");
    },
    theme: { color: "#06b6d4" },
  };

  const rzp = new (window as any).Razorpay(options);
  rzp.open();
};

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full px-4 py-10 text-white">
      <h1 className="text-4xl md:text-6xl font-bold uppercase mb-4">
        ClassifyAI Plans
      </h1>
      <p className="text-center max-w-xl text-white/80 mb-6">
        Choose a plan that fits your academic journey. Upgrade anytime as you
        grow.
      </p>

      {/* Toggle Switch */}
      <div className="mb-20 flex items-center gap-4">
        <span
          className={`text-sm ${
            !isYearly ? "text-cyan-400 font-semibold" : "text-white/60"
          }`}
        >
          Monthly
        </span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={isYearly}
            onChange={() => setIsYearly(!isYearly)}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-white/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-600"></div>
        </label>
        <span
          className={`text-sm ${
            isYearly ? "text-cyan-400 font-semibold" : "text-white/60"
          }`}
        >
          Yearly
        </span>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center transition transform hover:-translate-y-2 hover:scale-[1.02]"
          >
            {/* Floating Header */}
            <div
              className={`absolute -top-10 z-10 w-[90%] rounded-4xl bg-gradient-to-r ${plan.bg} text-white text-center py-4 shadow-xl`}
            >
              <h2 className="text-sm font-semibold tracking-wider uppercase">
                {plan.title}
              </h2>
              <p className="text-3xl font-bold mt-1">
                ₹{plan.price}
                <span className="text-sm font-normal">
                  /{isYearly ? "year" : "month"}
                </span>
              </p>
              {plan.popular && (
                <span className="absolute top-2 right-3 bg-yellow-400 text-black text-[10px] px-2 py-0.5 rounded-full font-bold uppercase shadow">
                  Most Popular
                </span>
              )}
            </div>

            {/* Pricing Card */}
            <div className="relative w-full bg-white/10 text-white backdrop-blur-lg rounded-4xl shadow-lg pt-20 px-6 pb-6 flex flex-col justify-between min-h-[35rem]">
              {/* Feature List */}
              <ul className="space-y-3 text-sm mb-6">
                {monthlyPlans[0].features
                  .concat(monthlyPlans[0].extra)
                  .map((featureText, i) => {
                    const included = plan.features.includes(featureText);
                    return (
                      <li
                        key={i}
                        className={`flex items-center text-base  gap-2 ${
                          included ? "text-cyan-300" : "text-red-400"
                        }`}
                      >
                        {included ? <Check size={16} /> : <X size={16} />}
                        {featureText}
                      </li>
                    );
                  })}
              </ul>

              {/* CTA Button */}
              <button
                className="w-full py-6 text-xl bg-cyan-500 hover:bg-cyan-600 text-white rounded-4xl shadow transition"
                onClick={() => handlePayment(plan.title, plan.price)}
              >
                {plan.price === 0 ? "Get Started" : `Choose Plan`}
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* Back Button */}
      <div className="absolute top-4 right-4 z-10">
        <button
          onClick={() => router.back()}
          className="flex items-center justify-center gap-2 rounded-full  text-white hover:text-cyan-300 transition-colors"
        >
          <X size={40} />
        </button>
      </div>
    </div>
  );
};

export default Page;
