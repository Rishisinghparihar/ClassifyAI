"use client";
import React, { useEffect, useState } from "react";
import { SDetails } from "@/lib/types";
const Greeting = () => {
  const [details, setDetails] = useState<SDetails | null>(null);
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
        setDetails(data);
      } catch (error) {
        console.log("Error fetching student details:", error);
      }
    }

    fetchStudentDetails();
  }, [])
  
  return (
    <div className="flex flex-col gap-6 p-4  mt-10 w-xl">
      <h1 className="text-5xl"> WELCOME BACK!</h1>
      <strong className="uppercase text-5xl mx-20">{details?.name}</strong>
    </div>
  );
};

export default Greeting;
