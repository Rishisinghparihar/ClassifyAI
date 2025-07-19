"use client";

import PremiumHeader from "@/components/admin/PremiumHeader";
import PremiumUsersTable from "@/components/admin/PremiumUsersTable";
import RecentPremiumActivity from "@/components/admin/RecentPremiumActivity";
import SearchFilterBar from "@/components/admin/SearchFilterBar";
import StatsRow from "@/components/admin/StatsRow";
import UpcomingExpirations from "@/components/admin/UpcomingExpiration";
import { PremiumUser, Stats } from "@/lib/types";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { titleArrayForPremiumPage } from "@/lib/helper";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const Page = () => {
  const [totalPremiumUsers, setTotalPremiumUsers] = useState<number>(0);
  const [allUsers, setAllUsers] = useState<PremiumUser[]>([]);
  const [stats, setStats] = useState<Stats | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("All");

  const fetchPremiumCount = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users/premium-count`);
      const data = await res.json();
      if (data.success) {
        setTotalPremiumUsers(data.totalPremiums);
      }
    } catch (err) {
      console.error("Failed to fetch premium count", err);
    }
  };

  const fetchStats = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users/stats`);
    const data = await res.json();
    if (data.success) {
      setStats(data.stats);
    }
  };

  const fetchPremiumUsers = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users/premium-count/all`);
    const data = await res.json();
    if (data.success) {
      setAllUsers(data.users);
    }
  };

  useEffect(() => {
    fetchPremiumUsers();
    fetchStats();
    fetchPremiumCount();
  }, []);

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

  if (!stats)
    return (
      <div className="text-center mt-52 animate-pulse text-2xl">
        Loading...
      </div>
    );

  return (
    <motion.div
      className="min-h-screen py-8 px-4 lg:px-10 space-y-10 overflow-y-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* Header */}
      <motion.div variants={fadeInUp} initial="hidden" animate="visible">
        <PremiumHeader totalPremiumStudents={totalPremiumUsers} />
      </motion.div>

      {/* Stats */}
      <motion.div variants={fadeInUp} initial="hidden" animate="visible">
        <StatsRow stats={stats} titleArray={titleArrayForPremiumPage} />
      </motion.div>

      {/* Filter */}
      <motion.div variants={fadeInUp} initial="hidden" animate="visible">
        <SearchFilterBar
          onSearch={setSearchTerm}
          onFilter={setFilter}
          currentFilter={filter}
        />
      </motion.div>

      {/* Table + Recent Activity */}
      <motion.div
        className="overflow-x-auto"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
      >
        <div className="gap-6 min-w-[800px]">
          {/* Table */}
          <motion.div className="min-w-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={filter + searchTerm}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <PremiumUsersTable
                  users={filteredUsers}
                  onRefresh={fetchPremiumUsers}
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Side cards */}
          <motion.div
            className="flex gap-10 mt-16 min-w-[250px]"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            <RecentPremiumActivity />
            <UpcomingExpirations />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Page;
