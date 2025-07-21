"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Logo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-center mt-5 gap-2"
    >
      <motion.div
        initial={{ rotate: -20, scale: 0.8 }}
        animate={{ rotate: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 10 }}
      >
        <Image
          src={"/only-logo.png"}
          width={80}
          height={80}
          className="invert"
          alt="LOGO..."
        />
      </motion.div>
      <motion.span
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        className="text-4xl"
      >
        Classify <span className="text-orange-700 -ml-2">AI</span>
      </motion.span>
    </motion.div>
  );
};

export default Logo;
