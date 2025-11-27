import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
      text: `"Driven by communication, powered by AI — we build brands with digital marketing.",`,
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
    { text: "  why: ", className: "text-yellow-300" },
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
    { text: "  challenge: ", className: "text-yellow-300" },
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

  // Reveal title first
  useEffect(() => {
    setTimeout(() => {
      setTitleVisible(true);
    }, 200);
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
      className="relative w-full min-h-screen text-white font-mono"
      style={{
        backgroundImage: "url('/sand.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/70 z-0" />

  

      {/* CODE AREA */}
     <div
  className="
    relative z-10 px-6 sm:px-10 py-10
    whitespace-pre-wrap break-words
    text-[13px] sm:text-[16px] md:text-[19px]
    leading-relaxed font-mono tabular-nums
  "
>

        {/* TITLE */}
{titleVisible && (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.4 }}
    className="mb-6"
  >
    <div className="flex flex-wrap text-white font-light 
  text-4xl sm:text-5xl md:text-7xl leading-tight"
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.25 }}
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
          <ContactPanel open={showContact} onClose={() => setShowContact(false)} />
        )}
      </AnimatePresence>
    </section>
  );
}

