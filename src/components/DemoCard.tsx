import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowUp, Flame, Zap } from "lucide-react";

type Macro = { p: number; c: number; f: number };
type Entry = { name: string; kcal: number; macros?: Macro; burned?: boolean };

type Example = {
  text: string;
  entries: Entry[];
};

const examples: Example[] = [
  {
    text: "2 idlis and a coffee",
    entries: [
      { name: "2 idlis", kcal: 78, macros: { p: 4, c: 16, f: 0 } },
      { name: "Coffee with milk + sugar", kcal: 45, macros: { p: 1, c: 6, f: 1 } },
    ],
  },
  {
    text: "half biryani from Meghana's",
    entries: [
      {
        name: "Half biryani (Meghana's)",
        kcal: 620,
        macros: { p: 28, c: 64, f: 26 },
      },
    ],
  },
  {
    text: "ran 5km then did 30 pushups",
    entries: [
      { name: "Ran 5km", kcal: 320, burned: true },
      { name: "30 pushups", kcal: 24, burned: true },
    ],
  },
];

type Phase = "idle" | "typing" | "thinking" | "resolved";

export default function DemoCard() {
  const [idx, setIdx] = useState(0);
  const [phase, setPhase] = useState<Phase>("idle");
  const [typed, setTyped] = useState("");

  // Drive the phase machine for the current example, then advance.
  useEffect(() => {
    const ex = examples[idx];
    let cancelled = false;
    let timers: ReturnType<typeof setTimeout>[] = [];

    const schedule = (fn: () => void, ms: number) => {
      const t = setTimeout(() => {
        if (!cancelled) fn();
      }, ms);
      timers.push(t);
    };

    setTyped("");
    setPhase("typing");

    // Typewriter effect.
    const charDelay = 55;
    for (let i = 1; i <= ex.text.length; i++) {
      schedule(() => setTyped(ex.text.slice(0, i)), i * charDelay);
    }
    const typedAt = ex.text.length * charDelay;

    schedule(() => setPhase("thinking"), typedAt + 250);
    schedule(() => setPhase("resolved"), typedAt + 1700);
    schedule(() => {
      setIdx((v) => (v + 1) % examples.length);
    }, typedAt + 4800);

    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
    };
  }, [idx]);

  const ex = examples[idx];
  const totalKcal = ex.entries.reduce(
    (a, e) => a + (e.burned ? -e.kcal : e.kcal),
    0
  );

  return (
    <section id="demo" className="relative py-16 md:py-24 px-5 md:px-8">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Copy column */}
        <div>
          <span className="inline-flex items-center gap-1.5 px-2.5 h-7 rounded-full bg-nibble-blush text-nibble-pinkDeep text-xs font-bold uppercase tracking-wider">
            the headline trick
          </span>
          <h2 className="mt-5 text-4xl md:text-6xl font-black tracking-tight text-nibble-ink leading-[1] text-balance">
            type a sentence.<br />
            get real entries.
          </h2>
          <p className="mt-5 text-nibble-ink/70 max-w-md text-lg leading-relaxed">
            Multiple foods in one message? Multiple entries out. Mix exercise
            in too — it'll log calories burned. Your wording stays exactly how
            you wrote it.
          </p>

          <div className="mt-8 flex flex-wrap gap-2 text-xs font-mono text-nibble-ink/60">
            {examples.map((e, i) => (
              <button
                key={e.text}
                onClick={() => setIdx(i)}
                className={`px-3 h-8 rounded-full border transition-all ${
                  i === idx
                    ? "bg-nibble-ink text-nibble-cream border-nibble-ink"
                    : "bg-white border-nibble-ink/10 hover:border-nibble-ink/30"
                }`}
              >
                "{e.text}"
              </button>
            ))}
          </div>
        </div>

        {/* Phone mock column */}
        <div className="relative mx-auto w-full max-w-[400px]">
          <div className="absolute -inset-12 bg-gradient-to-tr from-nibble-pink/20 via-nibble-blush/40 to-nibble-indigo/20 blur-3xl -z-10" />
          <div className="relative rounded-[42px] bg-nibble-ink p-3 shadow-pop">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-32 bg-nibble-ink rounded-b-2xl z-10" />
            <div className="rounded-[32px] bg-nibble-cream overflow-hidden h-[600px] flex flex-col">
              {/* Header */}
              <div className="px-5 pt-8 pb-3 flex items-center justify-between">
                <div>
                  <div className="text-xs text-nibble-ink/55 font-medium">
                    today, apr 28
                  </div>
                  <div className="text-lg font-extrabold text-nibble-ink">
                    Hey Adam 👋
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 px-2 h-7 rounded-full bg-nibble-blush text-nibble-pinkDeep font-bold text-xs">
                  <Zap
                    size={12}
                    className="fill-nibble-pinkDeep stroke-nibble-pinkDeep"
                  />
                  7
                </span>
              </div>

              {/* Calorie ring summary */}
              <div className="mx-5 rounded-2xl bg-white border border-nibble-ink/5 shadow-soft p-4 flex items-center gap-4">
                <CalorieRing
                  consumed={Math.max(0, totalKcal)}
                  burned={Math.abs(Math.min(0, totalKcal))}
                  target={2100}
                />
                <div className="flex-1">
                  <div className="text-[11px] uppercase tracking-wider text-nibble-ink/50 font-bold">
                    remaining
                  </div>
                  <motion.div
                    key={totalKcal}
                    initial={{ scale: 0.92, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    className="text-2xl font-black text-nibble-ink"
                  >
                    {2100 - totalKcal} kcal
                  </motion.div>
                  <div className="text-xs text-nibble-ink/55">
                    of 2,100 daily goal
                  </div>
                </div>
              </div>

              {/* Entries */}
              <div className="flex-1 overflow-hidden mt-3 px-5 space-y-2">
                <AnimatePresence mode="popLayout">
                  {phase === "thinking" && (
                    <motion.div
                      key="thinking"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="rounded-2xl border border-dashed border-nibble-ink/15 p-3 animate-pulse-soft"
                    >
                      <div className="h-3 w-2/3 bg-nibble-ink/10 rounded mb-2" />
                      <div className="h-3 w-1/3 bg-nibble-ink/10 rounded" />
                    </motion.div>
                  )}

                  {phase === "resolved" &&
                    ex.entries.map((e, i) => (
                      <motion.div
                        key={`${idx}-${i}`}
                        layout
                        initial={{ opacity: 0, y: 12, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{
                          delay: i * 0.08,
                          duration: 0.4,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="rounded-2xl bg-white border border-nibble-ink/5 shadow-soft p-3"
                      >
                        <div className="flex items-center justify-between">
                          <div className="font-semibold text-sm text-nibble-ink">
                            {e.name}
                          </div>
                          <div
                            className={`text-sm font-black ${
                              e.burned
                                ? "text-emerald-600"
                                : "text-nibble-ink"
                            }`}
                          >
                            {e.burned ? "−" : ""}
                            {e.kcal} kcal
                          </div>
                        </div>
                        <div className="mt-1.5 flex items-center gap-1.5 text-[11px] font-mono">
                          {e.burned ? (
                            <span className="inline-flex items-center gap-1 text-emerald-700/80">
                              <Flame size={11} /> burned
                            </span>
                          ) : e.macros ? (
                            <>
                              <Pill label="P" v={e.macros.p} tone="pink" />
                              <Pill label="C" v={e.macros.c} tone="indigo" />
                              <Pill label="F" v={e.macros.f} tone="ink" />
                            </>
                          ) : null}
                        </div>
                      </motion.div>
                    ))}
                </AnimatePresence>
              </div>

              {/* Input bar */}
              <div className="p-3 pt-2">
                <div className="flex items-center gap-2 rounded-full bg-white border border-nibble-ink/10 shadow-soft px-4 h-12">
                  <span className="text-nibble-ink/40 text-sm">›</span>
                  <span className="flex-1 text-sm text-nibble-ink truncate">
                    {typed}
                    <motion.span
                      aria-hidden
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 0.9, repeat: Infinity }}
                      className="inline-block w-[2px] h-4 bg-nibble-pink ml-[1px] align-middle"
                    />
                  </span>
                  <button
                    aria-label="send"
                    className="grid place-items-center w-9 h-9 rounded-full bg-nibble-pink text-white"
                  >
                    <ArrowUp size={16} strokeWidth={3} />
                  </button>
                </div>
                <div className="mt-2 text-center text-[10px] text-nibble-ink/40 font-mono">
                  type what you ate · or what you did
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pill({
  label,
  v,
  tone,
}: {
  label: string;
  v: number;
  tone: "pink" | "indigo" | "ink";
}) {
  const map: Record<typeof tone, string> = {
    pink: "bg-nibble-blush text-nibble-pinkDeep",
    indigo: "bg-nibble-indigo/10 text-nibble-indigoDeep",
    ink: "bg-nibble-ink/5 text-nibble-ink/70",
  };
  return (
    <span
      className={`inline-flex items-center gap-1 px-1.5 h-5 rounded-md font-bold ${map[tone]}`}
    >
      {label} {v}g
    </span>
  );
}

function CalorieRing({
  consumed,
  burned,
  target,
}: {
  consumed: number;
  burned: number;
  target: number;
}) {
  const net = Math.max(0, consumed - burned);
  const pct = Math.min(100, Math.round((net / target) * 100));
  const r = 28;
  const c = 2 * Math.PI * r;
  const dash = (pct / 100) * c;
  return (
    <div className="relative w-[72px] h-[72px] shrink-0">
      <svg viewBox="0 0 72 72" className="w-full h-full -rotate-90">
        <circle
          cx="36"
          cy="36"
          r={r}
          stroke="#FCE7F2"
          strokeWidth="8"
          fill="none"
        />
        <motion.circle
          cx="36"
          cy="36"
          r={r}
          stroke="#EC4899"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={c}
          initial={{ strokeDashoffset: c }}
          animate={{ strokeDashoffset: c - dash }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        />
      </svg>
      <div className="absolute inset-0 grid place-items-center">
        <div className="text-center">
          <div className="text-[10px] text-nibble-ink/55 font-bold uppercase tracking-wider leading-none">
            day
          </div>
          <div className="text-sm font-black text-nibble-ink leading-tight">
            {pct}%
          </div>
        </div>
      </div>
    </div>
  );
}
