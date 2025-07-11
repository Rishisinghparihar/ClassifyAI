"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tektur } from "next/font/google";


const tektur = Tektur({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const LinkCards = (props: { for?: "student" | "teacher" }) => {
  const [modalOpen, setModalOpen] = useState<"add" | "remove" | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    branch: "",
    year: "",
    semester: "",
  });
  const handleOpen = (type: "add" | "remove") => {
    setModalOpen(type);
    setFormData({ name: "", email: "", branch: "", year: "", semester: "" });
    setMessage(null);
  };

  const handleClose = () => {
    setModalOpen(null);
    setLoading(false);
    setMessage(null);
  };

  const handleKey = (e: KeyboardEvent) => {
    if (e.key === "Escape") handleClose();
  };

  useEffect(() => {
    if (modalOpen) {
      document.addEventListener("keydown", handleKey);
    }
    return () => {
      document.removeEventListener("keydown", handleKey);
    };
  }, [modalOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);

    if (!formData.name || !formData.email) {
      setMessage({ type: "error", text: "Name and Email are required" });
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          role: props.for?.toUpperCase() ?? "STUDENT",
          ...(props.for === "student" && {
            branch: formData.branch,
            year: parseInt(formData.year),
            semester: parseInt(formData.semester),
          }),
        }),
      });

      if (res.ok) {
        setMessage({ type: "success", text: "Added successfully" });
        setTimeout(handleClose, 1500);
      } else {
        const data = await res.json();
        setMessage({ type: "error", text: data.error || "Failed to add" });
      }
    } catch (err) {
      setMessage({ type: "error", text: "Server error" });
    } finally {
      setLoading(false);
    }
  };
  const title =
    props.for === "student" ? "Add or Remove Student" : "Add or Remove Student";
  const activity =
    props.for === "student"
      ? "Recent Student Activity"
      : "Recent Teacher Activity";

  return (
    <div className="h-full border rounded-4xl border-orange-400 w-full flex p-5 justify-center bg-orange-700/5">
      <div>
        <h5 className="text-xl text-center">{title}</h5>
        <div className="flex gap-10 mt-10">
          <div className="flex flex-col gap-3">
            <button
              onClick={() => handleOpen("add")}
              className="border hover:bg-orange-700/20 cursor-pointer hover:border-orange-500 transition-all duration-500 rounded-2xl p-5"
            >
              Add {props.for === "student" ? "Student" : "Teacher"}
            </button>
            <button
              onClick={() => handleOpen("remove")}
              className="border hover:bg-orange-700/20 cursor-pointer hover:border-orange-500 transition-all duration-500 rounded-2xl p-5"
            >
              Remove {props.for === "student" ? "Student" : "Teacher"}
            </button>
          </div>
          <div>
            <h6>{activity}</h6>
          </div>
        </div>
      </div>
      {/* Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-orange-900/15 rounded-3xl p-6 w-full max-w-md shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <h2 className={` ${tektur.className} text-2xl mb-4 text-orange-300 font-semibold`}>
                {modalOpen === "add" ? "Add" : "Remove"}{" "}
                {props.for === "student" ? "Student" : "Teacher"}
              </h2>

              <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="ring outline-none focus:ring-2 transition-all duration-500  ring-orange-300 rounded-xl p-2"
                  value={formData.name}
                  onChange={handleChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="ring outline-none focus:ring-2 transition-all duration-500  ring-orange-300 rounded-xl p-2"
                  autoComplete="off"
                  value={formData.email}
                  onChange={handleChange}
                />
                {props.for === "student" && (
                  <>
                    <input
                      type="text"
                      name="branch"
                      placeholder="Branch"
                      className="ring outline-none focus:ring-2 transition-all duration-500  ring-orange-300 rounded-xl p-2"
                      value={formData.branch}
                      onChange={handleChange}
                    />
                    <input
                      type="number"
                      name="year"
                      placeholder="Year"
                      className="ring outline-none focus:ring-2 transition-all duration-500  ring-orange-300 rounded-xl p-2"
                      value={formData.year}
                      onChange={handleChange}
                    />
                    <input
                      type="number"
                      name="semester"
                      placeholder="Semester"
                      className="ring outline-none focus:ring-2 transition-all duration-500  ring-orange-300 rounded-xl p-2"
                      value={formData.semester}
                      onChange={handleChange}
                    />
                  </>
                )}
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-orange-500 cursor-pointer transition-all duration-500 text-white rounded-xl py-2 hover:bg-orange-700"
                >
                  {loading
                    ? "Submitting..."
                    : modalOpen === "add"
                    ? "Add"
                    : "Remove"}
                </button>
              </form>

              {message && (
                <p
                  className={`mt-2 text-sm ${
                    message.type === "success"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {message.text}
                </p>
              )}

              <button
                onClick={handleClose}
                className="mt-4 text-sm text-orange-500 hover:text-orange-50 cursor-pointer"
              >
                Cancel
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LinkCards;
