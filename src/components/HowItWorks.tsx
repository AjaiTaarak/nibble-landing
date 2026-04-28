import { motion } from "framer-motion";
import { Keyboard, LogIn, Settings2 } from "lucide-react";
import { fadeUp, stagger } from "../lib/motion";

const steps = [
  {
    n: "01",
    title: "Sign in with Google",
    body: "Single tap. Firebase Auth handles it. No passwords, no friction.",
    icon: <LogIn size={20} />,
  },
  {
    n: "02",
    title: "Two or three quick questions",
    body: "Weight, height, age, sex, goal, pace. We compute your kcal target and split macros 30 / 40 / 30.",
    icon: <Settings2 size={20} />,
  },
  {
    n: "03",
    title: "Type what you ate",
    body: "Open the app. Type a sentence. Done. Edit anything the AI got slightly wrong.",
    icon: <Keyboard size={20} />,
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how"
      className="relative py-20 md:py-28 px-5 md:px-8 bg-nibble-ink text-nibble-cream overflow-hidden"
    >
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[60rem] h-[40rem] bg-nibble-pink/15 blur-[120px] rounded-full pointer-events-none" />

      <motion.div
        variants={stagger(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="relative mx-auto max-w-7xl"
      >
        <motion.div variants={fadeUp} className="max-w-2xl">
          <span className="inline-flex items-center gap-1.5 px-2.5 h-7 rounded-full bg-white/10 text-nibble-cream text-xs font-bold uppercase tracking-wider">
            how it works
          </span>
          <h2 className="mt-5 text-4xl md:text-6xl font-black tracking-tight leading-[1] text-balance">
            three taps to a tracked day.
          </h2>
        </motion.div>

        <div className="mt-12 grid md:grid-cols-3 gap-4 md:gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              variants={fadeUp}
              className="relative rounded-3xl bg-white/5 backdrop-blur border border-white/10 p-6 hover:border-nibble-pink/40 transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-nibble-cream/40">
                  {s.n}
                </span>
                <span className="grid place-items-center w-10 h-10 rounded-2xl bg-nibble-pink/15 text-nibble-pink">
                  {s.icon}
                </span>
              </div>
              <h3 className="mt-6 text-2xl font-black tracking-tight leading-tight">
                {s.title}
              </h3>
              <p className="mt-2 text-nibble-cream/70 text-sm leading-relaxed">
                {s.body}
              </p>
              {i < steps.length - 1 && (
                <span
                  aria-hidden
                  className="hidden md:block absolute top-1/2 -right-3 w-6 h-px bg-gradient-to-r from-nibble-pink to-transparent"
                />
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
