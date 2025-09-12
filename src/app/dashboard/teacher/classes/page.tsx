"use client";
import React, { useEffect, useState } from "react";
import { showErrorMessage } from "@/lib/helper";
import { useRouter } from "next/navigation";

type ClassSession = {
  id: string;
  subject: {
    id: string;
    name: string;
    code?: string;
  };
  section: {
    id: string;
    name: string;
  };
  semester: {
    id: string;
    name: string;
  };
  weekday: string;
  startTime: string;
  endTime: string;
  room?: string | null;
};

export default function ClassesPage() {
  const [classes, setClasses] = useState<ClassSession[]>([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const teacherId = localStorage.getItem("teacherId");
    if (!teacherId) {
      console.error("No teacher ID found in localStorage");
      return;
    }
    fetchClasses(teacherId);
  }, []);

  const fetchClasses = async (teacherId: string) => {
    try {
      setLoading(true);
      const res = await fetch(`/api/teacher/classes?teacherId=${teacherId}`);
      const data = await res.json();
      if (res.ok) {
        setClasses(data || []);
      } else {
        showErrorMessage("Failed to fetch classes");
      }
    } catch (error) {
      console.error("Error fetching classes:", error);
      showErrorMessage("Error fetching classes");
    } finally {
      setLoading(false);
    }
  };

  const handleTakeAttendance = (classId: string) => {
    // ✅ redirect to attendance page with classId
    router.push(`/dashboard/teacher/attendance?classId=${classId}`);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg text-gray-500">Loading classes...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-200">Your Classes</h1>

      {classes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {classes.map((cls) => (
            <div
              key={cls.id}
              className="bg-gray-50 p-4 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition"
            >
              <h2 className="font-semibold text-gray-800">
                {cls.subject?.name}{" "}
                {cls.subject?.code && (
                  <span className="text-gray-500 text-sm">
                    ({cls.subject.code})
                  </span>
                )}
              </h2>
              <p className="text-sm text-gray-600 mt-1">
                Section {cls.section?.name} • Semester {cls.semester?.name}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                {cls.weekday} •{" "}
                {new Date(cls.startTime).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}{" "}
                -{" "}
                {new Date(cls.endTime).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
                {cls.room && <span> • Room {cls.room}</span>}
              </p>

              {/* ✅ Attendance Button */}
              <button
                onClick={() => handleTakeAttendance(cls.id)}
                className="mt-4 w-full bg-amber-500 hover:bg-amber-600 text-white"
              >
                Take Attendance
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center mt-20">
          <div className="text-5xl mb-2">📚</div>
          <p className="text-gray-500">No classes assigned yet</p>
        </div>
      )}
    </div>
  );
}
