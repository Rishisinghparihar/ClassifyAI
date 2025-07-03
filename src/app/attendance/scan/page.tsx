"use client";
import React, { useEffect, useRef } from "react";
import toast from "react-hot-toast";
import { Html5QrcodeScanner } from "html5-qrcode";
import { useRouter } from "next/navigation";

const ScanPage = () => {
  const scannerRef = useRef<Html5QrcodeScanner | null>(null);
  const scannedRef = useRef(false);
  const router = useRouter();

  const handleScan = async (decodedText: string) => {
    if (scannedRef.current) {
      console.log("Already scanned — ignoring.");
      return;
    }
    scannedRef.current = true;

    console.log("QR Code scanned: ", decodedText);

    let data;
    try {
      data = JSON.parse(decodedText);
    } catch {
      toast.error("Invalid QR code format");
      return;
    }

    if (scannerRef.current) {
      scannerRef.current
        .clear()
        .then(() => {
          const el = document.getElementById("reader");
          if (el) el.innerHTML = "";
          scannerRef.current = null;
          console.log("Scanner stopped after first scan");
        })
        .catch(console.error);
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
        }, 1000);
      } else {
        toast.error(result.error || "Failed marking attendance");
      }
    } catch (error) {
      console.error("Error marking attendance: ", error);
      toast.error("Error marking attendance");
    }
  };

  useEffect(() => {
    console.log("ScanPage mounted");

    const setupScanner = () => {
      const readerElem = document.getElementById("reader");
      if (readerElem) {
        readerElem.innerHTML = "";
      }

      const scanner = new Html5QrcodeScanner(
        "reader",
        { fps: 10, qrbox: 250 },
        false
      );

      scanner.render(handleScan, (err) => {
        console.log("Error scanning QR Code:", err);
      });

      scannerRef.current = scanner;
    };
    const timeout = setTimeout(setupScanner, 300);

    return () => {
      console.log("ScanPage unmounted");
      if (scannerRef.current) {
        scannerRef.current
          .clear()
          .then(() => {
            console.log("Scanner cleared");
            const el = document.getElementById("reader");
            if (el) el.innerHTML = "";
            scannerRef.current = null;
          })
          .catch((err) => {
            console.error("Failed to clear scanner", err);
            const el = document.getElementById("reader");
            if (el) el.innerHTML = "";
            scannerRef.current = null;
          });
      }
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div>
      <h2>Scan QR to mark Attendance</h2>
      <div id="reader" className="w-full max-w-md mx-auto"></div>
    </div>
  );
};

export default ScanPage;
