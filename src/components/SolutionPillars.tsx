"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    title: "AI Business Models",
    description: "Design scalable tutoring packages with predictive AI pricing and packaging tools.",
    icon: "💼"
  },
  {
    title: "Smart Dashboard",
    description: "Track bookings, revenue, and student engagement in a unified command center.",
    icon: "📊"
  },
  {
    title: "AI Teaching Assistant",
    description: "Auto-generate lesson plans, practice sets, and parent updates tailored to every learner.",
    icon: "🤖"
  },
  {
    title: "Analytics & Insights",
    description: "Surface hidden trends and recommendations that grow your tutoring impact.",
    icon: "🔍"
  }
];

export default function SolutionPillars() {
  return (
    <section id="features" className="bg-[radial-gradient(circle_at_top,_rgba(14,116,144,0.25),_transparent_60%)] py-24">
      {/* Solution overview grid showcasing Roognis AI pillars */}
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Roognis AI Pillars</h2>
          <p className="mt-4 text-lg text-white/60">
            Four interconnected systems powering the modern tutoring business.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.5 }}
              className="relative overflow-hidden rounded-3xl border border-white/5 bg-white/5 p-6 transition duration-300 hover:-translate-y-2 hover:border-teal-400/50"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-400/30 to-emerald-500/30 text-2xl">
                {pillar.icon}
              </div>
              <h3 className="text-xl font-semibold text-white">{pillar.title}</h3>
              <p className="mt-3 text-sm text-white/60">{pillar.description}</p>
              <div className="pointer-events-none absolute inset-0 border border-transparent transition duration-300 group-hover:border-teal-400/40" />
              <div className="absolute inset-0 bg-gradient-to-br from-teal-400/0 via-emerald-500/0 to-cyan-500/0 opacity-0 transition duration-300 hover:opacity-20" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
