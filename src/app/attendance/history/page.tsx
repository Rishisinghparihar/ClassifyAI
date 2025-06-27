"use client";
import { AttendanceRecord } from "@/lib/types";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string| null>(null);
  const [history, setHistory] = useState<AttendanceRecord[]>([]);
  const router = useRouter();
  useEffect(() => {
    const studentId = localStorage.getItem("studentId");
    if (!studentId) {
      setError("Student ID not found in localStorage.");
      setLoading(false);
      return;
    }

    const fetchHistory = async () => {
      try {
        const res = await fetch(
          `/api/attendance/history?studentId=${studentId}`
        );
        const data = await res.json();
        if (data.success) {
          setHistory(data.history);
          console.log("Attendance history fetched successfully:", data.history);
        } else {
          setError(data.error || "Failed to fetch data.");
        }
      } catch (err) {
        setError("Error fetching attendance history.");
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, []);

  return (
    <div className="max-w-3xl text-center mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold text-cyan-300 mb-6">
        Attendance History
      </h1>
      {loading && (
        <p className="animate-pulse text-gray-200">
          Loading Attendace Records...
        </p>
      )}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && history.length === 0 && (
        <p className="text-gray-500">No Attendance Records Found</p>
      )}
      <ul className="space-y-4">
        {history.map((record) => (
          <li
            key={record.id}
            className={`p-4 rounded-xl border ${
              record.status.toUpperCase() === "PRESENT"
                ? "bg-green-500/10 border-green-300/30 text-green-200"
                : record.status.toUpperCase() === "ABSENT"
                ? "bg-red-500/10 border-red-300/30 text-red-200"
                : "bg-yellow-500/10 border-yellow-300/30 text-yellow-200"
            }`}
          >
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-lg font-semibold">{record.subject}</h2>
                <p className="text-xs opacity-80">
                  {new Date(record.date).toLocaleDateString("en-IN", {
                    weekday: "long",
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </p>
              </div>
              <span className="text-sm font-bold uppercase tracking-widest">
                {record.status}
              </span>
            </div>
          </li>
        ))}
      </ul>
      {/* Back Button */}
      <div className="absolute top-4 left-4 z-10">
        <button
          onClick={() => router.back()}
          className="flex items-center justify-center gap-2 rounded-full  text-white hover:text-cyan-300 transition-colors"
        >
          <ChevronLeft size={40}/>
        </button>
      </div>
    </div>
  );
};

export default Page;
