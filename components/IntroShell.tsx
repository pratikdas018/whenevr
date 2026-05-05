"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Loader from "@/components/Loader";

const INTRO_KEY = "whenevr-intro-seen";

export default function IntroShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showLoader, setShowLoader] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem(INTRO_KEY) === "true";

    if (hasSeenIntro) {
      setReady(true);
      return;
    }

    setShowLoader(true);

    const timer = window.setTimeout(() => {
      sessionStorage.setItem(INTRO_KEY, "true");
      setShowLoader(false);
      window.setTimeout(() => setReady(true), 250);
    }, 2500);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  if (!ready && !showLoader) {
    return null;
  }

  return (
    <>
      <AnimatePresence>{showLoader ? <Loader /> : null}</AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showLoader ? 0 : 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={showLoader ? "pointer-events-none" : ""}
      >
        {children}
      </motion.div>
    </>
  );
}
