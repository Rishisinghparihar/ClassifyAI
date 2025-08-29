"use client";
import React, { useEffect } from "react";
import { TeacherDetails, TeacherSubject } from "@/lib/types";
import { showErrorMessage } from "@/lib/helper";
import TLogo from "@/components/teacher/TLogo";
import AppCalendar from "@/components/student/Calender";
import PendingClasses from "@/components/teacher/PendingClass";

type ClassSession = {
  id: string;
  subject: string;
  section: string;
  semester: number;
  weekday: string;
  startTime: string;
  endTime: string;
  room?: string;
};

export default function TeacherDashboard() {
  const [subjects, setSubjects] = React.useState<TeacherSubject[]>([]);
  const [classes, setClasses] = React.useState<ClassSession[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [details, setDetails] = React.useState<TeacherDetails | null>(null);

  useEffect(() => {
    const teacherId = localStorage.getItem("teacherId");
    if (!teacherId) {
      console.error("No teacher ID found in local storage.");
      return;
    }
    setLoading(true);
    fetchDetails(teacherId);
    fetchSubjects(teacherId);
    fetchTimetable(teacherId);
  }, []);

  const fetchDetails = async (teacherId: string) => {
    try {
      const res = await fetch(`/api/teacher/id/details?teacherId=${teacherId}`);
      const data = await res.json();
      if (res.ok) {
        setDetails(data);
        console.log("Teacher Details:", data);
      } else {
        showErrorMessage("Failed to fetch details");
        console.error("Error fetching details:", data);
      }
    } catch (error) {
      showErrorMessage("Error fetching details");
      console.error("Fetch details error:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchSubjects = async (teacherId: string) => {
    try {
      const res = await fetch(`/api/teacher/subjects?teacherId=${teacherId}`);
      const data = await res.json();
      if (res.ok) {
        setSubjects(data);
        console.log("Subjects:", data);
      } else {
        showErrorMessage("Failed to fetch subjects");
        console.error("Error fetching subjects:", data);
      }
    } catch (error) {
      showErrorMessage("Error fetching subjects");
      console.error("Fetch subjects error:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchTimetable = async (teacherId: string) => {
    try {
      const res = await fetch(`/api/timetable?teacherId=${teacherId}`);
      const data = await res.json();
      if (res.ok) {
        setClasses(data.sessions || []);
        console.log("Timetable:", data.sessions);
      } else {
        showErrorMessage("Failed to fetch timetable");
        console.error("Error fetching timetable:", data);
      }
    } catch (error) {
      showErrorMessage("Error fetching timetable");
      console.error("Fetch timetable error:", error);
    } finally {
      setLoading(false);
    }
  };

  // subjects ke change hone pe log karne ke liye
  useEffect(() => {
    console.log("Subjects updated in state:", subjects);
  }, [subjects]);

  return (
    <div className="flex flex-col items-start justify-start">
      <h1>
        <TLogo />
      </h1>
      <h1 className="text-2xl mx-10 font-bold my-5">
        Hi, <span className="uppercase text-cyan-200">{details?.name}</span>
      </h1>
      <div className="flex gap-20">
        <div className="border-amber-800 flex-col rounded-4xl border-2 flex items-center justify-start p-5 h-80 w-80 overflow-y-auto">
          <h2 className="text-xl font-semibold mb-3">Today's Classes</h2>
          {classes.length > 0 ? (
            <ul className="list-disc pl-5 text-sm">
              {classes.map((cls) => (
                <li key={cls.id}>
                  <span className="font-semibold">{cls.subject}</span> - {cls.section} ({cls.semester} sem) <br />
                  {cls.weekday}, {new Date(cls.startTime).toLocaleTimeString()} -{" "}
                  {new Date(cls.endTime).toLocaleTimeString()}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No classes scheduled</p>
          )}
        </div>

        <div className="border-amber-800 rounded-4xl border-2 flex items-center justify-center h-80 w-80">
          <PendingClasses/>
        </div>

        <div className="border-amber-800 rounded-4xl border-2 flex items-center justify-center w-80">
          <AppCalendar />
        </div>
      </div>

      <div className="mt-10 ml-10">
        <h2 className="text-xl font-semibold mb-3">Your Subjects</h2>
        {subjects.length > 0 ? (
          <ul className="list-disc pl-5">
            {subjects.map((sub, idx) => (
              <li key={idx}>
                {sub.name} ({sub.code})
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No subjects found</p>
        )}
      </div>
    </div>
  );
}
