"use client";

import { useEffect, useRef, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const ScanPage = () => {
  const router = useRouter();
  const scannerRef = useRef<Html5QrcodeScanner | null>(null);
  const scannedRef = useRef(false);

  const [loading, setLoading] = useState(false);

  const handleScan = async (decodedText: string) => {
    if (scannedRef.current) {
      console.log("Already scanned — ignoring.");
      return;
    }
    scannedRef.current = true;
    setLoading(true);

    let data;
    try {
      data = JSON.parse(decodedText);
    } catch {
      toast.error("Invalid QR code format");
      setLoading(false);
      return;
    }

    if (scannerRef.current) {
      scannerRef.current.clear().then(() => {
        const el = document.getElementById("reader");
        if (el) el.innerHTML = "";
        scannerRef.current = null;
      }).catch(console.error);
    }

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
        toast.success("Attendance Recorded!");
        setTimeout(() => {
          router.replace("/dashboard/student");
        }, 1000); // show toast & loader before redirect
      } else {
        toast.error(result.error || "Failed marking attendance");
        setLoading(false);
      }
    } catch (error) {
      console.error("Error marking attendance: ", error);
      toast.error("Error marking attendance");
      setLoading(false);
    }
  };

  useEffect(() => {
    const el = document.getElementById("reader");
    if (el) el.innerHTML = "";

    const scanner = new Html5QrcodeScanner(
      "reader",
      { fps: 10, qrbox: 250 },
      false
    );

    scanner.render(handleScan, (err) => {
      console.error("Error scanning QR Code:", err);
    });

    scannerRef.current = scanner;

    return () => {
      if (scannerRef.current) {
        scannerRef.current.clear().then(() => {
          const el = document.getElementById("reader");
          if (el) el.innerHTML = "";
        }).catch(console.error);
      }
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {loading ? (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black/5 text-cyan-400">
          <div className="relative w-36 h-36">
            <svg
              className="w-full h-full transform -rotate-90"
              viewBox="0 0 36 36"
            >
              <circle
                cx="18"
                cy="18"
                r="16"
                stroke="#1e293b"
                strokeWidth="3"
                fill="none"
              />
              <circle
                cx="18"
                cy="18"
                r="16"
                stroke="#06b6d4"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
                strokeDasharray="100"
                strokeDashoffset="25"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src="/only-logo.png"
                alt="ClassifyAI"
                className="w-16 h-16 object-contain"
              />
            </div>
          </div>
          <p className="mt-4 text-lg font-medium">Marking Attendance…</p>
        </div>
      ) : (
        <>
          <h2 className="text-center text-xl font-bold my-4">Scan QR Code</h2>
          <div id="reader" className="w-full max-w-md mx-auto"></div>
        </>
      )}
    </div>
  );
};

export default ScanPage;
