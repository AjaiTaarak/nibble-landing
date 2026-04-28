import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeUp } from "../lib/motion";

export default function FinalCTA() {
  return (
    <section className="px-5 md:px-8 py-20 md:py-28">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        className="relative mx-auto max-w-6xl rounded-[40px] bg-gradient-to-br from-nibble-pink via-nibble-pinkDeep to-nibble-indigo p-10 md:p-16 text-center text-white overflow-hidden grain"
      >
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-white/15 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-10 w-80 h-80 bg-nibble-indigo/40 rounded-full blur-3xl" />

        <div className="relative">
          <h2 className="text-4xl md:text-7xl font-black tracking-tight leading-[0.95] text-balance">
            stop searching databases.<br />
            just type.
          </h2>
          <p className="mt-6 mx-auto max-w-xl text-white/85 text-lg">
            Open Nibble in your browser. Log your next meal in 5 seconds.
            Promise.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://occasionaly-b8731.web.app"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-center gap-2 h-13 px-7 py-4 rounded-full bg-nibble-ink text-nibble-cream font-bold hover:bg-black transition-colors"
            >
              open nibble
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center h-13 px-7 py-4 rounded-full bg-white/15 backdrop-blur border border-white/30 font-bold hover:bg-white/25 transition-colors"
            >
              browse features
            </a>
          </div>
          <p className="mt-6 text-xs text-white/60 font-mono">
            free · no credit card · sign in with google
          </p>
        </div>
      </motion.div>
    </section>
  );
}
