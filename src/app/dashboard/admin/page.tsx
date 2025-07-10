"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Tektur } from "next/font/google";
import UpComingEvents from "@/components/admin/UpComingEvents";
import AttendanceGraph from "@/components/admin/AttendanceGraph";

interface Summary {
  totalStudents: number;
  totalTeachers: number;
  totalAttendance: number;
  tokensToday: number;
}

const tektur = Tektur({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const DashboardStats = () => {
  const [summary, setSummary] = useState<Summary | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSummary = async () => {
      const res = await fetch("/api/admin/summary");
      const data = await res.json();
      if (!data.error) {
        setSummary(data);
      }
      setLoading(false);
    };
    fetchSummary();
  }, []);

  if (loading || !summary) {
    return (
      <p className="text-gray-400 text-2xl text-center mt-16">Loading stats…</p>
    );
  }

  const stats = [
    {
      label: "Total Students",
      value: summary.totalStudents,
      color: "text-cyan-300",
    },
    {
      label: "Total Teachers",
      value: summary.totalTeachers,
      color: "text-green-300",
    },
    {
      label: "Attendance Today",
      value: summary.totalAttendance,
      color: "text-yellow-300",
    },
    {
      label: "Tokens Today",
      value: summary.tokensToday,
      color: "text-purple-300",
    },
  ];

  return (
    <div>
    <div
      className={`grid grid-cols-1 md:grid-cols-4 px-4 gap-4 mb-6 mt-16 ${tektur.className}`}
    >
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          className="bg-white/5 rounded-2xl p-4 text-center"
        >
          <h3 className={`${tektur.className}  text-gray-400`}>{stat.label}</h3>
          <p className={`text-2xl font-bold ${tektur.className} ${stat.color}`}>
            {stat.value}
          </p>
        </motion.div>
      ))}
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
  <div className="md:col-span-2 bg-white/5 rounded-xl p-4">
    <AttendanceGraph />
  </div>
  <div className="bg-white/5 rounded-xl p-4">
    <UpComingEvents expanded={false} />
  </div>
</div>

    </div>
  );
};

export default DashboardStats;
