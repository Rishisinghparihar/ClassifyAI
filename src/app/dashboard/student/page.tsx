"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Attendance } from "@/lib/types";
import Greeting from "@/components/student/Greeting";
import Logo from "@/components/apps/Logo";
import PremiumCard from "@/components/student/PremiumCard";
import HorizontalBar from "@/components/student/HorizontalBar";
import AppCalendar from "@/components/student/Calender";
import BarGraph from "@/components/student/Graph";
import NumberCard from "@/components/student/NumberCard";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

export default function StudentDashboard() {
  const [todayAttendance, setTodayAttendance] = useState<Attendance[]>([]);
  const [stats, setStats] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const isPremium = false; // This can be replaced with actual premium check logic
  const router = useRouter();
 const logout = () => {
  localStorage.removeItem("studentId");
  router.push("/auth/login");
};

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

    const fetchStats = async () => {
      try {
        const res = await fetch(
          `/api/attendance/statistics?studentId=${studentId}`
        );
        const data = await res.json();
        setStats(data);
        console.log({ stats: data });
      } catch (error) {
        console.error("Error fetching attendance statistics:", error);
      }
    };
    fetchStats();
    fetchTodayAttendance();
  }, []);
  // const percentage: string = s;

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
        <div className="flex flex-col space-y-6">
          <PremiumCard />
          <HorizontalBar
            content="Check your past attendance records"
            linkRef="/attendance/history"
            title="Attendance History"
          />
          <HorizontalBar
            content="Track upcoming exams and assignment deadlines"
            linkRef="/exams"
            title="Upcoming Exams"
          />
          <HorizontalBar
            content="See how many classes you can skip safely"
            linkRef="/attendance/stats"
            title="Bunk Manager"
          />
          <HorizontalBar
            content="Get a smart study plan based on your upcoming exams"
            linkRef="/study-plan"
            title="Study Plan"
          />
        </div>
        <div className="flex-1 flex items-center justify-center px-4 flex-col space-y-6">
          <div className="w-3xl max-w-6xl mx-auto">
            <BarGraph />
          </div>
          <div className="flex items-start justify-evenly space-x-4 w-full max-w-6xl mx-auto">
            <AppCalendar />
            <div className="">
              <NumberCard
                title="Lectures Attended"
                value={
                  isNaN(Number.parseInt(stats?.presents))
                    ? "..."
                    : Number.parseInt(stats?.presents).toString()
                }
              />
              <NumberCard
                title="Attendace %"
                value={
                  isNaN(Number.parseInt(stats?.presentPercentage))
                    ? "..."
                    : Number.parseInt(stats?.presentPercentage).toString() + "%"
                }
              />
            </div>
          </div>
        </div>
        <div className="absolute top-[1.5rem] right-[8rem] text-xs text-cyan-400 group rounded-4xl" onClick={() => logout()}>
          <div className="px-2 py-1 flex items-center space-x-2 transition-all duration-300 ease-in-out group-hover:px-4 cursor-pointer">
            <LogOut className="transition-transform duration-300 group-hover:scale-110" />
            <span className="overflow-hidden max-w-0 group-hover:max-w-[100px] transition-all duration-300 text-sm text-cyan-200">
              Logout
            </span>
          </div>
        </div>

        <div className="ml-4 mt-4">
          {isPremium ? (
            <span className="absolute top-7 right-3 text-xs px-4 py-1 rounded-full text-green-300 bg-gradient-to-br from-green-800/40 to-cyan-700/40 shadow-md">
              🌟 Premium User
            </span>
          ) : (
            <span className="absolute top-7 right-3 text-xs px-4 py-1 rounded-full text-red-300 bg-gradient-to-br from-red-800/40 to-cyan-700/40 shadow-md">
              Normal User
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
