import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import { Volume2, VolumeX } from "lucide-react";

export default function MacbookScrollDemo() {
  const [isMobile, setIsMobile] = useState(false);
  const [muted, setMuted] = useState(true);
  const [videoEl, setVideoEl] = useState<HTMLVideoElement | null>(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      const foundVideo = document.querySelector("video");
      if (foundVideo) {
        (foundVideo as HTMLVideoElement).muted = true;
        setVideoEl(foundVideo as HTMLVideoElement);
      }
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const toggleMute = () => {
    if (!videoEl) return;
    const newMuted = !muted;
    videoEl.muted = newMuted;
    videoEl.volume = newMuted ? 0 : 1;

    if (!newMuted) {
      videoEl.currentTime = 0;
      videoEl.play().catch((err) =>
        console.warn("Playback failed to start:", err)
      );
    }

    setMuted(newMuted);
  };

  return (
    <section
      className="relative w-full bg-black overflow-hidden flex flex-col items-center sm:mt-0"
      style={{
        marginTop: isMobile ? "-80px" : "0px",
        minHeight: "100vh",
        paddingBottom: isMobile ? "200px" : "0px",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.3, delay: 1.1, ease: "easeOut" }}
        className="relative w-full flex justify-center px-3 sm:px-6 mb-0 sm:mb-20"
        style={{
          marginTop: isMobile ? "-30px" : "0px",
        }}
      >
        <div
          className="relative transform origin-center transition-transform duration-700 ease-out 
                     scale-[0.95] sm:scale-[1] md:scale-[1.25] lg:scale-[1.35] xl:scale-[1.4]"
          style={{ maxWidth: "90vw" }}
        >
          {/* WRAP THE VIDEO SO THE BUTTON CAN MOVE LOWER */}
          <div className="relative w-full h-full">

            {/* VIDEO */}
            <MacbookScroll src="/video.mp4" showGradient={false} />

            {/* BUTTON YOU CAN MOVE LOWER USING bottom: "-(px)" */}
            <button
              onClick={toggleMute}
              className="absolute right-4 z-[9999] bg-white/20 hover:bg-white/30 
                         text-white backdrop-blur-md rounded-full p-3 shadow-lg 
                         transition-all duration-300 cursor-pointer select-none"
              style={{
                bottom: "-60px",   // 🔥 MOVE THIS NUMBER UP/DOWN FREELY
                pointerEvents: "auto",
              }}
            >
              {muted ? (
                <VolumeX className="w-6 h-6" />
              ) : (
                <Volume2 className="w-6 h-6 text-orange-500" />
              )}
            </button>
          </div>
        </div>
      </motion.div>

      {isMobile && <div className="h-[20vh]" />}
      {!isMobile && <div className="h-[80vh]" />}
    </section>
  );
}
