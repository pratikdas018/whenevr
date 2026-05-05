import Link from "next/link";

export default function Footer() {
  return (
    <>
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
