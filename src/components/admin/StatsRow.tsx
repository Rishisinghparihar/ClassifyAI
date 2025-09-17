"use client";
import React from "react";
import StatsCard from "./StatsCard";
import { motion } from "framer-motion";

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
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 },
    }),
  };

  const cards: { title: string; value: number; color?: string }[] = [
    { title: titleArray[0], value: stats.totalUsers },
    { title: titleArray[1], value: stats.premiumUsers },
    { title: titleArray[2], value: stats.ultimateUsers },
    { title: titleArray[3], value: stats.proUsers },
  ];

  if (showExpiredCard) {
    cards.push({
      title: "Expired Premiums",
      value: stats.expiredPremiums,
      color: "border-red-500",
    });
  }

  return (
    <div
      className="flex gap-2 px-4 mx-auto w-[50rem]"
    >
      {cards.map((card, idx) => (
        <motion.div
          key={card.title}
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          custom={idx}
        >
          <StatsCard title={card.title} value={card.value} color={card.color} />
        </motion.div>
      ))}
    </div>
  );
};

export default StatsRow;
