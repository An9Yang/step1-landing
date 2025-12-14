import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroV2 } from "@/components/sections/hero-v2";
import { Showcase } from "@/components/sections/showcase";
import { InteractiveGuide } from "@/components/sections/interactive-guide";
import { Features } from "@/components/sections/features";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-foreground selection:bg-primary/30">
      <Header />
      <HeroV2 />
      <InteractiveGuide />
      <Showcase />
      <Features />
      <Footer />
    </main>
  );
}
