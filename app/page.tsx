import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Showcase } from "@/components/sections/showcase";
import { DemoSimulator } from "@/components/sections/demo-simulator";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Features } from "@/components/sections/features";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Showcase />
      <DemoSimulator />
      <HowItWorks />
      <Features />
      <Footer />
    </main>
  );
}
