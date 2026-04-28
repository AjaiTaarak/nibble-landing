export default function Footer() {
  return (
    <footer className="px-5 md:px-8 pb-12 pt-4">
      <div className="mx-auto max-w-7xl rounded-3xl bg-nibble-ink text-nibble-cream/80 p-8 md:p-10">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start justify-between">
          <div className="max-w-md">
            <div className="flex items-center gap-2 font-extrabold text-nibble-cream">
              <img
                src="/nibble_no_bg.png"
                alt=""
                width={36}
                height={36}
                className="w-9 h-9 object-contain"
              />
              <span className="text-xl tracking-tight">Nibble</span>
            </div>
            <p className="mt-3 text-sm text-nibble-cream/60 leading-relaxed font-medium">
              The fastest way to track what you eat. Type-what-you-ate logging
              powered by Gemini 2.5 Flash.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-12 gap-y-3 text-sm">
            <div>
              <div className="text-xs uppercase tracking-wider text-nibble-cream/40 font-bold mb-3">
                Try it
              </div>
              <ul className="space-y-2 font-medium">
                <li>
                  <a
                    className="hover:text-nibble-pink transition-colors"
                    href="http://nibble.occasionaly.in/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Web app
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-nibble-pink transition-colors"
                    href="http://nibble.occasionaly.in/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Install as PWA
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-nibble-cream/40 font-bold mb-3">
                Built on
              </div>
              <ul className="space-y-2 text-nibble-cream/70 font-medium">
                <li>Flutter</li>
                <li>Firebase Auth + Firestore</li>
                <li>Gemini 2.5 Flash</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row gap-2 justify-between text-xs text-nibble-cream/50 font-medium">
          <div>© {new Date().getFullYear()} Nibble. estimates, not lab science.</div>
          <div className="font-mono">
            ⚡ keep the streak going
          </div>
        </div>
      </div>
    </footer>
  );
}
