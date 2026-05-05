"use client";

import { useState } from "react";

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
    a: "Whenevr is focused on design, but if you need development too, especially in Framer, just let us know. We offer it as an add-on when needed.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-[#f5f5f5] px-6 py-28">
      <div className="mx-auto max-w-3xl rounded-3xl bg-[#f7f7f7] p-10 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
        <p className="mb-6 inline-block rounded-full bg-gray-200 px-4 py-1 text-sm">
          FAQs
        </p>

        <h2 className="mb-8 text-[48px] font-semibold leading-tight text-black">
          Frequently Asked <span className="font-serif italic">Questions</span>
        </h2>

        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-500">Email</p>
            <p className="font-medium text-black">hello@whenevr.com</p>
          </div>

          <button
            type="button"
            onClick={() => {
              window.location.href = "mailto:hello@whenevr.com";
            }}
            className="rounded-full bg-black px-6 py-3 text-white transition hover:opacity-90"
          >
            Get in touch
          </button>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={faq.q} className="rounded-xl bg-white px-6 py-4 shadow-sm">
              <button
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between text-left"
              >
                <span className="text-[15px] font-medium text-black">
                  {faq.q}
                </span>

                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-200 text-gray-600">
                  <span
                    className={`transition-transform duration-200 ${
                      open === i ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </div>
              </button>

              {open === i && (
                <p className="mt-2 text-sm text-gray-500">{faq.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
