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
    <section id="blog" className="bg-[#e9e3d8] px-6 py-24 md:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p
            className="mb-4 text-xs uppercase tracking-widest text-black/40"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Blog
          </p>
          <h2
            style={{ fontFamily: "var(--font-display)" }}
            className="mx-auto max-w-3xl text-4xl leading-[1.05] text-black md:text-5xl lg:text-6xl"
          >
            Practical reads to help you move faster.
          </h2>
        </div>

        <Link
          href={`/blog/${featured.slug}`}
          className="group mb-8 block overflow-hidden rounded-3xl bg-[#e9e3d8]"
        >
          <div className="grid md:grid-cols-2">
            <div className="relative aspect-[4/3] md:aspect-auto">
              <Image
                src={featured.img}
                alt={featured.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col justify-between bg-[#e9e3d8] p-8 text-black md:p-12">
              <div>
                <span
                  className="mb-5 inline-block rounded-full border border-black/15 px-3 py-1 text-xs text-black/55"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {featured.category}
                </span>
                <h3
                  style={{ fontFamily: "var(--font-display)" }}
                  className="mb-4 text-3xl leading-[1.1] md:text-4xl"
                >
                  {featured.title}
                </h3>
                <p
                  className="text-sm leading-relaxed text-black/55"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {featured.desc}
                </p>
              </div>
              <div className="mt-8 flex items-center justify-between">
                <span
                  className="text-xs text-black/35"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {featured.read} &middot; by Whenevr
                  <sup className="text-[8px]">&reg;</sup>
                </span>
                <span className="inline-block text-sm text-[#95b800] transition-transform group-hover:translate-x-1">
                  &rarr;
                </span>
              </div>
            </div>
          </div>
        </Link>

        <div className="grid gap-5 md:grid-cols-3">
          {rest.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block overflow-hidden rounded-2xl bg-white/35 transition-colors hover:bg-white/50"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={post.img}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <span
                  className="mb-3 inline-block rounded-full border border-black/10 px-2.5 py-1 text-[10px] text-black/50"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {post.category}
                </span>
                <h3
                  style={{ fontFamily: "var(--font-display)" }}
                  className="mb-2 text-xl leading-snug text-black"
                >
                  {post.title}
                </h3>
                <p
                  className="text-xs leading-relaxed text-black/55"
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
