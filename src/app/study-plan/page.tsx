"use client";

import { useState } from "react";
import {
  Sparkles,
  ClipboardList,
  CalendarCheck,
  Lightbulb,
  CalendarClock,
  ChevronLeft,
} from "lucide-react";
import { useRouter } from "next/navigation";

const StudyPlanPage = () => {
  const [syllabus, setSyllabus] = useState("");
  const [examDate, setExamDate] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [planData, setPlanData] = useState<{
    roadmap: string[];
    importantTopics: string[];
    importantQuestions: string[];
    studyPlan: Record<string, string>;
  } | null>(null);
  const router = useRouter();
  const handleGenerate = async () => {
    if (!syllabus.trim()) return;

    setProgress(0);
    setLoading(true);

    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 95) {
          clearInterval(interval);
          return prev;
        }
        return prev + Math.floor(Math.random() * 5) + 1;
      });
    }, 150);

    try {
      const res = await fetch("/api/study-plan/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ syllabus, examDate }),
      });

      const data = await res.json();
      if (data.success) {
        setPlanData(data.data);
        setProgress(100);
      }
    } catch (err) {
      console.error("Failed to generate plan:", err);
    } finally {
      setTimeout(() => {
        setLoading(false); // Hide loading after showing 100%
      }, 1000);
    }
  };

  // 🟩 Show LOADING SCREEN
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen flex-col text-cyan-200">
        <div className="text-xl font-semibold mb-4">
          Generating Your Study Plan...
        </div>
        <div className="relative w-64 h-4 bg-cyan-900 rounded-full overflow-hidden">
          <div
            className="absolute top-0 left-0 h-full bg-cyan-400 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="mt-2">{progress}%</div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      <div className="absolute top-4 left-4 z-10">
        <button
          onClick={() => router.push("/dashboard/student")}
          className="flex items-center justify-center gap-2 rounded-full  text-white hover:text-cyan-300 transition-colors"
        >
          <ChevronLeft size={40} />
        </button>
      </div>
      {!planData && (
        <>
          <h1 className="text-2xl font-bold text-cyan-300 mb-6">
            AI-Powered Study Plan
          </h1>

          <textarea
            placeholder="Paste your syllabus here..."
            value={syllabus}
            onChange={(e) => setSyllabus(e.target.value)}
            className="w-full p-4 border border-cyan-300 rounded-lg bg-gray-900 text-cyan-100 mb-4"
            rows={6}
          />

          <div className="mb-4 flex items-center gap-4">
            <label className="text-cyan-200 font-medium flex items-center gap-2">
              <CalendarClock size={16} />
              Exam Date:
            </label>
            <input
              type="date"
              value={examDate}
              onChange={(e) => setExamDate(e.target.value)}
              className="bg-gray-800 text-cyan-100 border border-cyan-300 rounded px-3 py-1"
            />
          </div>

          <button
            disabled={loading}
            onClick={handleGenerate}
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-lg font-semibold"
          >
            Generate Study Plan
          </button>
        </>
      )}

      {/* 🟩 Show STUDY PLAN */}
      {planData && (
        <div className="mt-10 space-y-8">
          <Section
            title="Study Roadmap"
            icon={<Sparkles className="text-yellow-300" />}
          >
            <ul className="list-disc pl-5 text-gray-300 space-y-1">
              {planData.roadmap.map((step, idx) => (
                <li key={idx}>{step}</li>
              ))}
            </ul>
          </Section>

          <Section
            title="Important Topics"
            icon={<Lightbulb className="text-green-300" />}
          >
            <ul className="list-disc pl-5 text-gray-300 space-y-1">
              {planData.importantTopics.map((topic, idx) => (
                <li key={idx}>{topic}</li>
              ))}
            </ul>
          </Section>

          <Section
            title="Important Questions"
            icon={<ClipboardList className="text-pink-400" />}
          >
            <ul className="list-decimal pl-5 text-gray-300 space-y-1">
              {planData.importantQuestions.map((q, idx) => (
                <li key={idx}>{q}</li>
              ))}
            </ul>
          </Section>

          <Section
            title="Daily Study Plan"
            icon={<CalendarCheck className="text-blue-300" />}
          >
            <ul className="list-decimal pl-5 text-gray-300 space-y-1">
              {Object.entries(planData.studyPlan).map(([day, content]) => (
                <li key={day}>
                  <strong>{day}:</strong> {content}
                </li>
              ))}
            </ul>
          </Section>
        </div>
      )}
    </div>
  );
};

const Section = ({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) => (
  <div className="bg-white/5 border border-cyan-100/20 rounded-lg p-4">
    <div className="flex items-center gap-2 mb-3">
      {icon}
      <h2 className="text-lg font-semibold text-cyan-200">{title}</h2>
    </div>
    {children}
  </div>
);

export default StudyPlanPage;
