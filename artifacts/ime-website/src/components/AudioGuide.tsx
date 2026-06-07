import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Headphones, X, Play, Pause, Square, Volume2, ChevronDown, ChevronUp } from "lucide-react";

const SITE_SUMMARY = `
Welcome to Ice Media Entertainment — I.M.E.

We are a forward-thinking music production studio built by Ice, a COO, artist, and long-game strategist. 
Our motto: Silent moves, loud results.

What we offer:

Remote Production and Mixing. No matter where you are in the world, send us your raw vocals and we engineer the magic off-site, delivering a polished, professional masterpiece straight to you.

Custom I.M.E Beats. Looking for that perfect sound? We craft original instrumentals tailored to your vibe — built to shake the industry.

On-Site Studio Recording. Currently paused while we upgrade and re-wire for the future. Check back soon.

Buy Beats. Our catalogue is live on Voloco. Available now:
Fairies, for 75 Rand. Escape, for 85 Rand. Mystic, for 150 Rand. And our premium track — Abracadabra, for 200 Rand.
All beats can be purchased directly through Voloco.

Our philosophy: At I.M.E, we respect the old-school ways of making music, but we are wiring the future with our own hands. We build solid, long-lasting foundations for artists. Feet on the ground. Eyes on the stars.

Ready to work with us? Tap in on TikTok, Instagram, X, YouTube, SoundCloud, Beatstars, or the Voloco creator page. Links are all available in the Connect section.

That's Ice Media Entertainment. Let's create something timeless.
`.trim();

const SECTIONS = [
  {
    label: "Home",
    text: "Welcome to Ice Media Entertainment — I.M.E. Silent moves, loud results. We equip artists with the exact tools they need to make serious noise.",
  },
  {
    label: "Services",
    text: "Our services include Remote Production and Mixing, Custom I.M.E Beats, and On-Site Studio Recording, which is currently paused while we upgrade for the future.",
  },
  {
    label: "Buy Beats",
    text: "Our beats are available on Voloco. Fairies for 75 Rand. Escape for 85 Rand. Mystic for 150 Rand. And our premium track, Abracadabra, for 200 Rand.",
  },
  {
    label: "About",
    text: "The Architects of Tomorrow's Sound. At I.M.E, we respect the old-school ways of making music, but we are wiring the future with our own hands. Founded by Ice — COO, artist, and forward-thinker — we build solid, long-lasting foundations for artists.",
  },
  {
    label: "Connect",
    text: "Ready to take your music to the next level? Find us on TikTok, Instagram, X, YouTube, SoundCloud, Beatstars, and Voloco. Links are all in the Connect section.",
  },
];

type ReadingState = "idle" | "playing" | "paused";

