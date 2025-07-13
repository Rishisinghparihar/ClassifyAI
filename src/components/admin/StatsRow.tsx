"use client";
import React from "react";
import StatsCard from "./StatsCard";

const StatsRow = ({
  stats,
}: {
  stats: {
    totalUsers: number;
    premiumUsers: number;
    proUsers: number;
    ultimateUsers: number;
    expiredPremiums: number;
  };
}) => {
  return (
     <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 px-6">
        <StatsCard title="Total Users"  value={stats.totalUsers}/>
        <StatsCard title="Premium Users"  value={stats.premiumUsers}/>
        <StatsCard title="Ultimate Users"  value={stats.ultimateUsers}/>
        <StatsCard title="Pro. Users"  value={stats.proUsers}/>
             <StatsCard
        title="Expired Premiums"
        value={stats.expiredPremiums}
        color="border-red-500"
      />
     </div>
  )
};

export default StatsRow;
