import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function MovingBlobs() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 100; // range [-50, 50]
      const y = (e.clientY / innerHeight - 0.5) * 100;
      mouseX.set(x);
      mouseY.set(y);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="absolute inset-0 z-[-1]">
      {/* Purple blob - static with pulse */}
      <div className="absolute -top-1/3 -left-1/3 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl animate-pulse"></div>

      {/* Orange blob - springy + mouse reactive */}
      <motion.div
        className="absolute w-80 h-80 bg-orange-500/20 rounded-full filter blur-2xl"
        style={{
          x: smoothX,
          y: smoothY,
        }}
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
          ease: "easeInOut",
        }}
      />

      {/* Blue blob - random drift */}
      <motion.div
        className="absolute w-40 h-40 bg-blue-500/10 rounded-full filter blur-xl"
        animate={{
          x: ["10%", "-15%", "20%", "0%"],
          y: ["5%", "20%", "-10%", "0%"],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
