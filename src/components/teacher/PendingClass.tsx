"use client";
import { useEffect, useState } from "react";

type PendingClass = {
  id: string;
  subject: { name: string };
  semester: { name: string };
  startTime: string;
  endTime: string;
};

export default function PendingClasses() {
  const [classes, setClasses] = useState<PendingClass[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const teacherId = localStorage.getItem("teacherId");
    if (!teacherId) {
      console.error("No teacher ID found in local storage.");
      return;
    }
    const fetchPendingClasses = async () => {
      try {
        const res = await fetch(
          `/api/timetable/pending?teacherId=${teacherId}`
        );
        const data = await res.json();
        if (data.success) {
          setClasses(data.sessions || []);
        }
      } catch (err) {
        console.error("Error fetching pending classes:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPendingClasses();
  }, []);

  if (loading) {
    return <p className="text-gray-500">Loading pending classes...</p>;
  }

  if (classes.length === 0) {
    return <p className="text-gray-500">No pending classes today 🎉</p>;
  }

  return (
    <div className="p-4 bg-white rounded-2xl shadow">
      <h2 className="text-lg font-semibold mb-3">📌 Pending Classes</h2>
      <ul className="space-y-3">
        {classes.map((cls) => (
          <li
            key={cls.id}
            className="p-3 border rounded-xl shadow-sm flex flex-col"
          >
            <span className="font-medium">{cls.subject.name}</span>
            <span className="text-sm text-gray-600">{cls.semester.name}</span>
            <span className="text-sm text-blue-600">
              {cls.startTime} - {cls.endTime}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
