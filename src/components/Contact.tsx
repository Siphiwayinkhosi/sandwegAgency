import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ================================
   BACKDROP
================================ */
const Backdrop = ({ onClose }) => (
  <motion.div
    className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    onClick={onClose}
  />
);

/* ================================
   CONTACT PANEL (unchanged mostly)
================================ */
const ContactPanel = ({ open, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

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
          onClose();
        }, 3000);
      }
    } catch {
      alert("Something went wrong. Try again.");
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
            className="
              fixed inset-x-0 bottom-0 
              md:inset-y-0 md:w-[600px] md:mx-auto
              bg-black border-t md:border border-white/10 
              shadow-2xl rounded-t-3xl md:rounded-xl 
              z-50 overflow-hidden
            "
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 140, damping: 22 }}
          >
            {/* PANEL HEADER */}
            <div className="relative px-8 py-6 border-b border-white/10 flex flex-col items-center">
              <img
                src="/logo.png"
                alt="Logo"
                className="max-w-[180px] md:max-w-[220px] h-auto object-contain"
              />

              <h2 className="text-2xl font-light text-white text-center mt-4">
                Contact Us
              </h2>

              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute right-6 top-6 text-sm text-neutral-300 hover:text-orange-500 transition"
              >
                ✕
              </button>
            </div>

            {/* PANEL FORM */}
            <form onSubmit={handleSubmit} className="p-8 space-y-6 bg-black">
              <div>
                <label className="block text-sm mb-1 text-white">Name</label>
                <input
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="
                    w-full rounded-xl bg-black border border-white/20 
                    px-4 py-3 text-white placeholder:text-neutral-500
                    focus:border-orange-500 focus:ring-1 focus:ring-orange-500 
                  "
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm mb-1 text-white">Email</label>
                <input
                  name="email"
                  required
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="
                    w-full rounded-xl bg-black border border-white/20 
                    px-4 py-3 text-white placeholder:text-neutral-500
                    focus:border-orange-500 focus:ring-1 focus:ring-orange-500 
                  "
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
                  className="
                    w-full min-h-[150px] rounded-xl bg-black border border-white/20 
                    px-4 py-3 text-white placeholder:text-neutral-500
                    focus:border-orange-500 focus:ring-1 focus:ring-orange-500 
                  "
                  placeholder="Write your message..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                disabled={sending}
                className="
                  w-full rounded-xl border border-orange-500 px-6 py-3 
                  text-white font-semibold shadow-lg
                  hover:bg-white hover:text-orange-500 transition
                "
                type="submit"
              >
                {sending ? "Sending..." : sent ? "Sent!" : "Send Message"}
              </motion.button>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

/* ================================
   MAIN CONTACT SECTION BELOW
================================ */
const Contact = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative w-full bg-black text-white py-20">

      {/* CENTERED LOGO */}
      <div className="flex justify-center mb-10">
        <img
          src="/logo.png"
          className="w-40 sm:w-52 md:w-64 object-contain"
          alt="Logo"
        />
      </div>

      {/* CODE-STYLE CALL TO ACTION */}
      <div className="text-center space-y-4">

        {/* Code-style heading */}
        <h2 className="font-mono text-3xl sm:text-4xl md:text-5xl font-light text-white">
          //ready_to_start?
        </h2>

        {/* Code-style action button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => setOpen(true)}
          className="
            text-orange-400 font-mono underline underline-offset-4 
            hover:text-orange-300 transition text-xl cursor-pointer
          "
        >
          contact_us()
        </motion.button>
      </div>

      {/* PANEL */}
      <ContactPanel open={open} onClose={() => setOpen(false)} />
    </section>
  );
};

export default Contact;
