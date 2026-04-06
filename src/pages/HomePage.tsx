import Hero from "../components/Hero";
import TrustSection from "../components/TrustSection";
import HowItWorks from "../components/HowItWorks";
import AppPreview from "../components/AppPreview";
import Benefits from "../components/Benefits";
import FinalCTA from "../components/FinalCTA";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <TrustSection />
      <HowItWorks />
      <AppPreview />
      <Benefits />
      <FinalCTA />
    </main>
  );
}
