"use client";
import { Activity } from "@/lib/types";
import { Tektur } from "next/font/google";
import { useEffect, useState } from "react";

const tektur = Tektur({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const RecentPremiumActivity = () => {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    const fetchActivities = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users/recent-activity`);
      const data = await res.json();
      if (data.success) {
        setActivities(data.activities);
      }
    };

    fetchActivities();
  }, []);
  return (
    <div className="bg-orange-50/5 rounded-xl p-4 border w-full border-orange-400">
      <h2
        className={`${tektur.className} text-2xl text-orange-200 text-center mb-5`}
      >
        Recent Premium Activity
      </h2>

      {activities.length > 0 ? (
        <ul className="space-y-1 text-lg flex flex-col items-center justify-center mb-3 overflow-scroll scrollbar-hide h-[10rem] text-orange-100">
          {activities.map((a) => (
            <li key={a.id} className="p-3 border w-[30rem] my-1 rounded">
              <span className="text-sm">{a.text}</span>
              <span className="text-orange-300 ml-2 text-xs">({a.date})</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-lg text-orange-300 mt-16 text-center">
          No recent activity
        </p>
      )}
    </div>
  );
};

export default RecentPremiumActivity;
