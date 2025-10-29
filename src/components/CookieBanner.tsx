import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type CookieBannerProps = {
  onPrivacyClick: () => void;
};

const CookieBanner: React.FC<CookieBannerProps> = ({ onPrivacyClick }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) setShow(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setShow(false);
  };

  const handleClose = () => {
    localStorage.setItem("cookieConsent", "dismissed");
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed bottom-0 left-0 w-full z-[9999] bg-white text-black border-t border-gray-200 shadow-[0_-4px_25px_rgba(0,0,0,0.25)]"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute right-4 top-3 text-black text-4xl font-light hover:text-orange-500 transition"
            aria-label="Close"
          >
            ×
          </button>

          <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm md:text-base text-center md:text-left leading-relaxed">
              This website uses cookies to provide an improved user experience.{" "}
              <strong>By clicking "Accept"</strong>, you consent to the use of cookies.{" "}
              <button
                onClick={onPrivacyClick}
                className="text-orange-500 underline decoration-orange-400/50 hover:decoration-orange-500 underline-offset-4 transition"
              >
                Privacy Policy
              </button>
            </p>

            <div className="flex gap-3">
              <button
                onClick={handleAccept}
                className="bg-black text-white px-5 py-2 text-sm hover:bg-orange-600 transition"
              >
                Agree
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
