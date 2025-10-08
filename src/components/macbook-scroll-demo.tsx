import React, { useRef } from "react";
import { motion } from "framer-motion";
import { MacbookScroll } from "@/components/ui/macbook-scroll";

export default function MacbookScrollDemo() {
  const videoRef = useRef(null);

  const handleScrollEnd = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.play().catch((error) => {
        console.error("Video play failed:", error);
      });
    }
  };

  return (
    <section className="relative w-full bg-black overflow-hidden min-h-screen flex flex-col items-center justify-center">
      {/* ===== Laptop Section ===== */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, delay: 1.8, ease: "easeOut" }}
        className="relative w-full flex justify-center mb-16 sm:mb-20 px-4"
      >
        <div
          className="
            scale-[0.95] sm:scale-100 
            md:scale-[1.25] lg:scale-[1.35] 
            xl:scale-[1.4]
            2xl:scale-[1.45]
            transform origin-center transition-transform duration-700 ease-out
            max-w-[95vw] md:max-w-[90vw] lg:max-w-[85vw]
          "
        >
          <MacbookScroll
            src="/video.mp4"
            showGradient={false}
            ref={videoRef}
            onScrollEnd={handleScrollEnd}
          />
        </div>
      </motion.div>

      {/* ===== Below Text / Spacer Section ===== */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 2.4, ease: "easeOut" }}
        className="relative max-w-5xl text-center px-6 sm:px-10"
      >
        <div className="relative inline-block px-6 py-4 sm:px-10 sm:py-6 rounded-xl">
          {/* Optional content below the laptop */}
        </div>
      </motion.div>

      {/* ===== Spacer Below to Give Room for Animation ===== */}
      <div className="h-[30vh] sm:h-[40vh]" />
    </section>
  );
}
