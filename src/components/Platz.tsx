import React, { useState } from "react";

const Platz = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="w-full bg-black text-center text-white py-10 font-raleway">
      {/* Top text */}
      <h2 className="text-xl md:text-3xl font-semibold mb-6">
        Besuch uns im Sony Center am Potsdamer Platz in Berlin
      </h2>

      {/* Clickable Video */}
      <div
        className="w-full cursor-pointer"
        onClick={() => setExpanded(!expanded)}
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
        <p className="text-sm text-gray-400 mt-2">
          {expanded ? "Klicken Sie, um zu minimieren" : "Klicken Sie, um zu erweitern"}
        </p>
      </div>
    </section>
  );
};

export default Platz;
