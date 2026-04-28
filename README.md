# nibble — landing page

Marketing site for **Nibble**, the calorie + macro tracker that lets you log food in plain English. Type `"2 idlis and a coffee"` — Gemini parses it into structured entries with kcal + macros.

→ Try it: [occasionaly-b8731.web.app](https://occasionaly-b8731.web.app)

## Stack

- Vite + React 18 + TypeScript
- Tailwind CSS 3
- Framer Motion
- lucide-react

Brand: hot pink `#EC4899` accent on near-white `#FAFAFA`, deep navy `#0B1020` ink, indigo `#6366F1` for macros, Inter typeface.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # output → dist/
```

## What's on the page

- Hero with rotating headline word
- Auto-cycling phone-mock demo of plain-English → structured-entry parsing
- Bento features grid (type-what-you-ate · exercise · personalized targets · daily home · weekly report · streaks · edit · cross-platform)
- 3-step "how it works"
- Honest disclaimer band — Nibble's numbers are AI estimates, not lab-measured
- Final CTA + footer

## Honest scope

Nibble does not have: barcode scanning, restaurant database, photo logging, water/weight tracking, Apple Health/Google Fit, social, reminders, or offline mode. The landing page reflects that.
