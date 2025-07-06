"use client";
import SideNav from "@/components/admin/SideNav";
import React, { useEffect, useState } from "react";

export default function AdminDashboard() {
  const [summary, setSummary] = useState<any>(null);
  useEffect(() => {
    const fetchStudents = async () => {
      const res = await fetch("/api/admin/summary");
      const data = await res.json();
      setSummary(data);
    };
    fetchStudents();
  }, []);
  if (!summary) {
    return (
      <div className="p-6">
        <div className="text-2xl font-bold mb-4">Admin Dashboard</div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white shadow p-4 rounded">
            <h2 className="text-xl font-semibold mb-2">Total Student</h2>
            <p>Loading...</p>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="h-screen w-screen">
      <SideNav/>
      {/* <div className="text-2xl font-bold mb-4">Admin Dashboard</div>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white shadow p-4 rounded">
          <h2 className="text-xl font-semibold mb-2">Total Student</h2>
          <p>{summary.totalStudents}</p>
        </div>
        <div className="bg-white shadow p-4 rounded">
          <h2 className="text-xl font-semibold mb-2">Total Teacher</h2>
          <p>{summary.totalTeachers}</p>
        </div>
        <div className="bg-white shadow p-4 rounded">
          <h2 className="text-xl font-semibold mb-2">Today's  Attendance</h2>
          <p>{summary.todaysAttendance}</p>
          </div>
        <div className="bg-white shadow p-4 rounded">
          <h2 className="text-xl font-semibold mb-2">Token Issued Today</h2>
          <p>{summary.tokensToday}</p>
        </div>
      </div> */}
    </div>
  );
}
