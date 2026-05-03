"use client";
import { useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "Alexia Fran",
    role: "Marketing Lead, RelayOne",
    text: "I've loved working with Whenevr. I didn't need to explain things twice. The design just showed up looking exactly how I pictured it.",
    img: "https://framerusercontent.com/images/DcNJgQIOkkv7HpGnt8XS2UJ0sGE.png",
  },
  {
    name: "Eli Ramos",
    role: "Founder, Minos",
    text: "Every request was handled quickly and nailed on the first pass. Genuinely the most efficient design experience I've had.",
    img: "https://framerusercontent.com/images/deHueM6CDFRvwo3KoYL9UlkKjo.png",
  },
  {
    name: "Maya Kim",
    role: "Head of Product, Haptik",
    text: "Clean process, great work, and no hand-holding required. It felt like having a senior designer on standby without the back-and-forth.",
    img: "https://framerusercontent.com/images/KsgfJQmkr2IUJ4C1etP8vC5ywSU.png",
  },
  {
    name: "Tina Zhang",
    role: "Creative Director, Octave",
    text: "The quality of design is top-tier and the process is frictionless. Whenevr feels like cheating in the best way.",
    img: "https://framerusercontent.com/images/9TFXEqtk3YFraXWfmvs6NgGjubE.png",
  },
  {
    name: "Jared Cole",
    role: "Startup Founder, Nimbus Systems",
    text: "No meetings, no delays, no drama. Just smart design delivered when we needed it. I can't recommend Whenevr enough.",
    img: "https://framerusercontent.com/images/PiA7xFeo1HUizwAFLgCrsctY.png",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a === 0 ? testimonials.length - 1 : a - 1));
  const next = () => setActive((a) => (a === testimonials.length - 1 ? 0 : a + 1));

  return (
    <section className="bg-[#0a0a0a] text-[#F5F0E8] py-24 px-6 md:px-10 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <p
          className="text-xs uppercase tracking-widest text-[#F5F0E8]/40 mb-4"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Testimonials
        </p>
        <h2
          style={{ fontFamily: "var(--font-display)" }}
          className="text-4xl md:text-5xl lg:text-6xl leading-[1.05] max-w-xl mb-16"
        >
          Turns out, people like getting things done.
        </h2>

        {/* Scrollable cards */}
        <div className="testimonials-scroll pb-4 mb-10">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`w-80 md:w-96 flex-shrink-0 bg-[#1a1a1a] rounded-3xl p-7 transition-opacity ${
                i === active ? "opacity-100" : "opacity-50"
              }`}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={t.img}
                    alt={t.name}
                    width={40}
                    height={40}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <p
                    className="text-sm font-medium text-[#F5F0E8]"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {t.name}
                  </p>
                  <p
                    className="text-xs text-[#F5F0E8]/40"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {t.role}
                  </p>
                </div>
              </div>
              <p
                className="text-sm text-[#F5F0E8]/70 leading-relaxed"
                style={{ fontFamily: "var(--font-body)" }}
              >
                &ldquo;{t.text}&rdquo;
              </p>
            </div>
          ))}
        </div>

        {/* Arrows */}
        <div className="flex items-center gap-3">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-[#F5F0E8]/15 flex items-center justify-center hover:border-[#F5F0E8]/40 transition-colors"
            aria-label="Previous"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M10 12L6 8L10 4"
                stroke="#F5F0E8"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-[#F5F0E8]/15 flex items-center justify-center hover:border-[#F5F0E8]/40 transition-colors"
            aria-label="Next"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M6 4L10 8L6 12"
                stroke="#F5F0E8"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <span
            className="text-xs text-[#F5F0E8]/30 ml-2"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {active + 1} / {testimonials.length}
          </span>
        </div>
      </div>
    </section>
  );
}
