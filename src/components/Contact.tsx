import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Backdrop = ({ onClose }) => (
  <motion.div
    className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    onClick={onClose}
  />
);

const ContactPanel = ({ open, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/info@go-sandweg.com",

        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
            _captcha: false,
          }),
        }
      );

      if (response.ok) {
        setSent(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => {
          setSent(false);
          onClose(); // Auto close after success
        }, 3000);
      } else {
        alert("Failed to send message. Try again.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <Backdrop onClose={onClose} />

          <motion.div
            className="fixed inset-x-0 bottom-0 md:right-0 md:inset-y-0 md:w-[600px] bg-black border-t md:border-l border-white/10 shadow-2xl rounded-t-3xl md:rounded-l-3xl z-50 overflow-hidden"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 140, damping: 22 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-8 py-6 border-b border-white/10">
              <div className="flex items-center gap-4">
                <img
                  src="/logo.png"
                  alt="Logo"
                  className="max-w-[160px] md:max-w-[200px] h-auto object-contain"
                />
                <h2 className="text-2xl font-bold text-white">Contact Us</h2>
              </div>
              <button
                onClick={onClose}
                className="text-sm text-neutral-300 hover:text-orange-500 transition"
              >
                Close ✕
              </button>
            </div>

            {/* ✅ Functional Contact Form */}
            <form onSubmit={handleSubmit} className="p-8 space-y-6 bg-black">
              <div>
                <label className="block text-sm mb-1 text-white">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-xl bg-black border border-white/20 px-4 py-3 text-white placeholder:text-neutral-500 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm mb-1 text-white">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-xl bg-black border border-white/20 px-4 py-3 text-white placeholder:text-neutral-500 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block text-sm mb-1 text-white">Message</label>
                <textarea
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full min-h-[160px] rounded-xl bg-black border border-white/20 px-4 py-3 text-white placeholder:text-neutral-500 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none"
                  placeholder="Write your message..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                disabled={sending}
                className="w-full rounded-xl border border-orange-500 px-6 py-3 text-white font-semibold shadow-lg hover:bg-white hover:text-orange-500 transition"
              >
                {sending
                  ? "Sending..."
                  : sent
                  ? "✅ Message Sent!"
                  : "Send Message"}
              </motion.button>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const Contact = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative w-full bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight text-center md:text-left">
              Ready to start?
            </h2>

 

          </div>

          <motion.button
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setOpen(true)}
            className="group relative inline-flex items-center gap-3 rounded-2xl border border-orange-500 px-6 py-3 text-base font-semibold text-white shadow-xl hover:bg-white hover:text-orange-500 transition"
          >
            <span>Contact Us</span>
            <span className="relative -mr-1 grid place-items-center rounded-full border border-orange-500 p-1.5 transition group-hover:bg-white group-hover:text-orange-500">
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M5 12h14M13 5l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </motion.button>
        </div>
      </div>

      <ContactPanel open={open} onClose={() => setOpen(false)} />
    </section>
  );
};

export default Contact;
