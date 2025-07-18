"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Tektur } from "next/font/google";
import { useState } from "react";

const tektur = Tektur({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const PremiumCancelModal = ({
  isOpen,
  onClose,
  onConfirm,
  message,
  loading
}: {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (reason: string) => void;
  message?: string;
  loading?: boolean
}) => {
  const [reason, setReason] = useState("");

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/75 flex justify-center items-center z-[9999]"
        >
          <motion.div
            key="modal"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="from-orange-800/50 via-orange-300/50 border-orange-400 border to-orange-800/50 bg-gradient-to-bl rounded-xl p-6 w-[400px] space-y-4 text-orange-100"
          >
            <h2 className={`text-xl font-semibol ${tektur.className}`}>Confirm Cancellation</h2>
            <p>{message ?? "Are you sure you want to cancel this user's plan?"}</p>

            <textarea
              className="w-full rounded p-2 text-orange-100 text-lg outline-none ring ring-orange-100 focus:ring-2 transition-all duration-500"
              placeholder="Reason for cancellation"
              rows={3}
              value={reason}
              onChange={(e) => setReason(e.target.value)}
            />

            <div className="flex justify-end gap-2">
              <button
                onClick={onClose}
                className="px-3 py-1 rounded bg-gray-800"
              >
                Back
              </button>
              <button
                onClick={() => onConfirm(reason)}
                className="px-3 py-1 rounded bg-red-600"
              >
             {loading ? "Processing…" : "Confirm"}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PremiumCancelModal;
