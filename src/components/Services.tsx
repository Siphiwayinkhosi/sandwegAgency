import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ContactPanel from "./ContactPanel";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Services() {
  const [expanded, setExpanded] = useState<number | null>(null);
  const [contactOpen, setContactOpen] = useState(false);

  const toggle = (i: number) => {
    setExpanded(expanded === i ? null : i);
  };

  const services = [
    {
      name: "ai_integrations",
      description: "Smarten your business with AI automations.",
      body: [
        {
          key: "mission",
          value: "Automate workflows, boost efficiency, and reduce manual tasks.",
        },
        {
          key: "features",
          value: [
            "Virtual Receptionists",
            "Chatbots",
            "AI Scheduling",
            "Lead Qualification",
          ],
        },
        {
          key: "benefits",
          value: [
            "Automate repetitive tasks",
            "Save time & operational costs",
            "Increase customer response speed",
            "Scale smarter with AI",
          ],
        },
        {
          key: "use_cases",
          value: [
            "Small businesses → customer support & appointment booking",
            "Medium enterprises → CRM + workflow automation",
            "Agencies → lead handling + dashboards",
          ],
        },
      ],
    },

    {
      name: "web_design",
      description: "Modern web design that converts.",
      body: [
        {
          key: "offer",
          value: [
            "Custom responsive design",
            "Optimized for mobile & speed",
            "Domain & hosting included",
            "Future-ready with AI chat & bookings",
          ],
        },
        {
          key: "process",
          value: [
            "Discovery & strategy",
            "Wireframes & design mockups",
            "Development & testing",
            "Launch & support",
          ],
        },
      ],
    },

    {
      name: "seo",
      description: "Get found online with professional SEO.",
      body: [
        {
          key: "why",
          value: [
            "90% of online journeys start with search",
            "Higher ranking = more qualified leads",
          ],
        },
        {
          key: "services",
          value: [
            "On-page optimization",
            "Keyword research",
            "Local SEO",
            "Link building",
          ],
        },
        {
          key: "results",
          value: "Clients typically see ranking improvements in 3-6 months.",
        },
      ],
    },
  ];

  return (
    <section className="w-full bg-black text-white font-mono py-20 px-6 sm:px-16">
      <h2 className="text-center text-4xl sm:text-5xl font-light mb-16 tracking-tight">
        //Our Services
      </h2>

      {/* Code block container */}
      <div className="max-w-7xl mx-auto text-[13px] sm:text-[16px] md:text-[19px] leading-relaxed whitespace-pre-wrap">

        {/* Opening line */}
        <div className="mb-6">
          <span className="text-white">const </span>
          <span className="text-yellow-300">services</span>
          <span className="text-white"> = {"{"}</span>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 ml-6">
          {services.map((svc, index) => (
            <div key={index} className="relative">

              {/* FUNCTION HEADER */}
              <button
                onClick={() => toggle(index)}
                className="flex items-center gap-2 text-left group"
              >
                {expanded === index ? (
                  <ChevronUp className="text-orange-500 w-4 h-4" />
                ) : (
                  <ChevronDown className="text-orange-500 w-4 h-4" />
                )}

                {/* function name */}
                <span className="text-teal-300 group-hover:text-teal-100 transition">
                  {svc.name}
                </span>
                <span className="text-white">() {"{"}</span>
              </button>

              {/* DESCRIPTION COMMENT */}
              <div className="ml-7 text-purple-300 opacity-70 mt-1 mb-2">
                {"// " + svc.description}
              </div>

              {/* EXPANDED BODY */}
              <AnimatePresence>
                {expanded === index && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.25 }}
                    className="ml-7 mt-2"
                  >
                    {svc.body.map((item, i) => (
                      <div key={i} className="mb-3">
                        
                        {/* key */}
                        <span className="text-yellow-300">{item.key}</span>
                        <span className="text-white">: </span>

                        {/* ARRAY START */}
                        {Array.isArray(item.value) && (
                          <span className="text-white">[</span>
                        )}

                        {/* ARRAY VALUES */}
                        {Array.isArray(item.value) ? (
                          <div className="ml-6">
                            {item.value.map((line, idx) => (
                              <div key={idx} className="text-green-400">
                                "{line}",
                              </div>
                            ))}
                          </div>
                        ) : (
                          /* SINGLE STRING VALUE */
                          <span className="text-pink-400">
                            "{item.value}"
                          </span>
                        )}

                        {/* ARRAY END OR STRING END */}
                        <span className="text-white">
                          {Array.isArray(item.value) ? "]," : ","}
                        </span>
                      </div>
                    ))}

                    {/* CTA */}
                    <button
                      onClick={() => setContactOpen(true)}
                      className="mt-4 mb-4 text-orange-400 underline underline-offset-4 hover:text-orange-300 transition"
                    >
                      book_consultation()
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* service closing brace */}
              <span className="text-white ml-6">{"},"}</span>
            </div>
          ))}
        </div>

        {/* closing main brace */}
        <span className="text-white ml-0">{"};"}</span>
      </div>

      {/* CONTACT PANEL */}
      <ContactPanel open={contactOpen} onClose={() => setContactOpen(false)} />
    </section>
  );
}
