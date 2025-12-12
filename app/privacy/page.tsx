import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Header />
            <div className="pt-28 pb-20">
                <Container className="max-w-3xl">
                    <h1 className="text-3xl md:text-5xl font-bold text-white">Privacy Policy</h1>
                    <p className="mt-4 text-neutral-400 leading-relaxed">
                        This is an MVP preview. We’ll keep this page updated as Step1 evolves.
                    </p>

                    <div className="mt-10 space-y-8 text-sm text-neutral-300 leading-relaxed">
                        <section className="space-y-2">
                            <h2 className="text-white font-semibold text-lg">What we collect</h2>
                            <p className="text-neutral-400">
                                When you use Step1, we may collect basic usage data (e.g. events and diagnostics) to improve reliability.
                            </p>
                        </section>

                        <section className="space-y-2">
                            <h2 className="text-white font-semibold text-lg">How we use data</h2>
                            <p className="text-neutral-400">
                                We use data to provide the service, improve product quality, and prevent abuse. We do not sell personal data.
                            </p>
                        </section>

                        <section className="space-y-2">
                            <h2 className="text-white font-semibold text-lg">Contact</h2>
                            <p className="text-neutral-400">
                                Questions? Email <a className="underline underline-offset-4 hover:text-white" href="mailto:hello@step1.app">hello@step1.app</a>.
                            </p>
                        </section>
                    </div>
                </Container>
            </div>
            <Footer />
        </main>
    );
}


