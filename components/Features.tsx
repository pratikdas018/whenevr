const features = [
  {
    title: "Simple design queue",
    desc: "Track tasks easily in Notion.",
  },
  {
    title: "One price, always",
    desc: "Flat monthly rate, no surprises.",
  },
  {
    title: "Quick turnaround",
    desc: "Most requests done in a few days.",
  },
  {
    title: "High-quality every time",
    desc: "Senior designer, nothing less.",
  },
  {
    title: "You're in control",
    desc: "Change or pause your plan anytime.",
  },
  {
    title: "100% yours",
    desc: "Custom work, fully owned by you.",
  },
];

const allServices = [
  "Social Graphics",
  "UX Design",
  "Pitch Decks",
  "Web Design",
  "Branding",
  "Blog Graphics",
  "Landing Pages",
  "Illustrations",
  "Product Design",
  "Email Design",
  "UI Design",
  "App Design",
  "Style Guides",
  "Icon Design",
  "Ad Creatives",
];

export default function Features() {
  return (
    <section className="bg-[#F5F0E8] py-24 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <p
          className="text-xs uppercase tracking-widest text-[#0a0a0a]/40 mb-4"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Features
        </p>
        <h2
          style={{ fontFamily: "var(--font-display)" }}
          className="text-4xl md:text-5xl lg:text-6xl leading-[1.05] max-w-2xl mb-16 text-[#0a0a0a]"
        >
          Everything you need and nothing you don&apos;t.
        </h2>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-px bg-[#0a0a0a]/10 rounded-3xl overflow-hidden mb-16">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-[#F5F0E8] p-8 hover:bg-[#eee8dc] transition-colors"
            >
              <div className="w-2 h-2 rounded-full bg-[#c8ff00] mb-4 border border-[#0a0a0a]/20" />
              <h3
                style={{ fontFamily: "var(--font-display)" }}
                className="text-xl text-[#0a0a0a] mb-2"
              >
                {f.title}
              </h3>
              <p
                className="text-sm text-[#0a0a0a]/50 leading-relaxed"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {f.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Services marquee (two rows) */}
        <div className="overflow-hidden space-y-3">
          <div className="marquee-track">
            {[...allServices, ...allServices].map((s, i) => (
              <span
                key={i}
                className="flex-shrink-0 text-sm border border-[#0a0a0a]/15 text-[#0a0a0a]/60 px-4 py-2 rounded-full mx-1.5 whitespace-nowrap"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {s}
              </span>
            ))}
          </div>
          <div className="marquee-track-reverse">
            {[...allServices.slice().reverse(), ...allServices.slice().reverse()].map(
              (s, i) => (
                <span
                  key={i}
                  className="flex-shrink-0 text-sm border border-[#0a0a0a]/15 text-[#0a0a0a]/60 px-4 py-2 rounded-full mx-1.5 whitespace-nowrap"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {s}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
