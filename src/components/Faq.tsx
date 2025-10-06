import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

type FAQ = {
  category: string;
  items: { q: string; a: string | React.ReactNode }[];
};

const faqs: FAQ[] = [
  {
    category: "Services",
    items: [
      {
        q: "What services do you offer?",
        a: (
          <ul className="list-disc ml-6 space-y-1">
            <li>Webdesign & Smart Websites</li>
            <li>Branding & Corporate Identity</li>
            <li>SEO & Google Ranking Optimization</li>
            <li>AI Integrations (chatbots, receptionists, automations)</li>
            <li>Marketing Automation & Funnels</li>
            <li>Social Media Campaigns (Meta, LinkedIn, TikTok)</li>
            <li>Google Ads & PPC Campaigns</li>
          </ul>
        ),
      },
      {
        q: "Do you offer complete packages?",
        a: "Yes. We often combine webdesign, SEO, and automation into “Smart Business Solutions” that give fast, measurable results.",
      },
      {
        q: "Can I book a single service only (like SEO or Google Ads)?",
        a: "Of course. Many clients start with one service and later expand into full solutions.",
      },
      {
        q: "Do you create content too?",
        a: "Yes – we produce SEO-optimized texts, blog posts, social media content, and even AI-generated videos or chat scripts.",
      },
    ],
  },

  {
    category: "Technical & AI Solutions",
    items: [
      {
        q: "What is a “Smart Website”?",
        a: (
          <ul className="list-disc ml-6 space-y-1">
            <li>Fast loading speed</li>
            <li>Mobile-first design</li>
            <li>SEO setup</li>
            <li>AI-powered forms & chatbots</li>
            <li>Marketing automation tools</li>
          </ul>
        ),
      },
      {
        q: "What kind of AI solutions do you integrate?",
        a: (
          <ul className="list-disc ml-6 space-y-1">
            <li>Virtual receptionists (voice & chat)</li>
            <li>AI scheduling assistants</li>
            <li>Lead qualification forms</li>
            <li>WhatsApp/Email automation</li>
            <li>Industry-specific AI bots (real estate, banking, workshops)</li>
          </ul>
        ),
      },
      {
        q: "Can AI replace my staff?",
        a: "No – but it can take over repetitive tasks (answering FAQs, scheduling, qualifying leads), allowing your team to focus on real business.",
      },
    ],
  },
  {
    category: "Process",
    items: [
      {
        q: "How do we get started?",
        a: (
          <ul className="list-disc ml-6 space-y-1">
            <li>Free consultation call</li>
            <li>Needs assessment & proposal</li>
            <li>Kick-off workshop (branding, website, or campaign)</li>
            <li>Development & implementation</li>
            <li>Launch & ongoing support</li>
          </ul>
        ),
      },
      { q: "How long does it take to build a website?", a: "Usually 2–6 weeks depending on complexity and content readiness." },
      { q: "Do you provide training for my team?", a: "Yes. We offer workshops on SEO basics, AI tools, and marketing automation." },
    ],
  },
  {
    category: "SEO & Marketing",
    items: [
      { q: "When will I see SEO results?", a: "SEO is a mid-term investment. First ranking improvements usually appear after 2–3 months, strong results after 6–12 months." },
      { q: "Do you guarantee #1 ranking on Google?", a: "No serious agency can guarantee that. But we guarantee consistent improvement in visibility, leads, and conversions." },
      { q: "Do you run ads too?", a: "Yes – we manage Google Ads, Meta Ads, and LinkedIn Ads with clear ROI reporting." },
      { q: "Can you handle international SEO?", a: "Yes. We optimize for multilingual websites and multiple markets (German, English, Portuguese)." },
    ],
  },
  {
    category: "Support & Communication",
    items: [
      { q: "How do we communicate during projects?", a: "Mainly via email, Slack, or WhatsApp for quick updates. Larger projects include shared project boards (Trello, Asana, HubSpot)." },
      { q: "Do you provide reports?", a: "Yes. We provide monthly performance reports for SEO, ads, and AI automations. For larger clients we also build dashboards in Looker Studio." },
      { q: "What if I’m not satisfied with the results?", a: "We believe in transparency. We review the strategy with you and adjust campaigns. No hidden costs, no excuses." },
    ],
  },
  {
    category: "Special Topics",
    items: [
      { q: "Do you work with startups?", a: "Yes. We help startups launch with strong branding, websites, and go-to-market strategies." },
      { q: "Do you work with traditional businesses too?", a: "Yes. Many of our clients are established companies who want to digitize their processes." },
      { q: "Can you help outside Germany?", a: "Yes. We are active in Eswatini and Southern Africa, and work remotely with clients worldwide." },
      { q: "Do you offer white-label services?", a: "Yes. Agencies and consultants can outsource design, SEO, or AI tasks to us." },
    ],
  },
  {
    category: "General",
    items: [
      { q: "What does Sandweg Marketing do?", a: "We are a digital-first marketing agency helping businesses grow through smart websites, branding, SEO, and AI-driven marketing automation. Our focus: making complex technology simple, effective, and profitable for small to mid-sized companies." },
      { q: "Where are you based?", a: "Our headquarters is in Berlin, Germany, with an international branch in Eswatini, Southern Africa. We work with clients across Germany, Europe, Africa, and the U.S." },
      { q: "Who are your clients?", a: "Mostly small to mid-sized businesses, from local workshops, real estate agencies, and retailers to international service providers. We focus on clients who want to modernize, automate, and scale their businesses." },
      {
        q: "What makes you different from other agencies?",
        a: (
          <ul className="list-disc ml-6 space-y-1">
            <li>Design meets technology – websites that look great and perform even better</li>
            <li>AI-driven solutions – saving you time and money</li>
            <li>Entrepreneurial mindset – we don’t just execute campaigns, we partner with you strategically (even share-deal models)</li>
            <li>International perspective – experience in Europe and Africa</li>
          </ul>
        ),
      },
    ],
  },
];

