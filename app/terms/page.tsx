import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";

export default function TermsPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Header />
            <div className="pt-28 pb-20">
                <Container className="max-w-3xl">
                    <h1 className="text-3xl md:text-5xl font-bold text-white">Terms of Service</h1>
                    <p className="mt-4 text-neutral-400 leading-relaxed">
                        This is an MVP preview. These terms are a placeholder and will be refined before public launch.
                    </p>

                    <div className="mt-10 space-y-8 text-sm text-neutral-300 leading-relaxed">
                        <section className="space-y-2">
                            <h2 className="text-white font-semibold text-lg">Use of the service</h2>
                            <p className="text-neutral-400">
                                You agree to use Step1 responsibly and comply with applicable laws. Do not use the service for abuse or unlawful activity.
                            </p>
                        </section>

                        <section className="space-y-2">
                            <h2 className="text-white font-semibold text-lg">Content & ownership</h2>
                            <p className="text-neutral-400">
                                You are responsible for the content you create. Step1 is a tool to help you build; it does not grant rights to third‑party content.
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



