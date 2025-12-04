import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import ContactPanel from "./ContactPanel";

// Split text into an array of characters
const splitLetters = (text) => text.split("");

// TITLE
const TITLE_LINE = [
  { text: "// Welcome to Sandweg Marketing", className: "text-orange-400" },
];
const CODE_LINES = [
  [
    {
      text: "= { Boutique Agency for digital Branding & Marketing }",
      className: "text-pink-400",
    },
  ],

  [],

  [
    { text: "const ", className: "text-white" },
    { text: "agency", className: "text-yellow-300" },
    { text: " = {", className: "text-white" },
  ],

  [
    { text: "  mission: ", className: "text-yellow-300" },
    {
      text: `"Driven by communication, powered by technology — we build brands with digital marketing.",`,
      className: "text-white",
    },
  ],

  [
    { text: "  description: ", className: "text-yellow-300" },
    {
      text: `"A personal, boutique agency where communication meets technology.",`,
      className: "text-white",
    },
  ],

  [
    { text: "  services: [", className: "text-yellow-300" },
    { text: `"websites()"`, className: "text-green-400" },
    { text: ", ", className: "text-white" },
    { text: `"SEO()"`, className: "text-green-400" },
    { text: ", ", className: "text-white" },
    { text: `"branding()"`, className: "text-green-400" },
    { text: ", ", className: "text-white" },
    { text: `"automation()"`, className: "text-green-400" },
    { text: ", ", className: "text-white" },
    { text: `"analytics()"`, className: "text-green-400" },
    { text: "],", className: "text-white" },
  ],

  [],

  [
    { text: "  values: {", className: "text-yellow-300" },
  ],

  [
    { text: "    communication: ", className: "text-yellow-300" },
    { text: `"always personal",`, className: "text-white" },
  ],

  [
    { text: "    technology: ", className: "text-yellow-300" },
    { text: `"always intelligent",`, className: "text-white" },
  ],

  [
    { text: "    design: ", className: "text-yellow-300" },
    { text: `"always crafted",`, className: "text-white" },
  ],

  [{ text: "  },", className: "text-white" }],

  [],

  [
    { text: "  mode: ", className: "text-yellow-300" },
    {
      text: `"contact_now"`,
      className:
        "text-orange-400 underline cursor-pointer hover:text-orange-300 transition",
      onClick: "open_contact",
    },
    { text: ",", className: "text-white" },
  ],

  [{ text: "};", className: "text-white" }],

  [],

  [
    { text: "const ", className: "text-white" },
    { text: "manifesto", className: "text-yellow-300" },
    { text: " = {", className: "text-white" },
  ],

  [
    { text: "  belief: ", className: "text-yellow-300" },
    {
      text: `"Marketing should be smarter, simpler, more beautiful.",`,
      className: "text-white",
    },
  ],

  [
    { text: "  how: ", className: "text-yellow-300" },
    {
      text: `"We create AI-driven websites and tools with design at their core, so your dream can grow into a thriving business.",`,
      className: "text-white",
    },
  ],

  [
    { text: "  problem: ", className: "text-yellow-300" },
    {
      text: `"Marketing often feels complicated, outdated, disconnected from what customers really respond to.",`,
      className: "text-white",
    },
  ],

  [
    { text: "  solution: ", className: "text-yellow-300" },
    {
      text: `"We blend cutting-edge technology with creativity, AI that saves time, contemporary design, tools that make growth inevitable.",`,
      className: "text-white",
    },
  ],

  [
    { text: "  whatWeDo: [", className: "text-yellow-300" },
  ],

  [
    {
      text: `"We don’t just build websites or run campaigns.",`,
      className: "text-green-400",
    },
  ],

  [
    {
      text: `"We craft experiences that amplify your message and connect you with your audience.",`,
      className: "text-green-400",
    },
  ],

  [{ text: "  ],", className: "text-white" }],

  [{ text: "};", className: "text-white" }],
];

const TITLE_DELAY = 1500; // delay before code starts typing
const TYPING_DELAY = 180;

