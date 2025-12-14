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
        <section className="relative min-h-screen h-screen flex items-center justify-center bg-black overflow-hidden snap-start snap-always">
            {/* Design System: Ambient Effects */}
            <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
            <GridPattern
                width={60}
                height={60}
                x={-1}
                y={-1}
                className="opacity-[0.08] [mask-image:radial-gradient(ellipse_at_center,white_20%,transparent_70%)]"
            />

            <Container className="relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-4xl mx-auto"
                >
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-neutral-300 backdrop-blur-md mb-10"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                        </span>
                        Clone V1 is live
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white leading-[1.05] mb-8"
                    >
                        Clone any page. <br />
                        <span className="text-neutral-500">Make it yours.</span>
                    </motion.h1>

                    {/* Subhead */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="text-lg md:text-xl text-neutral-400 max-w-xl mx-auto leading-relaxed mb-12"
                    >
                        The first AI design engineer that starts with <span className="text-white font-medium">perfect code</span>.
                        Capture structure & tokens from any site, then refine with natural language.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
                    >
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
                    </motion.div>

                    {/* Trust Indicators */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        transition={{ duration: 1, delay: 0.9 }}
                        className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm font-mono text-neutral-400"
                    >
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
                    </motion.div>
                </motion.div>
            </Container>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2"
                >
                    <motion.div className="w-1.5 h-1.5 bg-white/40 rounded-full" />
                </motion.div>
            </motion.div>
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
