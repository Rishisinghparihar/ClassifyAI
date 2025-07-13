"use client";
import React from "react";

const StatsCard = ({
  title,
  value,
  color,
}: {
  title: string;
  value: number;
  color?: string;
}) => {
  return <div className={`flex flex-col gap-1  p-4 rounded-2xl shadow bg-orange-50/5 border ${color??"border-orange-400"}`}>
    <span className="text-xs text-orange-100">{title}</span>
    <span className="text-2xl font-semibold text-orange-200">{value}</span>
  </div>;
};

export default StatsCard;
