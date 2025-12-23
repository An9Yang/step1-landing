"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Chrome, Play } from "lucide-react";
import { CHROME_WEBSTORE_URL } from "@/lib/links";
import { GridPattern } from "@/components/ui/design-system";

export function HeroV2() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center bg-background overflow-hidden pt-24 snap-start">
            {/* Design System: Ambient Effects */}
            <GridPattern
                width={60}
                height={60}
                x={-1}
                y={-1}
                className="opacity-[0.04] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]"
            />

            <Container className="relative z-10 text-center flex-1 flex flex-col justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-4xl mx-auto"
                >
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/10 bg-black/5 text-xs font-medium text-ink-muted backdrop-blur-md mb-8 hover:bg-black/10 transition-colors cursor-default"
                    >
                        <span className="relative flex h-1.5 w-1.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-black"></span>
                        </span>
                        Clone V1 is live
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-foreground leading-[1.1] mb-6"
                    >
                        Clone any page. <br />
                        <span className="text-ink-muted">Make it yours.</span>
                    </motion.h1>

                    {/* Subhead */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="text-base md:text-lg text-ink-secondary max-w-xl mx-auto leading-relaxed mb-10 font-light"
                    >
                        The AI design engineer that starts with <span className="text-foreground font-normal">perfect code</span>.
                        Capture details from any site, then refine with natural language.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-14"
                    >
                        <Button
                            size="lg"
                            className="group relative h-12 px-8 text-base rounded-[16px] font-medium overflow-hidden transition-all hover:scale-[1.02]"
                            onClick={() => window.open(CHROME_WEBSTORE_URL, "_blank", "noopener,noreferrer")}
                        >
                            {/* Shimmer Effect */}
                            <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white/20 opacity-40 group-hover:animate-shine" />

                            <Chrome className="w-4 h-4 mr-2" />
                            Add to Chrome
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="h-12 px-8 text-base rounded-[16px] text-ink-secondary hover:text-foreground backdrop-blur-sm transition-all hover:scale-[1.02]"
                            onClick={() => document.querySelector("#demo")?.scrollIntoView({ behavior: "smooth", block: "start" })}
                        >
                            <Play className="w-4 h-4 mr-2 fill-current" />
                            See how it works
                        </Button>
                    </motion.div>

                    {/* Trust Indicators */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.8 }}
                        transition={{ duration: 1, delay: 0.9 }}
                        className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-xs font-mono text-ink-muted uppercase tracking-wide"
                    >
                        <div className="flex items-center gap-2">
                            <CheckIcon className="w-3 h-3 text-ink-secondary" />
                            <span>React + Tailwind</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckIcon className="w-3 h-3 text-ink-secondary" />
                            <span>Design Tokens</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckIcon className="w-3 h-3 text-ink-secondary" />
                            <span>Zero Dependencies</span>
                        </div>
                    </motion.div>
                </motion.div>
            </Container>
        </section>
    );
}

function CheckIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={2}>
            <polyline points="20 6 9 17 4 12" />
        </svg>
    )
}
