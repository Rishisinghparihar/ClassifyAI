"use client";

import { motion } from "framer-motion";

export default function AnimatedBlobs() {
  return (
    <>
      {/* Top-right blob */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-orange-800/35 z-[-1] flex items-center justify-center rounded-full absolute -right-[4rem] -top-[4rem] h-60 w-60 overflow-visible"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.7, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-black/55 h-26 w-26 rounded-bl-full mt-5 mr-5"
        />
      </motion.div>

      {/* Bottom-left blob */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-orange-800/35 z-[-1] flex items-center justify-center rounded-full absolute -left-[4rem] -bottom-[4rem] h-60 w-60 overflow-visible"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.7, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-black/55 h-26 w-26 rounded-tr-full mt-5 mr-5"
        />
      </motion.div>
    </>
  );
}
