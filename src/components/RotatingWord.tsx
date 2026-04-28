import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

type Props = {
  words: string[];
  intervalMs?: number;
  className?: string;
};

export default function RotatingWord({
  words,
  intervalMs = 1900,
  className = "",
}: Props) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % words.length), intervalMs);
    return () => clearInterval(t);
  }, [words.length, intervalMs]);

  return (
    <span
      className={`inline-block relative align-baseline ${className}`}
      style={{ minWidth: "5ch" }}
    >
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={words[i]}
          initial={{ y: "100%", opacity: 0, rotate: 4 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: "-100%", opacity: 0, rotate: -4 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block bg-gradient-to-r from-nibble-pink via-nibble-pinkDeep to-nibble-indigo bg-clip-text text-transparent italic font-display"
        >
          {words[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
