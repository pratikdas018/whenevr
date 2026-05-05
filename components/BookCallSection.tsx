"use client";

import Link from "next/link";
import BookingFlow from "@/components/BookingFlow";

export default function BookCallSection() {
  return (
    <section
      id="book-a-call"
      className="bg-[#050505] px-6 py-24 text-[#F5F0E8] md:min-h-screen md:px-10 md:py-28"
    >
      <div className="mx-auto grid max-w-[1280px] gap-12 md:grid-cols-[minmax(0,1fr)_380px] md:items-start md:gap-16">
        <div className="max-w-[760px] pt-4">
          <h2
            className="font-sans font-semibold tracking-tight text-white"
            style={{
              fontSize: "clamp(3.6rem, 7vw, 5.8rem)",
              lineHeight: 0.92,
            }}
          >
            Design <span className="font-serif italic font-normal">doesn&apos;t</span>{" "}
            need
            <br />
            to be complicated.
          </h2>

          <p className="mt-8 max-w-[620px] text-lg leading-[1.5] text-white/45">
            Book a quick call and get a clear look at how Whenevr works,
            what&apos;s included, and whether it fits your pace.
          </p>

          <Link
            href="#pricing"
            className="mt-12 inline-flex rounded-full bg-white px-8 py-4 text-[1.05rem] font-semibold text-[#0A0A0A] transition-transform duration-200 hover:scale-[1.02]"
          >
            See Pricing
          </Link>
        </div>

        <BookingFlow />
      </div>
    </section>
  );
}
