import React, { useState } from "react";
import { Box, Settings, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(null);

  const cards = [
    // === AI INTEGRATIONS ===
    {
      icon: <Box className="h-10 w-10 text-orange-500" />,
      title: "AI Integrations",
      shortLines: [
        { text: "Virtual Receptionists" },
        { text: "Chatbots" },
        { text: "AI Scheduling" },
      ],
      fullContent: (
        <div className="space-y-6 text-neutral-200">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Smarten Your Business with AI Automations
          </h1>
          <p>
            Smarten your business with AI.
            <br />
            <br />
            AI Automations help you eliminate repetitive tasks, speed up
            workflows, and free your team to focus on what really matters:
            growth. From virtual receptionists and smart scheduling to lead
            qualification and customer support, we design solutions that adapt
            to your business.
          </p>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              Core Benefits
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Automate repetitive tasks</li>
              <li>AI chatbots & virtual receptionists</li>
              <li>Smart scheduling & lead qualification</li>
              <li>Cost savings & scalability</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">Use Cases</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <b>Small businesses:</b> customer support & appointment booking
              </li>
              <li>
                <b>Medium enterprises:</b> workflow automations (CRM, emails,
                reporting)
              </li>
              <li>
                <b>Agencies:</b> faster lead handling, client dashboards
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              How It Works
            </h2>
            <ol className="list-decimal list-inside space-y-1">
              <li>Audit your processes</li>
              <li>Identify automation opportunities</li>
              <li>Build & integrate AI workflows</li>
              <li>Ongoing optimization</li>
            </ol>
          </div>

          <blockquote className="italic text-orange-400">
            “We saved 15 hours per week using AI scheduling.”
          </blockquote>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-orange-500 text-white rounded-full font-semibold mt-4"
          >
            Book a free consultation today
          </motion.button>
        </div>
      ),
    },

    // === WEB DESIGN ===
    {
      icon: <Settings className="h-10 w-10 text-orange-500" />,
      title: "Web Design",
      shortLines: [
        { text: "Scalable Web Design" },
        { text: "Smart Websites" },
        { text: "Mobile Responsive" },
      ],
      fullContent: (
        <div className="space-y-6 text-neutral-200">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Modern Web Design That Converts
          </h1>
          <p>Your website is your digital storefront—make it unforgettable.</p>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              What We Offer
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Custom responsive design</li>
              <li>Domain & hosting (1 year free)</li>
              <li>Optimized for speed & mobile</li>
              <li>Future-ready with integrations (chat, AI, booking)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              Portfolio / Showcase
            </h2>
            <div className="bg-gray-800/40 rounded-lg p-6 text-center text-sm text-gray-400">
              [ Showcase of past projects / Placeholder images ]
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">Process</h2>
            <ol className="list-decimal list-inside space-y-1">
              <li>Discovery & strategy</li>
              <li>Design mockups</li>
              <li>Development & testing</li>
              <li>Launch & support</li>
            </ol>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-orange-500 text-white rounded-full font-semibold mt-4"
          >
            Let&apos;s get you started with a new website
          </motion.button>
        </div>
      ),
    },

    // === SEO ===
    {
      icon: <Sparkles className="h-10 w-10 text-orange-500" />,
      title: "SEO",
      shortLines: [
        { text: "Search Engine Optimization" },
        { text: "Increased Visibility" },
        { text: "Higher Google Ranking" },
      ],
      fullContent: (
        <div className="space-y-6 text-neutral-200">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Get Found Online with Professional SEO
          </h1>
          <p>
            Get found where it matters most.
            <br />
            <br />
            SEO (Search Engine Optimization) is the key to more visibility,
            more traffic, and more customers. We optimize your website so it
            ranks higher on Google and other search engines – making it easier
            for the right people to discover your business. From keywords and
            content strategy to local search and technical improvements, our SEO
            services build lasting growth and stronger online authority.
          </p>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              Why SEO Matters
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>90% of online journeys start with search</li>
              <li>Higher rankings = more qualified leads</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              Our Services
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>On-page optimization (titles, meta tags, speed)</li>
              <li>Keyword research & content strategy</li>
              <li>Local SEO (Google Business Profile, maps)</li>
              <li>Link building & authority growth</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              Results-Oriented
            </h2>
            <p className="italic text-orange-400">
              “Clients typically see ranking improvements in 3–6 months.”
            </p>
            <div className="bg-gray-800/40 rounded-lg p-6 text-center text-sm text-gray-400">
              [ Before / After Graph or Image Placeholder ]
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              Pricing / Packages
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Starter: Local SEO setup</li>
              <li>Growth: Full website optimization</li>
              <li>Premium: Ongoing SEO campaigns</li>
            </ul>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-orange-500 text-white rounded-full font-semibold mt-4"
          >
            Request your free SEO audit
          </motion.button>
        </div>
      ),
    },
  ];

  return (
    <section className="w-full bg-black py-20 relative">
      <h2 className="mb-12 text-center text-5xl font-bold text-white">
        Our Services
      </h2>

      <div className="flex flex-col md:flex-row justify-center gap-8 px-6 relative z-10">
        {cards.map((card, i) => (
          <GridItem
            key={i}
            {...card}
            index={i}
            expanded={activeIndex === i}
            onClick={() => setActiveIndex(activeIndex === i ? null : i)}
          />
        ))}
      </div>
    </section>
  );
}

const GridItem = ({ icon, title, shortLines, fullContent, expanded, onClick }) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);

  return (
    <motion.div
      layout
      onClick={onClick}
      className={`relative rounded-3xl bg-black p-[2px] overflow-hidden cursor-pointer flex-1 transition-all duration-500 ${
        expanded ? "max-w-[800px]" : "max-w-[500px]"
      }`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
      viewport={{ once: true, amount: 0.2 }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Glow effect */}
      <motion.div
        animate={{
          opacity: hover || expanded ? 1 : 0,
          x: pos.x - 250,
          y: pos.y - 250,
        }}
        transition={{ type: "spring", stiffness: 80, damping: 30 }}
        className="pointer-events-none absolute h-[600px] w-[600px] rounded-full bg-orange-500/90 blur-2xl"
      />
      <motion.div
        animate={{
          opacity: hover || expanded ? 0.6 : 0,
          x: pos.x - 350,
          y: pos.y - 350,
        }}
        transition={{ type: "spring", stiffness: 70, damping: 25 }}
        className="pointer-events-none absolute h-[800px] w-[800px] rounded-full bg-orange-400/40 blur-3xl"
      />

      {/* Card content */}
      <motion.div
        layout
        className="relative h-full rounded-3xl border border-gray-800 bg-neutral-900/95 px-8 py-12 flex flex-col shadow-lg"
      >
        <div className="flex items-center gap-4 mb-6">
          {icon}
          <h3 className="text-2xl md:text-3xl font-semibold text-white">
            {title}
          </h3>
        </div>

        {/* Short list always visible */}
        <motion.ul layout className="space-y-3 text-neutral-300 mb-6">
          {shortLines?.map((item, idx) => (
            <li key={idx}>{item.text}</li>
          ))}
        </motion.ul>

        {/* Expanded section */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              key="expanded"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="space-y-6"
            >
              {fullContent}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};
