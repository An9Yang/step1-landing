"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Chrome, Play, Puzzle } from "lucide-react";
import Link from "next/link";
import { CHROME_WEBSTORE_URL } from "@/lib/links";
import { GridPattern, Spotlight } from "@/components/ui/design-system";

export function HeroV2() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center bg-black overflow-hidden pt-32 pb-20">
            {/* Design System: Ambient Effects */}
            <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
            <GridPattern
                width={50}
                height={50}
                x={-1}
                y={-1}
                className="opacity-[0.15] [mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]"
            />

            <Container className="relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-4xl mx-auto space-y-10"
                >
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-neutral-300 backdrop-blur-md">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                        </span>
                        Clone V1 is live
                    </div>

                    {/* Headline */}
                    <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-white leading-[1.05]">
                        Clone any page. <br />
                        <span className="text-neutral-500">Make it yours.</span>
                    </h1>

                    {/* Subhead */}
                    <p className="text-xl md:text-2xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
                        The first AI design engineer that starts with <span className="text-white font-medium">perfect code</span>.
                        Capture structure & tokens from any site, then refine with natural language.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-5 justify-center items-center pt-8">
                        <Button
                            size="lg"
                            className="group relative h-14 px-8 text-lg rounded-full font-semibold bg-white text-black hover:bg-neutral-200 overflow-hidden transition-all hover:scale-105"
                            onClick={() => window.open(CHROME_WEBSTORE_URL, "_blank", "noopener,noreferrer")}
                        >
                            {/* Shimmer Effect */}
                            <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine" />

                            <Chrome className="w-5 h-5 mr-2" />
                            Add to Chrome
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="h-14 px-8 text-lg rounded-full bg-transparent border-white/10 hover:bg-white/5 text-white backdrop-blur-sm transition-all hover:scale-105"
                            onClick={() => document.querySelector("#demo")?.scrollIntoView({ behavior: "smooth", block: "start" })}
                        >
                            <Play className="w-5 h-5 mr-2 fill-current" />
                            See how it works
                        </Button>
                    </div>

                    {/* Trust Indicators */}
                    <div className="pt-12 flex flex-wrap justify-center gap-x-8 gap-y-4 opacity-50 text-sm font-mono text-neutral-400">
                        <div className="flex items-center gap-2">
                            <CheckIcon className="w-4 h-4 text-cyan-500" />
                            <span>React + Tailwind</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckIcon className="w-4 h-4 text-cyan-500" />
                            <span>Design Tokens</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckIcon className="w-4 h-4 text-cyan-500" />
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
