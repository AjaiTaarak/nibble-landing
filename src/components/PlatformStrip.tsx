import { motion } from "framer-motion";
import { fadeUp } from "../lib/motion";

const tags = [
  "type-what-you-ate",
  "no databases",
  "no menus",
  "no portion sliders",
  "gemini 2.5 flash",
  "30/40/30 macros",
  "MET-based exercise",
  "streaks ⚡",
  "calendar dots",
  "edit anything",
  "pwa installable",
  "android · ios",
];

export default function PlatformStrip() {
  return (
    <section className="relative py-10 md:py-14 overflow-hidden border-y border-nibble-ink/5 bg-white">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <div className="relative">
          <div className="flex w-max gap-3 animate-marquee">
            {[...tags, ...tags].map((t, i) => (
              <span
                key={i}
                className="inline-flex items-center px-4 h-10 rounded-full border border-nibble-ink/10 text-sm font-semibold text-nibble-ink/80 whitespace-nowrap bg-nibble-cream"
              >
                {t}
              </span>
            ))}
          </div>
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent pointer-events-none" />
        </div>
      </motion.div>
    </section>
  );
}
