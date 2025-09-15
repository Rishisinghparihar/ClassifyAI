"use client";

import React, { useState, useEffect, Suspense } from "react";
import { showErrorMessage } from "@/lib/helper";

// --- Types (It's good practice to keep these in a separate types file) ---
type Subject = { id: string; name: string; code?: string };
type Semester = { id: string; name: string; };
type Student = { id: string; user: { id: string; name: string; } };
type TeacherDetails = { name: string; email: string; /* other fields */ };
type ClassSession = {
  id: string;
  subject: { id: string; name: string; code?: string; };
  section: string;
  semester: number;
  weekday: string;
  startTime: string;
  endTime: string;
  room?: string | null;
};
function GenerateTokenDialog({ isOpen, onClose }: { isOpen: boolean; onClose: () => void; }) {
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [semesters, setSemesters] = useState<Semester[]>([]);
  const [students, setStudents] = useState<Student[]>([]);
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedSemester, setSelectedSemester] = useState("");
  const [selectedStudents, setSelectedStudents] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isFetchingStudents, setIsFetchingStudents] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    
    // Reset state when opening
    setError("");
    setSuccess("");
    setSelectedStudents([]);

    async function fetchData() {
      try {
        const [subjectsRes, semestersRes] = await Promise.all([
          fetch('/api/teacher/subjects/all'),
          fetch('/api/teacher/semester/all')
        ]);
        if (!subjectsRes.ok || !semestersRes.ok) throw new Error("Failed to load initial data.");

        const subjectsData = await subjectsRes.json();
        const semestersData = await semestersRes.json();
        
        setSubjects(subjectsData);
        setSemesters(semestersData);
        if (subjectsData.length > 0) setSelectedSubject(subjectsData[0].id);
        if (semestersData.length > 0) setSelectedSemester(semestersData[0].id);
      } catch (err: any) {
        setError(err.message);
      }
    }
    fetchData();
  }, [isOpen]);

  useEffect(() => {
    if (!selectedSemester) return;
    
    async function fetchStudents() {
        setIsFetchingStudents(true);
        setStudents([]);
        setSelectedStudents([]);
        try {
            const res = await fetch(`/api/teacher/semester/students?semesterId=${selectedSemester}`);
            if (!res.ok) throw new Error("Failed to fetch students.");
            const data = await res.json();
            setStudents(data);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setIsFetchingStudents(false);
        }
    }
    fetchStudents();
  }, [selectedSemester]);

  const handleStudentSelect = (studentId: string) => {
    setSelectedStudents(prev => 
      prev.includes(studentId) 
        ? prev.filter(id => id !== studentId) 
        : [...prev, studentId]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setSuccess("");

    const teacherUserId = localStorage.getItem('teacherId');
    if (!teacherUserId) {
        setError("Could not find teacher ID. Please log in again.");
        setIsLoading(false);
        return;
    }

    try {
        const response = await fetch('/api/attendance/create-token', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                subjectId: selectedSubject,
                studentIds: selectedStudents,
                teacherUserId,
            })
        });
        const data = await response.json();
        if (!response.ok) throw new Error(data.message);
        setSuccess(data.message);
        setTimeout(() => {
            onClose(); // Close dialog on success
        }, 2500);
    } catch (err: any) {
        setError(err.message || "An unknown error occurred.");
    } finally {
        setIsLoading(false);
    }
  };
  
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 p-4">
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Generate & Send QR Codes</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
              <select id="subject" value={selectedSubject} onChange={e => setSelectedSubject(e.target.value)} className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500">
                {subjects.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
              </select>
            </div>
            <div>
              <label htmlFor="semester" className="block text-sm font-medium text-gray-700">Semester</label>
              <select id="semester" value={selectedSemester} onChange={e => setSelectedSemester(e.target.value)} className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500">
                {semesters.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
              </select>
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">Select Students ({selectedStudents.length} selected)</label>
            {isFetchingStudents ? <p className="text-gray-500 p-2">Loading students...</p> : (
            <div className="mt-2 border rounded-md max-h-60 overflow-y-auto p-2 space-y-1">
              {students.length > 0 ? (
                students.map(student => (
                  <div key={student.id} className="flex items-center p-2 hover:bg-gray-50 rounded-md">
                    <input type="checkbox" id={`student-${student.id}`} checked={selectedStudents.includes(student.id)} onChange={() => handleStudentSelect(student.id)} className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"/>
                    <label htmlFor={`student-${student.id}`} className="ml-3 text-sm text-gray-800 cursor-pointer">{student.user.name}</label>
                  </div>
                ))
              ) : <p className="text-gray-500 p-2">No students found for this semester.</p>}
            </div>
            )}
          </div>
          {error && <p className="text-red-600 text-sm mb-4 bg-red-100 p-3 rounded-md">{error}</p>}
          {success && <p className="text-green-600 text-sm mb-4 bg-green-100 p-3 rounded-md">{success}</p>}
          <div className="flex justify-end gap-4 border-t pt-4 mt-4">
            <button type="button" onClick={onClose} className="py-2 px-4 bg-gray-200 text-gray-800 font-semibold rounded-md hover:bg-gray-300">Cancel</button>
            <button type="submit" disabled={isLoading || selectedStudents.length === 0} className="py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md disabled:bg-indigo-300 hover:bg-indigo-700">
              {isLoading ? 'Sending...' : 'Generate & Send Emails'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}


// ============================================================================
//   2. Skeleton Loader Component
// ============================================================================
function DashboardSkeleton() {
    return (
        <div className="min-h-screen bg-gray-900 text-white p-4 md:p-8 animate-pulse">
            <header className="mb-10">
                <div className="h-10 bg-gray-700 rounded w-1/4 mb-4"></div>
                <div className="h-6 bg-gray-700 rounded w-1/2"></div>
            </header>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                    <div className="bg-gray-800 p-6 rounded-xl h-48"></div>
                    <div className="bg-gray-800 p-6 rounded-xl h-64"></div>
                </div>
                <div className="bg-gray-800 p-6 rounded-xl h-96"></div>
            </div>
        </div>
    );
}


// ============================================================================
//   3. Main Teacher Dashboard Component
// ============================================================================
export default function TeacherDashboard() {
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [classes, setClasses] = useState<ClassSession[]>([]);
  const [details, setDetails] = useState<TeacherDetails | null>(null);
  const [loading, setLoading] = useState(true); // Start with loading true
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const teacherUserId = localStorage.getItem("teacherId");
    if (!teacherUserId) {
      showErrorMessage("No teacher ID found. Please log in.");
      setLoading(false);
      // Optional: redirect to login page
      // window.location.href = '/login';
      return;
    }
    
    // Refactored data fetching for robustness
    const fetchDashboardData = async () => {
        try {
            await Promise.all([
                fetch(`/api/teacher/id/details?teacherId=${teacherUserId}`).then(res => res.json()).then(data => setDetails(data)),
                fetch(`/api/teacher/subjects?teacherId=${teacherUserId}`).then(res => res.json()).then(data => setSubjects(data)),
                fetch(`/api/timetable?teacherId=${teacherUserId}`).then(res => res.json()).then(data => setClasses(data.sessions || []))
            ]);
        } catch (error) {
            console.error("Failed to fetch dashboard data:", error);
            showErrorMessage("Could not load dashboard data.");
        } finally {
            setLoading(false);
        }
    };

    fetchDashboardData();
  }, []);

  if (loading) {
    return <DashboardSkeleton />;
  }

  const today = new Date();
  const todayWeekday = today.toLocaleString('en-US', { weekday: 'long' }).toUpperCase();
  const todaysClasses = classes.filter(cls => cls.weekday === todayWeekday);

  return (
    <>
      <div className="min-h-screen bg-gray-900/20 text-white p-4 md:p-8">
        {/* Header Section */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
            <div>
                <h1 className="text-3xl md:text-4xl font-bold">
                    Welcome back, <span className="text-indigo-400">{details?.name || "Teacher"}</span>
                </h1>
                <p className="text-gray-400 mt-2">
                    {today.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
            </div>
            <button 
                onClick={() => setIsModalOpen(true)}
                className="mt-4 md:mt-0 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
               Start Attendance
            </button>
        </header>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-8">
                {/* Quick Actions Card - Replaced Pending Classes for better utility */}
                <div className="bg-gray-800 p-6 rounded-xl">
                    <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        <div className="bg-gray-700 p-4 rounded-lg hover:bg-indigo-500 cursor-pointer transition-colors">🚀<span className="block mt-1 text-sm">New Assignment</span></div>
                        <div className="bg-gray-700 p-4 rounded-lg hover:bg-indigo-500 cursor-pointer transition-colors">📢<span className="block mt-1 text-sm">New Announcement</span></div>
                        <div className="bg-gray-700 p-4 rounded-lg hover:bg-indigo-500 cursor-pointer transition-colors">📚<span className="block mt-1 text-sm">Upload Resources</span></div>
                        <div className="bg-gray-700 p-4 rounded-lg hover:bg-indigo-500 cursor-pointer transition-colors">✅<span className="block mt-1 text-sm">Mark Attendance</span></div>
                    </div>
                </div>

                {/* Your Subjects Card */}
                <div className="bg-gray-800 p-6 rounded-xl">
                    <h2 className="text-xl font-semibold mb-4">Your Subjects</h2>
                    {subjects.length > 0 ? (
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {subjects.map(sub => (
                                <div key={sub.id} className="bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition-colors">
                                    <p className="font-bold">{sub.name}</p>
                                    {sub.code && <p className="text-xs text-gray-400">{sub.code}</p>}
                                </div>
                            ))}
                        </div>
                    ) : <p className="text-gray-400">No subjects assigned.</p>}
                </div>
            </div>

            {/* Right Column (Sidebar) */}
            <div className="bg-gray-800 p-6 rounded-xl">
                <h2 className="text-xl font-semibold mb-4">Today's Schedule</h2>
                <div className="space-y-4 max-h-[60vh] overflow-y-auto">
                    {todaysClasses.length > 0 ? (
                        todaysClasses.map(cls => (
                            <div key={cls.id} className="bg-gray-700 p-4 rounded-lg border-l-4 border-indigo-500">
                                <p className="font-bold">{cls.subject.name}</p>
                                <p className="text-sm text-gray-300">Section {cls.section} • Sem {cls.semester}</p>
                                <p className="text-xs text-gray-400 mt-1">
                                    {new Date(cls.startTime).toLocaleTimeString([], { hour: '2-digit', minute:'2-digit' })} - {new Date(cls.endTime).toLocaleTimeString([], { hour: '2-digit', minute:'2-digit' })}
                                </p>
                            </div>
                        ))
                    ) : <p className="text-gray-400 text-center py-10">No classes today. Enjoy your day!</p>}
                </div>
            </div>
        </div>
      </div>
      
      {/* The Modal Dialog for QR Code Generation */}
      <Suspense fallback={<div>Loading Dialog...</div>}>
         <GenerateTokenDialog isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </Suspense>
    </>
  );
}