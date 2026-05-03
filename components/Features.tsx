import {
  Diamond,
  LayoutGrid,
  Lock,
  Receipt,
  ToggleRight,
  Zap,
} from "lucide-react";

const features = [
  {
    title: "Simple design queue",
    description: "Track tasks easily in Notion and keep requests moving clearly.",
    icon: LayoutGrid,
  },
  {
    title: "One price, always",
    description: "Flat monthly pricing with no surprise invoices or hidden fees.",
    icon: Receipt,
  },
  {
    title: "Quick turnaround",
    description: "Most requests are delivered in just a few days, not weeks.",
    icon: Zap,
  },
  {
    title: "High-quality every time",
    description: "Senior-level execution with refined, consistent output across every task.",
    icon: Diamond,
  },
  {
    title: "You're in control",
    description: "Pause, resume, or shift priorities whenever your team needs to.",
    icon: ToggleRight,
  },
  {
    title: "100% yours",
    description: "Every final asset is fully custom and ready for your team to own.",
    icon: Lock,
  },
];

const servicePills = [
  "Branding",
  "Blog Graphics",
  "Landing Pages",
  "Illustrations",
  "Product Design",
  "Email Design",
];

export default function Features() {
  return (
    <section className="bg-[#fafafa] px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-6 inline-block rounded-full bg-gray-200 px-4 py-1 text-sm font-medium text-black">
            Features
          </p>

          <h2 className="text-center text-4xl font-semibold leading-tight text-black md:text-6xl">
            Everything you need
            <br />
            and <span className="font-serif italic">nothing</span>{" "}
            you don&apos;t.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-2xl bg-[#f8f8f8] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] md:p-8"
              >
                <Icon className="mb-4 h-8 w-8 text-black" strokeWidth={2} />

                <h3 className="text-lg font-semibold text-black">
                  {feature.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-10 overflow-hidden">
          <div className="marquee-track items-center gap-5">
            {[...servicePills, ...servicePills, ...servicePills].map(
              (service, index) => (
                <span
                  key={`${service}-${index}`}
                  className="whitespace-nowrap rounded-full bg-white px-5 py-2 text-xl font-bold text-black shadow-[0_8px_24px_rgba(0,0,0,0.05)]"
                >
                  {service}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
