"use client";
import React from "react";
import StatsCard from "./StatsCard";

const StatsRow = ({
  stats,
  titleArray,
  showExpiredCard = true,
}: {
  stats: {
    totalUsers: number;
    premiumUsers: number;
    proUsers: number;
    ultimateUsers: number;
    expiredPremiums: number;
  };
  titleArray: string[];
  showExpiredCard?: boolean;
}) => {
  return (
    <div
      className="grid gap-4 px-6 mx-auto w-full max-w-6xl"
      style={{
        gridTemplateColumns: `repeat(auto-fit, minmax(180px, 1fr))`,
      }}
    >
      <StatsCard title={titleArray[0]} value={stats.totalUsers} />
      <StatsCard title={titleArray[1]} value={stats.premiumUsers} />
      <StatsCard title={titleArray[2]} value={stats.ultimateUsers} />
      <StatsCard title={titleArray[3]} value={stats.proUsers} />
      {showExpiredCard && (
        <StatsCard
          title="Expired Premiums"
          value={stats.expiredPremiums}
          color="border-red-500"
        />
      )}
    </div>
  );
};

export default StatsRow;
