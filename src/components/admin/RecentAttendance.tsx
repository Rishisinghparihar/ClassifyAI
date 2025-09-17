"use client";

import React, { useEffect, useState } from "react";
import { RecentAttendance } from "@/lib/types";
import { motion } from "framer-motion";

const RecentAttendancePage = ({ expanded }: { expanded: boolean }) => {
  const [recent, setRecent] = useState<RecentAttendance[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchRecent = async () => {
      const res = await fetch(`/api/admin/recent-attendance`);
      const data = await res.json();
      if (data.success) {
        setRecent(data.recent);
      }
      setLoading(false);
    };
    fetchRecent();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center w-full h-full">
        <p className="text-gray-400 text-sm animate-pulse text-center">
          Loading recent activity…
        </p>
      </div>
    );
  }

  if (recent.length === 0) {
    return (
      <div className="flex justify-center items-center w-full h-full">
        <p className="text-gray-400 text-xs text-center">
          No attendance marked today.
        </p>
      </div>
    );
  }

  return (
    <motion.div
      layout
      transition={{ duration: 0.5 }}
      className="overflow-y-auto outline-none w-70 scrollbar-hide"
      style={{
        maxHeight: expanded ? "30rem" : "12rem",
      }}
    >
      <ul className="space-y-2 outline-none">
        {recent.map((rec) => (
          <li
            key={rec.id}
            className="flex justify-between outline-none items-center gap-30 px-4 py-3 hover:cursor-pointer hover:shadow transition-all duration-700 hover:shadow-amber-600 rounded bg-white/5 text-gray-200"
          >
            <article className="flex flex-col ">
              <span className="uppercase text-orange-100">
                {rec.student.name}
              </span>
              <span className="text-xs">{rec.subject}</span>
            </article>
            <span className="uppercase">
              {rec.status.toUpperCase() === "PRESENT" ? (
                <span className="text-orange-600">present</span>
              ) : (
                <span className="text-orange-700">absent</span>
              )}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default RecentAttendancePage;
  