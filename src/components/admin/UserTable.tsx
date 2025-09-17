"use client";

import { User } from "@/lib/types";
import { motion, AnimatePresence } from "framer-motion";
import { Tektur } from "next/font/google";
import React, { useState } from "react";
import { Loader2, Users } from "lucide-react";
import useSWR from "swr";

const tektur = Tektur({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const UserTable = () => {
  const [role, setRole] = useState<"STUDENT" | "TEACHER">("STUDENT");

  const { data, isLoading, error } = useSWR<{ users: User[] }>(
    `/api/admin/users?role=${role}`,
    fetcher
  );

  const users = data?.users || [];

  return (
    <div className={`px-8 text-white ${tektur.className}`}>
      {/* Toggle */}
      <div className="flex gap-2 mb-3 items-center justify-center">
        <span
          className={`${
            role === "STUDENT" ? "text-orange-500" : "text-gray-400"
          }`}
        >
          Students
        </span>

        <motion.button
          layout
          onClick={() => setRole(role === "STUDENT" ? "TEACHER" : "STUDENT")}
          className={`relative w-14 h-8 bg-gray-700 rounded-full transition-colors duration-300 ${
            role === "TEACHER" ? "bg-orange-600" : "bg-gray-700"
          }`}
        >
          <motion.span
            layout
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            className="absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow"
            animate={{
              x: role === "TEACHER" ? 24 : 0,
            }}
          />
        </motion.button>

        <span
          className={`${
            role === "TEACHER" ? "text-orange-500" : "text-gray-400"
          }`}
        >
          Teachers
        </span>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center py-16">
          <Loader2 className="animate-spin text-orange-600 w-10 h-10" />
        </div>
      ) : error ? (
        <div className="text-red-500 text-center">Failed to load users.</div>
      ) : users.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 text-orange-400">
          <Users className="w-12 h-12 mb-2" />
          <p className="text-lg">No {role.toLowerCase()}s found.</p>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <table className="w-full text-left rounded-2xl border-collapse">
            <thead>
              <tr className="bg-orange-900 rounded-2xl text-orange-100">
                <th className="px-4 py-2 rounded-l-2xl">Name</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Premium</th>
                <th className="px-4 py-2 rounded-r-2xl">Created At</th>
              </tr>
            </thead>
            <tbody>
              <AnimatePresence>
                {users.map((user) => (
                  <motion.tr
                    key={user.id}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.2 }}
                    className="border-b border-orange-700 hover:bg-orange-800/30"
                  >
                    <td className="px-4 py-2">{user.name}</td>
                    <td className="px-4 py-2">{user.email}</td>
                    <td className="px-4 py-2">
                      {(() => {
                        if (!user.isPremium || !user.premiumFeatures?.length)
                          return "Starter";

                        const premiumSet = new Set(
                          user.premiumFeatures.map((f) => f.name)
                        );

                        const allFeatures = [
                          "AI_CHATBOT",
                          "STUDY_PLAN",
                          "CALENDAR_SYNC",
                        ];

                        const hasAll = allFeatures.every((f) =>
                          premiumSet.has(f)
                        );

                        if (hasAll) return "Ultimate";
                        return "Pro";
                      })()}
                    </td>
                    <td className="px-4 py-2">
                      {new Date(user.createdAt).toLocaleDateString()}
                    </td>
                  </motion.tr>
                ))}
              </AnimatePresence>
            </tbody>
          </table>
        </motion.div>
      )}
    </div>
  );
};

export default UserTable;
