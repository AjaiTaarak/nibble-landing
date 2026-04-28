import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-nibble-cream/75 backdrop-blur-xl border-b border-nibble-ink/5"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-black text-nibble-ink">
          <span
            aria-hidden
            className="grid place-items-center w-8 h-8 rounded-xl bg-gradient-to-br from-nibble-pink to-nibble-indigo text-nibble-cream font-black"
          >
            N
          </span>
          <span className="text-lg tracking-tight">nibble</span>
        </a>

        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-nibble-ink/70">
          <a className="hover:text-nibble-ink transition-colors" href="#how">
            how it works
          </a>
          <a className="hover:text-nibble-ink transition-colors" href="#features">
            features
          </a>
          <a className="hover:text-nibble-ink transition-colors" href="#demo">
            demo
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 h-8 rounded-full bg-nibble-blush text-nibble-pinkDeep font-semibold text-xs shadow-chip">
            <Zap size={14} className="fill-nibble-pinkDeep stroke-nibble-pinkDeep" />
            7 day streak
          </span>
          <a
            href="https://occasionaly-b8731.web.app"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center h-9 px-4 rounded-full bg-nibble-ink text-nibble-cream text-sm font-semibold hover:bg-nibble-ink/90 transition-colors"
          >
            open app
          </a>
        </div>
      </div>
    </motion.header>
  );
}
