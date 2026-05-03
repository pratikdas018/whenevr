import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import WorkGallery from "@/components/WorkGallery";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Blog from "@/components/Blog";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import BookCallSection from "@/components/BookCallSection";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <HowItWorks />
      <WorkGallery />
      <Features />
      <Testimonials />
      <Pricing />
      <Blog />
      <FAQ />
      <Footer />
      <BookCallSection />
    </main>
  );
}
