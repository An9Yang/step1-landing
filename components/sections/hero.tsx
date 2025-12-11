"use client";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import { Chrome } from "lucide-react";

export function Hero() {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
            {/* Background Gradient/Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-purple-600/30 rounded-full blur-[120px] pointer-events-none" />

            <Container className="relative z-10 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-medium text-purple-300 backdrop-blur-xl mb-6"
                >
                    <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse" />
                    v1.0 Available Now
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 max-w-4xl"
                >
                    Clone any site, <br className="hidden md:block" />
                    <span className="text-gradient">make it yours with AI</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl"
                >
                    The Vibe Coding tool for Pro Consumers. One-click clone, semantic AI editing, and instant publishing. No code required.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center gap-4"
                >
                    <Button variant="glow" size="lg" className="h-12 px-8 text-base">
                        <Chrome className="mr-2 h-5 w-5" />
                        Add to Chrome - It's Free
                    </Button>
                    <Button variant="ghost" size="lg" className="h-12 px-8 text-base">
                        View Design Showcase
                    </Button>
                </motion.div>

                {/* Visual Placeholder for Step1 3D/Motion Graphic */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="mt-20 w-full max-w-5xl rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-4 shadow-2xl"
                >
                    <div className="aspect-[16/9] w-full rounded-lg bg-black/40 flex items-center justify-center border border-white/5 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-blue-500/10 pointer-events-none" />
                        <div className="text-center p-8">
                            <p className="text-muted-foreground text-lg mb-2">Interactive Hero Motion Graphic</p>
                            <p className="text-sm text-muted-foreground/60">[To be replaced with Browsing &rarr; Cloning animation]</p>
                        </div>

                        {/* Fake UI Elements for visual interest */}
                        <div className="absolute top-4 left-4 right-4 h-12 rounded-md bg-white/5 border border-white/5 flex items-center px-4 gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/50" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                            <div className="w-3 h-3 rounded-full bg-green-500/50" />
                            <div className="ml-4 flex-1 h-6 rounded-sm bg-black/20" />
                        </div>
                    </div>
                </motion.div>
            </Container>
        </section>
    );
}