export default function Hero() {
  const [showContact, setShowContact] = useState(false);
  const [titleVisible, setTitleVisible] = useState(false);
  const [visibleCount, setVisibleCount] = useState(0);

  // NEW: ref for scroll-based parallax
  const heroRef = useRef(null);

  // Scroll progress for this section only
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Subtle parallax + scale for the video
  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "-32%"]);
const videoScale = useTransform(scrollYProgress, [0, 1], [1.1, 1.42]);

  // Slight darkening as you scroll down (for depth)
  const vignetteOpacity = useTransform(scrollYProgress, [0, 1], [0.35, 0.6]);

  // Reveal title first
  useEffect(() => {
    const t = setTimeout(() => {
      setTitleVisible(true);
    }, 200);
    return () => clearTimeout(t);
  }, []);

  // After title, delay then start typing code
  useEffect(() => {
    if (!titleVisible) return;

    const timeout = setTimeout(() => {
      let index = 0;
      const interval = setInterval(() => {
        index++;
        setVisibleCount(index);

        if (index >= CODE_LINES.length) clearInterval(interval);
      }, TYPING_DELAY);
    }, TITLE_DELAY); // <-- REAL DELAY HERE

    return () => clearTimeout(timeout);
  }, [titleVisible]);

  return (
    <section
      ref={heroRef}
      className="relative w-full min-h-screen text-white font-mono overflow-hidden bg-black"
    >
      {/* === CINEMATIC BACKGROUND VIDEO LAYER === */}
      <motion.video
        // important: file in /public as parallex.mp4
        src="/parallex.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="pointer-events-none absolute inset-0 w-full h-full object-cover"
        style={{
          y: videoY,
          scale: videoScale,
          willChange: "transform",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
      />

      {/* Base dark overlay */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(circle at top, rgba(255,140,0,0.22) 0, transparent 40%), rgba(0,0,0,0.85)",
          opacity: vignetteOpacity,
        }}
      />

      {/* Extra subtle bottom gradient to keep code readable */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-0" />

      {/* OPTIONAL: orange glow orb behind the code block */}
      <div className="pointer-events-none absolute -left-32 top-24 h-72 w-72 rounded-full bg-orange-500/30 blur-3xl z-0" />

      {/* === FOREGROUND CONTENT === */}
      <div
        className="
          relative z-10 px-6 sm:px-10 py-10
          whitespace-pre-wrap break-words
          text-[13px] sm:text-[16px] md:text-[19px]
          leading-relaxed font-mono tabular-nums
          max-w-5xl
        "
      >
        {/* TITLE */}
        {titleVisible && (
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6"
          >
            <div
              className="
                flex flex-wrap text-white font-light
                text-4xl sm:text-5xl md:text-7xl leading-tight
                drop-shadow-[0_0_20px_rgba(0,0,0,0.8)]
              "
            >
              {splitLetters(TITLE_LINE[0].text).map((char, i) => (
                <motion.span
                  key={i}
                  className="inline-block"
                  initial={{ opacity: 0, y: 20, rotateX: 60 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{
                    duration: 0.28,
                    delay: 0.04 * i,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </div>

            {/* Cursor */}
            <span className="animate-pulse text-purple-300 text-4xl">|</span>
          </motion.div>
        )}

        {/* TYPED CODE */}
        {CODE_LINES.slice(0, visibleCount).map((tokens, lineIndex) => (
          <motion.div
            key={lineIndex}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="drop-shadow-[0_0_16px_rgba(0,0,0,0.75)]"
          >
            {tokens.length === 0 ? (
              <span>&nbsp;</span>
            ) : (
              tokens.map((token, tokenIndex) => (
                <span
                  key={tokenIndex}
                  className={token.className}
                  onClick={() => {
                    if (token.onClick === "open_contact") setShowContact(true);
                  }}
                >
                  {token.text}
                </span>
              ))
            )}

            {lineIndex === visibleCount - 1 && (
              <span className="animate-pulse text-purple-300">|</span>
            )}
          </motion.div>
        ))}
      </div>

      {/* CONTACT PANEL */}
      <AnimatePresence>
        {showContact && (
          <ContactPanel
            open={showContact}
            onClose={() => setShowContact(false)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
