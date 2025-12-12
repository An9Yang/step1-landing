import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Sparkles, Layers, Code2, Star } from "lucide-react";

export function Features() {
    const features = [
        {
            title: "AI editing that respects design",
            desc: "Ask for changes like “make it dark”, “rewrite the hero”, or “increase spacing” — Step1 applies them consistently.",
            icon: Sparkles,
        },
        {
            title: "Design system extraction",
            desc: "Fonts, colors, spacing, and key components are captured as tokens — so you’re not editing random divs.",
            icon: Layers,
        },
        {
            title: "Export clean code",
            desc: "Get production-ready React + Tailwind you can ship, iterate, and own — not a locked screenshot.",
            icon: Code2,
        },
        {
            title: "Verified templates to start",
            desc: "New users can pick from tested sites to clone first, so the first run feels magical.",
            icon: Star,
            href: "/welcome",
        },
    ] as const;

    return (
        <section id="features" className="py-24 md:py-32 bg-black border-t border-white/5 scroll-mt-20">
            <Container>
                <div className="text-center mb-14 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-white">Built for cloning + editing.</h2>
                    <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
                        Step1 is a workflow: clone the structure, then edit with intent — without breaking consistency.
                    </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {features.map((f) => (
                        <div key={f.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                            <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-5">
                                <f.icon className="w-5 h-5 text-primary" />
                            </div>
                            <h3 className="text-white font-semibold text-lg mb-2">{f.title}</h3>
                            <p className="text-neutral-400 text-sm leading-relaxed">{f.desc}</p>
                            {"href" in f && (
                                <div className="mt-4">
                                    <Link
                                        href={f.href}
                                        className="text-sm font-semibold text-white underline underline-offset-4 hover:text-neutral-200"
                                    >
                                        Open templates
                                    </Link>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}


