"use client";

import { useState } from "react";
import { Tektur } from "next/font/google";
import { showErrorMessage, showSuccessMessage } from "@/lib/helper";
import AnimatedBlobs from "@/components/ui/AnimatedBlobs";
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
      className="bg-white/5 h-[75vh] relative flex flex-col items-center p-6 rounded-xl shadow w-full overflow-hidden"
    >
      <motion.h2
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className={`text-4xl font-bold mb-10 mt-10 text-orange-300 ${tektur.className}`}
      >
        Export Activity Logs
      </motion.h2>

      <motion.div
        className="flex flex-col gap-6 max-w-sm w-full mt-16"
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
