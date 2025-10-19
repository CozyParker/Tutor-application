const testimonials = [
  {
    name: "Alicia Mendez",
    role: "STEM Tutor, Austin",
    feedback:
      "Roognis automations gave me my evenings back. Revenue is steady and my students get more tailored support.",
    rating: 5
  },
  {
    name: "David Chen",
    role: "SAT Coach, Seattle",
    feedback:
      "The AI assistant drafts practice sets faster than any tool I've tried. It's like having a co-teacher on call.",
    rating: 5
  },
  {
    name: "Priya Patel",
    role: "Language Tutor, Toronto",
    feedback:
      "Analytics help me forecast demand and grow with confidence. I'm expanding into group programs next semester.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-midnight py-24">
      {/* Testimonials for social proof */}
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Loved by visionary tutors</h2>
          <p className="mt-4 text-lg text-white/60">
            Hear from educators scaling their impact with Roognis AI.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="flex h-full flex-col justify-between rounded-3xl border border-white/5 bg-white/5 p-6 shadow-lg shadow-emerald-500/5"
            >
              <div>
                <div className="mb-4 flex items-center gap-1 text-emerald-300">
                  {Array.from({ length: testimonial.rating }).map((_, index) => (
                    <span key={index}>★</span>
                  ))}
                </div>
                <p className="text-sm text-white/70">{testimonial.feedback}</p>
              </div>
              <div className="mt-6 pt-6">
                <p className="text-base font-semibold text-white">{testimonial.name}</p>
                <p className="text-xs uppercase tracking-wider text-white/40">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
