"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Attendance, SDetails } from "@/lib/types";
export default function StudentDashboard() {
  const [todayAttendance, setTodayAttendance] = useState<Attendance[]>([]);
  const [studentDetails, setStudentDetails] = useState<SDetails | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const studentId = localStorage.getItem("studentId");
    if (!studentId) {
      console.error("No student ID found in local storage.");
      return;
    }
    const fetchStudentDetails = async () => {
      try {
        const res = await fetch(`/api/student/details?studentId=${studentId}`);
        if (!res.ok) {
          throw new Error("Failed to fetch student details");
        }
        const data = await res.json();
        console.log({ data });
        setStudentDetails(data);
        console.log({studentDetails})
      } catch (error) {
        console.log("Error fetching student details:", error);
      }
    }
    const fetchTodayAttendance = async () => {
      try {
        const res = await fetch(`/api/attendance/today?studentId=${studentId}`);
        const data = await res.json();
        setTodayAttendance(data.attendanceCount || []);
        console.log({ data });
      } catch (error) {
        console.log("Error fetching today's attendance:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchStudentDetails();
    fetchTodayAttendance();
  }, []);
  return (
    <div className="flex flex-col items-center justify-center py-[5rem] px-4 text-center">
      <h1 className="text-2xl">Welcome back {studentDetails?.name} </h1>
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
