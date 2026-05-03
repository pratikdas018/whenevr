"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [shouldRender, setShouldRender] = useState(true);

  const letters = "Whenevr".split("");

  useEffect(() => {
    // Total time: stagger (6 * 0.08) + duration (0.5) + fadeout (0.4) ≈ 1.38s
    const timer = setTimeout(() => {
      setShouldRender(false);
      onComplete();
    }, 1380);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!shouldRender) return null;

  return (
    <motion.div
      className="fixed inset-0 z-9999 flex items-center justify-center"
      style={{ backgroundColor: "#EFEFED" }}
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 1.0, duration: 0.4 }}
    >
      <div className="flex items-center justify-center gap-0">
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            className="text-7xl font-semibold tracking-tight md:text-8xl"
            initial={{ opacity: 1, y: 0, x: 0, rotate: 0, filter: "blur(0px)" }}
            animate={{
              opacity: 0,
              y: 80,
              x: 40,
              rotate: 12,
              filter: "blur(8px)",
            }}
            transition={{
              delay: index * 0.08,
              duration: 0.5,
              ease: "easeIn",
            }}
          >
            {letter}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}