export function AudioGuide() {
  const [open, setOpen] = useState(false);
  const [state, setState] = useState<ReadingState>("idle");
  const [activeLabel, setActiveLabel] = useState<string | null>(null);
  const [expanded, setExpanded] = useState(false);
  const [rate, setRate] = useState(1);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const supported = typeof window !== "undefined" && "speechSynthesis" in window;

  const stop = useCallback(() => {
    if (!supported) return;
    window.speechSynthesis.cancel();
    setState("idle");
    setActiveLabel(null);
  }, [supported]);

  useEffect(() => {
    return () => {
      if (supported) window.speechSynthesis.cancel();
    };
  }, [supported]);

  const speak = useCallback((text: string, label: string) => {
    if (!supported) return;
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.rate = rate;
    utter.pitch = 1;
    utter.lang = "en-US";
    utter.onstart = () => { setState("playing"); setActiveLabel(label); };
    utter.onend = () => { setState("idle"); setActiveLabel(null); };
    utter.onerror = () => { setState("idle"); setActiveLabel(null); };
    utteranceRef.current = utter;
    window.speechSynthesis.speak(utter);
  }, [rate, supported]);

  const togglePause = useCallback(() => {
    if (!supported) return;
    if (state === "playing") {
      window.speechSynthesis.pause();
      setState("paused");
    } else if (state === "paused") {
      window.speechSynthesis.resume();
      setState("playing");
    }
  }, [state, supported]);

  const handleSummary = () => {
    if (state === "playing" && activeLabel === "Full Summary") {
      togglePause();
      return;
    }
    if (state === "paused" && activeLabel === "Full Summary") {
      togglePause();
      return;
    }
    speak(SITE_SUMMARY, "Full Summary");
  };

  const handleSection = (section: typeof SECTIONS[0]) => {
    if (state !== "idle" && activeLabel === section.label) {
      togglePause();
      return;
    }
    speak(section.text, section.label);
  };

  if (!supported) return null;

  return (
    <>
      <motion.button
        data-testid="button-audio-guide-toggle"
        onClick={() => { setOpen((v) => !v); if (open) stop(); }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary text-black flex items-center justify-center shadow-2xl shadow-primary/30"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        title="Audio Guide"
      >
        {open ? <X size={22} /> : <Headphones size={22} />}
        {state === "playing" && !open && (
          <span className="absolute top-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-black animate-pulse" />
        )}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            className="fixed bottom-24 right-6 z-50 w-80 rounded-2xl bg-[#111] border border-white/10 shadow-2xl overflow-hidden"
          >
            <div className="px-5 pt-5 pb-4 border-b border-white/5">
              <div className="flex items-center gap-2 mb-1">
                <Volume2 size={16} className="text-primary" />
                <span className="text-sm font-bold text-white tracking-wide uppercase">Audio Guide</span>
              </div>
              <p className="text-xs text-white/40">Let the site speak for itself.</p>
            </div>

            <div className="p-5 space-y-4">
              <div>
                <p className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-2">Full Site Summary</p>
                <div className="flex items-center gap-2">
                  <button
                    data-testid="button-play-summary"
                    onClick={handleSummary}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-primary text-black font-semibold text-sm transition-opacity hover:opacity-90"
                  >
                    {state === "playing" && activeLabel === "Full Summary" ? (
                      <><Pause size={15} /> Pause</>
                    ) : state === "paused" && activeLabel === "Full Summary" ? (
                      <><Play size={15} /> Resume</>
                    ) : (
                      <><Play size={15} /> Play Summary</>
                    )}
                  </button>
                  {state !== "idle" && (
                    <button
                      data-testid="button-stop"
                      onClick={stop}
                      className="p-3 rounded-xl bg-white/5 text-white/60 hover:bg-white/10 transition-colors"
                      title="Stop"
                    >
                      <Square size={14} />
                    </button>
                  )}
                </div>
                {state !== "idle" && activeLabel === "Full Summary" && (
                  <p className="mt-2 text-xs text-primary flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse inline-block" />
                    {state === "playing" ? "Reading summary…" : "Paused"}
                  </p>
                )}
              </div>

              <div>
                <button
                  data-testid="button-toggle-sections"
                  onClick={() => setExpanded((v) => !v)}
                  className="w-full flex items-center justify-between text-xs font-semibold text-white/40 uppercase tracking-wider mb-2 hover:text-white/60 transition-colors"
                >
                  Read by Section
                  {expanded ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
                </button>

                <AnimatePresence>
                  {expanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden space-y-1.5"
                    >
                      {SECTIONS.map((section) => {
                        const isActive = activeLabel === section.label;
                        return (
                          <button
                            key={section.label}
                            data-testid={`button-read-section-${section.label.toLowerCase().replace(/\s+/g, "-")}`}
                            onClick={() => handleSection(section)}
                            className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-all
                              ${isActive
                                ? "bg-primary/20 text-primary border border-primary/30"
                                : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-transparent"
                              }`}
                          >
                            <span>{section.label}</span>
                            {isActive && state === "playing" && (
                              <span className="flex gap-0.5 items-end h-4">
                                {[0, 1, 2].map((i) => (
                                  <span
                                    key={i}
                                    className="w-0.5 bg-primary rounded-full animate-bounce"
                                    style={{ height: `${8 + i * 4}px`, animationDelay: `${i * 0.15}s` }}
                                  />
                                ))}
                              </span>
                            )}
                            {isActive && state === "paused" && <Pause size={12} className="text-primary" />}
                            {!isActive && <Play size={12} className="opacity-40" />}
                          </button>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div>
                <p className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-2">Speed</p>
                <div className="flex gap-2">
                  {[0.75, 1, 1.25, 1.5].map((r) => (
                    <button
                      key={r}
                      data-testid={`button-speed-${r}`}
                      onClick={() => setRate(r)}
                      className={`flex-1 py-1.5 rounded-lg text-xs font-semibold transition-all
                        ${rate === r ? "bg-primary text-black" : "bg-white/5 text-white/50 hover:bg-white/10"}`}
                    >
                      {r}x
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
