import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroV2 } from "@/components/sections/hero-v2";
import { CapabilityComparison } from "@/components/sections/capability-comparison";
import { InteractiveOnboarding } from "@/components/sections/interactive-onboarding";
import { ValueRoi } from "@/components/sections/value-roi";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <HeroV2 />
      <CapabilityComparison />
      <InteractiveOnboarding />
      <ValueRoi />
      <Footer />
    </main>
  );
}
