import React from "react";
import { motion } from "framer-motion";

const Partner: React.FC = () => {
  const partners = ["/p1.png", "/p2.png", "/p3.png", "/p4.png", "/p5.png", "/p6.png"];

  return (
    <section className="w-full bg-black py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden py-6 sm:py-10">

          {/* gradient edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10" />

          {/* ⭐ SEAMLESS MARQUEE */}
          <motion.div
            className="flex items-center space-x-20 sm:space-x-28 w-max"
            animate={{ x: "-50%" }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            {/* Double the list for seamless loop */}
            {[...partners, ...partners].map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt=""
                className="h-20 sm:h-24 md:h-28 w-auto object-contain opacity-90 hover:opacity-100 transition flex-shrink-0"
              />
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Partner;
