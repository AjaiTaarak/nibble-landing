/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        nibble: {
          pink: "#EC4899",
          pinkDeep: "#DB2777",
          ink: "#0B1020",
          cream: "#FAFAFA",
          indigo: "#6366F1",
          indigoDeep: "#4F46E5",
          blush: "#FCE7F2",
          mint: "#A7F3D0",
          lemon: "#FDE68A",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["'Instrument Serif'", "Inter", "serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      boxShadow: {
        soft: "0 1px 0 rgba(11,16,32,0.04), 0 8px 24px rgba(11,16,32,0.06)",
        pop: "0 12px 40px rgba(236,72,153,0.25)",
        chip: "inset 0 -1px 0 rgba(11,16,32,0.06), 0 1px 2px rgba(11,16,32,0.04)",
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(rgba(11,16,32,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(11,16,32,0.04) 1px, transparent 1px)",
      },
      animation: {
        blob: "blob 14s ease-in-out infinite",
        marquee: "marquee 40s linear infinite",
        "pulse-soft": "pulseSoft 1.6s ease-in-out infinite",
      },
      keyframes: {
        blob: {
          "0%, 100%": { transform: "translate(0,0) scale(1)" },
          "33%": { transform: "translate(30px,-20px) scale(1.05)" },
          "66%": { transform: "translate(-20px,20px) scale(0.97)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: ".55" },
          "50%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
