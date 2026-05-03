"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const tags = [
  "Social Graphics",
  "UX Design",
  "Pitch Decks",
  "Web Design",
  "Branding",
];

export default function Hero() {
  const [showCalendarLabel, setShowCalendarLabel] = useState(false);

  return (
    <section className="relative overflow-hidden bg-[#EFEFED]">
      <style>{`
        @keyframes heroBlobFloat {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
          50%       { transform: translate3d(0, 18px, 0) scale(1.018); }
        }
        @keyframes heroBlobDrift {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1.02); }
          50%       { transform: translate3d(-18px, 10px, 0) scale(1.055); }
        }
        @keyframes tagMarquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .tag-marquee-track {
          display: flex;
          width: max-content;
          animation: tagMarquee 22s linear infinite;
        }
      `}</style>

      {/* ── Full viewport grid ── */}
      <div className="relative min-h-screen w-full">

        {/* RIGHT — Blob (absolutely fills right half, bleeds off edges) */}
        <div
          className="absolute right-0 top-0 h-full"
          style={{ width: "52%", zIndex: 0 }}
        >
          <div
            className="absolute will-change-transform"
            style={{
              inset: "-10% -18% -8% -8%",
              animation: "heroBlobFloat 9s ease-in-out infinite",
            }}
          >
            <div
              className="relative h-full w-full will-change-transform"
              style={{ animation: "heroBlobDrift 14s ease-in-out infinite" }}
            >
              <Image
                src="https://framerusercontent.com/images/922LPrLT3JS7JXQbJxraBeoo8I.png"
                alt="Abstract blob"
                fill
                priority
                sizes="55vw"
                className="object-cover object-left"
              />
            </div>
          </div>
          {/* Bottom fade so blob bleeds into page naturally */}
          <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-[#EFEFED] to-transparent" />
        </div>

        {/* LEFT — Content */}
        <div
          className="relative flex flex-col justify-center min-h-screen px-6 md:px-14 lg:px-20 pb-32 pt-28"
          style={{ zIndex: 10, maxWidth: "54%" }}
        >

          {/* Scrolling tag pills */}
          <div className="overflow-hidden mb-8" style={{ maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)" }}>
            <div className="tag-marquee-track">
              {[...tags, ...tags].map((tag, i) => (
                <span
                  key={i}
                  className="flex-shrink-0 mx-1.5 rounded-full border border-black/20 bg-transparent px-4 py-2 text-sm text-[#0D0D0D]"
                  style={{ fontFamily: "DM Sans, sans-serif", whiteSpace: "nowrap" }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Headline */}
          <h1
            className="text-[#050505] tracking-[-0.04em] leading-[0.92]"
            style={{
              fontFamily: "Instrument Serif, serif",
              fontSize: "clamp(4.2rem, 6.5vw, 6.8rem)",
              fontWeight: 400,
            }}
          >
            World-class
            <br />
            design{" "}
            <span style={{ fontStyle: "italic" }}>whenevr</span>
            <sup
              style={{
                fontSize: "0.28em",
                verticalAlign: "super",
                marginLeft: "0.1em",
                fontStyle: "normal",
              }}
            >
              ®
            </sup>
            <br />
            you need it.
          </h1>

          {/* Subtext */}
          <p
            className="mt-7 text-base leading-[1.6] text-black/50"
            style={{
              fontFamily: "DM Sans, sans-serif",
              maxWidth: "380px",
            }}
          >
            A monthly design subscription for startups, creators,
            and teams who need work done without the wait.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            {/* See Pricing */}
            <Link
              href="#pricing"
              className="rounded-full px-7 py-3.5 text-base font-medium text-white transition-transform duration-200 hover:scale-[1.02]"
              style={{
                backgroundColor: "#0A0A0A",
                fontFamily: "DM Sans, sans-serif",
              }}
            >
              See Pricing
            </Link>

            {/* Book a call */}
            <Link
              href="#book-a-call"
              onMouseEnter={() => setShowCalendarLabel(true)}
              onMouseLeave={() => setShowCalendarLabel(false)}
              onFocus={() => setShowCalendarLabel(true)}
              onBlur={() => setShowCalendarLabel(false)}
              className="relative flex h-[60px] min-w-[250px] items-center justify-center overflow-hidden rounded-full border px-4 py-2.5 transition-transform duration-200 hover:-translate-y-0.5"
              style={{
                borderColor: "rgba(0,0,0,0.12)",
                backgroundColor: "rgba(255,255,255,0.88)",
                fontFamily: "DM Sans, sans-serif",
                boxShadow: "0 4px 20px rgba(0,0,0,0.07)",
              }}
            >
              <div
                className={`absolute inset-0 flex items-center justify-center transition-all duration-200 ${
                  showCalendarLabel
                    ? "translate-y-0 opacity-100"
                    : "translate-y-2 opacity-0"
                }`}
              >
                <span className="text-[0.98rem] font-bold text-[#090909]">
                  View calendar
                </span>
              </div>

              <div
                className={`flex items-center gap-3 transition-all duration-200 ${
                  showCalendarLabel
                    ? "-translate-y-2 opacity-0"
                    : "translate-y-0 opacity-100"
                }`}
              >
                <div className="h-10 w-10 flex-shrink-0 overflow-hidden rounded-full">
                  <Image
                    src="https://framerusercontent.com/images/hfneFL6CHBi5BnNvCeOaqU9HqE4.png"
                    alt="Book a call"
                    width={40}
                    height={40}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold leading-tight text-[#090909]">
                    Book a 15-min intro call
                  </p>
                  <p className="mt-0.5 flex items-center gap-1.5 text-xs text-black/45">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#34C759]" />
                    Available now
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>

      </div>

      {/* ── Trusted by row ── */}
      <div className="relative z-10 border-t border-black/6 bg-[#EFEFED] px-6 py-10 md:px-14 lg:px-20">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-14">
          <p
            className="flex-shrink-0 text-sm font-medium leading-snug text-black/35"
            style={{ fontFamily: "DM Sans, sans-serif", maxWidth: "160px" }}
          >
            Trusted by the biggest brands worldwide
          </p>
          <div
            className="overflow-hidden"
            style={{
              maskImage:
                "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)",
            }}
          >
            <div className="tag-marquee-track items-center gap-10 md:gap-14">
              {[
                { label: "MILANO",    cls: "text-[1.7rem] font-semibold tracking-[-0.06em]" },
                { label: "Amsterdam", cls: "text-[2.1rem] font-bold tracking-[-0.05em]" },
                { label: "venice.",   cls: "text-[2.2rem] tracking-[-0.05em]" },
                { label: "theo",      cls: "text-[2.1rem] italic tracking-[-0.07em]" },
                { label: "db",        cls: "text-[2.2rem] font-black tracking-[-0.08em]" },
                { label: "MILANO",    cls: "text-[1.7rem] font-semibold tracking-[-0.06em]" },
                { label: "Amsterdam", cls: "text-[2rem] font-bold tracking-[-0.05em] opacity-35" },
                { label: "MILANO",    cls: "text-[1.7rem] font-semibold tracking-[-0.06em]" },
                { label: "Amsterdam", cls: "text-[2.1rem] font-bold tracking-[-0.05em]" },
                { label: "venice.",   cls: "text-[2.2rem] tracking-[-0.05em]" },
                { label: "theo",      cls: "text-[2.1rem] italic tracking-[-0.07em]" },
                { label: "db",        cls: "text-[2.2rem] font-black tracking-[-0.08em]" },
                { label: "MILANO",    cls: "text-[1.7rem] font-semibold tracking-[-0.06em]" },
                { label: "Amsterdam", cls: "text-[2rem] font-bold tracking-[-0.05em] opacity-35" },
              ].map((b, i) => (
                <span
                  key={i}
                  className={`whitespace-nowrap text-[#0D0D0D] ${b.cls}`}
                  style={{ fontFamily: "DM Sans, sans-serif" }}
                >
                  {b.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
