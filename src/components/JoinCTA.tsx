export default function JoinCTA() {
  return (
    <section id="join" className="bg-midnight py-24">
      {/* Final call to action */}
      <div className="mx-auto max-w-4xl px-6">
        <div className="rounded-[32px] border border-teal-400/30 bg-gradient-to-br from-teal-500/30 via-cyan-500/10 to-emerald-500/30 p-10 text-center shadow-2xl">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Ready to scale your tutoring business?</h2>
          <p className="mt-4 text-lg text-white/70">
            Join the Roognis Tutoring waitlist for early access to automation blueprints, AI copilots, and launch perks.
          </p>
          <a
            href="#"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-midnight px-8 py-3 font-semibold text-teal-200 shadow-lg shadow-teal-500/30 transition duration-300 hover:-translate-y-1 hover:bg-teal-500 hover:text-midnight"
          >
            Get Early Access
          </a>
        </div>
      </div>
    </section>
  );
}
