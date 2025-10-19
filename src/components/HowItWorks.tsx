import Image from "next/image";

const steps = [
  {
    title: "Sign Up",
    description: "Create your tutor profile and connect your existing tools in minutes.",
    illustration: "/illustrations/signup.svg"
  },
  {
    title: "Choose AI Plan",
    description: "Select automation recipes tailored to your subjects and student volume.",
    illustration: "/illustrations/ai-plan.svg"
  },
  {
    title: "Grow with Roognis AI",
    description: "Let insights and automation guide your daily workflows and growth playbooks.",
    illustration: "/illustrations/grow.svg"
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-midnight py-24">
      {/* Three-step process showing how Roognis works */}
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">How it works</h2>
          <p className="mt-4 text-lg text-white/60">
            Launch, automate, and accelerate your tutoring business in three guided steps.
          </p>
        </div>
        <div className="grid gap-10 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div key={step.title} className="relative flex flex-col items-center text-center">
              <div className="relative mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-teal-400/20 to-emerald-500/30">
                <Image
                  src={step.illustration}
                  alt={step.title}
                  width={64}
                  height={64}
                  className="opacity-80"
                />
                <span className="absolute -bottom-4 flex h-8 w-8 items-center justify-center rounded-full bg-midnight text-sm font-semibold text-teal-200 shadow-lg">
                  {index + 1}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-white">{step.title}</h3>
              <p className="mt-3 text-sm text-white/60">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden lg:block">
                  <span className="absolute top-16 right-[-65px] h-0.5 w-32 bg-gradient-to-r from-teal-400/0 via-teal-400/60 to-emerald-500/0" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
