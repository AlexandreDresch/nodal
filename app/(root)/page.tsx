import { Footer } from "@/components/footer";
import DashboardShowcase from "@/components/landing-page/dashboard-showcase";
import Features from "@/components/landing-page/features";
import Hero from "@/components/landing-page/hero";
import HowItWorks from "@/components/landing-page/how-it-works/how-it-works";
import { PricingSection } from "@/components/landing-page/pricing-section";
import { TestimonialsSection } from "@/components/landing-page/testimonials-section";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero />

      <Features />

      <DashboardShowcase />

      <HowItWorks />

      <PricingSection />

      <TestimonialsSection />

      <Footer />
    </div>
  );
}
