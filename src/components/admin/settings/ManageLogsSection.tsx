"use client";

import AnimatedBlobs from "@/components/ui/AnimatedBlobs";
import { showErrorMessage, showSuccessMessage } from "@/lib/helper";
import { Tektur } from "next/font/google";
import { useEffect, useState } from "react";
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
      className="bg-white/5 h-[75vh] z-0 relative flex flex-col items-center p-6 rounded-xl shadow w-full overflow-hidden"
    >
      <motion.h2
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className={`text-4xl font-bold mb-10 mt-10 text-orange-300 ${tektur.className}`}
      >
        Manage Activity Logs
      </motion.h2>

      <motion.div
        className="flex gap-10"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <p className="text-white/80 text-lg mb-2">
          Total logs: <span className="font-semibold">{totalLogs}</span>
        </p>
        <p className="text-white/80 mb-4 text-lg">
          Login logs: <span className="font-semibold">{loginLogs}</span>
        </p>
      </motion.div>

      <motion.div
        className="flex flex-col items-center mt-36 justify-center gap-10 max-w-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <motion.select
          value={type}
          onChange={(e) => setType(e.target.value as "all" | "login")}
          className="px-4 py-3 rounded bg-white/10 appearance-none w-[30rem] text-white placeholder:text-white/50 focus:outline-none"
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
          className="px-4 py-3 rounded bg-white/10 text-white w-[30rem] placeholder:text-white/50 focus:outline-none"
          whileFocus={{ scale: 1.02 }}
        />

        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={handleDeleteLogs}
          disabled={loading}
          className="bg-orange-600 outline-none hover:bg-orange-700 w-[30rem] cursor-pointer transition rounded px-4 py-2 text-white font-semibold"
        >
          {loading
            ? "Deleting…"
            : `Delete ${type === "login" ? "Login" : "All"} Logs`}
        </motion.button>
      </motion.div>

      <AnimatedBlobs />
    </motion.div>
  );
}
