"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import { showErrorMessage, showSuccessMessage } from "@/lib/helper";

export default function SuccessPage() {
  const [progress, setProgress] = useState(10);
  const router = useRouter();
  const params = useSearchParams();

  const sessionId = params.get("session_id"); // passed from stripe

  useEffect(() => {
    const userId = localStorage.getItem("studentId");
    if (!sessionId || !userId) {
      toast.error("Missing session or user.");
      router.replace("/dashboard/student");
      return;
    }

    // start progress animation
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 90 ? prev + 5 : prev));
    }, 300);

    const verifyPayment = async () => {
      try {
        const res = await fetch("/api/student/payment/verify", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            sessionId,
            userId,
          }),
        });

        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Verification failed");

        setProgress(100);
        showSuccessMessage("Premium features activated!");

        setTimeout(() => {
          router.replace("/dashboard/student");
        }, 1000);
      } catch (err) {
        showErrorMessage("Payment verification failed.");
      //  router.replace("/dashboard/student");
      } finally {
        clearInterval(interval);
      }
    };

    verifyPayment();
  }, [sessionId, router]);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-white px-4">
      <h1 className="text-3xl font-bold mb-4">Activating Premium Features…</h1>
      <p className="mb-6 text-center max-w-md">
        Please wait while we unlock all your premium tools.
      </p>

      <div className="w-full max-w-sm bg-white/10 p-6 rounded-xl shadow">
        <div className="w-full bg-white/20 rounded-full h-4 overflow-hidden">
          <div
            className="bg-cyan-500 h-4 rounded-full transition-all duration-200"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-center mt-2 text-sm text-white/80">{progress}%</p>
      </div>
    </div>
  );
}
