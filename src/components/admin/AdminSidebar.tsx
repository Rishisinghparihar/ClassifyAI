"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import React from "react";
import { Tektur } from "next/font/google";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faCalendarDays,
  faCrown,
  faGear,
  faArrowRightFromBracket,
  faChartSimple,
} from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";

// ✅ Load Tektur font
const tektur = Tektur({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const links = [
  { href: "/dashboard/admin", icon: faChartSimple, label: "Dashboard" },
  { href: "/dashboard/admin/users", icon: faUsers, label: "Manage Users" },
  { href: "/dashboard/admin/events", icon: faCalendarDays, label: "Events" },
  { href: "/dashboard/admin/premium", icon: faCrown, label: "Premium" },
  { href: "/dashboard/admin/settings", icon: faGear, label: "Settings" },
  { href: "/dashboard/admin/logout", icon: faArrowRightFromBracket, label: "Logout" },
];

const AdminSidebar = () => {
  const pathname = usePathname();
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <motion.aside
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, type: "spring" }}
      className={`bg-gradient-to-t from-orange-900 via-gray-900 to-black text-gray-300 w-37 h-[38rem] gap-20 flex flex-col items-center justify-start rounded-full p-2 ${tektur.className}`}
    >
      <motion.h1
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className={`text-lg font-bold text-orange-600 capitalize mt-18 ${tektur.className}`}
      >
        Admin panel
      </motion.h1>

      <nav className="flex flex-col gap-4 relative">
        {links.map((link) => (
          <div
            key={link.href}
            className="relative"
            onMouseEnter={() => setHovered(link.label)}
            onMouseLeave={() => setHovered(null)}
          >
            <Link
              href={link.href}
              className={`px-3 py-2 rounded flex items-center justify-center text-2xl ${
                pathname === link.href
                  ? "text-orange-600"
                  : "hover:text-orange-700/30"
              }`}
            >
              <FontAwesomeIcon icon={link.icon} />
            </Link>

            <AnimatePresence>
              {hovered === link.label && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, x: 20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.9, x: 20 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-full top-1/2 w-[9rem] flex items-center justify-center -translate-y-1/2 ml-3 bg-black text-orange-100 px-4 py-2 rounded-lg shadow-lg z-10"
                >
                  {link.label}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </nav>
    </motion.aside>
  );
};

export default AdminSidebar;
