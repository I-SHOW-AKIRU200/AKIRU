import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface LoadingScreenProps {
  progress: number;
  isLoaded: boolean;
}

const MESSAGES = [
  "Initializing Experience",
  "Loading BMW Frames",
  "Rendering Motion Engine",
  "Preparing Portfolio",
  "Optimizing UI",
];

export function LoadingScreen({ progress, isLoaded }: LoadingScreenProps) {
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    if (isLoaded) return;
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % MESSAGES.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [isLoaded]);

  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black"
        >
          {/* Ambient background glow */}
          <div className="absolute inset-0 opacity-30 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[600px] max-h-[600px] bg-white/5 rounded-full blur-[120px] animate-pulse" />
          </div>

          <div className="z-10 flex flex-col items-center gap-10">
            {/* Brand name — ghosted behind */}
            <motion.div
              initial={{ opacity: 0, letterSpacing: "0.4em" }}
              animate={{ opacity: 0.06, letterSpacing: "0.5em" }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="absolute text-[20vw] font-display font-bold text-white select-none pointer-events-none"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              AKIRU
            </motion.div>

            {/* Progress glass panel */}
            <div className="glass-panel px-10 py-7 rounded-2xl flex flex-col items-center gap-2 relative">
              <span className="text-xs font-sans tracking-[0.25em] text-white/40 uppercase">
                Progress
              </span>
              <motion.span
                key={progress}
                className="text-7xl font-display font-light text-white tabular-nums"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {progress}%
              </motion.span>
            </div>

            {/* Rotating status messages */}
            <div className="h-6 relative w-72 flex justify-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={messageIndex}
                  initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -12, filter: "blur(6px)" }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                  className="absolute text-xs font-sans text-white/60 tracking-[0.25em] uppercase drop-shadow-[0_0_10px_rgba(255,255,255,0.25)]"
                >
                  {MESSAGES[messageIndex]}
                </motion.span>
              </AnimatePresence>
            </div>

            {/* Thin progress bar */}
            <div className="w-48 h-[1px] bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-white/60"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "easeOut", duration: 0.3 }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
