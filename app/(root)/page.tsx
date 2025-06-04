import { Footer } from "@/components/footer";
import DashboardShowcase from "@/components/landing-page/dashboard-showcase";
import Features from "@/components/landing-page/features";
import Hero from "@/components/landing-page/hero";
import { PricingSection } from "@/components/landing-page/pricing-section";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero />

      <Features />

      <DashboardShowcase />

      <PricingSection />

      <Footer />
    </div>
  );
}
