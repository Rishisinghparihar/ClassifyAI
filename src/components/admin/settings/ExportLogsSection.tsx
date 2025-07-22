"use client";

import { useState } from "react";
import { Tektur } from "next/font/google";
import { showErrorMessage, showSuccessMessage } from "@/lib/helper";
import { motion } from "framer-motion";

const tektur = Tektur({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function ExportLogsSection() {
  const [type, setType] = useState<"all" | "login">("all");
  const [loading, setLoading] = useState(false);

  const handleExport = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/admin/settings/logs/export?type=${type}`);
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to export logs.");
      }

      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = `${type}-logs.csv`;
      document.body.appendChild(link);
      link.click();
      link.remove();

      showSuccessMessage(
        `${type === "login" ? "Login" : "All"} logs exported.`
      );
    } catch (err: any) {
      showErrorMessage(err.message || "Something went wrong.");
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
        relative z-0 
        bg-gradient-to-br from-white/10 to-black/20 backdrop-blur-md 
        h-[75vh] flex flex-col items-center p-6 rounded-xl shadow-xl border border-white/10 w-full
      "
    >
      {/* BLOB CONTAINER */}
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
        className={`text-4xl font-bold mb-10 mt-10 text-orange-300 z-10 ${tektur.className}`}
      >
        Export Activity Logs
      </motion.h2>

      <motion.div
        className="flex flex-col gap-6 max-w-sm w-full mt-16 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.select
          value={type}
          onChange={(e) => setType(e.target.value as "all" | "login")}
          className="px-4 py-3 rounded bg-white/10 appearance-none text-white placeholder:text-white/50 focus:outline-none"
          whileFocus={{ scale: 1.02 }}
        >
          <option value="all" className="text-white bg-neutral-700">
            All Logs
          </option>
          <option value="login" className="text-white bg-neutral-700">
            Only Login Logs
          </option>
        </motion.select>

        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={handleExport}
          disabled={loading}
          className="bg-orange-600 hover:bg-orange-700 transition rounded px-4 py-2 text-white font-semibold"
        >
          {loading
            ? "Exporting…"
            : `Export ${type === "login" ? "Login" : "All"} Logs`}
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
