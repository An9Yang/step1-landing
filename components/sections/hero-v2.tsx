"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Chrome, Play } from "lucide-react";

export function HeroV2() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center bg-black overflow-hidden pt-20">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black opacity-50" />

            <Container className="relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto space-y-8"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-blue-400 backdrop-blur-sm mb-4">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        Step1 is now valid on any website
                    </div>

                    <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white leading-[1.1]">
                        Clone any site. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Make it yours.</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
                        The world's first AI-powered visual cloner.
                        Save 40+ hours of dev time per project.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
                        <Button size="lg" className="h-14 px-8 text-lg bg-[#2D66EC] hover:bg-[#2253C6] text-white rounded-full font-bold shadow-[0_0_30px_rgba(45,102,236,0.5)] transition-all hover:scale-105">
                            <Chrome className="w-5 h-5 mr-2" />
                            Add to Chrome - It's Free
                        </Button>
                        <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-white/10 bg-white/5 hover:bg-white/10 text-white rounded-full">
                            <Play className="w-5 h-5 mr-2 fill-current" />
                            Watch 1min Demo
                        </Button>
                    </div>

                    <div className="pt-12 flex flex-col items-center gap-2 text-neutral-500 text-sm">
                        <div className="flex -space-x-2">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="w-8 h-8 rounded-full bg-neutral-800 border-2 border-black flex items-center justify-center text-xs font-bold text-white">
                                    {String.fromCharCode(64 + i)}
                                </div>
                            ))}
                        </div>
                        <p>Trusted by 10,000+ indie developers</p>
                    </div>
                </motion.div>
            </Container>
        </section>
    );
}
