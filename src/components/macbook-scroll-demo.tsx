import React, { useRef, useEffect, useState } from "react";
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
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const toggleMute = () => {
    if (videoEl) {
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
    }
  };

  return (
    <section
      className="relative w-full bg-black overflow-hidden flex flex-col items-center sm:mt-0"
      style={{
        marginTop: isMobile ? "-80px" : "0px",
        minHeight: "100vh",
        // 👇 add a bit more breathing room at the bottom only on mobile
        paddingBottom: isMobile ? "120px" : "0px",
      }}
    >
      {/* ===== Laptop Section ===== */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, delay: 1.2, ease: "easeOut" }}
        className="relative w-full flex justify-center px-4 mb-0 sm:mb-20"
      >
        <div
          className="scale-[0.95] sm:scale-100 
                     md:scale-[1.25] lg:scale-[1.35] xl:scale-[1.4] 2xl:scale-[1.45]
                     transform origin-center transition-transform duration-700 ease-out
                     max-w-[95vw] md:max-w-[90vw] lg:max-w-[85vw] relative"
        >
          <MacbookScroll src="/video.mp4" showGradient={false} />

          {/* ✅ Sound Toggle Button */}
          <button
            onClick={toggleMute}
            className="z-50 absolute bottom-20 right-6 bg-white/20 hover:bg-white/30 
                       text-white backdrop-blur-md rounded-full p-4 shadow-lg 
                       transition-all duration-300 cursor-pointer select-none"
            style={{ pointerEvents: "auto" }}
          >
            {muted ? (
              <VolumeX className="w-6 h-6" />
            ) : (
              <Volume2 className="w-6 h-6 text-orange-500" />
            )}
          </button>
        </div>
      </motion.div>

      {/* ===== Spacer Section (desktop only) ===== */}
      {!isMobile && <div className="h-[80vh] sm:h-[100vh]" />}
    </section>
  );
}
