"use client";

import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
    >
      <motion.h1
        initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="text-4xl font-semibold tracking-tight text-white md:text-5xl"
      >
        whenevr<span className="align-super text-sm md:text-base">&reg;</span>
      </motion.h1>
    </motion.div>
  );
}
