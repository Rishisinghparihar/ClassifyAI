"use client";
import React, { useEffect } from "react";
import { TeacherDetails, TeacherSubject } from "@/lib/types";
import { showErrorMessage } from "@/lib/helper";
import TLogo from "@/components/teacher/TLogo";
import AppCalendar from "@/components/student/Calender";
import PendingClasses from "@/components/teacher/PendingClass";

// ✅ Adjusted type to match API
type ClassSession = {
  id: string;
  subject: {
    id: string;
    name: string;
    code?: string;
  };
  section: string;
  semester: number;
  weekday: string;
  startTime: string;
  endTime: string;
  room?: string | null;
  teacher: {
    id: string;
    userId: string;
  };
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

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4 md:p-6">
      {/* Header Section */}
      <header className="mb-8">
        <div className="mb-4">
          <TLogo />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-200">
          Hi, <span className="text-cyan-600">{details?.name || "Teacher"}</span>
        </h1>
        <p className="text-gray-300 mt-2">Welcome to your dashboard</p>
      </header>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Today's Classes Card */}
        <div className=" rounded-xl shadow-md border border-amber-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-800 flex items-center">
              <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
              Today's Classes
            </h2>
            <span className="text-sm text-gray-500 bg-amber-50 px-2 py-1 rounded-full">
              {classes.length} classes
            </span>
          </div>
          
          <div className="max-h-64 overflow-y-auto space-y-3">
            {classes.length > 0 ? (
              classes.map((cls) => (
                <div 
                  key={cls.id} 
                  className="bg-gray-50 rounded-lg p-3 border-l-4 border-amber-400 hover:bg-gray-100 transition-colors"
                >
                  <div className="font-semibold text-gray-800 text-sm">
                    {cls.subject?.name}
                    {cls.subject?.code && (
                      <span className="text-gray-500 ml-1">({cls.subject.code})</span>
                    )}
                  </div>
                  <div className="text-xs text-gray-600 mt-1">
                    Section {cls.section} • Semester {cls.semester}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    {cls.weekday} • {new Date(cls.startTime).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})} - {new Date(cls.endTime).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                    {cls.room && <span className="ml-2">• Room {cls.room}</span>}
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8">
                <div className="text-gray-400 text-4xl mb-2">📅</div>
                <p className="text-gray-500 text-sm">No classes scheduled for today</p>
              </div>
            )}
          </div>
        </div>

        {/* Pending Classes Card */}
        <div className=" rounded-xl shadow-md border border-amber-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-800 flex items-center">
              <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
              Pending Classes
            </h2>
          </div>
          <div className="h-64 flex items-center justify-center">
            <PendingClasses />
          </div>
        </div>

        {/* Calendar Card */}
        <div className=" rounded-xl shadow-md border border-amber-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-800 flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
              Calendar
            </h2>
          </div>
          <div className="h-64">
            <AppCalendar />
          </div>
        </div>
      </div>

      {/* Subjects Section */}
      <div className=" rounded-xl shadow-md border border-amber-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 flex items-center">
            <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
            Your Subjects
          </h2>
          <span className="text-sm text-gray-500 bg-green-50 px-3 py-1 rounded-full">
            {subjects.length} subjects
          </span>
        </div>
        
        {subjects.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {subjects.map((sub, idx) => (
              <div 
                key={idx} 
                className="bg-gradient-to-br from-green-50 to-blue-50 rounded-lg p-4 border border-green-200 hover:shadow-md transition-all duration-200 hover:scale-105"
              >
                <div className="font-semibold text-gray-800 text-sm mb-1">
                  {sub.name}
                </div>
                {sub.code && (
                  <div className="text-xs text-gray-500  px-2 py-1 rounded-full inline-block">
                    {sub.code}
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 text-5xl mb-4">📚</div>
            <p className="text-gray-500 text-lg mb-2">No subjects assigned yet</p>
            <p className="text-gray-400 text-sm">Contact administration to get your subjects assigned</p>
          </div>
        )}
      </div>
    </div>
  );
}