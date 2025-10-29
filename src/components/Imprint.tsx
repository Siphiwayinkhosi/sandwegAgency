import React, { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

type ImprintProps = {
  open: boolean;
  onClose: () => void;
};

const Backdrop: React.FC<{ onClose: () => void }> = ({ onClose }) => (
  <motion.div
    className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    onClick={onClose}
  />
);

const panelVariants = {
  hidden: { x: "100%", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 260, damping: 26 },
  },
  exit: { x: "100%", opacity: 0, transition: { duration: 0.25 } },
};

const Imprint: React.FC<ImprintProps> = ({ open, onClose }) => {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (open) {
      document.documentElement.style.overflow = "hidden";
      setTimeout(() => closeRef.current?.focus(), 50);
    } else {
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <Backdrop onClose={onClose} />

          <motion.aside
            role="dialog"
            aria-modal="true"
            aria-label="Imprint"
            className="fixed right-0 top-0 z-50 h-full w-full max-w-[650px] bg-neutral-950 text-white shadow-2xl"
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Header */}
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-white/10 bg-neutral-950/80 px-6 py-4 backdrop-blur">
              <h2 className="text-lg font-semibold text-white tracking-wide">
                Imprint
              </h2>
              <button
                ref={closeRef}
                onClick={onClose}
                className="rounded-full border border-white/10 px-3 py-1.5 text-sm text-white/90 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                Close
              </button>
            </div>

            {/* Content */}
            <div className="h-[calc(100%-64px)] overflow-y-auto px-6 py-8">
              <div className="prose prose-invert max-w-none">
                <h3 className="text-2xl font-bold text-orange-400 mb-4">
                  Sandweg Branding & Marketing UG
                  <span className="block text-sm font-normal text-white/70">
                    (limited liability)
                  </span>
                </h3>

                <div className="space-y-3 text-base text-white/80 leading-relaxed">
                  <p>
                    <a
                      href="mailto:info@go-sandweg.com"
                      className="text-orange-400 underline decoration-orange-400/40 hover:decoration-orange-400 underline-offset-4"
                    >
                      info@go-sandweg.com
                    </a>
                    <br />
                    <a
                      href="https://www.go-sandweg.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-400 underline decoration-orange-400/40 hover:decoration-orange-400 underline-offset-4"
                    >
                      www.go-sandweg.com
                    </a>
                    <br />
                    +49 30 41738874
                  </p>

                  <p>
                    <strong>Address:</strong>
                    <br />
                    Kemperplatz 1
                    <br />
                    10785 Berlin
                  </p>

                  <p>
                    <strong>VAT ID No.:</strong> DE 67839114204
                  </p>

                  <p>
                    <strong>Managing Director:</strong>
                    <br />
                    Marcel Sandweg
                  </p>
                </div>
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

export default Imprint;
