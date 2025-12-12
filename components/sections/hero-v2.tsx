"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Chrome, Play, Puzzle } from "lucide-react";
import Link from "next/link";
import { CHROME_WEBSTORE_URL } from "@/lib/links";

export function HeroV2() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center bg-background overflow-hidden pt-20">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-black to-black opacity-60" />

            <Container className="relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto space-y-8"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-primary backdrop-blur-sm mb-4">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        Chrome extension · Clone → AI edit
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white leading-[1.05]">
                        Clone any landing page. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">Make it yours with AI.</span>
                    </h1>

                    <p className="text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed">
                        Turn any public page into editable code in one click, then refine copy, colors, and layout with natural‑language edits.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
                        <Button
                            size="lg"
                            className="h-14 px-8 text-lg rounded-full font-semibold shadow-[0_0_30px_rgba(45,102,236,0.45)] hover:shadow-[0_0_40px_rgba(45,102,236,0.55)] transition-shadow"
                            onClick={() => window.open(CHROME_WEBSTORE_URL, "_blank", "noopener,noreferrer")}
                        >
                            <Chrome className="w-5 h-5 mr-2" />
                            Add to Chrome - It's Free
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="h-14 px-8 text-lg rounded-full bg-white/5 border-white/10 hover:bg-white/10 text-white"
                            onClick={() => document.querySelector("#demo")?.scrollIntoView({ behavior: "smooth", block: "start" })}
                        >
                            <Play className="w-5 h-5 mr-2 fill-current" />
                            Try the interactive demo
                        </Button>
                    </div>

                    {/* Chrome Extension Badge */}
                    <div className="pt-8 flex items-center justify-center gap-3 text-neutral-400 text-sm">
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                            <Puzzle className="w-4 h-4" />
                            <span>Chrome Extension</span>
                        </div>
                        <span className="text-neutral-600">•</span>
                        <span>Best on marketing & portfolio pages</span>
                        <span className="text-neutral-600">•</span>
                        <span>Sign in only when you save</span>
                    </div>

                    <div className="pt-4 text-neutral-500 text-sm">
                        Start fast with{" "}
                        <Link href="/welcome" className="text-neutral-300 hover:text-white underline underline-offset-4">
                            verified templates
                        </Link>
                        .
                    </div>
                </motion.div>
            </Container>
        </section>
    );
}
