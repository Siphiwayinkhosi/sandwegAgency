// src/components/Hero.tsx
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  const [language, setLanguage] = useState<"EN" | "DE">("EN");

  // Refs for layout
  const containerRef = useRef<HTMLDivElement | null>(null);
  const leftColRef = useRef<HTMLDivElement | null>(null);
  const line1Ref = useRef<HTMLDivElement | null>(null);
  const line2Ref = useRef<HTMLDivElement | null>(null);
  const line3Ref = useRef<HTMLDivElement | null>(null);

  const runMeasureRef = useRef<() => void>(() => {});
  const [pos, setPos] = useState<{
    left: number;
    top: number;
    height: number;
    centers: number[];
    measured: boolean;
  }>({
    left: 60,
    top: 0,
    height: 0,
    centers: [0, 0, 0],
    measured: false,
  });

  useEffect(() => {
    const measure = () => {
      if (
        !containerRef.current ||
        !leftColRef.current ||
        !line1Ref.current ||
        !line2Ref.current ||
        !line3Ref.current
      )
        return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const leftRect = leftColRef.current.getBoundingClientRect();

      const centers = [line1Ref, line2Ref, line3Ref].map((r) => {
        const el = r.current;
        if (!el) return 0;
        const rect = el.getBoundingClientRect();
        const fontSize = parseFloat(window.getComputedStyle(el).fontSize);
        return rect.top - containerRect.top + rect.height / 2 - fontSize * 0.05;
      });

      const top = centers[0];
      const height = centers[2] - centers[0];
      const left = leftRect.left - containerRect.left + leftRect.width / 2;

      setPos({
        left,
        top,
        height,
        centers,
        measured: true,
      });
    };

    const runMeasure = () => {
      if ((document as any).fonts && (document as any).fonts.ready) {
        (document as any).fonts.ready.then(() => {
          requestAnimationFrame(() => {
            requestAnimationFrame(measure);
          });
        });
      } else {
        requestAnimationFrame(() => {
          requestAnimationFrame(measure);
        });
      }
    };

    runMeasureRef.current = runMeasure;
    runMeasure();

    const resizeObserver = new ResizeObserver(runMeasure);
    if (containerRef.current) resizeObserver.observe(containerRef.current);

    window.addEventListener("resize", runMeasure);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", runMeasure);
    };
  }, []);

  return (
    <section
      className="relative w-full text-white font-[Raleway]"
      style={{
        backgroundImage: "url('/sand.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/70 z-0" />

      {/* Top bar */}
      <div className="relative z-10 flex justify-between items-center px-4 sm:px-10 py-4 sm:py-6">
        <motion.div
          className="flex items-center gap-3 sm:gap-6"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
        >
          <img src="/logo.png" alt="Logo" className="w-20 sm:w-32 md:w-40" />
          <div className="flex flex-col leading-snug">
            <span className="uppercase text-sm sm:text-base md:text-lg font-semibold tracking-wider">
              SANDWEG
            </span>
            <span className="uppercase text-sm sm:text-base md:text-lg font-semibold tracking-wider">
              Branding & Marketing
            </span>
          </div>
        </motion.div>

        <div className="flex flex-col items-start gap-2 sm:gap-3 w-max">
          {/* Language selector */}
          <div className="flex border border-gray-500 rounded-full overflow-hidden text-xs sm:text-sm w-full">
            <button
              onClick={() => setLanguage("DE")}
              className={`px-3 sm:px-4 py-1 transition w-1/2 ${
                language === "DE" ? "bg-white text-black" : "text-white"
              }`}
            >
              GERMAN
            </button>
            <button
              onClick={() => setLanguage("EN")}
              className={`px-3 sm:px-4 py-1 transition w-1/2 ${
                language === "EN" ? "bg-white text-black" : "text-white"
              }`}
            >
              ENGLISH
            </button>
          </div>

          {/* CTA */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-gray-400 px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm tracking-wide hover:bg-white hover:text-black transition w-full"
          >
            Sprit mit uns →
          </motion.button>
        </div>
      </div>

      {/* Hero content */}
      <div
        ref={containerRef}
        className="relative z-10 flex items-center px-4 sm:px-10 mt-20 sm:mt-20 h-auto sm:h-[calc(100%-120px)]"
      >
        <div ref={leftColRef} className="w-6 sm:w-12 mr-3 sm:mr-6 flex-shrink-0" />

        <div className="flex flex-col justify-center leading-tight space-y-4 sm:space-y-6">
          <motion.div
            ref={line1Ref}
            className="uppercase tracking-[0.15em] sm:tracking-[0.35em] text-3xl sm:text-5xl md:text-8xl font-semibold"
          >
            DESIGN
          </motion.div>

          <motion.div
            ref={line2Ref}
            className="uppercase tracking-[0.15em] sm:tracking-[0.35em] text-3xl sm:text-5xl md:text-8xl font-semibold"
          >
            MEETS
          </motion.div>

          <motion.div
            ref={line3Ref}
            className="uppercase tracking-[0.15em] sm:tracking-[0.35em] text-3xl sm:text-5xl md:text-8xl font-semibold"
          >
            TECHNOLOGY
          </motion.div>
        </div>

        {/* Line */}
        <motion.div
          className="absolute w-[2px] bg-orange-500 -translate-x-1/2 origin-top"
          style={{
            left: `${pos.left}px`,
            top: `${pos.top}px`,
          }}
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: pos.measured ? pos.height : 0,
            opacity: pos.measured ? 1 : 0,
          }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
        />

        {/* Dots */}
        {pos.centers.map((c, i) => (
          <motion.div
            key={i}
            className="absolute w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-orange-500 -translate-x-1/2 -translate-y-1/2"
            style={{
              left: `${pos.left}px`,
              top: `${c}px`,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              delay: 1.1 + i * 0.28,
              type: "spring",
              stiffness: 400,
              damping: 22,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
