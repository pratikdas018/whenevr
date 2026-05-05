import Link from "next/link";

export default function Footer() {
  return (
    <>
      <section className="bg-[#0a0a0a] px-6 py-24 text-[#F5F0E8] md:px-10">
        <div className="mx-auto max-w-6xl text-center">
          <div className="mb-8 flex items-center justify-center gap-1">
            <span
              style={{ fontFamily: "var(--font-display)" }}
              className="text-2xl"
            >
              whenevr
            </span>
            <sup className="text-[10px] -mt-4">&reg;</sup>
          </div>
          <h2
            style={{ fontFamily: "var(--font-display)" }}
            className="mx-auto mb-8 max-w-2xl text-5xl leading-[1.05] md:text-6xl lg:text-7xl"
          >
            Design doesn&apos;t need to be complicated.
          </h2>
          <p
            className="mx-auto mb-10 max-w-md text-sm leading-relaxed text-[#F5F0E8]/50 md:text-base"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Book a quick call and get a clear look at how Whenevr works,
            what&apos;s included, and whether it fits your pace.
          </p>
          <Link
            href="#pricing"
            className="inline-block rounded-full bg-[#c8ff00] px-8 py-4 text-sm font-medium text-[#0a0a0a] transition-all hover:scale-[1.02] hover:bg-[#d4ff33] active:scale-[0.98]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            See Pricing
          </Link>
        </div>
      </section>

      <footer className="border-t border-[#F5F0E8]/08 bg-[#0a0a0a] px-6 py-8 md:px-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
          <p
            className="text-xs text-[#F5F0E8]/30"
            style={{ fontFamily: "var(--font-body)" }}
          >
            &copy; 2026 Whenevr. Created by{" "}
            <Link
              href="https://pratik-web.vercel.app"
              target="_blank"
              className="underline transition-colors hover:text-[#F5F0E8]/60"
            >
              Pratik Ch: Das.
            </Link>
          </p>
          <nav className="flex items-center gap-6">
            {[
              { label: "Thank You", href: "/thank-you" },
              { label: "Privacy Policy", href: "/privacy-policy" },
              { label: "Terms of Service", href: "/terms-of-service" },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-xs text-[#F5F0E8]/30 transition-colors hover:text-[#F5F0E8]/60"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </footer>
    </>
  );
}
