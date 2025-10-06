import React, { useState } from "react";

const Platz = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="w-full bg-black text-center text-white py-10 font-raleway">
      {/* Top text - hidden on mobile */}
      <h2 className="hidden sm:block text-xl md:text-5xl font-semibold mb-6">
     Visit our office in Berlin at Potsdamer Platz
      </h2>

      {/* Video wrapper */}
      <div
        className="w-full"
        // 👉 only clickable on sm+ (tablet & desktop)
        onClick={() => {
          if (window.innerWidth >= 640) setExpanded(!expanded);
        }}
      >
        <div
          className={`w-full overflow-hidden rounded-2xl shadow-lg transition-all duration-700 ease-in-out ${
            expanded ? "h-[80vh]" : "h-80"
          }`}
        >
          <video
            src="/platz.mp4"
            autoPlay
            loop
            muted
            playsInline
            className={`w-full h-full transition-all duration-700 ease-in-out ${
              expanded ? "object-contain" : "object-cover object-bottom"
            }`}
          />
        </div>

        {/* Toggle text - hidden on mobile */}
        <p className="hidden sm:block text-sm text-gray-400 mt-2">
          {expanded
            ? "Click to minimize"
            : "Click to expand"}
        </p>
      </div>
    </section>
  );
};

export default Platz;
