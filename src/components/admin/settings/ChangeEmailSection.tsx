"use client";

import { showErrorMessage, showSuccessMessage } from "@/lib/helper";
import { Tektur } from "next/font/google";
import { useEffect, useState } from "react";

const tektur = Tektur({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function ChangeEmailSection() {
  const [currentEmail, setCurrentEmail] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState<"request" | "verify">("request");

  useEffect(() => {
    const fetchAdminEmail = async () => {
      try {
        const res = await fetch("/api/admin/settings/email");
        const data = await res.json();
        if (res.ok) {
          setCurrentEmail(data.email);
        } else {
          showErrorMessage(data.error || "Failed to load email.");
        }
      } catch (err) {
        showErrorMessage("Something went wrong while fetching email.");
      }
    };

    fetchAdminEmail();
  }, []);

  const handleRequestVerification = async () => {
    if (!newEmail.trim()) {
      showErrorMessage("Please enter a new email.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/admin/settings/email/request-verification", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ newEmail }),
      });

      const data = await res.json();
      if (res.ok) {
        showSuccessMessage("Verification code sent to both emails.");
        setStep("verify");
      } else {
        showErrorMessage(data.error || "Failed to send verification code.");
      }
    } catch (err) {
      showErrorMessage("Something went wrong while requesting verification.");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyCode = async () => {
    if (!verificationCode.trim()) {
      showErrorMessage("Please enter the verification code.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/admin/settings/email/verify-code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: verificationCode }),
      });

      const data = await res.json();
      if (res.ok) {
        showSuccessMessage("Admin email updated successfully.");
        setCurrentEmail(newEmail);
        setNewEmail("");
        setVerificationCode("");
        setStep("request");
      } else {
        showErrorMessage(data.error || "Verification failed.");
      }
    } catch (err) {
      showErrorMessage("Something went wrong during verification.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className= "relative overflow-hidden z-0 bg-white/5 h-[75vh] flex flex-col items-center  p-6 rounded-xl shadow">
      <h2
        className={`text-4xl font-bold mb-10 mt-10 text-orange-300 ${tektur.className}`}
      >
        Change Admin Email
      </h2>   

      <p className="text-white/80 mb-14">
        Current Email:{" "}
        <span className="font-semibold">
          {currentEmail || <span className="ml-1 animate-pulse">Loading...</span>}
        </span>
      </p>

      <div className="flex flex-col gap-10 mt-20 max-w-sm w-full">
        {step === "request" && (
          <>
            <input
              type="email"
              placeholder="Enter new email"
              className="px-4 py-3 rounded bg-white/10 text-white placeholder:text-white/50 focus:outline-none"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
            />
            <button
              onClick={handleRequestVerification}
              disabled={loading}
              className="bg-orange-600 outline-none hover:bg-orange-700 cursor-pointer transition rounded px-4 py-2 text-white font-semibold"
            >
              {loading ? "Sending…" : "Send Verification Code"}
            </button>
          </>
        )}

        {step === "verify" && (
          <>
            <input
              type="text"
              placeholder="Enter verification code"
              className="px-4 py-3 rounded bg-white/10 text-white placeholder:text-white/50 focus:outline-none"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
            />
            <button
              onClick={handleVerifyCode}
              disabled={loading}
              className="bg-green-600 outline-none hover:bg-green-700 cursor-pointer transition rounded px-4 py-2 text-white font-semibold"
            >
              {loading ? "Verifying…" : "Verify & Update"}
            </button>
          </>
        )}
      </div>
      <div className="bg-orange-800/35 rounded-full z-[-1] absolute -right-[3rem] -top-[3rem]   h-60 w-60 "></div>
      <div className="bg-orange-800/35 rounded-full z-[-1] absolute -left-[3rem] -bottom-[3rem]   h-60 w-60"></div>
    </div>
  );
}
