"use client";

import { Tektur } from "next/font/google";
import React, { useEffect, useState } from "react";
import { Event } from "@/lib/types";
import { motion, AnimatePresence } from "framer-motion";
import { showErrorMessage } from "@/lib/helper";

const tektur = Tektur({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const AddEventModal = ({
  isOpen,
  onClose,
  onSuccess,
  mode,
  initialData,
}: {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  mode: "add" | "edit";
  initialData?: Event | null;
}) => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    date: "",
    type: "EXAM",
    active: true,
    createdBy: "", // filled on mount
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const adminID = localStorage.getItem("adminId") ?? "";
    if (initialData) {
      setForm({
        title: initialData.title,
        description: initialData.description ?? "",
        date: initialData.date.slice(0, 10), // ISO date
        type: initialData.type,
        active: initialData.active ?? true,
        createdBy: adminID,
      });
    } else {
      setForm({
        title: "",
        description: "",
        date: "",
        type: "EXAM",
        active: true,
        createdBy: adminID,
      });
    }
  }, [initialData, isOpen]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setLoading(true);
    const res = await fetch(
      mode === "add" ? `/api/admin/event/create` : `/api/admin/event/edit`,
      {
        method: mode === "add" ? "POST" : "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(
          mode === "edit" ? { ...form, eventId: initialData?.id } : form
        ),
      }
    );
    setLoading(false);

    if (res.ok) {
      onSuccess();
      onClose();
    } else {
      showErrorMessage("Failed to " + (mode === "add" ? "create" : "update") + " event");
    }
  };

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
            className="from-orange-800/50 via-orange-300/50 border-orange-400 border to-orange-800/50 bg-gradient-to-bl rounded-xl p-6 w-[400px] space-y-4"
          >
            <h2 className={`text-2xl ${tektur.className} text-orange-100`}>
              {mode === "add" ? "Add New Event" : "Edit Event"}
            </h2>

            <input
              name="title"
              placeholder="Title"
              className="w-full rounded p-2 text-orange-100 text-lg outline-none ring ring-orange-100 focus:ring-2 transition-all duration-500"
              value={form.title}
              autoComplete="off"
              onChange={handleChange}
            />
            <textarea
              name="description"
              placeholder="Description"
              className="w-full rounded p-2 text-orange-100 text-lg outline-none ring ring-orange-100 focus:ring-2 transition-all duration-500"
              value={form.description}
              autoComplete="off"
              onChange={handleChange}
            />
            {mode === "edit" && (
              <select
                name="active"
                className="w-full rounded p-2 text-orange-100 text-lg outline-none ring ring-orange-100 focus:ring-2 transition-all duration-500"
                value={form.active ? "true" : "false"}
                onChange={(e) =>
                  setForm({ ...form, active: e.target.value === "true" })
                }
              >
                <option value="true" className="bg-amber-900">
                  Active
                </option>
                <option value="false" className="bg-amber-900">
                  Inactive
                </option>
              </select>
            )}
            <input
              name="date"
              type="date"
              autoComplete="off"
              className="w-full rounded p-2 text-orange-100 text-lg outline-none ring ring-orange-100 focus:ring-2 transition-all duration-500"
              value={form.date}
              onChange={handleChange}
            />
            <select
              name="type"
              className="w-full rounded p-2 text-orange-100 text-lg outline-none ring ring-orange-100 focus:ring-2 transition-all duration-500"
              value={form.type}
              onChange={handleChange}
            >
              <option value="EXAM" className="bg-amber-900">
                Exam
              </option>
              <option value="HOLIDAY" className="bg-amber-900">
                Holiday
              </option>
              <option value="OTHER" className="bg-amber-900">
                Other
              </option>
            </select>

            <div className="flex justify-end gap-2">
              <button
                className="px-3 py-1 rounded bg-orange-700"
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                className="px-3 py-1 rounded bg-orange-500"
                onClick={handleSubmit}
                disabled={loading}
              >
                {loading ? (
                  <span className="animate-pulse">
                    {mode === "add" ? "Adding…" : "Updating…"}
                  </span>
                ) : (
                  <span>{mode === "add" ? "ADD" : "UPDATE"}</span>
                )}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AddEventModal;
