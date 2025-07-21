"use client";

import React from "react";
import { Tektur } from "next/font/google";
import { Event } from "@/lib/types";
import { Pencil, Trash } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const tektur = Tektur({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const EventTable = ({
  events,
  onEdit,
  onDelete,
}: {
  events: Event[];
  onEdit: (event: Event) => void;
  onDelete: (event: Event) => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="overflow-x-auto rounded-xl border max-h-[450px] overflow-scroll scrollbar-hide border-orange-400"
    >
      <table className="min-w-full text-sm text-left text-orange-100">
        <thead
          className={`${tektur.className} bg-orange-900 text-orange-200 sticky top-0`}
        >
          <tr>
            <th className="px-4 py-3">Title</th>
            <th className="px-4 py-3">Date</th>
            <th className="px-4 py-3">Type</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          <AnimatePresence>
            {events.map((event, idx) => (
              <motion.tr
                key={event.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className={`${
                  idx % 2 === 0 ? "bg-orange-50/5" : "bg-orange-50/10"
                } hover:bg-orange-50/20 transition`}
              >
                <td className="px-4 py-3">{event.title}</td>
                <td className="px-4 py-3">
                  {new Date(event.date).toLocaleDateString()}
                </td>
                <td className="px-4 py-3">{event.type}</td>
                <td className="px-4 py-3">
                  {event.active ? (
                    <span className="px-2 py-1 text-xs rounded bg-green-600/30 text-green-300">
                      Active
                    </span>
                  ) : (
                    <span className="px-2 py-1 text-xs rounded bg-red-600/30 text-red-300">
                      Inactive
                    </span>
                  )}
                </td>
                <td className="px-4 py-3 flex gap-2">
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => onEdit(event)}
                    className="p-1 rounded hover:bg-orange-600/30 transition"
                  >
                    <Pencil size={16} />
                  </motion.button>
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => onDelete(event)}
                    className="p-1 rounded hover:bg-red-600/30 transition"
                  >
                    <Trash size={16} />
                  </motion.button>
                </td>
              </motion.tr>
            ))}
          </AnimatePresence>
        </tbody>
      </table>
    </motion.div>
  );
};

export default EventTable;
