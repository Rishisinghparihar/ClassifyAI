"use client";

import LinkCards from "@/components/admin/LinkCards";
import UserTable from "@/components/admin/UserTable";
import { Tektur } from "next/font/google";
import React, { useState } from "react";
import useSWR from "swr";
import { motion } from "framer-motion";

const tektur = Tektur({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const ManageUsers = () => {
  const [role, setRole] = useState<"STUDENT" | "TEACHER">("STUDENT");
  const { mutate } = useSWR(`/api/admin/users?role=${role}`, fetcher);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
    >
      <motion.h1
        className={`text-4xl ${tektur.className} text-center text-orange-200 mt-5`}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        Manage Users
      </motion.h1>

      <motion.div
        className="h-[55vh] overflow-scroll scrollbar-hide"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.4 }}
      >
        <UserTable />
      </motion.div>

      <motion.div
        className="flex gap-15 h-[15vw] items-center justify-center"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, x: -20 },
            visible: { opacity: 1, x: 0 },
          }}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <LinkCards forRole="student" onActionComplete={() => mutate()} />
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, x: 20 },
            visible: { opacity: 1, x: 0 },
          }}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <LinkCards forRole="teacher" onActionComplete={() => mutate()} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ManageUsers;
