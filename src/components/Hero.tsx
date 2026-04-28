import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import RotatingWord from "./RotatingWord";
import { fadeUp, stagger } from "../lib/motion";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden"
    >
      {/* Decorative blobs */}
      <div className="grain absolute inset-0 -z-10" aria-hidden>
        <div className="absolute -top-40 -right-32 w-[40rem] h-[40rem] rounded-full bg-nibble-pink/30 blur-3xl animate-blob" />
        <div className="absolute top-40 -left-40 w-[34rem] h-[34rem] rounded-full bg-nibble-blush/60 blur-3xl animate-blob [animation-delay:-6s]" />
        <div className="absolute inset-0 bg-grid-faint bg-[size:42px_42px] opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      </div>

      <motion.div
        variants={stagger(0.08)}
        initial="hidden"
        animate="show"
        className="mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-12 items-center"
      >
        <div className="text-center lg:text-left">
          <motion.div variants={fadeUp} className="flex justify-center lg:justify-start">
            <span className="inline-flex items-center gap-2 px-3 h-8 rounded-full bg-white/80 backdrop-blur border border-nibble-ink/10 text-xs font-bold text-nibble-ink/80 shadow-soft">
              <Sparkles size={13} className="text-nibble-pink" />
              powered by gemini 2.5 flash
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-6 text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-extrabold tracking-tight text-nibble-ink leading-[0.95] text-balance"
          >
            Just type.<br />
            We'll do the{" "}
            <RotatingWord words={["math", "macros", "magic", "tracking"]} />.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-7 max-w-xl mx-auto lg:mx-0 text-base md:text-xl text-nibble-ink/65 leading-relaxed font-medium"
          >
            Log meals in plain English —{" "}
            <span className="font-mono text-nibble-ink/85">"two eggs and toast"</span>
            {" "}— and let AI handle the calories and macros.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-9 flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-3"
          >
            <a
              href="http://nibble.occasionaly.in/"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 h-12 pl-6 pr-5 rounded-full bg-nibble-ink text-nibble-cream font-bold shadow-pop hover:bg-nibble-pinkDeep transition-colors"
            >
              try the web app
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </a>
            <a
              href="#how"
              className="inline-flex items-center h-12 px-6 rounded-full bg-white border border-nibble-ink/10 text-nibble-ink font-bold hover:border-nibble-ink/30 transition-colors"
            >
              how it works
            </a>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mt-5 text-xs text-nibble-ink/50 font-semibold"
          >
            android · ios · pwa · sign in with google
          </motion.p>
        </div>

        {/* Illustration */}
        <motion.div
          variants={fadeUp}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-nibble-blush/50 to-transparent blur-2xl rounded-full" />
          <motion.img
            src="/onboarding_1.png"
            alt="Two idli and vada — 320 cal, 18g, 400 cal, 20g — illustrated example of plain-English logging"
            className="w-full h-auto drop-shadow-xl select-none"
            draggable={false}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
