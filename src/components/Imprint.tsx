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
              <h2 className="text-lg font-semibold tracking-wide text-white">
                Imprint
              </h2>
              <button
                ref={closeRef}
                onClick={onClose}
                className="rounded-full border border-orange-500 px-3 py-1.5 text-sm text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                ✕
              </button>
            </div>

            {/* Content */}
            <div className="h-[calc(100%-64px)] overflow-y-auto px-6 py-8">
              <div className="space-y-10 text-base text-white/80 leading-relaxed">
                {/* Germany Section */}
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    Sandweg Branding & Marketing 
                    
                  </h3>
                  <p>
                    <strong>Address:</strong>
                    <br />
                    Kemperplatz 1<br />
                    10785 Berlin<br />
                    Germany
                  </p>
                  <p>
                    <strong>Managing Director:</strong> Marcel Sandweg
                    <br />
                    <strong>VAT ID No.:</strong> DE 67839114204
                  </p>
                  <p>
                    <strong>Email:</strong>{" "}
                    <a
                      href="mailto:info@go-sandweg.com"
                      className="underline underline-offset-4 decoration-white/30 hover:decoration-white"
                    >
                      info@go-sandweg.com
                    </a>
                    <br />
                    <strong>Website:</strong>{" "}
                    <a
                      href="https://www.go-sandweg.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-4 decoration-white/30 hover:decoration-white"
                    >
                      www.go-sandweg.com
                    </a>
                    <br />
                    <strong>Phone:</strong> +49 30 41738874
                  </p>
                </div>

                {/* Eswatini Section */}
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    Sandweg Investments (PTY) LTD
                  </h3>
                  <p>
                    <strong>Subsidiary:</strong> LILANGA PROPERTIES
                    <br />
                    <strong>Office No:</strong> 8
                    <br />
                    <strong>Location:</strong> Mbabane, Sdvwashini Industrial Site
                    <br />
                    <strong>P.O. BOX:</strong> D149
                    <br />
                    <strong>Phone:</strong> (+268) 7801 1887
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
