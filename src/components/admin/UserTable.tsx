"use client";
import { User } from "@/lib/types";
import { motion } from "framer-motion";
import { Tektur } from "next/font/google";
import React, { useEffect, useState } from "react";
import { Loader2, Users } from "lucide-react";

const tektur = Tektur({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const UserTable = () => {
  const [role, setRole] = useState<"STUDENT" | "TEACHER">("STUDENT");
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/admin/users?role=${role}`)
      .then((res) => res.json())
      .then((data) => setUsers(data.users))
      .finally(() => setLoading(false));
  }, [role]);
  return (
    <div className={`p-8  text-white ${tektur.className}`}>
      <div className="flex gap-4 mb-6 items-center justify-center">
        <span
          className={`${
            role === "STUDENT" ? "text-orange-500" : "text-gray-400"
          }`}
        >
          Students
        </span>
        <button
          onClick={() => setRole(role === "STUDENT" ? "TEACHER" : "STUDENT")}
          className={`relative w-14 h-8 bg-gray-700 rounded-full transition-colors duration-300 ${
            role === "TEACHER" ? "bg-orange-600" : "bg-gray-700"
          }`}
        >
          <span
            className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow transform transition-transform duration-300 ${
              role === "TEACHER" ? "translate-x-6" : ""
            }`}
          ></span>
        </button>
        <span
          className={`${
            role === "TEACHER" ? "text-orange-500" : "text-gray-400"
          }`}
        >
          Teachers
        </span>
      </div>

      {loading ? (
        <div className="flex justify-center items-center py-16">
          <Loader2 className="animate-spin text-orange-600 w-10 h-10" />
        </div>
      ) : users.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 text-orange-400">
          <Users className="w-12 h-12 mb-2" />
          <p className="text-lg">No {role.toLowerCase()}s found.</p>
        </div>
      ) : (
        <motion.table
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="w-full text-left border-collapse"
        >
          <thead>
            <tr className="bg-orange-900 text-orange-100">
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Premium</th>
              <th className="px-4 py-2">Created At</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user.id}
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

                    const hasAll = allFeatures.every((f) => premiumSet.has(f));

                    if (hasAll) return "Ultimate";
                    return "Pro";
                  })()}
                </td>
                <td className="px-4 py-2">
                  {new Date(user.createdAt).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </motion.table>
      )}
    </div>
  );
};

export default UserTable;
