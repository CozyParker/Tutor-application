"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-midnight"
    >
      {/* Animated gradient background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(0,196,180,0.25),_transparent_55%)]">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-emerald-500/10 animate-gradient-move" />
      </div>

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-24 md:flex-row md:items-center">
        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl space-y-6"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.3em] text-teal-200">
            AI for Tutors
          </span>
          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Empower Your Tutoring Business with AI.
          </h1>
          <p className="text-lg text-white/70 md:text-xl">
            From Teaching to Thriving — Roognis helps tutors automate, grow, and earn smarter.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#join"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-teal-400 via-cyan-400 to-emerald-500 px-8 py-3 font-semibold text-midnight shadow-lg shadow-teal-500/30 transition-transform duration-300 hover:-translate-y-1"
            >
              Join Waitlist
            </a>
            <a
              href="#impact"
              className="inline-flex items-center justify-center rounded-full border border-teal-300/50 px-8 py-3 font-semibold text-teal-200 transition duration-300 hover:border-teal-200 hover:text-teal-100"
            >
              See Demo
            </a>
          </div>
        </motion.div>

        {/* Dashboard illustration placeholder */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="relative w-full max-w-xl"
        >
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="mb-4 flex items-center justify-between text-sm text-white/70">
              <span>Roognis Tutor Dashboard</span>
              <span>AI Insights</span>
            </div>
            <div className="grid grid-cols-2 gap-4 text-white/80">
              <div className="space-y-3 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 p-4">
                <p className="text-sm font-semibold text-white">Weekly Earnings</p>
                <div className="text-3xl font-bold text-teal-200">$2,480</div>
                <p className="text-xs text-emerald-300">+18% vs last week</p>
              </div>
              <div className="space-y-3 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 p-4">
                <p className="text-sm font-semibold text-white">Students Engaged</p>
                <div className="text-3xl font-bold text-emerald-200">64</div>
                <p className="text-xs text-emerald-300">AI recommends 5 follow-ups</p>
              </div>
              <div className="col-span-2 rounded-2xl bg-white/5 p-4">
                <p className="mb-3 text-sm font-semibold text-white">AI Teaching Assistant</p>
                <div className="flex items-center gap-3 rounded-2xl bg-midnight/70 p-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-teal-400 to-emerald-500 text-midnight font-bold">
                    AI
                  </span>
                  <div>
                    <p className="text-sm text-white/80">"I've drafted personalized practice for Maya. Ready to send?"</p>
                    <div className="mt-2 flex gap-2">
                      <button className="rounded-full bg-emerald-400 px-4 py-1 text-xs font-semibold text-midnight">
                        Approve
                      </button>
                      <button className="rounded-full border border-white/20 px-4 py-1 text-xs text-white/80">
                        Edit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-emerald-500/30 blur-3xl" />
          <div className="absolute -bottom-10 -left-8 h-32 w-32 rounded-full bg-cyan-500/20 blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
}
