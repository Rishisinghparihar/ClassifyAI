"use client";

import { Activity } from "@/lib/types";
import { Tektur } from "next/font/google";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const tektur = Tektur({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const RecentPremiumActivity = () => {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    const fetchActivities = async () => {
      const res = await fetch(`/api/users/recent-activity`);
      const data = await res.json();
      if (data.success) {
        setActivities(data.activities);
      }
    };

    fetchActivities();
  }, []);

  function removeIdFromText(text: string): string {
    const parts = text.split(" ");
    parts.shift();
    return parts.join(" ").trim();
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="bg-orange-50/5 rounded-xl p-1 border w-full border-orange-400"
    >
      <h2
        className={`${tektur.className} text-base text-orange-200 text-center`}
      >
        Recent Premium Activity
      </h2>

      {activities.length > 0 ? (
        <ul className="space-y-1 text-lg flex flex-col items-center justify-center mb-3 overflow-scroll scrollbar-hide h-[7rem] text-orange-100">
          {activities.map((a, idx) => (
            <motion.li
              key={a.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="p-3 border w-[30rem] my-1 rounded"
            >
              <span className="text-sm capitalize">{a.username} </span>
              <span className="text-sm">{removeIdFromText(a.text)}</span>
              <span className="text-orange-300 ml-2 text-xs">({a.date})</span>
            </motion.li>
          ))}
        </ul>
      ) : (
        <p className="text-base text-orange-300 mt-10 text-center">
          No recent activity
        </p>
      )}
    </motion.div>
  );
};

export default RecentPremiumActivity;
