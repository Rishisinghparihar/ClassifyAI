import React, { useEffect, useState } from "react";
import { RecentAttendance } from "@/lib/types";
import { motion } from "framer-motion";

const RecentAttendancePage = ({ expanded }: { expanded: boolean }) => {
  const [recent, setRecent] = useState<RecentAttendance[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchRecent = async () => {
      const res = await fetch("/api/admin/recent-attendance");
      const data = await res.json();
      if (data.success) {
        setRecent(data.recent);
      }
      setLoading(false);
    };
    fetchRecent();
  }, []);

  if (loading) {
    return (
      <p className="text-gray-400 text-sm animate-pulse">
        Loading recent activity…
      </p>
    );
  }

  return (
    <div className="flex outline-none items-center justify-center w-full">
      {recent.length === 0 && (
        <p className="text-gray-400 text-xs">No attendance marked today.</p>
      )}

      <motion.div
        layout
        transition={{ duration: 0.5 }}
        className="overflow-y-auto outline-none w-full scrollbar-hide"
        style={{
          maxHeight: expanded ? "30rem" : "12rem",
        }}
      >
        <ul className="space-y-2 outline-none">
          {recent.map((rec) => (
            <li
              key={rec.id}
              className="flex justify-between outline-none items-center gap-30 px-4 py-3 hover:cursor-pointer hover:shadow transition-all duration-700 hover:shadow-amber-600 rounded bg-white/5 text-gray-200"
            >
              <article className="flex flex-col max-w-[29rem] w-[7rem]">
                <span className="uppercase text-orange-100">
                  {rec.student.name}
                </span>
                <span className="text-xs">{rec.subject}</span>
              </article>
              <span className="uppercase">
                {rec.status.toUpperCase() === "PRESENT" ? (
                  <span className="text-orange-600">present</span>
                ) : (
                  <span className="text-orange-700">absent</span>
                )}
              </span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default RecentAttendancePage;
