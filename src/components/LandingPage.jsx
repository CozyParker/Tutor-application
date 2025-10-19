import Navbar from "./Navbar";
import Hero from "./Hero";
import ProblemSection from "./ProblemSection";
import SolutionPillars from "./SolutionPillars";
import HowItWorks from "./HowItWorks";
import FeatureHighlights from "./FeatureHighlights";
import ImpactSection from "./ImpactSection";
import Testimonials from "./Testimonials";
import JoinCTA from "./JoinCTA";
import Footer from "./Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-midnight">
      {/* Navigation bar */}
      <Navbar />

      {/* Hero section */}
      <Hero />

      {/* Problem section */}
      <ProblemSection />

      {/* Solution overview */}
      <SolutionPillars />

      {/* How it works steps */}
      <HowItWorks />

      {/* Feature highlights */}
      <FeatureHighlights />

      {/* Impact metrics */}
      <ImpactSection />

      {/* Testimonials */}
      <Testimonials />

      {/* Join call to action */}
      <JoinCTA />

      {/* Footer */}
      <Footer />
    </div>
  );
}
