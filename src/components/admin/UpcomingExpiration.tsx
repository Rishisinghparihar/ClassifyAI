"use client";

import { Expiration } from "@/lib/types";
import { Tektur } from "next/font/google";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const tektur = Tektur({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const UpcomingExpirations = () => {
  const [expirations, setExpirations] = useState<Expiration[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExpirations = async () => {
      try {
        const res = await fetch(`/api/users/expirations`);
        const data = await res.json();
        if (data.success) {
          setExpirations(data.upcomingExpirations || []);
        }
      } catch {
        // Optional: handle error
      } finally {
        setLoading(false);
      }
    };

    fetchExpirations();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-orange-50/5 rounded-xl w-full h-[10rem] p-2 border border-orange-400 overflow-hidden"
    >
      <h2
        className={`${tektur.className} text-base text-center text-orange-200`}
      >
        Upcoming Expirations
      </h2>

      {loading ? (
        <p className="text-orange-300 text-center mt-4">Loading…</p>
      ) : expirations.length > 0 ? (
        <motion.ul
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.05,
              },
            },
          }}
          className="space-y-1 text-base text-orange-100 overflow-y-auto scrollbar-hide max-h-[6rem] pr-1"
        >
          {expirations.map((user) => (
            <motion.li
              key={user.id}
              variants={{
                hidden: { opacity: 0, x: 20 },
                visible: { opacity: 1, x: 0 },
              }}
              className="flex justify-between"
            >
              <span>{user.name}</span>
              <span className="text-base text-orange-300">{user.date}</span>
            </motion.li>
          ))}
        </motion.ul>
      ) : (
        <p className="text-orange-300 text-base text-center mt-4">
          No upcoming expirations
        </p>
      )}
    </motion.div>
  );
};

export default UpcomingExpirations;
