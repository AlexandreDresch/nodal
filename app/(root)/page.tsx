import Features from "@/components/landing-page/features";
import Hero from "@/components/landing-page/hero";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero />

      <Features />
    </div>
  );
}
