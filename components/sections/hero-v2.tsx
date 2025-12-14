"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Chrome, Play, Puzzle } from "lucide-react";
import Link from "next/link";
import { CHROME_WEBSTORE_URL } from "@/lib/links";

export function HeroV2() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center bg-black overflow-hidden pt-32 pb-20">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black/80 to-black opacity-60" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

            <Container className="relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl mx-auto space-y-10"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-blue-200 backdrop-blur-md">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        Clone V1 is live
                    </div>

                    <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-white leading-[1.05]">
                        Clone any page. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-100 to-blue-600">
                            Make it yours.
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
                        The first AI design engineer that starts with <span className="text-white">perfect code</span>.
                        Capture structure & tokens from any site, then refine with natural language.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-5 justify-center items-center pt-8">
                        <Button
                            size="lg"
                            className="h-14 px-8 text-lg rounded-full font-semibold bg-[#2D66EC] hover:bg-[#2253C6] text-white shadow-[0_0_50px_-10px_rgba(45,102,236,0.5)] hover:shadow-[0_0_60px_-10px_rgba(45,102,236,0.6)] transition-all hover:scale-105"
                            onClick={() => window.open(CHROME_WEBSTORE_URL, "_blank", "noopener,noreferrer")}
                        >
                            <Chrome className="w-5 h-5 mr-2" />
                            Add to Chrome - Free
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="h-14 px-8 text-lg rounded-full bg-white/5 border-white/10 hover:bg-white/10 text-white backdrop-blur-sm transition-all hover:scale-105"
                            onClick={() => document.querySelector("#demo")?.scrollIntoView({ behavior: "smooth", block: "start" })}
                        >
                            <Play className="w-5 h-5 mr-2 fill-current" />
                            See how it works
                        </Button>
                    </div>

                    <div className="pt-12 flex flex-wrap justify-center gap-x-8 gap-y-4 opacity-50 text-sm font-mono text-neutral-400">
                        <div className="flex items-center gap-2">
                            <CheckIcon className="w-4 h-4 text-blue-500" />
                            <span>React + Tailwind</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckIcon className="w-4 h-4 text-blue-500" />
                            <span>Design Tokens</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckIcon className="w-4 h-4 text-blue-500" />
                            <span>Zero Dependencies</span>
                        </div>
                    </div>
                </motion.div>
            </Container>
        </section>
    );
}

function CheckIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={3}>
            <polyline points="20 6 9 17 4 12" />
        </svg>
    )
}
