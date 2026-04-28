import { motion } from "framer-motion";
import { Keyboard, LogIn, Settings2 } from "lucide-react";
import { fadeUp, stagger } from "../lib/motion";

const steps = [
  {
    n: "01",
    title: "Sign in with Google",
    body: "Single tap. Firebase Auth handles it. No passwords, no friction.",
    icon: <LogIn size={20} />,
    tone: "blush",
  },
  {
    n: "02",
    title: "Two or three quick questions",
    body: "Weight, height, age, sex, goal, pace. We compute your kcal target and split macros 30 / 40 / 30.",
    icon: <Settings2 size={20} />,
    tone: "indigo",
  },
  {
    n: "03",
    title: "Type what you ate",
    body: "Open the app. Type a sentence. Done. Edit anything the AI got slightly wrong.",
    icon: <Keyboard size={20} />,
    tone: "pink",
  },
] as const;

export default function HowItWorks() {
  return (
    <section
      id="how"
      className="relative py-20 md:py-28 px-5 md:px-8 overflow-hidden"
    >
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[60rem] h-[40rem] bg-nibble-blush/60 blur-[120px] rounded-full pointer-events-none -z-10" />

      <motion.div
        variants={stagger(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="relative mx-auto max-w-7xl"
      >
        <motion.div variants={fadeUp} className="max-w-2xl">
          <span className="inline-flex items-center gap-1.5 px-2.5 h-7 rounded-full bg-white border border-nibble-ink/10 text-nibble-ink text-xs font-bold uppercase tracking-wider">
            how it works
          </span>
          <h2 className="mt-5 text-4xl md:text-6xl font-extrabold tracking-tight leading-[1] text-balance text-nibble-ink">
            Three taps to a tracked day.
          </h2>
          <p className="mt-4 text-nibble-ink/65 text-lg max-w-lg font-medium">
            From zero to logged in under a minute. Then it's just typing.
          </p>
        </motion.div>

        <div className="mt-12 grid md:grid-cols-3 gap-4 md:gap-6">
          {steps.map((s, i) => {
            const toneMap = {
              blush: {
                card: "bg-white border-nibble-ink/5",
                pill: "bg-nibble-blush text-nibble-pinkDeep",
                num: "text-nibble-pink/40",
              },
              indigo: {
                card: "bg-white border-nibble-ink/5",
                pill: "bg-nibble-indigo/10 text-nibble-indigoDeep",
                num: "text-nibble-indigo/40",
              },
              pink: {
                card: "bg-gradient-to-br from-nibble-pink to-nibble-pinkDeep text-white border-transparent",
                pill: "bg-white text-nibble-pinkDeep",
                num: "text-white/45",
              },
            }[s.tone];
            const isPink = s.tone === "pink";
            return (
              <motion.div
                key={s.n}
                variants={fadeUp}
                className={`relative rounded-3xl border p-6 shadow-soft hover:-translate-y-1 transition-transform ${toneMap.card}`}
              >
                <div className="flex items-center justify-between">
                  <span className={`font-mono text-xs font-bold ${toneMap.num}`}>
                    {s.n}
                  </span>
                  <span
                    className={`grid place-items-center w-10 h-10 rounded-2xl ${toneMap.pill}`}
                  >
                    {s.icon}
                  </span>
                </div>
                <h3 className="mt-6 text-2xl font-extrabold tracking-tight leading-tight">
                  {s.title}
                </h3>
                <p
                  className={`mt-2 text-sm leading-relaxed font-medium ${
                    isPink ? "text-white/85" : "text-nibble-ink/65"
                  }`}
                >
                  {s.body}
                </p>
                {i < steps.length - 1 && (
                  <span
                    aria-hidden
                    className="hidden md:block absolute top-1/2 -right-3 w-6 h-px bg-gradient-to-r from-nibble-pink to-transparent"
                  />
                )}
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
