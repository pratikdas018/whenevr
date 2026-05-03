import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const serif = Source_Serif_4({
  subsets: ["latin"],
  style: ["italic"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Whenevr® — World-class design whenever you need it.",
  description:
    "A monthly design subscription for startups, creators, and teams who need work done without the wait.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${serif.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
