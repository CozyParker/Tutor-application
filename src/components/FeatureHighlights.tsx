const features = [
  {
    title: "Smart Scheduling",
    description: "AI syncs your calendars, sends reminders, and fills gaps with high-intent students."
  },
  {
    title: "Revenue Forecasting",
    description: "Predict cash flow with AI-generated projections and optimize pricing instantly."
  },
  {
    title: "AI Student Insights",
    description: "Granular learner analytics highlight strengths, risks, and next best actions."
  },
  {
    title: "Marketing Booster",
    description: "Automate outreach campaigns with AI-crafted emails, ads, and landing pages."
  },
  {
    title: "Tutor Community",
    description: "Collaborate with other experts, share playbooks, and receive AI-powered feedback."
  }
];

export default function FeatureHighlights() {
  return (
    <section id="feature-highlights" className="bg-midnight py-24">
      {/* Feature highlight cards with gradient borders */}
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Feature Highlights</h2>
          <p className="mt-4 text-lg text-white/60">
            Tools crafted with tutors to make every lesson, interaction, and decision smarter.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative overflow-hidden rounded-3xl bg-white/5 p-6 shadow-lg shadow-cyan-500/5 transition duration-300 hover:-translate-y-2"
            >
              <div className="absolute inset-0 rounded-3xl border border-transparent bg-gradient-to-br from-teal-400/0 via-emerald-400/0 to-cyan-500/0 opacity-0 transition duration-300 group-hover:opacity-30" />
              <div className="relative">
                <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                <p className="mt-3 text-sm text-white/60">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
