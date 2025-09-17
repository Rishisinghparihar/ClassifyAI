"use client";

import React, { useState, useEffect, Suspense } from "react";
import { showErrorMessage } from "@/lib/helper";
import { TeacherDetails, Subject, ClassSession } from "@/lib/types";

import DashboardSkeleton from "@/components/teacher/DashboardSkeleton";
import DashboardHeader from "@/components/teacher/DashboardHeader";
import { QuickActionsCard, SubjectsCard, ScheduleCard } from "@/components/teacher/ActionCards";
import GenerateTokenDialog from "@/components/teacher/GenerateTokenDialog";
import AttendanceFinalizer from "@/components/teacher/AttendanceFinalizer";

export default function TeacherDashboardPage() {
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [classes, setClasses] = useState<ClassSession[]>([]);
  const [details, setDetails] = useState<TeacherDetails | null>(null);
  const [loading, setLoading] = useState(true);
  
  // State to control which modal is open
  const [isGenerateModalOpen, setIsGenerateModalOpen] = useState(false);
  const [activeSessionToken, setActiveSessionToken] = useState<string | null>(null);

  useEffect(() => {
    const teacherUserId = localStorage.getItem("teacherId"); 
    if (!teacherUserId) {
      showErrorMessage("No teacher ID found. Please log in.");
      setLoading(false);
      return;
    }
    
    const fetchDashboardData = async () => {
        try {
            const [detailsRes, subjectsRes, timetableRes] = await Promise.all([
                fetch(`/api/teacher/id/details?teacherId=${teacherUserId}`),
                fetch(`/api/teacher/subjects?teacherId=${teacherUserId}`),
                fetch(`/api/timetable?teacherId=${teacherUserId}`)
            ]);
            
            setDetails(await detailsRes.json());
            setSubjects(await subjectsRes.json());
            const timetableData = await timetableRes.json();
            setClasses(timetableData.sessions || []);
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

  const todayWeekday = new Date().toLocaleString('en-US', { weekday: 'long' }).toUpperCase();
  const todaysClasses = classes.filter(cls => cls.weekday === todayWeekday);

  return (
    <>
      <main className=" text-white p-8">
        <DashboardHeader
            teacherName={details?.name || "Teacher"}
            onGenerateQrClick={() => setIsGenerateModalOpen(true)}
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
                <QuickActionsCard />
                <SubjectsCard subjects={subjects} />
            </div>
            <div className="lg:col-span-1">
                <ScheduleCard classes={todaysClasses} />
            </div>
        </div>
      </main>
      
      <Suspense fallback={<div>Loading...</div>}>
         <GenerateTokenDialog
            isOpen={isGenerateModalOpen}
            onClose={() => setIsGenerateModalOpen(false)}
            onSuccess={(token) => {
                setIsGenerateModalOpen(false); // Close the first dialog
                setActiveSessionToken(token); // Set token to open the second dialog
            }}
         />
         {activeSessionToken && (
            <AttendanceFinalizer
                token={activeSessionToken}
                onClose={() => setActiveSessionToken(null)}
            />
         )}
      </Suspense>
    </>
  );
}