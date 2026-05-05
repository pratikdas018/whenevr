"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Eli Ramos",
    role: "Founder, Minos",
    text: "Every request was handled quickly and nailed on the first pass. It felt fast, thoughtful, and unusually easy from start to finish.",
    avatar: "/avatars/1.jpg",
  },
  {
    name: "Maya Kim",
    role: "Head of Product, Haptik",
    text: "Clean process, great work, and no hand-holding required. We moved faster without sacrificing polish anywhere in the product.",
    avatar: "/avatars/2.jpg",
  },
  {
    name: "Tina Zhang",
    role: "Creative Director, Octave",
    text: "The quality of design is top-tier and the process is frictionless. It genuinely feels like an unfair advantage for our team.",
    avatar: "/avatars/3.jpg",
  },
  {
    name: "Noah Bennett",
    role: "CEO, Northstar",
    text: "We stopped worrying about bandwidth and started shipping better work. Every deliverable arrived sharp, clear, and ready to use.",
    avatar: "/avatars/4.jpg",
  },
  {
    name: "Ava Patel",
    role: "Brand Lead, Looma",
    text: "The turnaround was consistently quick, and the taste level never dipped. It felt premium in the way the best agencies do.",
    avatar: "/avatars/5.jpg",
  },
  {
    name: "Jordan Lee",
    role: "Founder, Vale Studio",
    text: "Requests moved smoothly, communication stayed simple, and the output kept landing right where we needed it. Zero wasted motion.",
    avatar: "/avatars/6.jpg",
  },
  {
    name: "Sofia Chen",
    role: "Marketing Director, Pilot",
    text: "The whole experience was calm, fast, and dependable. We got stronger design decisions with none of the usual back-and-forth.",
    avatar: "/avatars/7.jpg",
  },
];

const loopData = [...testimonials, ...testimonials];

export default function Testimonials() {
  const [duration, setDuration] = useState(30);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");

    const syncDuration = () => {
      setDuration(mediaQuery.matches ? 40 : 30);
    };

    syncDuration();
    mediaQuery.addEventListener("change", syncDuration);

    return () => {
      mediaQuery.removeEventListener("change", syncDuration);
    };
  }, []);

  return (
    <section className="overflow-hidden bg-[#f5f5f5] px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-6 inline-block rounded-full bg-gray-200 px-4 py-1">
            Testimonials
          </p>

          <h2 className="text-center text-[40px] font-semibold leading-[1.1] tracking-tight md:text-[56px]">
            Turns out, people like
            <br />
            getting things <span className="font-serif italic">done</span>.
          </h2>
        </div>

        <div
          className="w-full overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          <motion.div
            className="flex w-max gap-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration,
              ease: "linear",
            }}
            style={{ willChange: "transform" }}
          >
            {loopData.map((testimonial, index) => (
              <article
                key={`${testimonial.name}-${index}`}
                className="relative min-w-[260px] max-w-[260px] rounded-2xl bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.05)] md:min-w-[320px] md:max-w-[320px]"
              >
                <div
                  aria-hidden="true"
                  className="absolute right-4 top-4 text-4xl leading-none text-gray-200"
                >
                  &ldquo;
                </div>

                <div className="mb-5 flex items-center gap-3">
                  <div className="h-10 w-10 overflow-hidden rounded-full">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={40}
                      height={40}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div>
                    <p className="font-semibold text-black">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>

                <p className="text-sm leading-relaxed text-gray-600">
                  {testimonial.text}
                </p>
              </article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
