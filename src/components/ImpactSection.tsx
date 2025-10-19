export default function ImpactSection() {
  return (
    <section id="impact" className="bg-[radial-gradient(circle_at_center,_rgba(34,197,213,0.18),_transparent_70%)] py-24">
      {/* Impact metrics with analytics mockup */}
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">Impact that compounds</h2>
            <p className="text-lg text-white/70">
              Tutors using Roognis save 8 hrs/week and grow income by 40%.
            </p>
            <div className="flex items-center gap-6">
              <div className="rounded-3xl border border-emerald-400/40 bg-emerald-400/10 p-6 text-center">
                <p className="text-4xl font-bold text-emerald-200">8 hrs</p>
                <p className="text-sm text-white/60">Average hours saved weekly</p>
              </div>
              <div className="rounded-3xl border border-cyan-400/40 bg-cyan-400/10 p-6 text-center">
                <p className="text-4xl font-bold text-cyan-200">40%</p>
                <p className="text-sm text-white/60">Average revenue increase</p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl">
            <div className="mb-6 flex items-center justify-between text-sm text-white/60">
              <span>Analytics Overview</span>
              <span>30 days</span>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-white/70">Revenue Trend</p>
                <div className="mt-2 h-32 rounded-2xl bg-gradient-to-r from-teal-400/20 via-emerald-500/10 to-cyan-400/20">
                  <div className="h-full w-full bg-[linear-gradient(135deg,_rgba(255,255,255,0.05)_25%,_transparent_25%,_transparent_50%,_rgba(255,255,255,0.05)_50%,_rgba(255,255,255,0.05)_75%,_transparent_75%,_transparent_100%)] bg-[length:30px_30px]" />
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-emerald-400/30 bg-emerald-500/10 p-4">
                  <p className="text-xs uppercase tracking-wider text-white/60">Automations</p>
                  <p className="mt-2 text-2xl font-semibold text-white">32 Active</p>
                  <p className="text-xs text-emerald-200">+6 added this month</p>
                </div>
                <div className="rounded-2xl border border-cyan-400/30 bg-cyan-500/10 p-4">
                  <p className="text-xs uppercase tracking-wider text-white/60">Student Satisfaction</p>
                  <p className="mt-2 text-2xl font-semibold text-white">96%</p>
                  <p className="text-xs text-cyan-200">AI curated check-ins</p>
                </div>
              </div>
            </div>
            <div className="absolute -right-12 bottom-6 h-24 w-24 rounded-full bg-emerald-500/30 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
