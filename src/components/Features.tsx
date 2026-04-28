import { motion } from "framer-motion";
import {
  Activity,
  CalendarDays,
  Edit3,
  Flame,
  LineChart,
  MessageSquareText,
  Target,
  Zap,
} from "lucide-react";
import { fadeUp, stagger } from "../lib/motion";

export default function Features() {
  return (
    <section id="features" className="relative py-20 md:py-28 px-5 md:px-8">
      <motion.div
        variants={stagger(0.06)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="mx-auto max-w-7xl"
      >
        <motion.div variants={fadeUp} className="max-w-2xl">
          <span className="inline-flex items-center gap-1.5 px-2.5 h-7 rounded-full bg-nibble-ink/5 text-nibble-ink text-xs font-bold uppercase tracking-wider">
            features
          </span>
          <h2 className="mt-5 text-4xl md:text-6xl font-black tracking-tight text-nibble-ink leading-[1] text-balance">
            built for the 2-second log.
          </h2>
          <p className="mt-4 text-nibble-ink/65 text-lg max-w-lg">
            Open. Type. Close. Everything else — macros, streaks, weekly trends — happens for you.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[180px]">
          {/* Big card: type-what-you-ate */}
          <motion.div
            variants={fadeUp}
            className="md:col-span-2 lg:col-span-2 row-span-2 relative rounded-3xl bg-nibble-ink p-7 overflow-hidden text-nibble-cream"
          >
            <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-nibble-pink/40 blur-3xl rounded-full" />
            <div className="relative">
              <Icon>
                <MessageSquareText size={20} />
              </Icon>
              <h3 className="mt-5 text-3xl md:text-4xl font-black tracking-tight leading-[1.05]">
                Plain english in.<br />
                Structured entries out.
              </h3>
              <p className="mt-3 text-nibble-cream/70 max-w-md">
                Gemini 2.5 Flash parses one sentence into one or more entries
                with kcal + macro estimates. Keeps your wording — "half
                biryani", "2 boiled eggs" — instead of normalizing it away.
              </p>
              <div className="mt-6 flex flex-wrap gap-2 font-mono text-xs text-nibble-cream/60">
                {[
                  "2 idlis and a coffee",
                  "half biryani",
                  "30 min jogging",
                  "ran 5km then 30 pushups",
                ].map((t) => (
                  <span
                    key={t}
                    className="px-2.5 h-7 inline-flex items-center rounded-full border border-nibble-cream/15 bg-white/5"
                  >
                    "{t}"
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Exercise */}
          <motion.div
            variants={fadeUp}
            className="row-span-2 rounded-3xl bg-gradient-to-br from-nibble-pink to-nibble-pinkDeep p-6 text-white relative overflow-hidden"
          >
            <Icon tone="light">
              <Flame size={20} />
            </Icon>
            <h3 className="mt-5 text-2xl font-black leading-tight">
              Auto-detects exercise.
            </h3>
            <p className="mt-2 text-white/85 text-sm leading-relaxed">
              Same input box. Type "30 min jogging" — it logs calories burned
              using MET estimates.
            </p>
            <div className="absolute bottom-5 left-6 right-6 rounded-xl bg-white/15 backdrop-blur p-3 text-xs">
              <div className="flex justify-between font-mono">
                <span>ran 5km</span>
                <span className="font-bold">−320 kcal</span>
              </div>
              <div className="flex justify-between font-mono mt-1">
                <span>30 pushups</span>
                <span className="font-bold">−24 kcal</span>
              </div>
            </div>
          </motion.div>

          {/* Personalized targets */}
          <motion.div
            variants={fadeUp}
            className="row-span-2 rounded-3xl bg-white border border-nibble-ink/5 p-6 shadow-soft relative overflow-hidden"
          >
            <Icon tone="indigo">
              <Target size={20} />
            </Icon>
            <h3 className="mt-5 text-2xl font-black leading-tight text-nibble-ink">
              Targets, dialed in.
            </h3>
            <p className="mt-2 text-nibble-ink/65 text-sm leading-relaxed">
              2–3 onboarding questions → Mifflin-St Jeor BMR, sedentary
              multiplier, ±250/500/750 kcal for pace, 30/40/30 macros.
            </p>
            <div className="mt-5 grid grid-cols-3 gap-2 text-center">
              <Macro label="P" v="30%" tone="pink" />
              <Macro label="C" v="40%" tone="indigo" />
              <Macro label="F" v="30%" tone="ink" />
            </div>
          </motion.div>

          {/* Daily home */}
          <motion.div
            variants={fadeUp}
            className="md:col-span-1 rounded-3xl bg-nibble-blush p-6 relative overflow-hidden"
          >
            <Icon tone="pink">
              <CalendarDays size={20} />
            </Icon>
            <h3 className="mt-3 text-lg font-black text-nibble-ink leading-tight">
              Daily home + date bar
            </h3>
            <p className="mt-1 text-xs text-nibble-ink/65">
              Calories left at a glance. Swipe between days.
            </p>
          </motion.div>

          {/* Weekly */}
          <motion.div
            variants={fadeUp}
            className="md:col-span-1 rounded-3xl bg-white border border-nibble-ink/5 p-6 shadow-soft"
          >
            <Icon tone="indigo">
              <LineChart size={20} />
            </Icon>
            <h3 className="mt-3 text-lg font-black text-nibble-ink leading-tight">
              Weekly report
            </h3>
            <p className="mt-1 text-xs text-nibble-ink/65">
              Last 5 weeks via tabs. Charts + totals.
            </p>
            <MiniChart />
          </motion.div>

          {/* Streaks */}
          <motion.div
            variants={fadeUp}
            className="md:col-span-1 rounded-3xl bg-nibble-ink text-nibble-cream p-6 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-nibble-pink/30 via-transparent to-transparent" />
            <div className="relative">
              <Icon tone="pinkDark">
                <Zap size={20} />
              </Icon>
              <h3 className="mt-3 text-lg font-black leading-tight">
                Streaks ⚡ + dots
              </h3>
              <p className="mt-1 text-xs text-nibble-cream/70">
                Lightning chip counts logged days. Calendar dots for proof.
              </p>
            </div>
          </motion.div>

          {/* Edit / correct */}
          <motion.div
            variants={fadeUp}
            className="md:col-span-1 rounded-3xl bg-white border border-nibble-ink/5 p-6 shadow-soft"
          >
            <Icon tone="ink">
              <Edit3 size={20} />
            </Icon>
            <h3 className="mt-3 text-lg font-black text-nibble-ink leading-tight">
              Tap to fix
            </h3>
            <p className="mt-1 text-xs text-nibble-ink/65">
              AI got it slightly wrong? Bottom-sheet editor. No drama.
            </p>
          </motion.div>

          {/* Cross-platform */}
          <motion.div
            variants={fadeUp}
            className="md:col-span-1 rounded-3xl bg-gradient-to-br from-nibble-indigo to-nibble-indigoDeep p-6 text-white"
          >
            <Icon tone="light">
              <Activity size={20} />
            </Icon>
            <h3 className="mt-3 text-lg font-black leading-tight">
              Android · iOS · PWA
            </h3>
            <p className="mt-1 text-xs text-white/80">
              One Flutter codebase. Installable on the web too.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

function Icon({
  children,
  tone = "ink",
}: {
  children: React.ReactNode;
  tone?: "ink" | "light" | "pink" | "pinkDark" | "indigo";
}) {
  const map = {
    ink: "bg-nibble-ink/5 text-nibble-ink",
    light: "bg-white/15 text-white",
    pink: "bg-white text-nibble-pinkDeep",
    pinkDark: "bg-nibble-pink/20 text-nibble-pink",
    indigo: "bg-nibble-indigo/10 text-nibble-indigoDeep",
  } as const;
  return (
    <span
      className={`inline-grid place-items-center w-10 h-10 rounded-2xl ${map[tone]}`}
    >
      {children}
    </span>
  );
}

function Macro({
  label,
  v,
  tone,
}: {
  label: string;
  v: string;
  tone: "pink" | "indigo" | "ink";
}) {
  const map = {
    pink: "bg-nibble-blush text-nibble-pinkDeep",
    indigo: "bg-nibble-indigo/10 text-nibble-indigoDeep",
    ink: "bg-nibble-ink/5 text-nibble-ink/80",
  } as const;
  return (
    <div className={`rounded-xl py-2 ${map[tone]}`}>
      <div className="text-[10px] font-bold uppercase tracking-wider opacity-70">
        {label}
      </div>
      <div className="font-black text-sm">{v}</div>
    </div>
  );
}

function MiniChart() {
  const bars = [40, 62, 50, 78, 55, 70, 88];
  return (
    <div className="mt-5 flex items-end gap-1.5 h-12">
      {bars.map((h, i) => (
        <motion.div
          key={i}
          initial={{ height: 0 }}
          whileInView={{ height: `${h}%` }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.04, duration: 0.5 }}
          className="flex-1 rounded-md bg-gradient-to-t from-nibble-indigo to-nibble-pink"
        />
      ))}
    </div>
  );
}
