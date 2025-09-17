"use client";

import { useState, useEffect } from "react";
import { Subject, Semester, Student, Section } from "@/lib/types";

export default function GenerateTokenDialog({
  isOpen,
  onClose,
  onSuccess,
}: {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (token: string) => void;
}) {
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [semesters, setSemesters] = useState<Semester[]>([]);
  const [sections, setSections] = useState<Section[]>([]);
  const [students, setStudents] = useState<Student[]>([]);
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedSemester, setSelectedSemester] = useState("");
  const [selectedSection, setSelectedSection] = useState("");
  const [selectedStudents, setSelectedStudents] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isFetchingStudents, setIsFetchingStudents] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    setError("");
    setSuccess("");
    setSelectedStudents([]);

    async function fetchData() {
      try {
        const [subjectsRes, semestersRes, sectionsRes] = await Promise.all([
          fetch("/api/teacher/subjects/all"),
          fetch("/api/teacher/semester/all"),
           fetch("/api/teacher/sections/all"),
        ]);
        if (!subjectsRes.ok || !semestersRes.ok || !sectionsRes.ok)
          throw new Error("Failed to load initial data.");

        const subjectsData = await subjectsRes.json();
        const semestersData = await semestersRes.json();
        const sectionsData = await sectionsRes.json();
        setSubjects(subjectsData);
        setSemesters(semestersData);
        setSections(sectionsData);
      
        if (subjectsData.length > 0) setSelectedSubject(subjectsData[0].id);
        if (semestersData.length > 0) setSelectedSemester(semestersData[0].id);
       if (sectionsData.length > 0) setSelectedSection(sectionsData[0].id);
      } catch (err: any) {
        setError(err.message);
      }
    }
    fetchData();
  }, [isOpen]);

  useEffect(() => {
    if (!selectedSemester || !selectedSection) return;

    async function fetchStudents() {
      setIsFetchingStudents(true);
      setStudents([]);
      setSelectedStudents([]);
      try {
        const res = await fetch(
          `/api/teacher/semester/students?semesterId=${selectedSemester}&sectionId=${selectedSection}`
        );
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
  }, [selectedSemester, selectedSection]);

  const handleStudentSelect = (studentId: string) => {
    setSelectedStudents((prev) =>
      prev.includes(studentId)
        ? prev.filter((id) => id !== studentId)
        : [...prev, studentId]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setSuccess("");

    const teacherUserId = localStorage.getItem("teacherId");
    if (!teacherUserId) {
      setError("Could not find teacher ID. Please log in again.");
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/attendance/create-token", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          subjectId: selectedSubject,
          studentIds: selectedStudents,
          teacherUserId,
        }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message);

      setSuccess("Tokens sent successfully! Starting session...");

      // On success, pass the token back to the parent to trigger the next step
      setTimeout(() => {
        onSuccess(data.token);
      }, 1500);
    } catch (err: any) {
      setError(err.message || "An unknown error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/20 bg-opacity-60 flex justify-center items-center z-50 p-4">
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Generate & Send QR Codes
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700"
              >
                Subject
              </label>
              <select
                id="subject"
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="mt-1 outline-none block w-full p-2  border-gray-300 text-gray-950 rounded-md "
              >
                {subjects.map((s) => (
                  <option
                    key={s.id}
                    className="bg-cyan-50 text-gray-950 outline-none border border-white"
                    value={s.id}
                  >
                    {s.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label
                htmlFor="semester"
                className="block text-sm font-medium text-gray-700"
              >
                Semester
              </label>
              <select
                id="semester"
                value={selectedSemester}
                onChange={(e) => setSelectedSemester(e.target.value)}
                className="mt-1 outline-none block w-full p-2  border-gray-300 text-gray-950 rounded-md"
              >
                {semesters.map((s) => (
                  <option key={s.id} className="bg-cyan-50 text-gray-950 outline-none border border-white" value={s.id}>
                    {s.name}
                  </option>
                ))}
              </select>
            </div>
           <div>
              <label
                htmlFor="section"
                className="block text-sm font-medium text-gray-700"
              >
                Section
              </label>
              <select
                id="section"
                value={selectedSection}
                onChange={(e) => setSelectedSection(e.target.value)}
                className="mt-1 outline-none block w-full p-2  border-gray-300 text-gray-950 rounded-md"
              >
                {sections.map((s) => (
                  <option key={s.id} className="bg-cyan-50 text-gray-950 outline-none border border-white" value={s.id}>
                    {s.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">
              Select Students ({selectedStudents.length} selected)
            </label>
            {isFetchingStudents ? (
              <p className="text-gray-500 p-2">Loading students...</p>
            ) : (
              <div className="mt-2 border rounded-md max-h-60 overflow-y-auto p-2 space-y-1">
                {students.length > 0 ? (
                  students.map((student) => (
                    <div
                      key={student.id}
                      className="flex items-center p-2 hover:bg-gray-50 rounded-md"
                    >
                      <input
                        type="checkbox"
                        id={`student-${student.id}`}
                        checked={selectedStudents.includes(student.id)}
                        onChange={() => handleStudentSelect(student.id)}
                        className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                      />
                      <label
                        htmlFor={`student-${student.id}`}
                        className="ml-3 text-sm text-gray-800 cursor-pointer"
                      >
                        {student.user.name}
                      </label>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500 p-2">
                    No students found for this semester.
                  </p>
                )}
              </div>
            )}
          </div>
          {error && (
            <p className="text-red-600 text-sm mb-4 bg-red-100 p-3 rounded-md">
              {error}
            </p>
          )}
          {success && (
            <p className="text-green-600 text-sm mb-4 bg-green-100 p-3 rounded-md">
              {success}
            </p>
          )}
          <div className="flex justify-end gap-4 border-t pt-4 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="py-2 px-4 bg-gray-200 text-gray-800 font-semibold rounded-md hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isLoading || selectedStudents.length === 0}
              className="py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md disabled:bg-indigo-300 hover:bg-indigo-700"
            >
              {isLoading ? "Sending..." : "Generate & Send Emails"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
