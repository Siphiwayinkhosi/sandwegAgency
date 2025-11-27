import React, { useState } from "react";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { motion, Variants } from "framer-motion";

import DataProtection from "./DataProtection";
import Imprint from "./Imprint";
import Terms from "./Terms";
import CookieBanner from "./CookieBanner";

const Footer: React.FC = () => {
  const [showPolicy, setShowPolicy] = useState(false);
  const [showImprint, setShowImprint] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const socialLinks = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/p/Sandweg-Branding-Marketing-61569399061841/",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/jobs/view/web-und-grafikdesigner-at-sandweg-branding-marketing-4266458960/",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/go_sandweg/",
    },
  ];

  return (
    <>
      {/* FOOTER */}
      <motion.footer
        className="relative w-full bg-black text-white py-10 overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-center relative">

          {/* SOCIAL ICONS */}
          <motion.div
            variants={containerVariants}
            className="w-full flex justify-center gap-6 mt-10"
          >
            {socialLinks.map(({ icon: Icon, href }, i) => (
              <motion.a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.2,
                  rotate: 5,
                  boxShadow: "0 0 15px #f97316",
                  color: "#f97316",
                }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-500 hover:border-orange-500 transition"
              >
                <Icon size={22} />
              </motion.a>
            ))}
          </motion.div>

        </div>

        {/* DIVIDER & LINKS */}
        <motion.div
          variants={itemVariants}
          className="border-t border-gray-700 mt-10 pt-6 text-center text-base sm:text-lg text-gray-500 flex flex-col md:flex-row items-center justify-center gap-4"
        >
          <p>© {new Date().getFullYear()} Sandweg. All rights reserved.</p>

          <button
            onClick={() => setShowPolicy(true)}
            className="text-gray-500 hover:text-orange-400 underline decoration-gray-500/40 underline-offset-4 transition"
          >
            Privacy Policy
          </button>

          <button
            onClick={() => setShowImprint(true)}
            className="text-gray-500 hover:text-orange-400 underline decoration-gray-500/40 underline-offset-4 transition"
          >
            Imprint
          </button>

          <button
            onClick={() => setShowTerms(true)}
            className="text-gray-500 hover:text-orange-400 underline decoration-gray-500/40 underline-offset-4 transition"
          >
            Terms and Conditions
          </button>
        </motion.div>
      </motion.footer>

      {/* MODALS */}
      <DataProtection open={showPolicy} onClose={() => setShowPolicy(false)} />
      <Imprint open={showImprint} onClose={() => setShowImprint(false)} />
      <Terms open={showTerms} onClose={() => setShowTerms(false)} />

      {/* COOKIE BANNER */}
      <CookieBanner onPrivacyClick={() => setShowPolicy(true)} />
    </>
  );
};

export default Footer;


