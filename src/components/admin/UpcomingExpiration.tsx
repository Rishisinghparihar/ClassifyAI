"use client";

import { Expiration } from "@/lib/types";
import { Tektur } from "next/font/google";
import React, { useEffect, useState } from "react";

const tektur = Tektur({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const UpcomingExpirations = () => {
  const [expirations, setExpirations] = useState<Expiration[]>([]);
  useEffect(() => {
    const fetchExpirations = async () => {
      const res = await fetch("/api/users/expirations");
      const data = await res.json();
      if (data.success) {
        setExpirations(data.upcomingExpirations || []);
      }
    };

    fetchExpirations();
  }, []);

  return (
    <div className="bg-orange-50/5 rounded-xl w-full h-[15rem] p-4 border border-orange-400">
      <h2
        className={`${tektur.className} text-2xl text-center mb-5 text-orange-200`}
      >
        Upcoming Expirations
      </h2>
      {expirations.length > 0 ? (
        <ul className="space-y-1 text-xl text-orange-100">
          {expirations.map((user) => (
            <li key={user.id} className="flex justify-between">
              <span>{user.name}</span>
              <span className="text-base text-orange-300">{user.date}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className=" text-orange-300 text-lg text-center mt-16">
          No upcoming expirations
        </p>
      )}
    </div>
  );
};

export default UpcomingExpirations;
