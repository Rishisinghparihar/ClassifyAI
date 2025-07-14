"use client";

import PremiumHeader from "@/components/admin/PremiumHeader";
import PremiumUsersTable from "@/components/admin/PremiumUsersTable";
import RecentPremiumActivity from "@/components/admin/RecentPremiumActivity";
import SearchFilterBar from "@/components/admin/SearchFilterBar";
import StatsRow from "@/components/admin/StatsRow";
import UpcomingExpirations from "@/components/admin/UpcomingExpiration";
import { PremiumUser, Stats } from "@/lib/types";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [totalPremiumUsers, setTotalPremiumUsers] = useState<number>(0);
  const [allUsers, setAllUsers] = useState<PremiumUser[]>([]);
  const [stats, setStats] = useState<Stats | null>(null);
  useEffect(() => {
    const fetchPremiumCount = async () => {
      try {
        const res = await fetch("/api/users/premium-count");
        const data = await res.json();
        if (data.success) {
          console.log({ data });
          setTotalPremiumUsers(data.totalPremiums);
        }
      } catch (err) {
        console.error("Failed to fetch premium count", err);
      }
    };

    const fetchStats = async () => {
      const res = await fetch("/api/users/stats");
      const data = await res.json();
      if (data.success) {
        setStats(data.stats);
      }
    };

    const fetchPremiumUsers = async () => {
      const res = await fetch("/api/users/premium-count/all");
      const data = await res.json();
      if (data.success) {
        setAllUsers(data.users);
      }
    };

    fetchPremiumUsers();
    fetchStats();
    fetchPremiumCount();
  }, []);
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

  if (!stats) return <div>Loading stats...</div>;

  return (
    <div className="min-h-screen py-8 px-4 lg:px-10 space-y-10 overflow-y-auto">
      {/* Header */}
      <PremiumHeader totalPremiumStudents={totalPremiumUsers} />

      {/* Stats */}
      <StatsRow stats={stats} />

      {/* Filter */}
      <SearchFilterBar
        onSearch={setSearchTerm}
        onFilter={setFilter}
        currentFilter={filter}
      />

      {/* Table + Recent Activity side by side */}
      <div className="overflow-x-auto">
        <div className=" gap-6 min-w-[800px]">
          {/* Table - takes more space */}
          <div className="min-w-[500px]">
            <PremiumUsersTable users={filteredUsers} />
          </div>

          {/* Recent Activity - narrower */}
          <div className="flex gap-10 mt-16 min-w-[250px]">
            <RecentPremiumActivity />
            <UpcomingExpirations />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
