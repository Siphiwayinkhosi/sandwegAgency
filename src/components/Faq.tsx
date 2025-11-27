import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import ContactPanel from "./ContactPanel";

export default function Faq() {
  const [expanded, setExpanded] = useState<string | null>(null);

  const faqData = [
    {
      category: "services",
      items: [
        {
          q: "what_services_do_you_offer",
          a: [
            "Webdesign & Smart Websites",
            "Branding & Corporate Identity",
            "SEO & Google Ranking Optimization",
            "AI Integrations (chatbots, receptionists, automations)",
            "Marketing Automation & Funnels",
            "Social Media Campaigns (Meta, LinkedIn, TikTok)",
            "Google Ads & PPC Campaigns",
          ],
        },
        {
          q: "do_you_offer_packages",
          a: "Yes. We combine webdesign, SEO, and automation into end-to-end Smart Business Solutions.",
        },
        {
          q: "can_i_book_single_service",
          a: "Yes — SEO, Google Ads, branding, or any standalone service.",
        },
      ],
    },

    {
      category: "technical_ai",
      items: [
        {
          q: "what_is_a_smart_website",
          a: [
            "Fast loading speed",
            "Mobile-first design",
            "SEO-ready structure",
            "AI chatbots & interactive forms",
            "Marketing automation tools",
          ],
        },
        {
          q: "what_ai_solutions_you_integrate",
          a: [
            "Virtual receptionists (voice + chat)",
            "AI scheduling assistants",
            "Lead qualification forms",
            "WhatsApp/Email automation",
            "Industry-specific AI bots",
          ],
        },
      ],
    },

    {
      category: "process",
      items: [
        {
          q: "how_to_start",
          a: [
            "Free consultation call",
            "Needs assessment",
            "Kick-off workshop",
            "Design & development",
            "Launch & support",
          ],
        },
        {
          q: "how_long_for_website",
          a: "2–6 weeks depending on complexity & content readiness.",
        },
      ],
    },

    {
      category: "seo_marketing",
      items: [
        {
          q: "when_will_i_see_results",
          a: "Ranking improvements appear after 2–3 months. Full performance after 6–12 months.",
        },
        {
          q: "do_you_run_ads",
          a: "Yes. Google Ads, Meta Ads, and LinkedIn Ads with ROI tracking.",
        },
      ],
    },

    {
      category: "support",
      items: [
        {
          q: "communication_channels",
          a: "Email, Slack, WhatsApp — and full project boards for larger work.",
        },
        {
          q: "do_you_provide_reports",
          a: "Yes. SEO/Ads/AI monthly reports + dashboards for bigger clients.",
        },
      ],
    },
  ];

  return (
    <section className="w-full bg-black text-white font-mono py-28 px-6 sm:px-16">
     <h2 className="text-center text-5xl font-light mb-16 tracking-tight">
  //FAQ
</h2>


      <div className="max-w-7xl mx-auto text-[13px] sm:text-[16px] md:text-[19px] leading-relaxed whitespace-pre-wrap">

        {/* Opening */}
        <span className="text-white">const </span>
        <span className="text-yellow-300">faq</span>
        <span className="text-white"> = {"{"}</span>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 ml-8 mt-8">
          {faqData.map((cat, ci) => (
            <div key={ci}>
              
              {/* CATEGORY HEADER */}
              <button
                onClick={() =>
                  setExpanded(expanded === cat.category ? null : cat.category)
                }
                className="flex items-center gap-2 group"
              >
                {expanded === cat.category ? (
                  <ChevronUp className="text-orange-500 w-4 h-4" />
                ) : (
                  <ChevronDown className="text-orange-500 w-4 h-4" />
                )}

                <span className="text-teal-300 group-hover:text-teal-100 transition">
                  {cat.category}
                </span>

                <span className="text-white">: {"{"}</span>
              </button>

              {/* COMMENT */}
              <div className="ml-8 text-purple-300 opacity-60">
                {"// category: " + cat.category}
              </div>

              {/* EXPANDED BODY */}
              <AnimatePresence>
                {expanded === cat.category && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                    className="ml-8 mt-3 space-y-5"
                  >
                    {cat.items.map((item, qi) => (
                      <div key={qi}>
                        
                        {/* KEY */}
                        <span className="text-yellow-300">{item.q}</span>
                        <span className="text-white">: </span>

                        {/* ARRAY */}
                        {Array.isArray(item.a) ? (
                          <>
                            <span className="text-white">[</span>

                            <div className="ml-8 mt-1 space-y-1">
                              {item.a.map((line, idx) => (
                                <div key={idx} className="text-green-400">
                                  "{line}",
                                </div>
                              ))}
                            </div>

                            <span className="text-white">],</span>
                          </>
                        ) : (
                          <span className="text-pink-400">"{item.a}",</span>
                        )}
                      </div>
                    ))}

                    {/* closing brace */}
                    <span className="text-white">{"},"}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* collapsed brace */}
              {expanded !== cat.category && (
                <span className="text-white ml-8">{"},"}</span>
              )}
            </div>
          ))}
        </div>

        {/* END */}
        <div className="mt-12">
          <span className="text-white">{"};"}</span>
        </div>
      </div>
    </section>
  );
}
