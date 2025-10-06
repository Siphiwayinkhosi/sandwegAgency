// src/components/Footer.tsx
import React from "react";
import { Facebook, Twitter, Instagram } from "lucide-react";
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

  const navLinks: string[] = ["Home", "About", "Services", "Contact"];
  const socialIcons = [Facebook, Twitter, Instagram];

  return (
    <motion.footer
      className="w-full bg-black text-white py-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
        {/* Brand + Logo */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row items-center md:items-center justify-center md:justify-start gap-3 md:gap-4 text-center md:text-left"
        >
          <img src="/logo.png" alt="Sandweg Logo" className="max-w-[160px] md:max-w-[200px] h-auto object-contain" />

          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-2xl font-bold text-white tracking-wide">
              Sandweg
            </h3>
            <p className="text-base sm:text-lg text-white">
              Branding & Marketing Agency
            </p>
          </div>
        </motion.div>

        {/* Navigation */}
        <motion.ul
          variants={containerVariants}
          className="flex flex-wrap justify-center gap-6 text-base sm:text-lg font-medium"
        >
          {navLinks.map((link, i) => (
            <motion.li key={i} variants={itemVariants}>
              <a
                href={`#${link.toLowerCase()}`}
                className="hover:text-orange-500 transition"
              >
                {link}
              </a>
            </motion.li>
          ))}
        </motion.ul>

        {/* Social Icons */}
        <motion.div
          variants={containerVariants}
          className="flex justify-center md:justify-end gap-4"
        >
          {socialIcons.map((Icon, i) => (
            <motion.a
              key={i}
              href="#"
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
        className="border-t border-gray-700 mt-8 pt-6 text-center text-base sm:text-lg text-gray-500"
      >
        © {new Date().getFullYear()} Sandweg. All rights reserved.
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
