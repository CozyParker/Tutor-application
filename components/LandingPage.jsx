import React from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

const features = [
  {
    title: 'AI Business Models',
    description: 'Launch new tutoring products with automated pricing, bundling, and recurring plans tuned by Roognis AI.',
    icon: (
      <svg className="h-10 w-10 text-teal-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5l9 4.5 9-4.5M3 12l9 4.5 9-4.5" />
      </svg>
    ),
  },
  {
    title: 'Smart Dashboard',
    description: 'Centralize sessions, tasks, and tutor performance in one clean dashboard with automation cues.',
    icon: (
      <svg className="h-10 w-10 text-teal-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 6h15M4.5 10.5h15M4.5 15h8.25" />
      </svg>
    ),
  },
  {
    title: 'AI Teaching Assistant',
    description: 'Delegate prep, grading, and personalized study plans to a conversational AI tuned for tutoring.',
    icon: (
      <svg className="h-10 w-10 text-teal-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5l7.5 4.5-7.5 4.5L4.5 9z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15l7.5 4.5 7.5-4.5" />
      </svg>
    ),
  },
  {
    title: 'Analytics & Insights',
    description: 'Track revenue, student progress, and campaign impact with predictive analytics and alerts.',
    icon: (
      <svg className="h-10 w-10 text-teal-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5V9.75m5.25 9.75V4.5m5.25 15V12m5.25 7.5V6" />
      </svg>
    ),
  },
];

const featureCards = [
  {
    title: 'Smart Scheduling',
    description: 'Auto-sync lessons, reminders, and make-up sessions across calendars without the back-and-forth.',
  },
  {
    title: 'Revenue Forecasting',
    description: 'Predict monthly earnings and identify opportunities to grow your high-value offerings.',
  },
  {
    title: 'AI Student Insights',
    description: 'Spot learning gaps instantly with AI-generated insights after every session.',
  },
  {
    title: 'Marketing Booster',
    description: 'Launch AI-crafted campaigns that target the right families at the right time.',
  },
  {
    title: 'Tutor Community',
    description: 'Collaborate with fellow tutors through curated masterminds and resource exchanges.',
  },
];

const testimonials = [
  {
    name: 'Amelia Chen',
    role: 'STEM Tutor',
    feedback: '“Roognis freed up my weekends. My bookings grew 2x with almost zero admin work.”',
  },
  {
    name: 'Marcus Rivera',
    role: 'Language Coach',
    feedback: '“The AI assistant builds lesson plans faster than I ever could. Students love the personalization.”',
  },
  {
    name: 'Priya Kapoor',
    role: 'Test Prep Specialist',
    feedback: '“Forecasting tools gave me the confidence to expand. Income up 45% in three months.”',
  },
];

const revenueBarHeights = ['h-16', 'h-24', 'h-32', 'h-36', 'h-44', 'h-48'];

