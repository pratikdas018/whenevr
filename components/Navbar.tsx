"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "#pricing", label: "Pricing" },
  { href: "#blog", label: "Blog" },
  { href: "/404", label: "404" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <style>{`
        @keyframes navbarOverlayFadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes navbarLinkRiseIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <header
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-10"
        style={{
          backgroundColor: "rgba(239, 239, 237, 0.38)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
        }}
      >
        <div className="flex items-center gap-1 group">
          <span
            className="text-[20px] tracking-[-0.045em] text-[#050505] md:text-[21px]"
            style={{
              fontFamily: "Instrument Serif, serif",
              fontStyle: "italic",
              fontWeight: 600,
            }}
          >
            whenevr
          </span>
          <sup className="text-[10px] text-[#050505]">&reg;</sup>
        </div>

        <button
          type="button"
          onClick={handleMenuToggle}
          aria-expanded={menuOpen}
          aria-controls="navbar-menu-overlay"
          className="flex items-center gap-2 rounded-full px-5 py-2"
          style={{
            backgroundColor: "rgba(239, 239, 237, 0.88)",
            border: "1px solid rgba(0, 0, 0, 0.2)",
            color: "#0D0D0D",
            fontFamily: "DM Sans, sans-serif",
            fontSize: "14px",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
          }}
        >
          {menuOpen ? "Close" : "Menu"}
          <span aria-hidden="true">{menuOpen ? "\u25B2" : "\u25BE"}</span>
        </button>
      </header>

      {menuOpen && (
        <div
          id="navbar-menu-overlay"
          className="fixed inset-0 z-40 flex flex-col items-center justify-center px-6 py-10 md:px-10"
          style={{
            backgroundColor: "#EFEFED",
            animation: "navbarOverlayFadeIn 200ms ease-out",
          }}
        >
          <div className="flex flex-col items-center justify-center">
            {navLinks.map((link, index) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={handleMenuClose}
                className="text-[#0D0D0D] leading-[1.1] transition-opacity duration-200 hover:opacity-60 hover:underline"
                style={{
                  fontFamily: "Instrument Serif, serif",
                  fontSize: "clamp(3.75rem, 9vw, 4.5rem)",
                  fontWeight: 400,
                  animation: "navbarLinkRiseIn 320ms ease-out both",
                  animationDelay: `${index * 60}ms`,
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <p
            className="absolute bottom-8 left-0 right-0 text-center"
            style={{
              fontFamily: "DM Sans, sans-serif",
              fontSize: "12px",
              color: "rgba(0, 0, 0, 0.4)",
            }}
          >
            &copy; 2025 Whenevr&reg;
          </p>
        </div>
      )}
    </>
  );
}