const Faq = () => {
  const [activeCategory, setActiveCategory] = useState(faqs[0].category);
  const [open, setOpen] = useState<string | null>(null);

  useEffect(() => {
    // auto-open first item when category changes
    const firstItem = faqs.find((f) => f.category === activeCategory)?.items[0];
    if (firstItem) setOpen(`${activeCategory}-0`);
  }, [activeCategory]);

  const currentFaqs = faqs.find((f) => f.category === activeCategory);

  return (
    <section className="bg-black text-white font-raleway py-20 px-4 sm:px-10">
      {/* Heading (unchanged as requested) */}
      <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 text-white">
        FAQ
      </h2>

      <div className="max-w-7xl mx-auto px-4">
        {/* Category Tabs — larger text, active has orange border only (text stays white) */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {faqs.map((f) => (
            <button
              key={f.category}
              onClick={() => setActiveCategory(f.category)}
              className={`px-5 py-2.5 rounded-full border transition text-base sm:text-lg ${
                activeCategory === f.category
                  ? "border-orange-500 text-white font-semibold"
                  : "border-gray-600 text-white hover:border-orange-400"
              }`}
            >
              {f.category}
            </button>
          ))}
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {currentFaqs?.items.map((item, idx) => {
            const id = `${activeCategory}-${idx}`;
            const isOpen = open === id;

            return (
              <div key={id} className="border border-gray-700 rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpen(isOpen ? null : id)}
                  className="w-full flex justify-between items-center px-5 py-4 text-left hover:bg-gray-900 transition text-lg sm:text-xl"
                >
                  <span>{item.q}</span>
                  <ChevronDown
                    className={`h-6 w-6 transform transition-transform ${
                      isOpen ? "rotate-180 text-orange-500" : "text-gray-400"
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-5 pb-5 text-gray-300 text-base sm:text-lg leading-relaxed"
                    >
                      {item.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;

