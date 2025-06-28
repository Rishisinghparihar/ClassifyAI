"use client";
import { BunkStats } from "@/lib/types";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [stats, setStats] = useState<BunkStats[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  useEffect(() => {
    const studentId = localStorage.getItem("studentId");
    if (!studentId) {
      setError("Student ID not found.");
      setLoading(false);
      return;
    }

    const fetchStats = async () => {
      try {
        const res = await fetch(
          `/api/attendance/bunk-manager?studentId=${studentId}`
        );
        const data = await res.json();

        if (data.status) {
          setStats(data.data);
        } else {
          setError("Failed to fetch bunk manager stats.");
        }
      } catch (err) {
        console.error("Error fetching stats:", err);
        setError("Something went wrong.");
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-4xl h-16 sm:text-5xl animated-gradient font-extrabold text-center mb-14 bg-gradient-to-r from-cyan-100 to-cyan-600 bg-clip-text text-transparent">
        Bunk Manager
      </h1>

      {loading && (
        <p className="text-cyan-100 animate-pulse text-center">
          Loading statistics...
        </p>
      )}

      {error && <p className="text-red-400 text-center font-medium">{error}</p>}

      <ul className="grid sm:grid-cols-2 gap-6">
        {stats.map((item, idx) => (
          <li
            key={idx}
            className="bg-white/10 border border-white/10 rounded-2xl p-6 backdrop-blur-lg shadow-lg hover:scale-[1.015] transition-all duration-300"
          >
            <div className="flex flex-col justify-between h-full">
              <div className="mb-4">
                <h2 className="text-xl font-bold text-cyan-200">
                  {item.subject}
                </h2>
                <p className="text-sm text-gray-300 mt-1">
                  Total: <span className="font-medium">{item.total}</span> |
                  Present: <span className="font-medium">{item.present}</span>
                </p>
              </div>
              <div className="flex justify-between items-end mt-auto">
                <div>
                  <p
                    className={`text-lg font-semibold ${
                      item.percentage > 75 ? "text-green-400" : "text-red-400"
                    }`}
                  >
                    {item.percentage.toFixed(2)}%
                  </p>
                  <p className="text-xs text-gray-400">Attendance Percentage</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-200">
                    Safe Bunks:{" "}
                    <span className="text-yellow-400 font-semibold">
                      {item.safeBunks}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </li>
        ))}
        {/* Back Button */}
        <div className="absolute top-4 left-4 z-10">
          <button
            onClick={() => router.back()}
            className="flex items-center justify-center gap-2 rounded-full  text-white hover:text-cyan-300 transition-colors"
          >
            <ChevronLeft size={40} />
          </button>
        </div>
      </ul>

      {!loading && stats.length === 0 && (
        <p className="text-gray-400 text-center mt-6">No data available.</p>
      )}
    </div>
  );
};

export default Page;
