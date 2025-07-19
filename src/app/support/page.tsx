"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import EarthCanvas from "@/canvas/Earth";
import { showErrorMessage, showSuccessMessage } from "@/lib/helper";

export default function SupportPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/support`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Failed to submit");
      }

      showSuccessMessage("Your message has been sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      showErrorMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse ml-40 overflow-hidden gap-8">
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 70, damping: 20 }}
        className="flex-[0.75] bg-white/10 border-2 border-white/50 p-8 rounded-4xl"
      >
        <div>
          <h3 className="text-white font-black md:text-[40px] sm:text-[50px] xs:text-[40px] text-[30px]">
            We’re here to help!
          </h3>
          <p className="text-[15px] text-secondary capitalize ml-2 tracking-wider">
             Our team is ready to assist you — get in touch.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              autoComplete="off"
              value={formData.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="bg-tertiary py-4 px-6 placeholder:text-cyan-300 bg-white/5 text-white rounded-lg outline-none border-none font-medium"
              required
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              autoComplete="off"
              value={formData.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className="bg-tertiary py-4 px-6 placeholder:text-cyan-300 text-white bg-white/5 rounded-lg outline-none border-none font-medium"
              required
            />
            <span className="text-white/50 text-xs mb-4">
              Please enter a valid email so we can reach out to you
            </span>
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-cyan-300 bg-white/5 text-white rounded-lg outline-none border-none resize-none font-medium"
              required
            />
          </label>


          <div className="flex items-end justify-end">
            <button
              type="submit"
              disabled={loading}
              className="py-3 px-8 rounded-xl outline-none w-fit text-white border-2 border-cyan-400/30 hover:bg-cyan-400/70 cursor-pointer transition-all duration-300 font-bold shadow-md shadow-primary"
            >
              {loading ? "Sending..." : "SEND"}
            </button>
          </div>
        </form>
      </motion.div>

      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 70, damping: 20 }}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
}
