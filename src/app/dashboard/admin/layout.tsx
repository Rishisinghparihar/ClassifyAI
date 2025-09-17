"use client";

import ProfileCard from "@/components/admin/ProfileCard";
import UpComingEvents from "@/components/admin/UpComingEvents";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Tektur } from "next/font/google";
import AdminSidebar from "@/components/admin/AdminSidebar";
import Logo from "@/components/admin/Logo";
import RecentAttendancePage from "@/components/admin/RecentAttendance";

const tektur = Tektur({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [expanded, setExpanded] = useState<"upcoming" | "recent" | null>(null);

  return (
    <div className={`relative h-screen w-screen ${tektur.className} overflow-hidden`}>
      {/* 🔷 Overlay for readability */}
      <div className="absolute inset-0 bg-black/90 z-0" />

      <div className="relative z-10 flex h-screen w-screen">
        {/* LEFT */}
        <div className="h-screen w-[15.33vw]">
          <Logo />
          <div className="grid place-items-center p-5">
            <AdminSidebar />
          </div>
        </div>

        {/* CENTER */}
        <div className="h-screen w-[55.33vw]">{children}</div>

        {/* RIGHT */}
        <div className="h-screen w-[30vw] relative overflow-hidden">
          <div className="text-white p-4 h-full flex flex-col gap-4">
            <div className="ml-20 mb-2">
              <ProfileCard />
            </div>

            <AnimatePresence mode="wait">
              {expanded !== "recent" && (
                <motion.div
                  key="upcoming"
                  initial={{ flexGrow: 1 }}
                  animate={{ flexGrow: expanded === "upcoming" ? 10 : 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="overflow-hidden flex flex-col"
                >
                  <div className="grid place-items-center w-80 h-80">
                    <h1 className={`${tektur.className} text-xl `}>
                      Upcoming Events
                    </h1>
                    <UpComingEvents expanded={expanded === "upcoming"} />
                    <button
                      onClick={() =>
                        setExpanded(expanded === "upcoming" ? null : "upcoming")
                      }
                      className={`mt-2 text-sm text-orange-400 flex items-center justify-center w-[80%] transition-all duration-300 ${
                        expanded === "upcoming"
                          ? "border-b-2 border-orange-700"
                          : "border-b border-orange-600"
                      }`}
                    >
                      {expanded === "upcoming" ? <ChevronUp /> : <ChevronDown />}
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence mode="wait">
              {expanded !== "upcoming" && (
                <motion.div
                  key="recent"
                  initial={{ flexGrow: 1 }}
                  animate={{ flexGrow: expanded === "recent" ? 10 : 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="overflow-hidden flex flex-col"
                >
                  <div className="grid place-items-center w-80 h-80">
                    <h1 className={`${tektur.className} text-xl `}>
                      Recent Attendance
                    </h1>
                    <RecentAttendancePage expanded={expanded === "recent"} />
                    <button
                      onClick={() =>
                        setExpanded(expanded === "recent" ? null : "recent")
                      }
                      className={`mt-2 text-sm text-orange-400 flex items-center justify-center w-[80%] transition-all duration-300 ${
                        expanded === "recent"
                          ? "border-b-2 border-orange-700"
                          : "border-b border-orange-600"
                      }`}
                    >
                      {expanded === "recent" ? <ChevronUp /> : <ChevronDown />}
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
