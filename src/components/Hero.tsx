import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Contact from "./Contact"; // 👈 import your existing contact form

const Hero = () => {
  const [language, setLanguage] = useState("EN");
  const [showContact, setShowContact] = useState(false); // 👈 state to toggle form

  const containerRef = useRef(null);
  const leftColRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);

  const runMeasureRef = useRef(() => {});
  const [pos, setPos] = useState({
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
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => {
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
          transition={{ duration: 1.5 }}
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
          {/* CTA */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowContact(true)} // 👈 opens contact form
            className="border border-gray-400 px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm tracking-wide hover:bg-white hover:text-black transition w-full"
          >
            Join our momentum →
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
          {/* DESIGN */}
          <motion.div
            ref={line1Ref}
            className="uppercase tracking-[0.15em] sm:tracking-[0.35em] text-3xl sm:text-5xl md:text-8xl font-semibold"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.8, delay: 0.8 }}
          >
            DESIGN
          </motion.div>

          {/* MEETS */}
          <motion.div
            ref={line2Ref}
            className="uppercase tracking-[0.15em] sm:tracking-[0.35em] text-3xl sm:text-5xl md:text-8xl font-semibold"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.8, delay: 1.4 }}
          >
            MEETS
          </motion.div>

          {/* TECHNOLOGY */}
          <motion.div
            ref={line3Ref}
            className="uppercase tracking-[0.15em] sm:tracking-[0.35em] text-3xl sm:text-5xl md:text-8xl font-semibold"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.8, delay: 2.0 }}
          >
            TECHNOLOGY
          </motion.div>
        </div>

        {/* Line */}
        <motion.div
          className="absolute w-[1px] bg-orange-500 -translate-x-1/2 origin-top"
          style={{
            left: `${pos.left}px`,
            top: `${pos.top}px`,
          }}
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: pos.measured ? pos.height : 0,
            opacity: pos.measured ? 1 : 0,
          }}
          transition={{ duration: 2.0, ease: "easeInOut" }}
        />

        {/* Dots */}
        {pos.centers.map((c, i) => (
          <motion.div
            key={i}
            className="absolute flex items-center justify-center"
            style={{
              left: `${pos.left}px`,
              top: `${c}px`,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              delay: 0.8 + i * 0.6,
              duration: 1.6,
              type: "spring",
              stiffness: 250,
              damping: 30,
            }}
          >
            <div className="w-1 h-1 sm:w-2 sm:h-2 rounded-full bg-orange-500 -translate-x-1/2 -translate-y-1/2" />
          </motion.div>
        ))}
      </div>

      {/* ✅ Contact Form Overlay */}
      <AnimatePresence>
        {showContact && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative w-[95%] max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setShowContact(false)}
                className="absolute top-4 right-5 text-orange-600 text-2xl hover:text-white z-10"
              >
                ✕
              </button>

              {/* Existing Contact Form Component */}
              <Contact />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;
