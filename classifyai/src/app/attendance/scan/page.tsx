"use client";
import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { Html5QrcodeScanner } from "html5-qrcode";

const ScanPage = () => {
  const handleScan = async (decodedText: string) => {
    console.log("QR Code scanned: ", decodedText);
    const data = JSON.parse(decodedText);
    try {
      const res = await fetch("/api/attendance", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          studentId: data.studentId,
          subject: data.subject,
          status: "Present",
          markedby: "CLASSIFYAI",
        }),
      });
      const result = await res.json();
      if (res.ok) {
        toast.success("Attendance Recorded !");
      } else {
        toast.error(result.error || "Failed marking attendance");
      }
    } catch (error) {
      console.error("Error marking attendance: ", error);
      toast.error("Error marking attendance");
    }
  };
  useEffect(() => {
    const scanner = new Html5QrcodeScanner(
      "reader",
      {
        fps: 10,
        qrbox: { width: 250, height: 250 },
      },
      false
    );

    scanner.render(handleScan, (errorMessage) => {
      console.log("Error scanning QR Code: ", errorMessage);
    });
    return () => {
      scanner
        .clear()
        .catch((err) => console.error("Failed to clear scanner. ", err));
    };
  });
  return (
    <div>
      <h2>Scan QR to mark Attendance</h2>
      <div id="reader" className="w-full max-w-md mx-auto"></div>
    </div>
  );
};

export default ScanPage;
