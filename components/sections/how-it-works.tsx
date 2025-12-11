"use client";

import { Container } from "@/components/ui/container";
import { Download, Globe, Palette } from "lucide-react";

export function HowItWorks() {
    const steps = [
        {
            icon: Download,
            title: "1. Install Extension",
            desc: "Add Step1 to Chrome in seconds. It's free to get started.",
        },
        {
            icon: Globe,
            title: "2. Visit & Clone",
            desc: "Go to any website you like. Open Step1 and click 'Clone'.",
        },
        {
            icon: Palette,
            title: "3. Make it Yours",
            desc: "The AI reconstructs the site in our editor. Modify text, colors, and layout with natural language.",
        },
    ];

    return (
        <section id="how-it-works" className="py-24 bg-black">
            <Container>
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">How it works</h2>
                    <p className="text-muted-foreground text-lg">Three steps to your dream website.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all group overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-3 opacity-10 font-bold text-6xl group-hover:opacity-20 transition-opacity">
                                {index + 1}
                            </div>
                            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <step.icon className="text-white w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                            <p className="text-muted-foreground">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
