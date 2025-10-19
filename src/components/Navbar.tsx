"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Features", href: "#features" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Impact", href: "#impact" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Join", href: "#join" }
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-midnight/90 backdrop-blur-lg shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2 text-lg font-semibold tracking-wide">
          <span className="rounded-full bg-gradient-to-r from-teal-400 to-emerald-400 px-3 py-1 text-sm font-bold text-midnight shadow-lg">
            Roognis
          </span>
          <span className="text-white/80">Tutoring</span>
        </a>
        <div className="hidden items-center gap-8 text-sm font-medium text-white/70 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative transition-colors duration-300 hover:text-white"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#join"
            className="rounded-full bg-gradient-to-r from-teal-400 to-emerald-400 px-5 py-2 text-sm font-semibold text-midnight shadow-lg transition-transform duration-300 hover:-translate-y-0.5"
          >
            Join Waitlist
          </a>
        </div>
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white md:hidden"
        >
          <span className="sr-only">Menu</span>
          <div className="space-y-1.5">
            <span className="block h-0.5 w-5 bg-white"></span>
            <span className="block h-0.5 w-5 bg-white"></span>
            <span className="block h-0.5 w-5 bg-white"></span>
          </div>
        </button>
      </nav>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden"
          >
            <div className="space-y-3 bg-midnight/95 px-6 pb-8 pt-2 text-sm text-white/80">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-md border border-transparent px-4 py-3 transition-colors duration-300 hover:border-white/10 hover:text-white"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#join"
                onClick={() => setMenuOpen(false)}
                className="block rounded-full bg-gradient-to-r from-teal-400 to-emerald-500 px-5 py-3 text-center font-semibold text-midnight shadow-lg"
              >
                Join Waitlist
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
