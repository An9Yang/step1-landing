"use client";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { motion, useScroll, useTransform } from "framer-motion";
import { Chrome, PlayCircle } from "lucide-react";

export function Hero() {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden min-h-screen flex flex-col justify-center">
            {/* Background Gradient/Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

            <Container className="relative z-10 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-medium text-purple-300 backdrop-blur-xl mb-8"
                >
                    <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                    Step1 v1.0 is Live
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 max-w-5xl"
                >
                    Clone any vibe, <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 animate-gradient-x">make it your own.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed"
                >
                    The Vibe Coding tool for Creators. One-click semantics capture, AI-powered styling, and instant structure cloning. No code required.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center gap-4 mb-20"
                >
                    <Button variant="glow" size="lg" className="h-14 px-8 text-lg rounded-full">
                        <Chrome className="mr-2 h-5 w-5" />
                        Add to Chrome - Free
                    </Button>
                    <Button variant="ghost" size="lg" className="h-14 px-8 text-lg rounded-full hover:bg-white/5 border border-transparent hover:border-white/10">
                        <PlayCircle className="mr-2 h-5 w-5" />
                        Watch the Story
                    </Button>
                </motion.div>

                {/* 3D Scanner Animation */}
                <motion.div
                    initial={{ opacity: 0, rotateX: 20, y: 100 }}
                    animate={{ opacity: 1, rotateX: 0, y: 0 }}
                    transition={{ duration: 1, delay: 0.5, type: "spring" }}
                    className="w-full max-w-5xl perspective-1000"
                >
                    <div className="relative aspect-[16/9] bg-neutral-900/50 rounded-xl border border-white/10 shadow-2xl overflow-hidden group">

                        {/* Wireframe Layer (Background) */}
                        <div className="absolute inset-0 p-8 flex flex-col gap-4 opacity-30 blur-[1px]">
                            <div className="w-1/3 h-8 bg-white/20 rounded animate-pulse" />
                            <div className="w-2/3 h-4 bg-white/10 rounded" />
                            <div className="grid grid-cols-3 gap-4 mt-8">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="aspect-square bg-white/5 rounded border border-white/10" />
                                ))}
                            </div>
                        </div>

                        {/* Polished Layer (Foreground) - Masked by scanner */}
                        <motion.div
                            className="absolute inset-0 bg-neutral-900 overflow-hidden"
                            initial={{ clipPath: "polygon(0 0, 100% 0, 100% 0%, 0 0%)" }}
                            animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
                            transition={{ duration: 3, delay: 1, ease: "linear", repeat: Infinity, repeatDelay: 2 }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/50 to-purple-900/50" />
                            <div className="absolute inset-0 p-8 flex flex-col gap-4">
                                <div className="w-1/3 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded shadow-[0_0_20px_rgba(168,85,247,0.4)]" />
                                <div className="w-2/3 h-4 bg-purple-200/50 rounded" />
                                <div className="grid grid-cols-3 gap-4 mt-8">
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className="aspect-square bg-white/10 rounded border border-white/20 shadow-lg backdrop-blur-sm relative overflow-hidden group/card">
                                            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Scanning Laser Line */}
                        <motion.div
                            className="absolute left-0 right-0 h-1 bg-purple-500 shadow-[0_0_30px_rgba(168,85,247,0.8)] z-20"
                            initial={{ top: "0%" }}
                            animate={{ top: "100%" }}
                            transition={{ duration: 3, delay: 1, ease: "linear", repeat: Infinity, repeatDelay: 2 }}
                        >
                            <div className="absolute right-10 top-1/2 -translate-y-1/2 bg-purple-500 text-black text-[10px] font-bold px-1 rounded">SCANNING</div>
                        </motion.div>

                        {/* Floating Particles / Data */}
                        <div className="absolute inset-0 pointer-events-none">
                            {[1, 2, 3, 4, 5].map(i => (
                                <motion.div
                                    key={i}
                                    className="absolute w-1 h-1 bg-white rounded-full"
                                    initial={{ opacity: 0, y: Math.random() * 200, x: Math.random() * 800 }}
                                    animate={{ opacity: [0, 1, 0], y: [0, -100] }}
                                    transition={{ duration: 2, delay: 1 + Math.random(), repeat: Infinity }}
                                    style={{ left: `${Math.random() * 80}%`, top: "80%" }}
                                />
                            ))}
                        </div>
                    </div>
                </motion.div>
            </Container>
        </section>
    );
}
