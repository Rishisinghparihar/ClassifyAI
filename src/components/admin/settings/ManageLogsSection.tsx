"use client";

import { useState, useEffect } from "react";
import { Tektur } from "next/font/google";
import { showErrorMessage, showSuccessMessage } from "@/lib/helper";
import { motion } from "framer-motion";

const tektur = Tektur({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function ManageLogsSection() {
  const [totalLogs, setTotalLogs] = useState<number>(0);
  const [loginLogs, setLoginLogs] = useState<number>(0);
  const [deleteCount, setDeleteCount] = useState<number>(0);
  const [type, setType] = useState<"all" | "login">("all");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchLogCounts = async () => {
      try {
        const res = await fetch("/api/admin/settings/logs");
        const data = await res.json();
        if (res.ok) {
          setTotalLogs(data.totalCount);
          setLoginLogs(data.loginCount);
        } else {
          showErrorMessage(data.error || "Failed to fetch log counts.");
        }
      } catch {
        showErrorMessage("Something went wrong while fetching log counts.");
      }
    };

    fetchLogCounts();
  }, []);

  const handleDeleteLogs = async () => {
    if (deleteCount <= 0) {
      showErrorMessage("Enter a valid number.");
      return;
    }

    const maxDeletable = type === "login" ? loginLogs : totalLogs;

    if (deleteCount > maxDeletable) {
      showErrorMessage(`Cannot delete more than available ${type} logs.`);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/admin/settings/logs", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ count: deleteCount, type }),
      });

      const data = await res.json();
      if (res.ok) {
        showSuccessMessage(`${data.deleted} ${type} logs deleted.`);
        if (type === "all") {
          setTotalLogs((prev) => prev - data.deleted);
          setLoginLogs((prev) => prev - Math.min(prev, data.deleted));
        } else {
          setLoginLogs((prev) => prev - data.deleted);
          setTotalLogs((prev) => prev - data.deleted);
        }
        setDeleteCount(0);
      } else {
        showErrorMessage(data.error || "Failed to delete logs.");
      }
    } catch {
      showErrorMessage("Something went wrong while deleting logs.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="
        relative 
        bg-gradient-to-br from-white/10 to-black/20 backdrop-blur-md
        h-[75vh] flex flex-col items-center p-6 rounded-xl shadow-xl border border-white/10 w-full
      "
    >
      {/* Blobs container */}
      <div className="absolute inset-0 z-0 overflow-hidden rounded-xl">
        {/* Purple blob */}
        <div className="absolute -top-1/3 -left-1/3 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl animate-pulse"></div>

        {/* Orange blob */}
        <motion.div
          className="absolute w-80 h-80 bg-orange-500/20 rounded-full filter blur-2xl"
          animate={{
            x: ["100%", "0%", "-20%", "0%", "100%"],
            y: ["100%", "50%", "0%", "50%", "100%"],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* Blue blob */}
        <motion.div
          className="absolute w-40 h-40 bg-blue-500/10 rounded-full filter blur-xl"
          animate={{
            x: ["25%", "75%", "50%", "25%"],
            y: ["25%", "75%", "25%", "75%"],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <motion.h2
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className={`text-4xl font-bold mb-8 mt-10 text-orange-300 z-10 ${tektur.className}`}
      >
        Manage Activity Logs
      </motion.h2>

      <motion.div
        className="flex gap-10 z-10"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <p className="text-white/80 text-lg">
          Total logs: <span className="font-semibold">{totalLogs}</span>
        </p>
        <p className="text-white/80 text-lg">
          Login logs: <span className="font-semibold">{loginLogs}</span>
        </p>
      </motion.div>

      <motion.div
        className="flex flex-col items-center mt-24 justify-center gap-6 max-w-sm z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <motion.select
          value={type}
          onChange={(e) => setType(e.target.value as "all" | "login")}
          className="px-4 py-3 rounded bg-white/10 appearance-none w-[20rem] text-white placeholder:text-white/50 focus:outline-none"
          whileFocus={{ scale: 1.02 }}
        >
          <option value="all" className="text-white bg-neutral-700">
            All Logs
          </option>
          <option value="login" className="text-white bg-neutral-700">
            Only Login Logs
          </option>
        </motion.select>

        <motion.input
          type="number"
          placeholder="Number of logs to delete"
          min={1}
          value={deleteCount}
          onChange={(e) => setDeleteCount(Number(e.target.value))}
          className="px-4 py-3 rounded bg-white/10 text-white w-[20rem] placeholder:text-white/50 focus:outline-none"
          whileFocus={{ scale: 1.02 }}
        />

        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={handleDeleteLogs}
          disabled={loading}
          className="bg-orange-600 hover:bg-orange-700 w-[20rem] cursor-pointer transition rounded px-4 py-2 text-white font-semibold"
        >
          {loading
            ? "Deleting…"
            : `Delete ${type === "login" ? "Login" : "All"} Logs`}
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
