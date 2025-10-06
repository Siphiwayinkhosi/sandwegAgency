import React, { useRef } from "react"; // <-- Import useRef
import { motion } from "framer-motion";
import { MacbookScroll } from "@/components/ui/macbook-scroll";

export default function MacbookScrollDemo() {
  const videoRef = useRef(null); // <-- Create a ref for the video

  const handleScrollEnd = () => {
    // This function runs when the scroll animation is complete
    if (videoRef.current) {
      // 1. Unmute the video
      videoRef.current.muted = false;
      // 2. Play the video
      // The video should already be playing/looping, but this ensures it is
      // and is necessary if 'muted' was the only thing preventing sound.
      videoRef.current.play().catch(error => {
        // Catch any potential errors if the browser blocks autoplay without user interaction
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
        className="relative w-full max-w-6xl flex justify-center mb-16 sm:mb-20"
      >
        <div className="scale-[0.95] md:scale-100">
          <MacbookScroll
            src="/video.mp4"
            showGradient={false}
            ref={videoRef} // <-- Pass the ref to access the video element
            onScrollEnd={handleScrollEnd} // <-- Add a new callback prop
          />
        </div>
      </motion.div>

      {/* ... (rest of the component remains the same) ... */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 2.4, ease: "easeOut" }}
        className="relative max-w-5xl text-center px-6 sm:px-10"
      >
        <div className="relative inline-block px-6 py-4 sm:px-10 sm:py-6 rounded-xl">
          
        </div>
      </motion.div>

      {/* ===== Spacer Below to Give Room for Animation ===== */}
      <div className="h-[30vh] sm:h-[40vh]" />
    </section>
  );
}