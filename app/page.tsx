import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroV2 } from "@/components/sections/hero-v2";
import { Showcase } from "@/components/sections/showcase";
import { InteractiveGuide } from "@/components/sections/interactive-guide";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Features } from "@/components/sections/features";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <HeroV2 />
      <Showcase />
      <InteractiveGuide />
      <HowItWorks />
      <Features />
      <Footer />
    </main>
  );
}
