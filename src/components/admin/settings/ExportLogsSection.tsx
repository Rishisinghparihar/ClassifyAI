"use client";

import { useState } from "react";
import { Tektur } from "next/font/google";
import { showErrorMessage, showSuccessMessage } from "@/lib/helper";

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

      showSuccessMessage(`${type === "login" ? "Login" : "All"} logs exported.`);
    } catch (err: any) {
      showErrorMessage(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white/5 h-[75vh] relative flex flex-col items-center p-6 rounded-xl shadow w-full overflow-hidden">
      <h2
        className={`text-4xl font-bold mb-10 mt-10 text-orange-300 ${tektur.className}`}
      >
        Export Activity Logs
      </h2>

      <div className="flex flex-col gap-6 max-w-sm w-full mt-16">
        <select
          value={type}
          onChange={(e) => setType(e.target.value as "all" | "login")}
          className="px-4 py-3 rounded bg-white/10 appearance-none text-white placeholder:text-white/50 focus:outline-none"
        >
          <option value="all" className="text-white bg-neutral-700">
            All Logs
          </option>
          <option value="login" className="text-white bg-neutral-700">
            Only Login Logs
          </option>
        </select>

        <button
          onClick={handleExport}
          disabled={loading}
          className="bg-orange-600 hover:bg-orange-700 transition rounded px-4 py-2 text-white font-semibold"
        >
          {loading
            ? "Exporting…"
            : `Export ${type === "login" ? "Login" : "All"} Logs`}
        </button>
      </div>

      {/* Decorative dots */}
      <div className="bg-orange-800/35 z-0 rounded-full absolute -right-[3rem] -top-[3rem] h-60 w-60"></div>
      <div className="bg-orange-800/35 z-0 rounded-full absolute -left-[3rem] -bottom-[3rem] h-60 w-60"></div>
    </div>
  );
}
