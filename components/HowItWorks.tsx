"use client";

import Image from "next/image";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

const spring = {
  type: "spring" as const,
  stiffness: 180,
  damping: 22,
};

const cards = [
  {
    title: "Subscribe",
    description:
      "Pick a plan and get started right away. No calls, no setup, just design on demand.",
  },
  {
    title: "Request",
    description:
      "Submit any design task you need. Landing pages, product visuals, brand assets, and more.",
  },
  {
    title: "Receive",
    description:
      "Your design is delivered in a few business days. Simple, fast, and ready to use.",
  },
];

const rowOne = ["Branding", "Social Graphics", "UX Design", "Pitch Decks"];
const rowTwo = [
  "Blog Graphics",
  "Landing Pages",
  "Illustrations",
  "Product Design",
  "Email Design",
];
const rowThree = [
  "UI Design",
  "App Design",
  "Style Guides",
  "Icon Design",
  "Ad Creatives",
];

const clientProfiles = [
  {
    src: "https://randomuser.me/api/portraits/men/32.jpg",
    alt: "Client profile 1",
    className: "left-[4.5%] top-[344px] md:left-[4.5%] md:top-[340px]",
    size: "h-[94px] w-[94px] md:h-[106px] md:w-[106px]",
  },
  {
    src: "https://randomuser.me/api/portraits/women/44.jpg",
    alt: "Client profile 2",
    className: "left-[13.5%] top-[240px] md:left-[13.5%] md:top-[234px]",
    size: "h-[88px] w-[88px] md:h-[100px] md:w-[100px]",
  },
  {
    src: "https://randomuser.me/api/portraits/men/76.jpg",
    alt: "Client profile 3",
    className: "left-[23.5%] top-[148px] md:left-[23.5%] md:top-[140px]",
    size: "h-[92px] w-[92px] md:h-[104px] md:w-[104px]",
  },
  {
    src: "https://randomuser.me/api/portraits/men/41.jpg",
    alt: "Client profile 4",
    className: "left-[36.75%] top-[84px] md:left-[37%] md:top-[78px]",
    size: "h-[88px] w-[88px] md:h-[100px] md:w-[100px]",
  },
  {
    src: "https://randomuser.me/api/portraits/women/68.jpg",
    alt: "Client profile 5",
    className: "left-[48.2%] top-[66px] md:left-[48.3%] md:top-[58px]",
    size: "h-[92px] w-[92px] md:h-[106px] md:w-[106px]",
  },
  {
    src: "https://randomuser.me/api/portraits/women/22.jpg",
    alt: "Client profile 6",
    className: "left-[60.6%] top-[84px] md:left-[60.4%] md:top-[78px]",
    size: "h-[88px] w-[88px] md:h-[100px] md:w-[100px]",
  },
  {
    src: "https://randomuser.me/api/portraits/men/54.jpg",
    alt: "Client profile 7",
    className: "left-[72.5%] top-[154px] md:left-[72.5%] md:top-[146px]",
    size: "h-[90px] w-[90px] md:h-[102px] md:w-[102px]",
  },
  {
    src: "https://randomuser.me/api/portraits/men/83.jpg",
    alt: "Client profile 8",
    className: "left-[81.75%] top-[252px] md:left-[81.5%] md:top-[246px]",
    size: "h-[90px] w-[90px] md:h-[102px] md:w-[102px]",
  },
  {
    src: "https://randomuser.me/api/portraits/women/52.jpg",
    alt: "Client profile 9",
    className: "left-[88%] top-[348px] md:left-[88%] md:top-[348px]",
    size: "h-[84px] w-[84px] md:h-[96px] md:w-[96px]",
  },
  {
    src: "https://randomuser.me/api/portraits/women/29.jpg",
    alt: "Client profile 10",
    className: "left-[85.5%] top-[446px] md:left-[85.5%] md:top-[448px]",
    size: "h-[90px] w-[90px] md:h-[100px] md:w-[100px]",
  },
];

function TelegramIcon() {
  return (
    <svg viewBox="0 0 256 256" aria-hidden="true" className="h-8 w-8 fill-white">
      <path
        d="M227.32,28.68a16,16,0,0,0-15.66-4.08l-.15,0L19.57,82.84a16,16,0,0,0-2.49,29.8L102,154l41.3,84.87A15.86,15.86,0,0,0,157.74,248q.69,0,1.38-.06a15.88,15.88,0,0,0,14-11.51l58.2-191.94c0-.05,0-.1,0-.15A16,16,0,0,0,227.32,28.68ZM157.83,231.85l-.05.14,0-.07-40.06-82.3,48-48a8,8,0,0,0-11.31-11.31l-48,48L24.08,98.25l-.07,0,.14,0L216,40Z"
      />
    </svg>
  );
}

