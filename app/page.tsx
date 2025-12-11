import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { InteractiveGuide } from "@/components/sections/interactive-guide";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Features } from "@/components/sections/features";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <InteractiveGuide />
      <HowItWorks />
      <Features />
      <Footer />
    </main>
  );
}
