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
      return;
    }
    scannedRef.current = true;


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
      toast.error("Error marking attendance");
    }
  };

  useEffect(() => {

    const observeButtons = () => {
      const observer = new MutationObserver(() => {
        const buttons =
          document.querySelectorAll<HTMLButtonElement>(
            "#reader .html5-qrcode-scanner button"
          );
        buttons.forEach((button) => {
          button.removeAttribute("style");
          button.style.backgroundColor = "red";
          button.style.color = "#06b6d4";
          button.style.border = "1px solid #06b6d4";
          button.style.padding = "0.5rem 1rem";
          button.style.margin = "0.25rem";
          button.style.borderRadius = "0.375rem";
          button.style.cursor = "pointer";
          button.style.transition = "background-color 0.2s ease-in-out";
        });
      });

      const readerElem = document.getElementById("reader");
      if (readerElem) {
        observer.observe(readerElem, {
          childList: true,
          subtree: true,
        });
      }

      return () => observer.disconnect();
    };

    const setupScanner = () => {
      const readerElem = document.getElementById("reader");
      if (readerElem) {
        readerElem.innerHTML = "";
      }

      const scanner = new Html5QrcodeScanner(
        "reader",
        { fps: 10, qrbox: 550 },
        false
      );

      scanner.render(handleScan, (err) => {
      });

      scannerRef.current = scanner;
    };

    const disconnectObserver = observeButtons();

    const timeout = setTimeout(setupScanner, 300);

    return () => {
      disconnectObserver();

      if (scannerRef.current) {
        scannerRef.current
          .clear()
          .then(() => {
            const el = document.getElementById("reader");
            if (el) el.innerHTML = "";
            scannerRef.current = null;
          })
          .catch((err) => {
            const el = document.getElementById("reader");
            if (el) el.innerHTML = "";
            scannerRef.current = null;
          });
      }

      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="flex min-h-screen items-center gap-60 bg-gradient-to-br from-gray-900/15 via-black/15 to-gray-800/15 text-white p-6 flex-col">
      <h2 className="text-center text-4xl uppercase text-cyan-200">
        Scan QR to mark Attendance
      </h2>
      <div
        id="reader"
        className="w-full max-w-3xl max-h-[40rem] mx-auto"
      ></div>
       {/* Back Button */}
      <div className="absolute top-4 left-4 z-10">
        <button
          onClick={() => router.push("/dashboard/student")}
          className="flex items-center justify-center gap-2 rounded-full text-white hover:text-cyan-300 transition-colors"
        >
          <ChevronLeft size={40} /> Back
        </button>
      </div>
    </div>
  );
};

export default ScanPage;
