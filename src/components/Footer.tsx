// src/components/Footer.tsx
import React from "react";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { motion, Variants } from "framer-motion";

const Footer: React.FC = () => {
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

  // ✅ Replace with your actual social URLs
  const socialLinks = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/p/Sandweg-Branding-Marketing-61569399061841/", // <-- Replace with real Facebook link
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/jobs/view/web-und-grafikdesigner-at-sandweg-branding-marketing-4266458960/", // <-- Replace with real LinkedIn link
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/go_sandweg/", // <-- Replace with real Instagram link
    },
  ];

  return (
    <motion.footer
      className="relative w-full bg-black text-white py-10 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center md:items-center justify-between relative">
        {/* ✅ Brand + Logo */}
        <motion.div
          variants={itemVariants}
          className="
            flex flex-col md:flex-row
            items-center md:items-center
            justify-center md:justify-start
            gap-3 md:gap-4
            text-center md:text-left
            md:relative md:top-4
          "
        >
          <img
            src="/logo.png"
            alt="Sandweg Logo"
            className="max-w-[160px] md:max-w-[200px] h-auto object-contain"
          />

          <div className="flex flex-col items-center md:items-start mt-2 md:mt-0">
            <h3 className="text-2xl font-bold text-white tracking-wide leading-none">
              Sandweg
            </h3>
            <p className="text-base sm:text-lg text-white leading-none mt-1">
              Branding & Marketing Agency
            </p>
          </div>
        </motion.div>

        {/* ✅ Social Icons */}
        <motion.div
          variants={containerVariants}
          className="
            flex justify-center md:justify-end gap-4
            mt-6 md:mt-0
            md:absolute md:right-10 md:top-[58%]
          "
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

      {/* Divider + Copyright */}
      <motion.div
        variants={itemVariants}
        className="border-t border-gray-700 mt-10 pt-6 text-center text-base sm:text-lg text-gray-500"
      >
        © {new Date().getFullYear()} Sandweg. All rights reserved.
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
