import { EventItem } from "@/lib/types";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Tektur } from "next/font/google";

// ✅ Load Tektur font
const tektur = Tektur({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});


const UpComingEvents = ({ expanded }: { expanded: boolean }) => {
  const [events, setEvents] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch("/api/admin/event");
        const data = await res.json();
        if (data.success) {
          setEvents(data.events);
        }
      } catch {
        console.log("Error fetching events");
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  if (loading) {
    return (
      <p className="text-gray-400 text-sm animate-pulse">
        Loading upcoming events…
      </p>
    );
  }

  return (
    <div className="flex outline-none items-center justify-center w-full">
      {events.length === 0 && (
        <p className="text-gray-400 text-xs">No upcoming events found.</p>
      )}

      <motion.div
        layout
        transition={{ duration: 0.5 }}
        className="overflow-y-auto outline-none w-full scrollbar-hide"
        style={{
          maxHeight: expanded ? "30rem" : "12rem",
        }}
      >
        <ul className="space-y-2 outline-none">
          {events.map((event) => (
            <li
              key={event.id}
              className="flex justify-between outline-none items-center px-2 py-3 hover:cursor-pointer hover:shadow transition-all duration-700 hover:shadow-amber-600 rounded bg-white/5 text-gray-200"
            >
              <article className="flex flex-col max-w-[19rem] p-4">
                <h3 className={`font-medium text-orange-100 ${tektur.className}`}>{event.title}</h3>
                <p
                  className="text-xs text-gray-400 truncate"
                  title={event.description}
                >
                  {event.description}
                </p>
              </article>

              <time
                dateTime={new Date(event.date).toISOString()}
                className="text-orange-600 text-sm"
              >
                {new Date(event.date).toLocaleDateString("en-IN", {
                  day: "2-digit",
                  month: "short",
                })}
              </time>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default UpComingEvents;
