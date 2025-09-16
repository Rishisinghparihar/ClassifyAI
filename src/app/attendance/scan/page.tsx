"use client";

import React, { useEffect, useRef } from "react";
import toast from "react-hot-toast";
import { Html5QrcodeScanner } from "html5-qrcode";
import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";

const ScanPage = () => {
  const scannerRef = useRef<Html5QrcodeScanner | null>(null);
  const scannedRef = useRef(false);
  const router = useRouter();

  const handleScan = async (decodedText: string) => {
    if (scannedRef.current) {
      return; // Prevent multiple scans from a single QR code
    }
    scannedRef.current = true;
    toast.loading("Verifying QR Code...");

    let qrData;
    try {
      // The QR code contains a JSON string with the token
      qrData = JSON.parse(decodedText);
      if (!qrData.token) {
          throw new Error("QR code does not contain a valid token.");
      }
    } catch (e: any) {
      toast.dismiss();
      toast.error(e.message || "Invalid QR code format");
      scannedRef.current = false; // Allow rescanning
      return;
    }

    // Stop the camera once a valid QR is scanned
    if (scannerRef.current) {
      scannerRef.current.clear().catch(console.error);
    }

    try {
      // ==================== FIX STARTS HERE ====================

      // 1. Get the logged-in student's user ID from local storage
      const loggedInStudentId = localStorage.getItem("studentUserId");
      if (!loggedInStudentId) {
        throw new Error("You are not logged in. Could not find student ID.");
      }

      // 2. Send the correct data to the correct API endpoint
      const res = await fetch(`/api/attendance/mark`, { // Correct URL
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token: qrData.token,           // The token from the QR code
          studentId: loggedInStudentId,  // The ID of the student scanning
        }),
      });

      // ==================== FIX ENDS HERE ====================

      const result = await res.json();
      toast.dismiss();

      if (res.ok) {
        toast.success(result.message || "Attendance Marked!");
        setTimeout(() => {
          router.replace("/dashboard/student");
        }, 1500);
      } else {
        // Show the specific error message from the API
        toast.error(result.message || "Failed to mark attendance.");
        scannedRef.current = false; // Allow rescanning on failure
      }
    } catch (error: any) {
      toast.dismiss();
      toast.error(error.message || "An error occurred.");
      scannedRef.current = false; // Allow rescanning on failure
    }
  };

  useEffect(() => {
    const scanner = new Html5QrcodeScanner(
      "reader",
      { fps: 10, qrbox: { width: 250, height: 250 } },
      /* verbose= */ false
    );

    scanner.render(handleScan, (error) => {
      // handle scan failure, usually better to ignore and let user retry
    });

    scannerRef.current = scanner;

    return () => {
      if (scannerRef.current) {
        scannerRef.current.clear().catch(console.error);
      }
    };
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900 text-white p-4">
       <div className="absolute top-4 left-4 z-10">
        <button
          onClick={() => router.push("/dashboard/student")}
          className="flex items-center gap-2 rounded-full text-white hover:text-cyan-400 transition-colors p-2"
        >
          <ChevronLeft size={32} />
          <span className="font-semibold">Back to Dashboard</span>
        </button>
      </div>

      <div className="w-full max-w-lg text-center">
        <h2 className="text-3xl font-bold uppercase text-cyan-300 mb-2">
          Mark Attendance
        </h2>
        <p className="text-gray-400 mb-8">Align the QR code within the frame to scan</p>
        <div id="reader" className="w-full mx-auto"></div>
      </div>
    </div>
  );
};

export default ScanPage;