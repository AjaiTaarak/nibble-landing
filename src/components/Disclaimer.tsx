import { motion } from "framer-motion";
import { Info } from "lucide-react";
import { fadeUp } from "../lib/motion";

export default function Disclaimer() {
  return (
    <section className="px-5 md:px-8 py-12">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        className="mx-auto max-w-4xl rounded-3xl bg-nibble-blush/60 border border-nibble-pink/20 p-6 md:p-8 flex gap-4"
      >
        <span className="grid place-items-center shrink-0 w-10 h-10 rounded-2xl bg-white text-nibble-pinkDeep">
          <Info size={18} />
        </span>
        <div>
          <h3 className="text-lg font-black text-nibble-ink leading-tight">
            real talk: these are AI estimates.
          </h3>
          <p className="mt-1.5 text-nibble-ink/70 text-sm leading-relaxed">
            Nibble is built for daily directional tracking — "am I roughly in
            range today?" — not lab-measured precision. If you're prepping for
            a contest or counting every gram, use a measured database. For the
            other 99% of us: it's fast, it's painless, and it gets you logging.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
