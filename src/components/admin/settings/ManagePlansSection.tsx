"use client";

import { useEffect, useState } from "react";
import { showErrorMessage, showSuccessMessage } from "@/lib/helper";
import { Tektur } from "next/font/google";
import AnimatedBlobs from "@/components/ui/AnimatedBlobs";
import { motion, AnimatePresence } from "framer-motion";

const tektur = Tektur({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

type Plan = {
  name: string;
  price: number;
};

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
        showSuccessMessage(`Updated ${name.replace("_", " ")} successfully`);
        fetchPlans();
      } else {
        showErrorMessage(data.message || "Failed to update plan");
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
      className="bg-white/5 h-[75vh] relative z-0 flex flex-col items-center p-6 rounded-xl shadow w-full overflow-hidden"
    >
      <motion.h2
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className={`text-4xl font-bold mb-10 mt-10 text-orange-300 ${tektur.className}`}
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
            className="text-white/80 mt-20"
          >
            Loading plans…
          </motion.p>
        ) : (
          <motion.div
            key="plans"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="space-y-10 mt-20 w-full max-w-2xl"
          >
            {plans.map((plan) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-neutral-800 flex flex-col md:flex-row justify-between items-center p-4 rounded-lg gap-4"
              >
                <div className="font-semibold text-lg capitalize w-52 text-orange-300">
                  {plan.name.replace("_", " ").toLocaleLowerCase()} Plan
                </div>
                <motion.input
                  type="number"
                  min={1}
                  className="px-4 py-2 rounded bg-white/5 text-white w-[10rem] placeholder:text-white/50 focus:outline-none"
                  value={plan.price}
                  onChange={(e) =>
                    handleChange(
                      plans.findIndex((p) => p.name === plan.name),
                      Math.max(0, parseInt(e.target.value) || 0)
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

      <AnimatedBlobs />
    </motion.div>
  );
}
