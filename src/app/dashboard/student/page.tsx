"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Attendance } from "@/lib/types";
import Greeting from "@/components/student/Greeting";
import Logo from "@/components/apps/Logo";
import PremiumCard from "@/components/student/PremiumCard";

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
        setTodayAttendance(data || []);
        console.log({ data });
      } catch (error) {
        console.log("Error fetching today's attendance:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTodayAttendance();
  }, []);

  return (
    <div className="p-6 sm:p-10 md:p-16 flex flex-col gap-6 md:flex-row w-full min-h-screen">
      <div className="w-[26rem] space-y-6">
        <Logo />
        <Greeting />

        <Link
          href="/attendance/scan"
          className="block text-center text-2xl bg-gray-200/15 border border-gray-300 hover:bg-gray-300/10 hover:text-gray-500 font-semibold px-6 py-3 rounded-xl transition duration-300 ease-in-out shadow-md"
        >
          Scan QR to Mark Attendance
        </Link>

        <div className="bg-gray-100/15 p-6 rounded-xl shadow-sm mt-4">
          <h2 className="text-xl font-semibold mb-4">📅 Today's Attendance</h2>
          {loading ? (
            <p>Loading...</p>
          ) : todayAttendance.length > 0 ? (
            <ul className="space-y-4">
              {todayAttendance.map((att, idx) => (
                <li
                  key={idx}
                  className="p-4 bg-gradient-to-br from-[#070a0f]/80 to-[#243B55]/80 rounded-xl"
                >
                  <p>
                    <strong>Subject:</strong> {att.subject}
                  </p>
                  <p>
                    <strong>Status:</strong> {att.status}
                  </p>
                  <p>
                    <strong>Marked By:</strong> {att.markedBy}
                  </p>
                  <p className="text-sm text-gray-100 mt-1">
                    {new Date(att.date).toLocaleDateString()}
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-200">No attendance marked today.</p>
          )}
        </div>
      </div>

      <div className="flex pl-[5rem]">
        <div className="">
             <PremiumCard />
        </div>
        <div>
          HELLO
        </div>
      </div>
    </div>
  );
}
