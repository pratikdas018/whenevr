import Link from "next/link";

export default function Footer() {
  return (
    <>
      {/* CTA */}
      <section className="bg-[#0a0a0a] text-[#F5F0E8] py-24 px-6 md:px-10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-1 mb-8">
            <span
              style={{ fontFamily: "var(--font-display)" }}
              className="text-2xl"
            >
              whenevr
            </span>
            <sup className="text-[10px] -mt-4">®</sup>
          </div>
          <h2
            style={{ fontFamily: "var(--font-display)" }}
            className="text-5xl md:text-6xl lg:text-7xl leading-[1.05] max-w-2xl mx-auto mb-8"
          >
            Design doesn&apos;t need to be complicated.
          </h2>
          <p
            className="text-sm md:text-base text-[#F5F0E8]/50 max-w-md mx-auto mb-10 leading-relaxed"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Book a quick call and get a clear look at how Whenevr works,
            what&apos;s included, and whether it fits your pace.
          </p>
          <Link
            href="#pricing"
            className="inline-block bg-[#c8ff00] text-[#0a0a0a] px-8 py-4 rounded-full text-sm font-medium hover:bg-[#d4ff33] transition-all hover:scale-[1.02] active:scale-[0.98]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            See Pricing
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0a0a] border-t border-[#F5F0E8]/08 px-6 md:px-10 py-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            className="text-xs text-[#F5F0E8]/30"
            style={{ fontFamily: "var(--font-body)" }}
          >
            © 2025 Whenevr. Created by{" "}
            <Link
              href="https://pratik-web.vercel.app"
              target="_blank"
              className="underline hover:text-[#F5F0E8]/60 transition-colors"
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
                className="text-xs text-[#F5F0E8]/30 hover:text-[#F5F0E8]/60 transition-colors"
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
