"use client";

import { Container } from "@/components/ui/container";
import { Layers, Zap, Code2, Palette, Sparkles, Smartphone } from "lucide-react";

export function Features() {
    const features = [
        {
            icon: Sparkles,
            title: "AI Semantic Editing",
            desc: "Forget CSS selectors. Just ask: 'Make the header sticky and blue'.",
        },
        {
            icon: Palette,
            title: "Design System Extraction",
            desc: "Automatically extracts fonts, colors, and border radius from any cloned site.",
        },
        {
            icon: Smartphone,
            title: "Mobile First",
            desc: "Every clone is automatically optimized for mobile devices.",
        },
        {
            icon: Code2,
            title: "Clean Code Export",
            desc: "Export production-ready React + Tailwind code. No vendor lock-in.",
        },
        {
            icon: Layers,
            title: "Component Detection",
            desc: "Intelligently identifies repeats and turns them into reusable components.",
        },
        {
            icon: Zap,
            title: "Instant Publishing",
            desc: "Go live with a generated URL in one click. Hosting included.",
        },
    ];

    return (
        <section id="features" className="py-24 bg-neutral-900/30">
            <Container>
                <div className="mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Step1?</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl">
                        We don't just screenshot websites. We believe in understanding the code behind the vibe.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="p-6 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 transition-colors group"
                        >
                            <div className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center mb-4 text-purple-400 group-hover:text-purple-300">
                                <feature.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                            <p className="text-muted-foreground">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
