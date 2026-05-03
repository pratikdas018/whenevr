import Image from "next/image";
import Link from "next/link";

const included = [
  "Unlimited design requests",
  "One active task at a time",
  "Delivered in a few business days",
  "Source files included",
  "Cancel or pause anytime",
];

const workImages = [
  "https://framerusercontent.com/images/UK3ji9XKftVKablDa07xbZ7o.jpeg",
  "https://framerusercontent.com/images/gdoBqgMU9ke6K07ShZLmpfUoWc.jpeg",
  "https://framerusercontent.com/images/ldLzFEXXuK2q3bgbFfV6MlgqbSw.jpeg",
  "https://framerusercontent.com/images/XTdwXzaaZ0uFZA76FvHmRgz1z4.jpeg",
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-[#F5F0E8] py-24 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Work thumbnails stack */}
          <div className="grid grid-cols-2 gap-3">
            {workImages.map((src, i) => (
              <div
                key={i}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#0a0a0a]/5"
              >
                <Image src={src} alt="Design work" fill className="object-cover" />
              </div>
            ))}
          </div>

          {/* Pricing card */}
          <div className="bg-[#0a0a0a] rounded-3xl p-8 md:p-10 text-[#F5F0E8] relative overflow-hidden">
            {/* Popular badge */}
            <div className="absolute top-6 right-6">
              <span
                className="text-[10px] bg-[#c8ff00] text-[#0a0a0a] px-2.5 py-1 rounded-full font-medium"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Popular
              </span>
            </div>

            <div className="mb-8">
              <p
                className="text-sm text-[#F5F0E8]/40 mb-1"
                style={{ fontFamily: "var(--font-body)" }}
              >
                whenevr<sup className="text-[9px]">®</sup>
              </p>
              <p
                className="text-sm text-[#F5F0E8]/50 mb-4 max-w-xs"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Submit any design task you need. Landing pages, product visuals,
                brand assets, and more.
              </p>
            </div>

            <div className="mb-8">
              <div className="flex items-baseline gap-1">
                <span
                  style={{ fontFamily: "var(--font-display)" }}
                  className="text-5xl md:text-6xl"
                >
                  $2,995
                </span>
                <span
                  className="text-[#F5F0E8]/40 text-base"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  /month
                </span>
              </div>
              <p
                className="text-xs text-[#F5F0E8]/30 mt-2"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Additional Active Task +$995
              </p>
            </div>

            {/* Included */}
            <ul className="space-y-3 mb-8">
              {included.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm text-[#F5F0E8]/70"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="flex-shrink-0"
                  >
                    <circle cx="8" cy="8" r="7.5" stroke="#c8ff00" strokeOpacity="0.5" />
                    <path
                      d="M5 8L7 10L11 6"
                      stroke="#c8ff00"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>

            <Link
              href="https://stripe.com"
              target="_blank"
              className="block w-full text-center bg-[#c8ff00] text-[#0a0a0a] py-4 rounded-2xl font-medium hover:bg-[#d4ff33] transition-colors"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Join today
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
