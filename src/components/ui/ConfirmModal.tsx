"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Tektur } from "next/font/google";

const tektur = Tektur({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});


const ConfirmModal = ({
  isOpen,
  onClose,
  onConfirm,
  message,
}: {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  message?: string;
}) => {
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
            className="from-orange-800/50 via-orange-300/50 border-orange-400 border to-orange-800/50 bg-gradient-to-bl rounded-xl p-6 w-[350px] space-y-4 text-orange-100"
          >
            <h2 className={`text-xl font-semibol ${tektur.className}`}>Confirm Deletion</h2>
            <p>{message ?? "Are you sure you want to delete this event?"}</p>
            <div className="flex justify-end gap-2">
              <button
                onClick={onClose}
                className="px-3 py-1 rounded bg-gray-600"
              >
                Cancel
              </button>
              <button
                onClick={onConfirm}
                className="px-3 py-1 rounded bg-red-600"
              >
                Delete
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ConfirmModal;
