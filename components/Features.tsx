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
    description: "Track tasks easily in Notion.",
    icon: LayoutGrid,
  },
  {
    title: "One price, always",
    description: "Flat monthly rate, no surprises.",
    icon: Receipt,
  },
  {
    title: "Quick turnaround",
    description: "Most requests done in a few days.",
    icon: Zap,
  },
  {
    title: "High-quality every time",
    description: "Senior designer, nothing less.",
    icon: Diamond,
  },
  {
    title: "You're in control",
    description: "Change or pause your plan anytime.",
    icon: ToggleRight,
  },
  {
    title: "100 percent yours",
    description: "Custom work, fully owned by you.",
    icon: Lock,
  },
];

export default function Features() {
  return (
    <section className="bg-[#fafafa] px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="mb-6 inline-block rounded-full bg-gray-200 px-4 py-1 text-sm text-black">
            Features
          </p>

          <h2 className="mb-16 text-center text-[40px] font-semibold leading-[1.1] tracking-tight text-black md:text-[56px]">
            Everything you need
            <br />
            and <span className="font-serif italic">nothing</span> you don&apos;t.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-2xl bg-[#f6f6f6] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)]"
              >
                <Icon className="mb-4 h-6 w-6 text-black" />

                <h3 className="mb-1 text-[18px] font-semibold text-black">
                  {feature.title}
                </h3>

                <p className="text-[14px] leading-relaxed text-gray-500">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
