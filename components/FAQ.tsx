"use client";
import { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    q: "How many design requests can I submit?",
    a: "You can submit as many requests as you'd like. They'll be handled one at a time, in the order they're added to your Notion board.",
  },
  {
    q: "What kind of design work is included?",
    a: "Most requests related to web, product, and marketing design are covered. That includes landing pages, UI design, Framer builds, brand assets, and more.",
  },
  {
    q: "How fast will I receive my designs?",
    a: "Most tasks are completed in two to three business days. Larger or more complex requests may take a bit longer, but we'll always keep you updated.",
  },
  {
    q: "Can I pause my subscription?",
    a: "Yes. If you're in between projects, you can pause at any time. You'll keep the remaining days of your billing cycle to use later.",
  },
  {
    q: "What if I need development too?",
    a: "Whenevr is focused on design, but if you need development — especially in Framer — just let us know. We offer it as an add-on when needed.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-[#F5F0E8] py-24 px-6 md:px-10 border-t border-[#0a0a0a]/08">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
          {/* Left */}
          <div>
            <p
              className="text-xs uppercase tracking-widest text-[#0a0a0a]/40 mb-4"
              style={{ fontFamily: "var(--font-body)" }}
            >
              FAQs
            </p>
            <h2
              style={{ fontFamily: "var(--font-display)" }}
              className="text-4xl md:text-5xl leading-[1.05] text-[#0a0a0a] mb-8"
            >
              Frequently Asked Questions
            </h2>
            <div className="border border-[#0a0a0a]/10 rounded-2xl p-5">
              <p
                className="text-xs text-[#0a0a0a]/40 mb-1"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Email
              </p>
              <Link
                href="mailto:hello@whenevr.com"
                className="text-sm text-[#0a0a0a] hover:underline"
                style={{ fontFamily: "var(--font-body)" }}
              >
                hello@whenevr.com
              </Link>
              <br />
              <Link
                href="mailto:hello@whenevr.com"
                className="mt-3 inline-block text-sm bg-[#0a0a0a] text-[#F5F0E8] px-5 py-2.5 rounded-full hover:bg-[#1a1a1a] transition-colors"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Get in touch
              </Link>
            </div>
          </div>

          {/* Right — accordion */}
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="border border-[#0a0a0a]/10 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left group"
                >
                  <span
                    className="text-sm md:text-base font-medium text-[#0a0a0a] group-hover:text-[#0a0a0a]/70 transition-colors"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {faq.q}
                  </span>
                  <span
                    className={`flex-shrink-0 ml-4 w-6 h-6 rounded-full border border-[#0a0a0a]/20 flex items-center justify-center transition-transform ${
                      open === i ? "rotate-45" : ""
                    }`}
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path
                        d="M5 1V9M1 5H9"
                        stroke="#0a0a0a"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </button>
                {open === i && (
                  <div className="px-5 md:px-6 pb-5">
                    <p
                      className="text-sm text-[#0a0a0a]/60 leading-relaxed"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
