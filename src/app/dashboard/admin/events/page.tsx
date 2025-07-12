"use client";
import PremiumHeader from "@/components/admin/PremiumHeader";
import { Tektur } from "next/font/google";
import React from "react";

const tektur = Tektur({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const page = () => {
    const totalPremiumUsers = 34;
  return (
    <div className="space-y-6">
      <PremiumHeader totalPremiumUsers={totalPremiumUsers} />
    </div>
  );
};

export default page;
