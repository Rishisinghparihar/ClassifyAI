"use client";

import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckDouble,
  faLightbulb,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";

const InsightsPanel = () => {
  const [data, setData] = useState<{ risks: string[]; insights: string[] }>({
    risks: [],
    insights: [],
  });

  useEffect(() => {
    const fetchInsights = async () => {
      const res = await fetch(`/api/admin/event/insights`);
      const json = await res.json();
      if (json.success) setData({ risks: json.risks, insights: json.insights });
    };
    fetchInsights();
  }, []);

  const panelVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: 0.1 } },
      }}
      className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 w-full"
    >
      {/* Planning Risk Assessment */}
      <motion.div
        variants={panelVariants}
        className="bg-red-50/10 border border-red-500 p-4 rounded-xl text-red-300 w-full"
      >
        <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
          <FontAwesomeIcon
            icon={faTriangleExclamation}
            className="text-red-400"
          />
          Planning Risk Assessment
        </h2>
        <div className="max-h-28 overflow-y-auto pr-2 space-y-1">
          <AnimatePresence>
            {data.risks.length > 0 ? (
              <ul className="space-y-1">
                {data.risks.map((r, i) => (
                  <motion.li
                    key={i}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={itemVariants}
                    transition={{ duration: 0.2 }}
                  >
                    • {r}
                  </motion.li>
                ))}
              </ul>
            ) : (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-sm"
              >
                ✅ No significant risks detected
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Intelligent Suggestions */}
      <motion.div
        variants={panelVariants}
        className="bg-blue-50/10 border border-blue-500 p-4 rounded-xl text-blue-300 w-full"
      >
        <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
          <FontAwesomeIcon
            icon={faLightbulb}
            className="text-blue-400"
          />
          Intelligent Suggestions
        </h2>
        <div className="max-h-64 overflow-y-auto pr-2 space-y-1">
          <AnimatePresence>
            {data.insights.length > 0 ? (
              <ul className="space-y-1">
                {data.insights.map((s, i) => (
                  <motion.li
                    key={i}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={itemVariants}
                    transition={{ duration: 0.2 }}
                  >
                    • {s}
                  </motion.li>
                ))}
              </ul>
            ) : (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-sm flex items-center gap-1"
              >
                <FontAwesomeIcon
                  icon={faCheckDouble}
                  className="text-blue-400"
                />
                All good — no suggestions at this time
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default InsightsPanel;
