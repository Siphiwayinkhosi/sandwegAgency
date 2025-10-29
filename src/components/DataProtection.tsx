
import React, { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

type DataProtectionProps = {
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
    aria-hidden="true"
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

const DataProtection: React.FC<DataProtectionProps> = ({ open, onClose }) => {
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (open) {
      document.documentElement.style.overflow = "hidden";
      setTimeout(() => closeBtnRef.current?.focus(), 50);
    } else {
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <Backdrop onClose={onClose} />
          <motion.aside
            role="dialog"
            aria-modal="true"
            aria-label="Privacy Policy"
            className="fixed right-0 top-0 z-50 h-full w-full max-w-[720px] bg-neutral-950 text-white shadow-2xl"
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Header */}
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-white/10 bg-neutral-950/80 px-6 py-4 backdrop-blur">
              <h2 className="text-lg font-semibold tracking-wide text-white">
                Privacy Policy (Data Protection)
              </h2>
              <button
                ref={closeBtnRef}
                onClick={onClose}
                className="rounded-full border border-orange-500 px-3 py-1.5 text-sm text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                ✕
              </button>
            </div>

            {/* Content */}
            <div className="h-[calc(100%-64px)] overflow-y-auto px-6 py-8">
              <div className="space-y-10 text-base text-white/80 leading-relaxed">
                {/* Section 1 */}
                <section>
                  <p className="text-sm text-white/60 mb-2">
                    Effective Date: <span className="text-white">November 2025</span>
                  </p>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    1. General Information
                  </h3>
                  <p>
                    This website is intended exclusively for business customers
                    as defined in §14 of the German Civil Code (BGB). The
                    following information provides an overview of what happens
                    to your personal data when you visit this website.
                  </p>
                  <p>
                    Personal data refers to any information that can be used to identify you personally.
                    Detailed information is available in the sections below.
                  </p>
                </section>

                {/* Section 2 */}
                <section>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    2. Data Controller
                  </h3>
                  <p>
                    <strong>Sandweg Branding & Marketing</strong>
                    <br />
                    Kemperplatz 1, 10785 Berlin  (Germany) || Sdvwashini industrial site, Mbabane (Eswatini)
                    <br />
                    Email:{" "}
                    <a
                      href="mailto:info@go-sandweg.com"
                      className="underline underline-offset-4 decoration-white/30 hover:decoration-white"
                    >
                      info@go-sandweg.com
                    </a>
                    <br />
                    Phone: +49 (0) 172 6822097  || (+268) 78011887
                  </p>
                </section>

                {/* Section 3 */}
                <section>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    3. Data Collection on This Website
                  </h3>
                  <h4 className="font-semibold text-white mb-1">
                    How do we collect your data?
                  </h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Through voluntary input (e.g., contact forms).</li>
                    <li>
                      Automatically via technical processes (e.g., browser type,
                      OS, access time).
                    </li>
                  </ul>

                  <h4 className="font-semibold text-white mt-4 mb-1">
                    Why do we use your data?
                  </h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Ensure the website runs properly.</li>
                    <li>Analyze usage behavior.</li>
                    <li>Respond to inquiries and manage projects.</li>
                    <li>Conduct marketing and follow-up communication.</li>
                  </ul>

                  <h4 className="font-semibold text-white mt-4 mb-1">
                    Your rights under GDPR
                  </h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Access, rectification, deletion, restriction of processing</li>
                    <li>Withdraw consent at any time</li>
                    <li>Object to processing (Art. 21 GDPR)</li>
                    <li>File a complaint with a supervisory authority</li>
                  </ul>
                </section>

               

                {/* Section 5 */}
                <section>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    4. Cookies & Consent
                  </h3>
                  <p>
                    Cookies are stored only if technically necessary or with your explicit consent.
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>
                      Technically necessary – Art. 6 para. 1 lit. f GDPR
                    </li>
                    <li>
                      With consent – Art. 6 para. 1 lit. a GDPR in conjunction with §25 TTDSG
                    </li>
                  </ul>
                  <p className="mt-2">
                    Consent is managed through Usercentrics and can be withdrawn at any time.
                  </p>
                </section>

                {/* Section 6-12 simplified but tidy */}
                <section>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    5. Contact & Communication
                  </h3>
                  <p>
                    When contacting us (via form, email or phone), data is processed based on:
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Contractual needs (Art. 6 para. 1 lit. b GDPR)</li>
                    <li>Legitimate interest (Art. 6 para. 1 lit. f GDPR)</li>
                    <li>Consent (Art. 6 para. 1 lit. a GDPR)</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    6. Newsletter & Marketing Automation
                  </h3>
                  <p>
                    Subscriptions and marketing activities occur only with your explicit consent (Art. 6 para. 1 lit. a GDPR). You may unsubscribe at any time.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    7. Remarketing & Advertising
                  </h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Google and Meta Remarketing</li>
                    <li>Lookalike Audiences</li>
                    <li>Cross-device ads</li>
                  </ul>
                  <p className="mt-2">
                    Based on legitimate interest or consent (Art. 6 para. 1 lit. a/f GDPR).
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    8. Internal Analytics & References
                  </h3>
                  <p>
                    Anonymous data is used to improve our services. Projects may appear as anonymized references (e.g. “Client from Hamburg”).
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    9. Legal Basis & Data Retention
                  </h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Consent – Art. 6 (1)(a)</li>
                    <li>Contract – Art. 6 (1)(b)</li>
                    <li>Legal Obligation – Art. 6 (1)(c)</li>
                    <li>Legitimate Interest – Art. 6 (1)(f)</li>
                  </ul>
                  <p className="mt-2">
                    Data retention depends on purpose and legal requirements.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    10. Data Security
                  </h3>
                  <p>
                    SSL encryption is used to secure data transmission and prevent unauthorized access.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    11. Your Rights Summary
                  </h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Access / Correction / Deletion</li>
                    <li>Data Portability</li>
                    <li>Withdraw Consent</li>
                    <li>Object to Processing (Art. 21 GDPR)</li>
                    <li>File Complaint with Authority</li>
                  </ul>
                </section>

                <p className="text-sm text-white/60">
                  This Privacy Policy may be updated periodically. Please review it regularly for changes.
                </p>
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

export default DataProtection;
