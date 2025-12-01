import React from "react";

const Partner = () => {
  const partners = ["/p1.png", "/p2.png", "/p3.png", "/p4.png", "/p5.png"];

  return (
    <section className="w-full bg-black py-16 overflow-hidden">
      <style>
        {`
          /* ⭐ PERFECT SEAMLESS SCROLL */
          @keyframes marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }

          .marquee-track {
            animation: marquee 20s linear infinite;
          }

          .marquee-track:hover {
            animation-play-state: paused;
          }
        `}
      </style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="relative overflow-hidden py-6 sm:py-10">

          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10" />

          {/* ⭐ NO FRAMER MOTION – PURE CSS – PERFECT LOOP */}
          <div className="flex w-max marquee-track space-x-20 sm:space-x-28">
            {[...partners, ...partners].map((logo, i) => (
              <img
                key={i}
                src={logo}
                className="h-20 sm:h-24 md:h-28 w-auto object-contain opacity-90 hover:opacity-100 transition"
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Partner;

