"use client";
import { Check, X } from "lucide-react";
import React, { useState } from "react";

const monthlyPlans = [
  {
    title: "Starter",
    price: 0,
    bg: "from-cyan-500 to-cyan-700",
    features: [
      "QR Code Attendance",
      "Manual Attendance",
      "Exam & Assignment Tracker",
    ],
    extra: ["Bunk Manager", "Smart Study Plan Generator", "AI Doubt Solver", "Calendar Sync"],
    popular: false,
  },
  {
    title: "Pro",
    price: 99,
    bg: "from-emerald-400 to-emerald-600",
    features: [
      "QR Code Attendance",
      "Manual Attendance",
      "Exam & Assignment Tracker",
      "Bunk Manager",
      "Smart Study Plan Generator",
    ],
    extra: ["AI Doubt Solver", "Calendar Sync"],
    popular: true,
  },
  {
    title: "Ultimate",
    price: 199,
    bg: "from-orange-500 to-rose-500",
    features: [
      "QR Code Attendance",
      "Manual Attendance",
      "Exam & Assignment Tracker",
      "Bunk Manager",
      "Smart Study Plan Generator",
      "AI Doubt Solver",
      "Calendar Sync",
    ],
    extra: [],
    popular: false,
  },
];

const yearlyPlans = monthlyPlans.map((plan) => ({
  ...plan,
  price: plan.price === 0 ? 0 : plan.price * 10, // 2 months free
}));

const Page = () => {
  const [isYearly, setIsYearly] = useState(false);
  const plans = isYearly ? yearlyPlans : monthlyPlans;

  return (
   <div className="flex flex-col items-center justify-center min-h-screen w-full px-4 py-10 text-white">
      <h1 className="text-4xl md:text-6xl font-bold uppercase mb-4">ClassifyAI Plans</h1>
      <p className="text-center max-w-xl text-white/80 mb-6">
        Choose a plan that fits your academic journey. Upgrade anytime as you grow.
      </p>

      {/* Toggle Switch */}
      <div className="mb-20 flex items-center gap-4">
        <span className={`text-sm ${!isYearly ? "text-cyan-400 font-semibold" : "text-white/60"}`}>
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
        <span className={`text-sm ${isYearly ? "text-cyan-400 font-semibold" : "text-white/60"}`}>
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
              className={`absolute -top-10 z-10 w-[90%] rounded-md bg-gradient-to-r ${plan.bg} text-white text-center py-4 shadow-xl`}
            >
              <h2 className="text-sm font-semibold tracking-wider uppercase">{plan.title}</h2>
              <p className="text-3xl font-bold mt-1">
                ₹{plan.price}
                <span className="text-sm font-normal">/{isYearly ? "year" : "month"}</span>
              </p>
              {plan.popular && (
                <span className="absolute top-1 right-2 bg-yellow-400 text-black text-[10px] px-2 py-0.5 rounded-full font-bold uppercase shadow">
                  Most Popular
                </span>
              )}
            </div>

            {/* Pricing Card */}
            <div className="relative w-full bg-white/10 text-white backdrop-blur-lg rounded-lg shadow-lg pt-20 px-6 pb-6 flex flex-col justify-between min-h-[35rem]">
              {/* Feature List */}
              <ul className="space-y-3 text-sm mb-6">
                {monthlyPlans[0].features.concat(monthlyPlans[0].extra).map((featureText, i) => {
                  const included = plan.features.includes(featureText);
                  return (
                    <li
                      key={i}
                      className={`flex items-center gap-2 ${
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
              <button className="w-full py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded shadow transition">
                Choose Plan
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
