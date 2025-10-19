export default function ProblemSection() {
  const problems = [
    {
      title: "Time wasted on admin",
      description: "Scheduling, invoicing, and reminders eat into the hours you could spend teaching.",
      icon: "🗂️"
    },
    {
      title: "Unpredictable income",
      description: "Cancellations and inconsistent bookings make planning your business difficult.",
      icon: "📉"
    },
    {
      title: "Limited student reach",
      description: "Marketing and outreach are time-intensive, limiting how many students you can impact.",
      icon: "🌍"
    }
  ];

  return (
    <section id="problems" className="bg-midnight py-24">
      {/* Problem section highlighting tutor pain points */}
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Where tutors lose momentum</h2>
          <p className="mt-4 text-lg text-white/60">
            Roognis understands the grind. These pain points inspired our AI toolkit.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="group rounded-3xl border border-white/5 bg-white/5 p-6 transition duration-300 hover:-translate-y-2 hover:border-teal-400/50 hover:bg-white/10"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-400/30 to-emerald-500/30 text-2xl">
                {problem.icon}
              </div>
              <h3 className="text-xl font-semibold text-white">{problem.title}</h3>
              <p className="mt-3 text-sm text-white/60">{problem.description}</p>
              <div className="mt-6 h-0.5 w-16 rounded-full bg-gradient-to-r from-teal-400 to-emerald-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