const LandingPage = () => {
  return (
    <div className={`${inter.className} bg-[#0f172a] text-slate-100`}> 
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-cyan-500/20 via-teal-500/10 to-transparent animate-pulse" />
        <div className="mx-auto flex min-h-screen max-w-7xl flex-col-reverse gap-16 px-6 py-24 lg:flex-row lg:items-center lg:justify-between lg:px-12">
          <div className="max-w-xl space-y-8">
            <span className="inline-flex items-center rounded-full bg-teal-500/10 px-4 py-1 text-sm font-semibold text-teal-300">Roognis Tutoring</span>
            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">Empower Your Tutoring Business with AI.</h1>
            <p className="text-lg text-slate-300 sm:text-xl">From Teaching to Thriving — Roognis helps tutors automate, grow, and earn smarter.</p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <button className="rounded-full bg-gradient-to-r from-teal-400 to-cyan-500 px-6 py-3 text-base font-semibold text-slate-900 shadow-lg shadow-cyan-500/30 transition hover:shadow-cyan-500/50">Join Waitlist</button>
              <button className="rounded-full border border-teal-400/60 px-6 py-3 text-base font-semibold text-teal-300 transition hover:border-teal-200 hover:text-teal-100">See Demo</button>
            </div>
          </div>
          <div className="relative w-full max-w-xl">
            <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-cyan-500/40 via-teal-500/30 to-transparent blur-3xl" />
            <div className="rounded-3xl border border-teal-500/40 bg-slate-900/50 p-6 shadow-2xl backdrop-blur-lg">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-300">Session Overview</p>
                  <p className="text-2xl font-semibold text-white">AI Tutor Dashboard</p>
                </div>
                <span className="rounded-full bg-teal-500/20 px-4 py-1 text-sm text-teal-200">Live</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-teal-500/30 bg-slate-800/50 p-4">
                  <p className="text-sm text-slate-300">Weekly Hours Saved</p>
                  <p className="mt-2 text-3xl font-bold text-teal-200">8h</p>
                  <div className="mt-3 h-2 w-full rounded-full bg-slate-700">
                    <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-teal-400 to-cyan-500" />
                  </div>
                </div>
                <div className="rounded-2xl border border-teal-500/30 bg-slate-800/50 p-4">
                  <p className="text-sm text-slate-300">Income Growth</p>
                  <p className="mt-2 text-3xl font-bold text-teal-200">+40%</p>
                  <div className="mt-3 h-2 w-full rounded-full bg-slate-700">
                    <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-teal-400 to-cyan-500" />
                  </div>
                </div>
                <div className="col-span-2 rounded-2xl border border-teal-500/30 bg-slate-800/50 p-4">
                  <p className="text-sm text-slate-300">AI Assistant</p>
                  <div className="mt-3 flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-teal-400 to-cyan-500" />
                    <div>
                      <p className="text-sm text-slate-200">“Let me draft the next lesson plan for Emma.”</p>
                      <p className="text-xs text-slate-400">Response in 2s</p>
                    </div>
                  </div>
                </div>
                <div className="col-span-2 flex justify-between rounded-2xl border border-teal-500/30 bg-slate-800/50 p-4">
                  <div>
                    <p className="text-sm text-slate-300">Active Students</p>
                    <p className="mt-2 text-2xl font-semibold text-white">32</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-300">Next Session</p>
                    <p className="mt-2 text-xl font-semibold text-white">Physics Prep - 4pm</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-12">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">The Tutor Struggle is Real</h2>
          <p className="mt-4 text-lg text-slate-300">Roognis understands the chaos behind every successful tutor — here are the top challenges we solve.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: 'Time wasted on admin',
              description: 'Scheduling, payments, and parent updates eat into your prime tutoring time.',
              icon: (
                <svg className="h-12 w-12 text-teal-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l3 3" />
                  <circle cx="12" cy="12" r="9" />
                </svg>
              ),
            },
            {
              title: 'Unpredictable income',
              description: 'Cancellations and slow seasons make it hard to build a reliable business.',
              icon: (
                <svg className="h-12 w-12 text-teal-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M12 3v18" />
                </svg>
              ),
            },
            {
              title: 'Limited student reach',
              description: 'Marketing and referrals only go so far when you are running the show solo.',
              icon: (
                <svg className="h-12 w-12 text-teal-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h6" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
            },
          ].map((item) => (
            <div key={item.title} className="group rounded-3xl border border-slate-700 bg-slate-900/60 p-8 transition hover:border-teal-400/60 hover:bg-slate-900">
              <div className="mb-6 inline-flex items-center justify-center rounded-2xl bg-teal-500/10 p-4 transition group-hover:bg-teal-500/20">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-slate-300">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Solution Overview (Roognis AI Pillars) */}
      <section className="bg-slate-950/60 py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-12">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Roognis AI Pillars</h2>
            <p className="mt-4 text-lg text-slate-300">Each pillar is built to unlock a new growth lever while protecting your time.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.title} className="group h-full rounded-3xl border border-slate-800 bg-slate-900/60 p-8 transition hover:border-teal-400/60 hover:bg-slate-900">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500/20 to-cyan-500/20 transition group-hover:from-teal-400/30 group-hover:to-cyan-400/30">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                <p className="mt-3 text-slate-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works (3 Steps) */}
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-12">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">How It Works</h2>
          <p className="mt-4 text-lg text-slate-300">Launch in days, not months, with an experience tuned for busy tutors.</p>
        </div>
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:justify-between">
          {[
            {
              title: 'Sign Up',
              description: 'Tell us about your tutoring niche and goals. Roognis builds a tailored onboarding plan.',
            },
            {
              title: 'Choose AI Plan',
              description: 'Select the automation package that matches your business maturity and desired pace.',
            },
            {
              title: 'Grow with Roognis AI',
              description: 'Deploy AI assistants, launch new offerings, and track revenue acceleration in real time.',
            },
          ].map((step, index) => (
            <div key={step.title} className="flex flex-col items-center text-center">
              <div className="relative mb-6 flex h-24 w-24 items-center justify-center">
                <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-teal-400/30 to-cyan-500/30 blur-xl" />
                <div className="flex h-full w-full items-center justify-center rounded-full border border-teal-400/60 bg-slate-900/80 text-3xl font-semibold text-teal-200">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white">{step.title}</h3>
              <p className="mt-3 max-w-xs text-slate-300">{step.description}</p>
              {index < 2 && (
                <div className="mt-6 hidden flex-col items-center gap-2 lg:flex">
                  <div className="h-1 w-32 rounded-full bg-gradient-to-r from-teal-400 to-cyan-500" />
                  <svg className="h-6 w-6 text-teal-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6l6 6-6 6" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="bg-slate-950/60 py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-12">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Feature Highlights</h2>
            <p className="mt-4 text-lg text-slate-300">Everything tutors need to run a modern business without hiring a team.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featureCards.map((card) => (
              <div key={card.title} className="rounded-3xl border border-transparent bg-slate-900/70 p-8 shadow-lg shadow-cyan-500/10 transition hover:border-teal-400/60 hover:shadow-cyan-500/30">
                <div className="mb-4 h-1 w-16 rounded-full bg-gradient-to-r from-teal-400 to-cyan-500" />
                <h3 className="text-xl font-semibold text-white">{card.title}</h3>
                <p className="mt-3 text-slate-300">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Your Impact with Roognis</h2>
            <p className="mt-4 text-lg text-slate-300">Tutors using Roognis save 8 hrs/week and grow income by 40% with automation and predictive intelligence.</p>
            <div className="mt-8 flex flex-wrap gap-6">
              <div className="rounded-2xl border border-teal-400/40 bg-slate-900/80 px-8 py-6 text-center">
                <p className="text-sm uppercase tracking-wide text-teal-300">Hours Saved</p>
                <p className="mt-2 text-4xl font-semibold text-white">8 hrs/week</p>
              </div>
              <div className="rounded-2xl border border-teal-400/40 bg-slate-900/80 px-8 py-6 text-center">
                <p className="text-sm uppercase tracking-wide text-teal-300">Income Growth</p>
                <p className="mt-2 text-4xl font-semibold text-white">+40%</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-teal-500/30 to-cyan-500/20 blur-2xl" />
            <div className="rounded-3xl border border-teal-400/40 bg-slate-900/80 p-6">
              <div className="mb-6 flex items-center justify-between">
                <p className="text-sm text-slate-300">Performance Snapshot</p>
                <span className="rounded-full bg-teal-500/20 px-3 py-1 text-xs text-teal-200">30 days</span>
              </div>
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-slate-400">Revenue</p>
                  <div className="mt-2 flex items-end gap-2">
                    {revenueBarHeights.map((barClass, idx) => (
                      <div
                        key={idx}
                        className={`w-8 rounded-t-xl bg-gradient-to-t from-teal-500/40 to-cyan-400/80 ${barClass}`}
                      />
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm text-slate-400">Student Satisfaction</p>
                  <div className="mt-3 h-2 w-full rounded-full bg-slate-800">
                    <div className="h-full w-5/6 rounded-full bg-gradient-to-r from-teal-400 to-cyan-500" />
                  </div>
                </div>
                <div>
                  <p className="text-sm text-slate-400">Automations Active</p>
                  <ul className="mt-3 space-y-2 text-sm text-slate-300">
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-teal-400" /> Smart Reminders
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-cyan-400" /> Upsell Campaigns
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-teal-200" /> AI Lesson Prep
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-slate-950/60 py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-12">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Loved by Tutors Everywhere</h2>
            <p className="mt-4 text-lg text-slate-300">Hear from early adopters who scaled their tutoring practice with Roognis.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8 shadow-lg transition hover:border-teal-400/50 hover:shadow-cyan-500/20">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-lg font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-teal-300">{testimonial.role}</p>
                  </div>
                  <div className="flex text-teal-300">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <svg key={idx} className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.802 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.802-2.034a1 1 0 00-1.176 0l-2.802 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-slate-300">{testimonial.feedback}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action (Join Section) */}
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-12">
        <div className="rounded-3xl bg-gradient-to-r from-teal-500 via-cyan-500 to-teal-400 p-[1px]">
          <div className="rounded-3xl bg-[#0f172a] p-12 text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Ready to scale your tutoring business?</h2>
            <p className="mt-4 text-lg text-slate-200">Join the Roognis Tutoring waitlist and be first to access AI-built growth engines.</p>
            <button className="mt-8 rounded-full bg-slate-950 px-8 py-3 text-base font-semibold text-teal-200 shadow-lg shadow-slate-900/60 transition hover:text-teal-100">Get Early Access</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950/80">
        <div className="mx-auto flex flex-col items-center justify-between gap-6 px-6 py-10 text-center text-sm text-slate-400 lg:max-w-6xl lg:flex-row lg:text-left">
          <div>
            <p className="text-lg font-semibold text-white">Roognis</p>
            <p className="text-xs uppercase tracking-[0.2em] text-teal-300">Unity. Connectivity. Synergy.</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 text-slate-300">
            <a className="transition hover:text-teal-200" href="#">About</a>
            <span className="text-slate-700">|</span>
            <a className="transition hover:text-teal-200" href="#">Blog</a>
            <span className="text-slate-700">|</span>
            <a className="transition hover:text-teal-200" href="#">Privacy</a>
            <span className="text-slate-700">|</span>
            <a className="transition hover:text-teal-200" href="#">Contact</a>
            <span className="text-slate-700">|</span>
            <a className="transition hover:text-teal-200" href="#">Join Us</a>
          </div>
          <p className="text-xs text-slate-500">© {new Date().getFullYear()} Roognis AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
