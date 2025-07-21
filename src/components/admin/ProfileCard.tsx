"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const ProfileCard = () => {
  return (
    <motion.div
      className="border-2 rounded-full w-[12rem] px-5 py-2 items-center justify-center flex"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="flex flex-col justify-center items-center p-4">
        <span className="font-semibold">ClassifyAI</span>
        <span className="ml-5 text-xs">Admin</span>
      </div>
      <Image
        src="/only-logo.png"
        alt="App Logo"
        width={70}
        height={50}
        className="invert"
      />
    </motion.div>
  );
};

export default ProfileCard;
