"use client";

import { motion } from "framer-motion";
import { Tektur } from "next/font/google";
import { useEffect, useState } from "react";
const tektur = Tektur({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

interface Student {
  name: string;
  percentage: number;
}

interface Teacher {
  name: string;
  count: number;
}

interface BottomStripData {
  success: boolean;
  topStudents: Student[];
  atRiskStudents: Student[];
  teacherActivity: Teacher[];
}

const BottomStrip = () => {
  const [data, setData] = useState<BottomStripData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api/admin/bottom-strip`);
      const json = await res.json();
      setData(json);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <p className="text-center text-cyan-300">Loading dashboard data...</p>
    );
  }

  if (!data?.success) {
    return (
      <p className="text-center text-red-400">Failed to load dashboard data.</p>
    );
  }

  return (
    <div className="grid grid-cols-3 gap-3 mt-4">
      {/* Top Students */}
      <motion.div
        className="bg-green-900/20 p-3 rounded-2xl border border-green-600"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <h2
          className={`text-base font-bold text-green-300 ${tektur.className}`}
        >
          🌟 Top Attending Students
        </h2>

        {data.topStudents.length === 0 ? (
          <p className="text-center text-green-200">No top students found </p>
        ) : (
          data.topStudents.map((student) => (
            <div
              key={student.name}
              className="flex justify-between text-green-100 py-1"
            >
              <span>{student.name}</span>
              <span>{student.percentage}%</span>
            </div>
          ))
        )}
      </motion.div>

      {/* At-Risk Students */}
      <motion.div
        className="bg-red-900/20 p-3 rounded-2xl border border-red-600"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h2
          className={`text-base font-bold text-red-300 mb-3 ${tektur.className}`}
        >
          🚨 At-Risk Students
        </h2>

        {data.atRiskStudents.length === 0 ? (
          <p className="text-center text-red-200">No student at risk</p>
        ) : (
          data.atRiskStudents.map((student) => (
            <div
              key={student.name}
              className="flex justify-between text-red-100 py-1"
            >
              <span>{student.name}</span>
              <span>{student.percentage}%</span>
            </div>
          ))
        )}
      </motion.div>

      {/* Teacher Activity */}
      <motion.div
        className="bg-cyan-900/20 p-3 rounded-2xl border border-cyan-600"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h2
          className={`text-base font-bold text-cyan-300 mb-3 ${tektur.className}`}
        >
          👩‍🏫 Teacher Activity Today
        </h2>

        {data.teacherActivity.length === 0 ? (
          <p className="text-center text-cyan-200">No teacher activity found</p>
        ) : (
          data.teacherActivity.map((teacher) => (
            <div
              key={teacher.name}
              className="flex justify-between text-cyan-100 "
            >
              <span>{teacher.name}</span>
              <span>{teacher.count} classes</span>
            </div>
          ))
        )}
      </motion.div>
    </div>
  );
};

export default BottomStrip;
