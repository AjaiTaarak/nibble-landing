import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import RotatingWord from "./RotatingWord";
import { fadeUp, stagger } from "../lib/motion";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative pt-28 md:pt-36 pb-20 md:pb-28 overflow-hidden"
    >
      {/* Decorative blobs */}
      <div className="grain absolute inset-0 -z-10" aria-hidden>
        <div className="absolute -top-40 -right-32 w-[40rem] h-[40rem] rounded-full bg-nibble-pink/30 blur-3xl animate-blob" />
        <div className="absolute top-40 -left-40 w-[34rem] h-[34rem] rounded-full bg-nibble-indigo/25 blur-3xl animate-blob [animation-delay:-6s]" />
        <div className="absolute inset-0 bg-grid-faint bg-[size:42px_42px] opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      </div>

      <motion.div
        variants={stagger(0.08)}
        initial="hidden"
        animate="show"
        className="mx-auto max-w-7xl px-5 md:px-8 text-center"
      >
        <motion.div variants={fadeUp} className="flex justify-center">
          <span className="inline-flex items-center gap-2 px-3 h-8 rounded-full bg-white/70 backdrop-blur border border-nibble-ink/10 text-xs font-semibold text-nibble-ink/80 shadow-soft">
            <Sparkles size={13} className="text-nibble-pink" />
            powered by gemini 2.5 flash
          </span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="mt-6 mx-auto max-w-5xl text-5xl sm:text-6xl md:text-8xl font-black tracking-tight text-nibble-ink leading-[0.95] text-balance"
        >
          log food the way
          <br className="hidden sm:block" /> you{" "}
          <RotatingWord words={["talk", "text", "think", "vent"]} /> about it.
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-7 mx-auto max-w-2xl text-base md:text-xl text-nibble-ink/65 leading-relaxed"
        >
          Type <span className="font-mono text-nibble-ink/80">"half biryani and a lassi"</span>.
          Done. No menus, no databases, no portion sliders. One sentence in,
          full macros out.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            href="https://occasionaly-b8731.web.app"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 h-12 pl-6 pr-5 rounded-full bg-nibble-ink text-nibble-cream font-semibold shadow-pop hover:bg-nibble-pinkDeep transition-colors"
          >
            try the web app
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </a>
          <a
            href="#how"
            className="inline-flex items-center h-12 px-6 rounded-full bg-white border border-nibble-ink/10 text-nibble-ink font-semibold hover:border-nibble-ink/30 transition-colors"
          >
            how it works
          </a>
        </motion.div>

        <motion.p
          variants={fadeUp}
          className="mt-5 text-xs text-nibble-ink/50"
        >
          android · ios · pwa · sign in with google
        </motion.p>
      </motion.div>
    </section>
  );
}
