"use client";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header"; // Reusing Header for continuity
import { ArrowRight, Star } from "lucide-react";
import Link from "next/link";

export default function WelcomePage() {
    const templates = [
        { title: "SaaS Landing", desc: "Perfect for startups.", color: "bg-blue-500" },
        { title: "Portfolio V1", desc: "Minimalist personal site.", color: "bg-purple-500" },
        { title: "E-commerce Shop", desc: "High conversion layout.", color: "bg-orange-500" },
        { title: "Blog Template", desc: "Content focused.", color: "bg-green-500" },
    ];

    return (
        <main className="min-h-screen bg-background">
            <Header />
            <div className="pt-32 pb-20">
                <Container>
                    <div className="text-center mb-16 space-y-4">
                        <div className="inline-flex items-center justify-center p-3 bg-green-500/10 text-green-400 rounded-full mb-4">
                            <Star className="w-6 h-6 mr-2 fill-current" />
                            <span className="font-bold">Step1 Installed Successfully</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold">Welcome to Step1</h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            You're ready to clone. Visit any website and click the new icon in your toolbar, or start with one of our verified templates below.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {templates.map((t, i) => (
                            <div key={i} className="group relative aspect-[4/5] rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition-all cursor-pointer">
                                <div className={`absolute inset-0 opacity-20 ${t.color}`} />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex flex-col justify-end p-6">
                                    <h3 className="text-xl font-bold mb-1">{t.title}</h3>
                                    <p className="text-sm text-neutral-400">{t.desc}</p>
                                    <div className="mt-4 flex items-center text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity text-white">
                                        Start Cloning <ArrowRight className="w-4 h-4 ml-2" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <Link href="/">
                            <Button variant="ghost">Return to Home</Button>
                        </Link>
                    </div>
                </Container>
            </div>
        </main>
    );
}
