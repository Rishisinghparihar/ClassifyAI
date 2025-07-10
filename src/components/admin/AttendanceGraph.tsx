"use client";

import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";

const dummyData = [
  { date: "Mon", attendance: 75 },
  { date: "Tue", attendance: 80 },
  { date: "Wed", attendance: 78 },
  { date: "Thu", attendance: 82 },
  { date: "Fri", attendance: 79 },
  { date: "Sat", attendance: 85 },
];

const AttendanceGraph = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="h-[300px]"
    >
      <h3 className="text-lg font-semibold text-cyan-300 mb-4">Weekly Attendance</h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={dummyData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#444" />
          <XAxis dataKey="date" stroke="#ccc" />
          <YAxis stroke="#ccc" />
          <Tooltip />
          <Line type="monotone" dataKey="attendance" stroke="#06b6d4" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

export default AttendanceGraph;
