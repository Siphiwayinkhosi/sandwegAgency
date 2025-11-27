import React, { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

type TermsProps = {
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

const Terms: React.FC<TermsProps> = ({ open, onClose }) => {
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
            aria-label="Terms and Conditions"
            className="fixed right-0 top-0 z-50 h-full w-full max-w-[650px] bg-neutral-950 text-white shadow-2xl"
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* HEADER */}
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-white/10 bg-neutral-950/80 px-6 py-4 backdrop-blur">
              <h2 className="text-lg font-semibold tracking-wide text-white">
                Terms & Conditions
              </h2>
              <button
                ref={closeRef}
                onClick={onClose}
                className="rounded-full border border-orange-500 px-3 py-1.5 text-sm text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                ✕
              </button>
            </div>

            {/* CONTENT */}
            <div className="h-[calc(100%-64px)] overflow-y-auto px-6 py-8">
              <div className="space-y-10 text-base text-white/80 leading-relaxed">

                <div>
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    General Terms and Conditions (GTC)
                  </h3>
                  <p>
                    Sandweg Branding & Marketing UG (limited liability)
                    <br />
                    Version: May 2025
                  </p>
                </div>

                {/* 1. Scope */}
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-white">
                    1. Scope
                  </h4>
                  <p>
                    These General Terms and Conditions apply to all contracts between
                    Sandweg Branding & Marketing UG (limited liability), Kemperplatz 1,
                    10785 Berlin (“Agency”), and its business clients (B2B).
                  </p>
                </div>

                {/* 2. Subject Matter */}
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-white">
                    2. Subject Matter of the Contract
                  </h4>
                  <p>The Agency provides digital and physical services throughout Germany, including:</p>
                  <ul className="list-disc ml-6 mt-2 space-y-1">
                    <li>Creation and maintenance of smart websites</li>
                    <li>Branding & logo development</li>
                    <li>Marketing strategy & consulting</li>
                    <li>Online marketing (SEO, Google Ads, social media)</li>
                    <li>Lead generation & funnel building</li>
                    <li>Design and printing of advertising materials</li>
                    <li>Window lettering and decals</li>
                    <li>Setup of booking systems, online payment, and CRM tools</li>
                  </ul>
                </div>

                {/* 3. Contract Conclusion */}
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-white">
                    3. Conclusion of Contract
                  </h4>
                  <p>A contract is concluded through:</p>
                  <ul className="list-disc ml-6 mt-2 space-y-1">
                    <li>signed written agreement,</li>
                    <li>acceptance of a digital offer (e.g., proposal, PDF), or</li>
                    <li>clear acceptance via email.</li>
                  </ul>
                </div>

                {/* 4. Prices & Payment */}
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-white">
                    4. Prices and Payment Terms
                  </h4>
                  <p>Payment for projects is structured as follows:</p>
                  <ul className="list-disc ml-6 mt-2 space-y-1">
                    <li>50% before the project begins</li>
                    <li>50% upon acceptance/delivery of the final work</li>
                  </ul>
                  <p className="mt-2">
                    Ongoing services are billed monthly in advance. Payment options include:
                    credit card, instant bank transfer, and payment links (e.g., Stripe).
                  </p>
                  <p className="mt-2">
                    Late payments incur 5% interest above ECB base rate + €5 reminder fee per notice.
                  </p>
                </div>

                {/* 5. Service Scope */}
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-white">
                    5. Scope of Services & Collaboration
                  </h4>
                  <p>
                    Projects include 3–5 revision rounds. Additional revisions are billed separately.
                    Subscription models include 1 monthly meeting + reporting.
                  </p>
                  <p className="mt-2">
                    All required content/access must be provided within 14 days of project start.
                    No cooperation for 2 months → project termination + deposit forfeited.
                  </p>
                </div>

                {/* 6. Usage Rights */}
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-white">
                    6. Rights of Use
                  </h4>
                  <p>
                    All created content remains Agency property until fully paid.
                    Afterwards, the client receives simple, non-transferable usage rights.
                    Third-party modifications require written approval.
                  </p>
                  <p className="mt-2">
                    The Agency may publish work as references at any time.
                  </p>
                </div>

                {/* 7. Liability */}
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-white">
                    7. Liability
                  </h4>
                  <p>
                    The Agency is liable only for intent or gross negligence.
                    No liability for lost profits, indirect damages,
                    or damages caused by third-party services.
                  </p>
                  <p className="mt-2">No marketing success guarantees.</p>
                </div>

                {/* 8. Data Protection */}
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-white">
                    8. Data Protection
                  </h4>
                  <p>Personal data is processed only in accordance with GDPR:</p>
                  <ul className="list-disc ml-6 mt-2 space-y-1">
                    <li>contract fulfillment</li>
                    <li>processing access data & briefings</li>
                    <li>internal optimization</li>
                    <li>remarketing</li>
                    <li>follow-up offers</li>
                    <li>anonymized reference use</li>
                    <li>newsletters (with explicit consent)</li>
                  </ul>
                  <p className="mt-2">
                    Third-party providers include Google, Meta, Wix, Stripe, etc.
                  </p>
                </div>

                {/* 9. Term */}
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-white">
                    9. Term and Termination
                  </h4>
                  <p>
                    Minimum contract duration for ongoing services: 6 months unless otherwise agreed.
                  </p>
                </div>

                {/* 10. Final Provisions */}
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-white">
                    10. Final Provisions
                  </h4>
                  <p>
                    German law applies. Jurisdiction: Berlin. Invalid clauses do not affect remaining terms.
                    Amendments must be in writing. Assignment of rights requires Agency approval.
                  </p>
                </div>

                <div>
                  <p>
                    Sandweg Branding & Marketing UG (limited liability)
                    <br />
                    Kemperplatz 1, 10785 Berlin
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

export default Terms;


