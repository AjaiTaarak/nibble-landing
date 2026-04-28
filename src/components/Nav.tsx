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
        <a href="#top" className="flex items-center gap-2 font-extrabold text-nibble-ink">
          <img
            src="/nibble_no_bg.png"
            alt="Nibble"
            width={36}
            height={36}
            className="w-9 h-9 object-contain"
          />
          <span className="text-xl tracking-tight">Nibble</span>
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
            href="http://nibble.occasionaly.in/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center h-9 px-4 rounded-full bg-nibble-ink text-nibble-cream text-sm font-bold hover:bg-nibble-pinkDeep transition-colors"
          >
            open app
          </a>
        </div>
      </div>
    </motion.header>
  );
}
