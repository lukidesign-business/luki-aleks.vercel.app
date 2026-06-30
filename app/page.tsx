import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import HowItWorksSection from "@/components/how-it-works-section"
import Disclaimer from "@/components/disclaimer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a1628]">
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <Disclaimer />
    </main>
  )
}
