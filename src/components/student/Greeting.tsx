"use client";
import React, { useEffect, useState } from "react";
import { SDetails } from "@/lib/types";
import { numberToRoman } from "@/lib/helper";
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
        console.log({ details: data });
      } catch (error) {
        console.log("Error fetching student details:", error);
      }
    };

    fetchStudentDetails();
  }, []);
  function removeMiddleName(fullName: string): string {
  // Split the name by one or more spaces
  const parts: string[] = fullName.trim().split(/\s+/);

  // If there's no middle name, return as is
  if (parts.length <= 2) {
    return fullName;
  }

  // Return only first and last name
  return `${parts[0]} ${parts[parts.length - 1]}`;
}

  return (
    <div className="flex flex-col gap-2 p-4  mt-10 w-md">
      <h1 className="text-2xl"> WELCOME BACK!</h1>
      <strong className="capitalize text-2xl ">{removeMiddleName(details?.name||"")}</strong>
      <div className="flex gap-3">
        {details?.branch && (
          <span>
            <strong>Branch: </strong>
            {details?.branch}
          </span>
        )}
        {details?.year && (
          <span>
            <strong>Year: </strong>
            {numberToRoman(details?.year || 0) || details?.year}
          </span>
        )}
        {details?.semester && (
          <span>
            <strong>Sem: </strong>
            {numberToRoman(details?.semester || 0) || details?.semester}
          </span>
        )}
      </div>
    </div>
  );
};

export default Greeting;
