import {
  HeroSection,
  FeaturesSection,
  EmailCaptureSection,
} from "@/components/home";
import { Footer } from "@/components/layout";

export default function HomePage() {
  return (
    <main className="bg-black">
      <HeroSection /> 
      <FeaturesSection />
      <EmailCaptureSection />
      <Footer />
    </main>
  );
}