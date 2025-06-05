"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Attendance } from "@/lib/types";
export default function StudentDashboard() {
  const [todayAttendance, setTodayAttendance] = useState<Attendance[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const studentId = localStorage.getItem("studentId");
    if (!studentId) {
      console.error("No student ID found in local storage.");
      return;
    }
    const fetchTodayAttendance = async () => {
      try {
        const res = await fetch(`/api/attendance/today?studentId=${studentId}`);
        const data = await res.json();
        setTodayAttendance(data.attendanceCount);
      } catch (error) {
        console.error("Error fetching today's attendance:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchTodayAttendance();
  }, []);
  return (
    <div>
      Welcome to Student Dashboard
      <Link href={"/attendance/scan"}>To Scan page</Link>
      <div className="">
        <h2>Today's Attendance</h2>
        {loading ? (
          <p>Loading...</p>
        ) : todayAttendance.length > 0 ? (
          <ul>
            {todayAttendance.map((att) => (
              <li>
                <div>
                  <p>
                    <strong>Subject: </strong>
                    {att.subject}
                  </p>
                  <p>
                    <strong>Status: </strong>
                    {att.status}
                  </p>
                  <p>
                    <strong>Marked By: </strong>
                    {att.markedBy}
                  </p>
                </div>
                <p>{new Date(att.date).toLocaleDateString()}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No attendance marked today.</p>
        )}
      </div>
    </div>
  );
}
