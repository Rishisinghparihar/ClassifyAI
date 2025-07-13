"use client";
import PremiumChart from "@/components/admin/PremiumChart";
import PremiumHeader from "@/components/admin/PremiumHeader";
import PremiumUsersTable from "@/components/admin/PremiumUsersTable";
import SearchFilterBar from "@/components/admin/SearchFilterBar";
import StatsRow from "@/components/admin/StatsRow";
import { PremiumUser } from "@/lib/types";
import { Tektur } from "next/font/google";
import React, { useState } from "react";

const tektur = Tektur({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const Page = () => {
  const totalPremiumUsers = 34;
  const stats = {
    totalUsers: 500,
    premiumUsers: 34,
    proUsers: 20,
    ultimateUsers: 14,
    expiredPremiums: 3,
  };
  const premiumUsers: PremiumUser[] = [
    {
      id: "1",
      name: "John Doe",
      email: "john@example.com",
      plan: "ULTIMATE",
      startDate: "2025-06-01",
      endDate: "2026-06-01",
      status: "ACTIVE",
    },
    {
      id: "2",
      name: "Jane Smith",
      email: "jane@example.com",
      plan: "PRO",
      startDate: "2025-05-01",
      endDate: "2026-05-01",
      status: "EXPIRED",
    },
  ];

    const allUsers: PremiumUser[] = [
    {
      id: "1",
      name: "John Doe",
      email: "john@example.com",
      plan: "ULTIMATE",
      startDate: "2025-06-01",
      endDate: "2026-06-01",
      status: "ACTIVE",
    },
    {
      id: "2",
      name: "Jane Smith",
      email: "jane@example.com",
      plan: "PRO",
      startDate: "2025-05-01",
      endDate: "2026-05-01",
      status: "EXPIRED",
    },
  ];

    const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredUsers = allUsers.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesFilter =
      filter === "All" ||
      (filter === "Pro" && user.plan === "PRO") ||
      (filter === "Ultimate" && user.plan === "ULTIMATE") ||
      (filter === "Expired" && user.status === "EXPIRED");

    return matchesSearch && matchesFilter;
  });
  return (
    <div className="h-screen">
      <div className="space-y-6">
        <PremiumHeader totalPremiumStudents={totalPremiumUsers} />
      </div>
      <div>
        <div className="space-y-10 mt-10">
          <StatsRow stats={stats} />
        </div>
        <div className="my-10">
          <SearchFilterBar
            onSearch={setSearchTerm}
            onFilter={setFilter}
            currentFilter={filter}
          />
        </div>
        <div className="mt-10">
          <PremiumUsersTable users={premiumUsers} />
        </div>
        <div className="">
            <PremiumChart/>
        </div>
      </div>
    </div>
  );
};

export default Page;
