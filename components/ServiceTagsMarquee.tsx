const tags = [
  "Pitch Decks",
  "Web Design",
  "Branding",
  "Blog Graphics",
  "Landing Pages",
  "Illustrations",
];

const loopTags = [...tags, ...tags];

export default function ServiceTagsMarquee() {
  return (
    <section className="bg-[#fafafa]">
      <div
        className="flex w-full items-center overflow-hidden py-10"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <div
          className="animate-marquee flex w-max gap-3 md:gap-4"
        >
          {loopTags.map((tag, index) => (
            <span
              key={`${tag}-${index}`}
              className="whitespace-nowrap rounded-full bg-white px-5 py-2 text-sm font-medium shadow-[0_4px_12px_rgba(0,0,0,0.06)]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
