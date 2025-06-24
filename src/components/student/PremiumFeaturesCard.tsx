"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Logo from "../apps/Logo";

type PremiumStatusResponse = {
  isPremium: boolean;
  plan: "Starter" | "Pro" | "Ultimate" | null;
  features: string[];
};

const PremiumFeaturesCard = ({ studentId }: { studentId: string }) => {
  const router = useRouter();
  const [premiumStatus, setPremiumStatus] = useState<PremiumStatusResponse | null>(null);

  const fetchPremiumStatus = async () => {
    try {
      const res = await fetch(`/api/student/status?studentId=${studentId}`);
      const data: PremiumStatusResponse = await res.json();
      setPremiumStatus(data);
    } catch (error) {
      console.error("Error fetching premium status:", error);
    }
  };

  useEffect(() => {
    fetchPremiumStatus();
  }, []);

  const planColor =
    premiumStatus?.plan === "Ultimate"
      ? "bg-gradient-to-tr from-yellow-200/20 to-yellow-400/20 text-yellow-50"
      : premiumStatus?.plan === "Pro"
      ? "bg-gradient-to-tr from-gray-400/50 to-gray-600/50 text-gray-100"
      : "bg-gradient-to-tl from-white/20 to-black/20 text-white";

  return (
    <div
      className={`w-[30rem] h-72 grid-cols-2 rounded-4xl grid items-center justify-center border border-cyan-500 ${planColor}`}
    >
      {/* Left Side */}
      <div className="text-center px-4">
        <Logo/>
        <h2 className="text-2xl font-bold mt-4">
          {premiumStatus?.isPremium
            ? `You're on ${premiumStatus.plan} Plan`
            : "Go Premium"}
        </h2>
        <p className="mt-1 text-sm">
          {premiumStatus?.isPremium
            ? "Exclusive premium features enabled"
            : "Unlock exclusive features and perks"}
        </p>
        {!premiumStatus?.isPremium && (
          <button
            onClick={() => router.push("/dashboard/student/premium")}
            className="mt-3 px-5 py-2 cursor-pointer bg-cyan-700 text-white rounded-full hover:bg-cyan-600 transition duration-300"
          >
            Upgrade Now
          </button>
        )}
      </div>

      {/* Right Side */}
      <div className="flex flex-col items-start px-4 text-sm text-white">
        {premiumStatus?.isPremium ? (
          <ul className="list-disc pl-4 max-h-40 overflow-y-auto">
            {premiumStatus.features.map((feature) => (
              <li className="text-base ml-2.5 mb-3" key={feature}>{feature.replaceAll("_", " ")}</li>
            ))}
          </ul>
        ) : (
          <Image src="/books.png" alt="Books" width={120} height={120} />
        )}
      </div>
    </div>
  );
};

export default PremiumFeaturesCard;
