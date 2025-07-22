 "use client";

import AnimatedBlobs from "@/components/ui/AnimatedBlobs";
import { showErrorMessage, showSuccessMessage } from "@/lib/helper";
import { Tektur } from "next/font/google";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
      } catch {
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
      const res = await fetch(
        "/api/admin/settings/email/request-verification",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ newEmail }),
        }
      );

      const data = await res.json();
      if (res.ok) {
        showSuccessMessage("Verification code sent to both emails.");
        setStep("verify");
      } else {
        showErrorMessage(data.error || "Failed to send verification code.");
      }
    } catch {
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
    } catch {
      showErrorMessage("Something went wrong during verification.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden z-0 bg-gradient-to-br from-white/10 to-black/20 backdrop-blur-md h-[75vh] flex flex-col items-center p-6 rounded-xl shadow-xl border border-white/10"
    >
      {/* Animated gradient blobs */}
      <div className="absolute inset-0 z-0">
        {/* Purple blob - static with pulse animation */}
        <div className="absolute -top-1/3 -left-1/3 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl animate-pulse"></div>

        {/* Orange blob - moves in a circular pattern */}
        <motion.div
          className="absolute w-80 h-80 animate-pulse bg-orange-500/20 rounded-full filter blur-2xl"
          animate={{
            x: ["100%", "0%", "-20%", "0%", "100%"],
            y: ["100%", "50%", "0%", "50%", "100%"],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* Blue blob - smaller, faster movement */}
        <motion.div
          className="absolute w-40 h-40 animate-pulse bg-blue-500/10 rounded-full filter blur-xl"
          animate={{
            x: ["25%", "75%", "50%", "25%"],
            y: ["25%", "75%", "25%", "75%"],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <motion.h2
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className={`text-4xl font-bold mb-10 mt-10 text-orange-300 z-10 ${tektur.className}`}
      >
        Change Admin Email
      </motion.h2>

      <p className="text-white/80 mb-14 z-10">
        Current Email:{" "}
        <span className="font-semibold">
          {currentEmail || (
            <span className="ml-1 animate-pulse">Loading...</span>
          )}
        </span>
      </p>

      <div className="flex flex-col gap-10 mt-20 max-w-sm w-full z-10">
        <AnimatePresence mode="wait">
          {step === "request" && (
            <motion.div
              key="request"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-6"
            >
              <input
                type="email"
                autoComplete="off"
                placeholder="Enter new email"
                className="px-4 py-3 rounded bg-white/10 text-white placeholder:text-white/50 focus:outline-none"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
              />
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={handleRequestVerification}
                disabled={loading}
                className="bg-orange-600 outline-none hover:bg-orange-700 cursor-pointer transition rounded px-4 py-2 text-white font-semibold"
              >
                {loading ? "Sending…" : "Send Verification Code"}
              </motion.button>
            </motion.div>
          )}

          {step === "verify" && (
            <motion.div
              key="verify"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-6"
            >
              <input
                type="text"
                placeholder="Enter verification code"
                className="px-4 py-3 rounded bg-white/10 text-white placeholder:text-white/50 focus:outline-none"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
              />
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={handleVerifyCode}
                disabled={loading}
                className="bg-green-600 outline-none hover:bg-green-700 cursor-pointer transition rounded px-4 py-2 text-white font-semibold"
              >
                {loading ? "Verifying…" : "Verify & Update"}
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
