"use client";

import { useEffect, useState } from "react";
import { showErrorMessage, showSuccessMessage } from "@/lib/helper";
import { Tektur } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import { Plan } from "@/lib/types";

const tektur = Tektur({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function ManagePlansSection() {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState<string | null>(null);

  useEffect(() => {
    fetchPlans();
  }, []);

  const fetchPlans = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/settings/plans");
      const data = await res.json();
      if (res.ok) {
        setPlans(data.plans);
      } else {
        showErrorMessage(data.message || "Failed to fetch plans.");
      }
    } catch {
      showErrorMessage("Something went wrong while fetching plans.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (index: number, value: number) => {
    const updated = [...plans];
    updated[index].price = value;
    setPlans(updated);
  };

  const handleSave = async (name: string, price: number) => {
    if (price <= 0) {
      showErrorMessage("Price must be greater than 0.");
      return;
    }

    setSaving(name);
    try {
      const res = await fetch("/api/admin/settings/plans", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, price }),
      });
      const data = await res.json();
      if (res.ok) {
        showSuccessMessage(`Updated ${name.replace("_", " ")} successfully.`);
        fetchPlans();
      } else {
        showErrorMessage(data.message || "Failed to update plan.");
      }
    } catch {
      showErrorMessage("Something went wrong while updating plan.");
    } finally {
      setSaving(null);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="
        relative bg-gradient-to-br from-white/10 to-black/20 backdrop-blur-md
        h-[75vh] flex flex-col items-center p-6 rounded-xl shadow-xl border border-white/10 w-full
      "
    >
      {/* Blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden rounded-xl">
        {/* Purple blob */}
        <div className="absolute -top-1/3 -left-1/3 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl animate-pulse"></div>

        {/* Orange blob */}
        <motion.div
          className="absolute w-80 h-80 bg-orange-500/20 rounded-full filter blur-2xl"
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

        {/* Blue blob */}
        <motion.div
          className="absolute w-40 h-40 bg-blue-500/10 rounded-full filter blur-xl"
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
        Manage Premium Plans
      </motion.h2>

      <AnimatePresence>
        {loading ? (
          <motion.p
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-white/80 mt-20 z-10"
          >
            Loading plans…
          </motion.p>
        ) : (
          <motion.div
            key="plans"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="space-y-5 mt-20 w-full max-w-2xl z-10"
          >
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-neutral-800/50 flex flex-col md:flex-row justify-between items-center p-4 rounded-lg gap-4"
              >
                <div className="font-semibold text-lg capitalize w-52 text-orange-300">
                  {plan.name.replace("_", " ").toLowerCase()} plan
                </div>
                <motion.input
                  type="number"
                  min={1}
                  className="px-4 py-2 rounded bg-white/5 text-white w-[10rem] placeholder:text-white/50 focus:outline-none"
                  value={plan.price}
                  onChange={(e) =>
                    handleChange(
                      index,
                      Math.max(1, parseInt(e.target.value) || 1)
                    )
                  }
                  whileFocus={{ scale: 1.02 }}
                />
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleSave(plan.name, plan.price)}
                  disabled={saving === plan.name}
                  className="bg-orange-600 hover:bg-orange-700 transition rounded px-4 py-2 text-white font-semibold"
                >
                  {saving === plan.name ? "Saving…" : "Save"}
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
