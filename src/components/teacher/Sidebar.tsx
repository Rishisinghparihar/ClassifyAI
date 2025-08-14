"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, Calendar, Home, Megaphone, Upload } from "lucide-react";

const navLinks = [
  { label: "Dashboard", href: "/dashboard/teacher", icon: Home },
  { label: "Classes", href: "/dashboard/teacher/classes", icon: BookOpen },
  { label: "Attendance", href: "/dashboard/teacher/attendance", icon: Calendar },
  { label: "Announcements", href: "/dashboard/teacher/announcements", icon: Megaphone },
  { label: "Resources", href: "/dashboard/teacher/resources", icon: Upload },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-20  bg-white/5 h-[27rem] items-center justify-center rounded-full backdrop-blur-lg border border-white/10 p-1 flex flex-col shadow-lg">
      <nav className="space-y-3 flex items-center flex-col">
        {navLinks.map(({ label, href, icon: Icon }) => (
          <Link
            key={label}
            href={href}
            className={`flex items-center justify-center gap-3 px-4 py-2 rounded-full h-16 w-16 transition-all duration-200 
              ${pathname === href 
                ? "bg-white/10 text-white shadow-inner" 
                : "text-white/80 hover:bg-white/20 hover:text-white"
              }`}
          >
            <Icon size={28} />
          </Link>
        ))}
      </nav>
    </aside>
  );
}