function LogoChip({ active }: { active: boolean }) {
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={active ? "telegram" : "logo"}
        initial={{ scale: 0.82, opacity: 0, rotate: active ? -10 : 10 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        exit={{ scale: 0.82, opacity: 0, rotate: active ? 10 : -10 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className="flex h-20 w-20 items-center justify-center rounded-2xl bg-[#0d0d0d] shadow-[0_12px_37px_rgba(0,0,0,0.08)]"
      >
        {active ? (
          <TelegramIcon />
        ) : (
          <span
            className="text-[3.1rem] leading-none text-white"
            style={{ fontFamily: '"Source Serif 4", serif', fontStyle: "italic" }}
          >
            W
          </span>
        )}
      </motion.div>
    </AnimatePresence>
  );
}

function Pill({ text }: { text: string }) {
  return (
    <div className="rounded-full bg-[#f0f0f0] px-[18px] py-[7px] text-[14px] font-semibold leading-none tracking-[-0.02em] text-black">
      {text}
    </div>
  );
}

function MarqueeRow({
  items,
  reverse = false,
}: {
  items: string[];
  reverse?: boolean;
}) {
  const looped = [...items, ...items, ...items];

  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex w-max gap-3"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{
          duration: reverse ? 24 : 22,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {looped.map((item, index) => (
          <Pill key={`${item}-${index}`} text={item} />
        ))}
      </motion.div>
    </div>
  );
}

function SubscribeCard() {
  return (
    <div className="rounded-[20px] bg-[#efefed] p-8">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start">
          <h1
            className="text-[24px] font-semibold italic leading-[1.1] tracking-[-0.08em] text-black"
            style={{ fontFamily: '"Source Serif 4", serif' }}
          >
            whenevr
          </h1>
          <span className="ml-1 mt-0.5 text-[14px] font-semibold leading-none text-black">
            ®
          </span>
        </div>
        <div className="rounded-full bg-white px-4 py-2 text-[12px] font-semibold leading-none text-black backdrop-blur-2xl">
          Popular
        </div>
      </div>

      <div className="mt-6 flex items-end gap-1">
        <h2 className="text-[40px] font-semibold leading-none tracking-[-0.07em] text-black">
          $2,995
        </h2>
        <span className="pb-1 text-[14px] font-semibold leading-[1.5] tracking-[-0.07em] text-[#989898]">
          /month
        </span>
      </div>

      <Link
        href="#pricing"
        className="group relative mt-7 flex h-[54px] w-full items-center justify-center overflow-hidden rounded-full bg-black"
      >
        <span className="absolute text-[17px] font-semibold text-white blur-[5px] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
          Join today
        </span>
        <span className="text-[17px] font-semibold text-white transition-all duration-300 group-hover:-translate-y-[1px]">
          Join today
        </span>
      </Link>
    </div>
  );
}

function RequestCard({
  logoHovered,
  onLogoEnter,
  onLogoLeave,
}: {
  logoHovered: boolean;
  onLogoEnter: () => void;
  onLogoLeave: () => void;
}) {
  return (
    <div className="relative mx-auto w-full max-w-[246px]">
      <div className="h-[202px] overflow-hidden pt-1">
        <div className="space-y-3">
          <MarqueeRow items={rowOne} />
          <MarqueeRow items={rowTwo} reverse />
          <MarqueeRow items={rowThree} />
        </div>
      </div>

      <motion.div
        className="absolute inset-x-0 top-0 flex h-[202px] items-center justify-center"
        animate={{ y: logoHovered ? -2 : 0, scale: logoHovered ? 1.02 : 1 }}
        transition={spring}
      >
        <div onMouseEnter={onLogoEnter} onMouseLeave={onLogoLeave}>
          <LogoChip active={logoHovered} />
        </div>
      </motion.div>
    </div>
  );
}

function ReceiveCard({ active }: { active: boolean }) {
  const [hoveredFile, setHoveredFile] = useState<"left" | "right" | null>(null);

  return (
    <div className="mx-auto w-full max-w-[244px] rounded-[18px] bg-white px-3 pt-2">
      <div className="relative mx-auto h-[195px] w-full max-w-[238px]">
        <motion.div
          onMouseEnter={() => setHoveredFile("left")}
          onMouseLeave={() => setHoveredFile(null)}
          className="absolute left-[32px] top-[10px] z-[1] h-[78px] w-[132px] overflow-hidden rounded-[6px] border-2 border-white shadow-[0_12px_37px_rgba(0,0,0,0.08)]"
          animate={{
            rotate: hoveredFile === "left" ? 0 : active ? -4 : 0,
            y: hoveredFile === "left" ? -24 : active ? -4 : 16,
            x: hoveredFile === "left" ? 0 : active ? -8 : 0,
            opacity: active || hoveredFile === "left" ? 1 : 0,
            scale: hoveredFile === "left" ? 1.18 : 1,
            zIndex: hoveredFile === "left" ? 5 : hoveredFile === "right" ? 1 : 2,
          }}
          transition={spring}
        >
          <Image
            src="https://framerusercontent.com/images/MRXSykppVewwilGAfSKu7eZdgg.jpg?scale-down-to=512"
            alt=""
            fill
            className="object-cover object-top"
          />
        </motion.div>

        <motion.div
          onMouseEnter={() => setHoveredFile("right")}
          onMouseLeave={() => setHoveredFile(null)}
          className="absolute right-[20px] top-[4px] z-[2] h-[78px] w-[132px] overflow-hidden rounded-[6px] border-2 border-white shadow-[0_12px_37px_rgba(0,0,0,0.08)]"
          animate={{
            rotate: hoveredFile === "right" ? 0 : active ? 6 : 0,
            y: hoveredFile === "right" ? -24 : active ? 0 : 16,
            x: hoveredFile === "right" ? 0 : active ? 12 : 0,
            opacity: active || hoveredFile === "right" ? 1 : 0,
            scale: hoveredFile === "right" ? 1.18 : 1,
            zIndex: hoveredFile === "right" ? 6 : hoveredFile === "left" ? 1 : 3,
          }}
          transition={spring}
        >
          <Image
            src="https://framerusercontent.com/images/FO0GbO8rNEXzxKJ7N9jYNS92Nvk.jpg?scale-down-to=512"
            alt=""
            fill
            className="object-cover object-top"
          />
        </motion.div>

        <div className="absolute inset-x-0 bottom-0 z-[3] mx-auto h-[146px] w-full max-w-[238px] rounded-[12px] border border-white bg-[#f0f0f0]">
          <div className="flex h-full items-center justify-center">
            <Image
              src="https://framerusercontent.com/images/qiSLj1RGONCas5NX09DpPtZlwU.png"
              alt=""
              width={68}
              height={68}
              className="opacity-15 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function ClientsSection() {
  const { scrollY } = useScroll();
  const avatarDrift = useMotionValue(0);
  const resetTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const avatarSpring = useSpring(avatarDrift, {
    stiffness: 120,
    damping: 22,
    mass: 0.8,
  });

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() ?? current;
    const delta = current - previous;
    if (Math.abs(delta) < 0.6) {
      return;
    }

    avatarDrift.set(delta > 0 ? 28 : -28);

    if (resetTimeoutRef.current) {
      clearTimeout(resetTimeoutRef.current);
    }

    resetTimeoutRef.current = setTimeout(() => {
      avatarDrift.set(0);
    }, 160);
  });

  useEffect(() => {
    return () => {
      if (resetTimeoutRef.current) {
        clearTimeout(resetTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="relative mt-24 overflow-hidden bg-[#efefed] pb-10 pt-6 md:mt-28 md:pb-16 md:pt-10">
      <div className="relative mx-auto min-h-[640px] max-w-[1220px] md:min-h-[760px]">
        {clientProfiles.map((profile, index) => (
          <motion.div
            key={profile.src}
            style={{ x: avatarSpring }}
            transition={spring}
            className={`absolute ${profile.className} ${profile.size} rounded-full border-[5px] border-white bg-white p-[3px] shadow-[0_14px_30px_rgba(0,0,0,0.07)]`}
          >
            <div className="relative h-full w-full overflow-hidden rounded-full">
              <Image
                src={profile.src}
                alt={profile.alt}
                fill
                sizes="(max-width: 768px) 96px, 112px"
                className={`object-cover ${
                  index === 0 || index === 7 ? "object-center" : "object-top"
                }`}
              />
            </div>
          </motion.div>
        ))}

        <motion.div
          style={{ x: avatarSpring }}
          className="pointer-events-none absolute -bottom-10 left-[1%] hidden h-[94px] w-[94px] rounded-full border-[5px] border-white bg-white p-[3px] opacity-28 blur-[4px] md:block"
        >
          <div className="relative h-full w-full overflow-hidden rounded-full">
            <Image
              src="https://randomuser.me/api/portraits/women/63.jpg"
              alt="Client profile edge left"
              fill
              sizes="92px"
              className="object-cover object-top"
            />
          </div>
        </motion.div>

        <motion.div
          style={{ x: avatarSpring }}
          className="pointer-events-none absolute -bottom-14 right-[1%] hidden h-[104px] w-[104px] rounded-full border-[5px] border-white bg-white p-[3px] opacity-28 blur-[4px] md:block"
        >
          <div className="relative h-full w-full overflow-hidden rounded-full">
            <Image
              src="https://randomuser.me/api/portraits/men/17.jpg"
              alt="Client profile edge right"
              fill
              sizes="104px"
              className="object-cover object-top"
            />
          </div>
        </motion.div>

        <div className="relative z-10 flex min-h-[640px] flex-col items-center justify-center px-6 pt-14 text-center md:min-h-[760px] md:pt-20">
          <h3 className="max-w-[700px] text-[46px] font-semibold leading-[0.98] tracking-[-0.07em] text-black md:text-[62px]">
            100+ clients getting
            <br />
            <span
              className="italic font-semibold tracking-[-0.08em]"
              style={{ fontFamily: '"Source Serif 4", serif' }}
            >
              better
            </span>{" "}
            design, faster.
          </h3>

          <Link
            href="#book-a-call"
            className="mt-9 inline-flex items-center gap-3 rounded-full border border-[#ece8e1] bg-white px-4 py-3 shadow-[0_12px_28px_rgba(0,0,0,0.08)]"
          >
            <div className="relative h-10 w-10 overflow-hidden rounded-full">
              <Image
                src="https://randomuser.me/api/portraits/men/45.jpg"
                alt="Intro call profile"
                fill
                sizes="40px"
                className="object-cover object-top"
              />
            </div>
            <div className="text-left">
              <p className="text-[14px] font-semibold leading-none text-black md:text-[15px]">
                Book a 15-min intro call
              </p>
              <div className="mt-1 flex items-center gap-1.5 text-[13px] leading-none text-[#989898]">
                <span className="h-2 w-2 rounded-full bg-[#35c759]" />
                Available now
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function HowItWorks() {
  const [active, setActive] = useState<number | null>(null);
  const [supportsHover, setSupportsHover] = useState(false);
  const [requestLogoHovered, setRequestLogoHovered] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");

    const handleChange = () => {
      setSupportsHover(mediaQuery.matches);
    };

    handleChange();
    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return (
    <section className="bg-[#efefed] px-6 pb-24 pt-4 md:px-10 md:pt-6">
      <div className="mx-auto max-w-[1220px]">
        <motion.div layout className="flex flex-col gap-6 md:flex-row">
          {cards.map((card, index) => {
            const isActive = active === index;
            const hasActive = active !== null;
            const isInactive = hasActive && !isActive;

            return (
              <motion.div
                key={card.title}
                layout
                transition={spring}
                onMouseEnter={() => {
                  if (supportsHover) {
                    setActive(index);
                  }
                }}
                onMouseLeave={() => {
                  if (supportsHover) {
                    setActive(null);
                  }
                  if (index === 1) {
                    setRequestLogoHovered(false);
                  }
                }}
                onClick={() => {
                  if (!supportsHover) {
                    setActive((current) => (current === index ? null : index));
                    if (index === 1) {
                      setRequestLogoHovered((current) => !current);
                    }
                  }
                }}
                animate={{
                  scale: isActive ? 1.02 : isInactive ? 0.985 : 1,
                  opacity: isInactive ? 0.72 : 1,
                  y: isActive ? -4 : 0,
                  boxShadow: isActive
                    ? "0 22px 50px rgba(0,0,0,0.10)"
                    : "0 12px 30px rgba(0,0,0,0.08)",
                }}
                style={{ willChange: "transform" }}
                className="cursor-pointer rounded-[24px] border border-[#e9e5de] bg-white p-[10px] md:flex-1"
              >
                <div className="flex h-full min-h-[432px] flex-col rounded-[18px] border border-[#ece8e1] bg-white p-6">
                  <div className="flex-1">
                    {index === 0 ? <SubscribeCard /> : null}
                    {index === 1 ? (
                      <RequestCard
                        logoHovered={requestLogoHovered}
                        onLogoEnter={() => setRequestLogoHovered(true)}
                        onLogoLeave={() => setRequestLogoHovered(false)}
                      />
                    ) : null}
                    {index === 2 ? <ReceiveCard active={isActive} /> : null}
                  </div>

                  <div className="pt-7">
                    <h3 className="text-[20px] font-semibold leading-none tracking-[-0.04em] text-black md:text-[21px]">
                      {card.title}
                    </h3>
                    <p className="mt-3 max-w-[320px] text-[14px] leading-[1.5] text-[#989898]">
                      {card.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <ClientsSection />
      </div>
    </section>
  );
}
