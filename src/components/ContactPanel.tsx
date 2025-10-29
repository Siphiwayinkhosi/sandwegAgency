import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ContactPanelProps {
  open: boolean;
  onClose: () => void;
}

const Backdrop: React.FC<{ onClose: () => void }> = ({ onClose }) => (
  <motion.div
    className="fixed inset-0 z-[80] bg-black/60 backdrop-blur-sm"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    onClick={onClose}
  />
);

const ContactPanel: React.FC<ContactPanelProps> = ({ open, onClose }) => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      const response = await fetch("https://formsubmit.co/ajax/info@go-sandweg.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...formData, _captcha: false }),
      });
      if (response.ok) {
        setSent(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => {
          setSent(false);
          onClose();
        }, 2500);
      } else alert("Failed to send message.");
    } catch (err) {
      console.error(err);
      alert("An error occurred.");
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
            className="fixed z-[100] bottom-0 right-0 left-0 md:left-auto md:w-[600px] bg-black border-t md:border-l border-white/10 shadow-2xl rounded-t-3xl md:rounded-l-3xl overflow-hidden"
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
                ✕
              </button>
            </div>

            {/* Form */}
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
                {sending ? "Sending..." : sent ? "✅ Message Sent!" : "Send Message"}
              </motion.button>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ContactPanel;

