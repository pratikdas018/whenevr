import Image from "next/image";
import Link from "next/link";

const posts = [
  {
    category: "Branding",
    title: "Why Most Startups Keep Getting Design Wrong",
    desc: "Many teams move fast on product but fall behind on design. This post breaks down why that happens and what to do instead.",
    read: "5 min read",
    img: "https://framerusercontent.com/images/ueqZoCFRDc46Zk64JejcJN460.png",
    slug: "startup-design-struggles",
  },
  {
    category: "Operations",
    title: "How to Get More Done Without Hiring a Full Design Team",
    desc: "Lean teams are using design subscriptions to stay fast without hiring.",
    read: "4 min read",
    img: "https://framerusercontent.com/images/A2Jpv443KkrqGb6fQMCtPKhklI.png",
    slug: "lean-design-teams",
  },
  {
    category: "Workflow",
    title: "What Working With a Design Subscription Actually Looks Like",
    desc: "A behind the scenes look at how founders use design subscriptions to move faster.",
    read: "6 min read",
    img: "https://framerusercontent.com/images/mMGyaOXjCOlqMFzBYOOC6xcyeR0.png",
    slug: "design-subscription-workflow",
  },
  {
    category: "Growth",
    title: "The Real Cost of Bad Design (It's Not What You Think)",
    desc: "Poor design slows down decisions, clutters your message, and stalls growth.",
    read: "5 min read",
    img: "https://framerusercontent.com/images/XqWtWOfsLoqWpqyf7St5rHsB2p4.png",
    slug: "cost-of-bad-design",
  },
];

export default function Blog() {
  const [featured, ...rest] = posts;

  return (
    <section id="blog" className="bg-[#F5F0E8] py-24 px-6 md:px-10 border-t border-[#0a0a0a]/08">
      <div className="max-w-6xl mx-auto">
        <p
          className="text-xs uppercase tracking-widest text-[#0a0a0a]/40 mb-4"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Blog
        </p>
        <h2
          style={{ fontFamily: "var(--font-display)" }}
          className="text-4xl md:text-5xl lg:text-6xl leading-[1.05] max-w-xl mb-16 text-[#0a0a0a]"
        >
          Practical reads to help you move faster.
        </h2>

        {/* Featured */}
        <Link
          href={`/blog/${featured.slug}`}
          className="group block mb-8 bg-[#0a0a0a] rounded-3xl overflow-hidden"
        >
          <div className="grid md:grid-cols-2">
            <div className="relative aspect-[4/3] md:aspect-auto">
              <Image
                src={featured.img}
                alt={featured.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-between text-[#F5F0E8]">
              <div>
                <span
                  className="text-xs border border-[#F5F0E8]/20 text-[#F5F0E8]/50 px-3 py-1 rounded-full mb-5 inline-block"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {featured.category}
                </span>
                <h3
                  style={{ fontFamily: "var(--font-display)" }}
                  className="text-3xl md:text-4xl leading-[1.1] mb-4"
                >
                  {featured.title}
                </h3>
                <p
                  className="text-sm text-[#F5F0E8]/50 leading-relaxed"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {featured.desc}
                </p>
              </div>
              <div className="flex items-center justify-between mt-8">
                <span
                  className="text-xs text-[#F5F0E8]/30"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {featured.read} · by Whenevr<sup className="text-[8px]">®</sup>
                </span>
                <span className="text-[#c8ff00] text-sm group-hover:translate-x-1 transition-transform inline-block">
                  →
                </span>
              </div>
            </div>
          </div>
        </Link>

        {/* Rest */}
        <div className="grid md:grid-cols-3 gap-5">
          {rest.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block bg-[#0a0a0a]/5 rounded-2xl overflow-hidden hover:bg-[#0a0a0a]/10 transition-colors"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={post.img}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-5">
                <span
                  className="text-[10px] border border-[#0a0a0a]/15 text-[#0a0a0a]/50 px-2.5 py-1 rounded-full mb-3 inline-block"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {post.category}
                </span>
                <h3
                  style={{ fontFamily: "var(--font-display)" }}
                  className="text-xl text-[#0a0a0a] mb-2 leading-snug"
                >
                  {post.title}
                </h3>
                <p
                  className="text-xs text-[#0a0a0a]/50 leading-relaxed"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {post.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
