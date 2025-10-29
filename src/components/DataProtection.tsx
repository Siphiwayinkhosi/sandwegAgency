// DataProtection.tsx
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
  const firstFocusRef = useRef<HTMLButtonElement>(null);

  // Lock page scroll & focus the close button when open
  useEffect(() => {
    if (open) {
      document.documentElement.style.overflow = "hidden";
      setTimeout(() => firstFocusRef.current?.focus(), 50);
    } else {
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  // Close with ESC
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
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
              <div className="flex min-w-0 flex-col">
                <span className="text-[10px] uppercase tracking-[0.25em] text-orange-400">
                  Sandweg Branding & Marketing UG
                </span>
                <h2 className="truncate text-lg font-semibold">
                  Privacy Policy (Data Protection)
                </h2>
              </div>

              <div className="flex items-center gap-2">
                <button
                  ref={firstFocusRef}
                  onClick={onClose}
                  className="rounded-full border border-white/10 px-3 py-1.5 text-sm text-white/90 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  Close
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="h-[calc(100%-64px)] overflow-y-auto px-6 py-6">
              <div className="prose prose-invert max-w-none">
                <p className="mb-6 text-sm text-white/60">
                  Effective Date: <span className="text-white">May 2025</span>
                </p>

                <h3 className="mt-0 text-orange-400">1. General Information</h3>
                <p>
                  This website is intended exclusively for business customers as
                  defined in §14 of the German Civil Code (BGB).
                </p>
                <p>
                  The following information provides an overview of what happens
                  to your personal data when you visit this website. Personal
                  data refers to any information that can be used to identify
                  you personally. Detailed explanations can be found in the
                  sections below.
                </p>

                <h3 className="text-orange-400">2. Data Controller</h3>
                <p>The entity responsible for data processing on this website is:</p>
                <p>
                  <strong>
                    Sandweg Branding & Marketing UG (haftungsbeschränkt)
                  </strong>
                  <br />
                  Kemperplatz 1, 10785 Berlin
                  <br />
                  Email:{" "}
                  <a
                    href="mailto:info@go-sandweg.com"
                    className="text-orange-400 underline decoration-orange-500/40 underline-offset-4 hover:decoration-orange-400"
                  >
                    info@go-sandweg.com
                  </a>
                  <br />
                  Phone: +49 (0) 172 6822097
                </p>

                <h3 className="text-orange-400">3. Data Collection on This Website</h3>
                <h4 className="mb-1">How do we collect your data?</h4>
                <ul>
                  <li>You provide it voluntarily (e.g., via contact forms).</li>
                  <li>
                    It is automatically collected through technical processes
                    (e.g., browser type, operating system, access time).
                  </li>
                </ul>

                <h4 className="mb-1">Why do we use your data?</h4>
                <ul>
                  <li>Ensure the website operates without errors.</li>
                  <li>Analyze user behavior.</li>
                  <li>Communicate with customers and process orders.</li>
                  <li>Conduct remarketing and follow-up activities.</li>
                </ul>

                <h4 className="mb-1">What are your rights?</h4>
                <ul>
                  <li>
                    Access, correction, deletion, or restriction of processing.
                  </li>
                  <li>The right to withdraw consent.</li>
                  <li>
                    The right to object to certain processing (Art. 21 GDPR).
                  </li>
                  <li>
                    The right to lodge a complaint with a supervisory authority.
                  </li>
                </ul>

                <h3 className="text-orange-400">
                  4. Hosting & Third-Party Services
                </h3>
                <p>
                  This website is hosted by <strong>Wix.com Ltd.</strong> Data
                  processing may also take place on servers outside the EU, such
                  as in the USA. Wix relies on Standard Contractual Clauses in
                  accordance with Art. 46 GDPR. (More information: Wix Privacy
                  Policy)
                </p>
                <p>Additional third-party services used:</p>
                <ul>
                  <li>Google Analytics &amp; Google Ads (including remarketing and conversion tracking)</li>
                  <li>Meta (Facebook Pixel &amp; Custom Audiences)</li>
                  <li>Usercentrics (cookie consent management)</li>
                  <li>Stripe (payment processing)</li>
                </ul>
                <p>
                  Data processing agreements (DPAs) have been concluded with all
                  third-party providers.
                </p>

                <h3 className="text-orange-400">5. Cookies & Consent</h3>
                <p>
                  When visiting this website, cookies are used. Cookies are only
                  stored if:
                </p>
                <ul>
                  <li>
                    They are technically necessary (Art. 6 para. 1 lit. f GDPR), or
                  </li>
                  <li>
                    You have given your consent (Art. 6 para. 1 lit. a GDPR in
                    conjunction with §25 TTDSG).
                  </li>
                </ul>
                <p>
                  Consent for cookies is managed via Usercentrics. You can
                  withdraw or adjust your preferences at any time. For details
                  on cookie usage, visit: Wix Cookie Policy.
                </p>

                <h3 className="text-orange-400">6. Contact & Communication</h3>
                <p>
                  When you contact us via form, email, or phone, we store your
                  information to process your request. Data is processed:
                </p>
                <ul>
                  <li>
                    Under Art. 6 para. 1 lit. b GDPR (pre-contractual or
                    contractual obligations),
                  </li>
                  <li>
                    Based on legitimate interests (Art. 6 para. 1 lit. f GDPR), or
                  </li>
                  <li>With your consent (Art. 6 para. 1 lit. a GDPR).</li>
                </ul>

                <h3 className="text-orange-400">
                  7. Newsletter & Marketing Automation
                </h3>
                <p>
                  If you subscribe to our newsletter or opt into our marketing
                  automation (e.g., after contacting us), we use your data for
                  personalized communication. Processing is carried out only
                  with your explicit consent in accordance with Art. 6 para. 1
                  lit. a GDPR. You can unsubscribe at any time.
                </p>

                <h3 className="text-orange-400">8. Remarketing & Advertising</h3>
                <p>We may use your data for:</p>
                <ul>
                  <li>Remarketing (Google, Meta)</li>
                  <li>Lookalike or Custom Audiences</li>
                  <li>Cross-device advertising</li>
                </ul>
                <p>
                  Processing is based on legitimate interests (Art. 6 para. 1
                  lit. f GDPR) or your consent (Art. 6 para. 1 lit. a GDPR).
                  You may withdraw your consent at any time.
                </p>

                <h3 className="text-orange-400">
                  9. Internal Analytics & Reference Usage
                </h3>
                <p>
                  We process anonymous data to improve our products and
                  services. Project information may be used in anonymized form
                  (e.g., “Coach from Hamburg”) as a reference on our website or
                  materials.
                </p>

                <h3 className="text-orange-400">
                  10. Legal Basis & Data Retention
                </h3>
                <p>The specific legal basis depends on the purpose of processing:</p>
                <ul>
                  <li>Art. 6 para. 1 lit. a – Consent</li>
                  <li>Art. 6 para. 1 lit. b – Contract performance</li>
                  <li>Art. 6 para. 1 lit. c – Legal obligation</li>
                  <li>Art. 6 para. 1 lit. f – Legitimate interest</li>
                </ul>
                <p>
                  Data retention is determined by the purpose of processing and
                  applicable legal requirements.
                </p>

                <h3 className="text-orange-400">11. Data Security</h3>
                <p>
                  This website uses SSL encryption to protect your data from
                  unauthorized access during transmission.
                </p>

                <h3 className="text-orange-400">12. Summary of Your Rights</h3>
                <ul>
                  <li>
                    Access, correct, delete, or restrict processing of your data
                  </li>
                  <li>Data portability</li>
                  <li>Withdraw your consent</li>
                  <li>Object to certain processing (Art. 21 GDPR)</li>
                  <li>File a complaint with a supervisory authority</li>
                </ul>

                <p className="mt-8 text-sm text-white/60">
                  This Privacy Policy may be updated periodically. Please review
                  it regularly for any changes.
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
