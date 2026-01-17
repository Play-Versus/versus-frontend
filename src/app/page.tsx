import {
  HeroSection,
  FeaturesSection,
  EmailCaptureSection,
} from "@/components/home";
import { Footer } from "@/components/layout";

export default function HomePage() {
  return (
    <main>
      <HeroSection /> 
      <FeaturesSection />
      <EmailCaptureSection />
      <Footer />
    </main>
  );
}