import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Platz = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="w-full bg-black text-center text-white pt-4 pb-10 font-raleway">

      {/* CLICKABLE HEADING */}
      <h2
        onClick={() => setShowVideo(!showVideo)}
        className="
          text-center text-4xl sm:text-5xl font-light mb-6 tracking-tight px-4
          cursor-pointer select-none
          hover:text-orange-400 transition
        "
      >
        //Visit our office in Berlin at Potsdamer Platz
      </h2>

      {/* VIDEO ONLY APPEARS ON CLICK */}
      <AnimatePresence>
        {showVideo && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden"
          >
            <div className="w-full h-[45vh] sm:h-[55vh] md:h-[65vh] overflow-hidden rounded-none sm:rounded-2xl shadow-lg">
              <video
                src="/platz.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="
                  w-full h-full 
                  object-cover 
                  object-bottom
                "
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Platz;



