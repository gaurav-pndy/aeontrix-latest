// components/Navbar.js
"use client";

import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { ArrowButton } from "@/components/ui/ArrowButton";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { label: "AI Transformation", href: "#ai-transformation" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Contact Us", href: "#contact" },
];

const leftLinks = links.slice(0, 2);
const rightLink = links[2];

export default function Navbar() {
  const [pastHero, setPastHero] = useState(false);
  const [open, setOpen] = useState(false);

  // assume hero has id="hero"
  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // when hero is NOT visible, we are past hero → light nav
        setPastHero(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  const handleBookCallScroll = () => {
    const el = document.getElementById("book-call");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const linkBase = "base-text relative font-medium transition-colors";
  const linkColor = pastHero
    ? "text-neutral-900 hover:text-black"
    : "text-white/80 hover:text-white";

  return (
    <header className="fixed inset-x-0 top-4 z-40 flex justify-center px-4">
      <div className="w-full max-w-3xl transition-all duration-300">
        <div
          className={`flex items-center justify-between rounded-full border px-6 py-2 backdrop-blur-xl shadow-[0_12px_40px_rgba(15,23,42,0.35)] ${
            pastHero
              ? "border-black/10 bg-white text-neutral-900"
              : "border-white/20 bg-white/10 text-white/90"
          }`}
        >
          {/* Desktop: left links */}
          <nav className="hidden md:flex items-center gap-5">
            {leftLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`${linkBase} ${linkColor}`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Center logo */}
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black/40">
              <img
                src="/aeontrix-logo.png"
                className="w-6 h-6 object-contain"
                alt="Aeontrix Logo"
              />
            </div>
          </div>

          {/* Desktop: right side */}
          <div className="hidden md:flex items-center gap-4">
            <a href={rightLink.href} className={`${linkBase} ${linkColor}`}>
              {rightLink.label}
            </a>
            <ArrowButton
              customStyle="small-text"
              onClick={handleBookCallScroll}
            >
              Book a Call
            </ArrowButton>
          </div>

          {/* Mobile menu button */}
          <button
            className={`md:hidden inline-flex h-8 w-8 items-center justify-center rounded-full ${
              pastHero ? "bg-black text-white" : "bg-black/40 text-white"
            }`}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <FiX size={16} /> : <FiMenu size={16} />}
          </button>
        </div>

        {/* Mobile drawer */}
        <AnimatePresence>
          {open && (
            <>
              {/* backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setOpen(false)}
                className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
              />
              {/* panel */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="absolute -right-4 -top-4 z-50 h-screen w-[80vw] bg-[#1f1f1f] shadow-2xl"
              >
                <div className="flex h-full flex-col p-6">
                  <div className="mb-10 flex items-center justify-between">
                    <span className="text-xl font-bold tracking-tight text-white">
                      Menu
                    </span>
                    <button
                      onClick={() => setOpen(false)}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
                    >
                      <FiX size={20} />
                    </button>
                  </div>
                  <nav className="flex flex-col gap-6">
                    {links.map((item, idx) => (
                      <motion.a
                        key={item.href}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="group rounded-lg   text-base font-medium text-white/90 transition-all hover:bg-white/10 hover:text-white"
                      >
                        {item.label}
                      </motion.a>
                    ))}
                    <ArrowButton
                      onClick={() => {
                        setOpen(false);
                        handleBookCallScroll();
                      }}
                    >
                      Book a Call
                    </ArrowButton>
                  </nav>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
