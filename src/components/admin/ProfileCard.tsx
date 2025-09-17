"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const ProfileCard = () => {
  return (
    <motion.div
      className="border-2 rounded-full w-[9.5rem] px-3  items-center justify-center flex "
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="flex flex-col justify-center items-center p-4">
        <span className="font-semibold text-sm ">ClassifyAI</span>
        <span className=" text-[10px]">Admin</span>
      </div>
      <Image
        src="/only-logo.png"
        alt="App Logo"
        width={40}
        height={20}
        className="invert"
      />
    </motion.div>
  );
};

export default ProfileCard;
