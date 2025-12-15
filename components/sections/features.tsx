"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { GridPattern } from "@/components/ui/design-system";
import { Sparkles, Layers, Code2, ArrowRight } from "lucide-react";
import { ReflectiveLine } from "@/components/ui/reflective-line";

export function Features() {
    return (
        <section id="features" className="min-h-screen flex flex-col justify-center bg-black relative overflow-hidden snap-start py-16 md:py-20">
            {/* Top Separator */}
            <div className="absolute top-0 left-0 right-0 z-20">
                <ReflectiveLine />
            </div>

            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 md:mb-16 space-y-4"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                        Capabilities you can feel.
                    </h2>
                    <p className="text-neutral-500 text-base md:text-lg max-w-xl mx-auto">
                        Not just "copy HTML". A complete design engineering workflow.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto"
                >
                    {/* Card 1: AI Editing (Span 2) */}
                    <div className="md:col-span-2 group relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/50 hover:bg-neutral-900/80 transition-colors">
                        <GridPattern className="opacity-[0.06]" />

                        <div className="relative z-10 p-6 md:p-8 h-full flex flex-col">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                                    <Sparkles className="w-4 h-4 text-neutral-400" />
                                </div>
                                <h3 className="text-lg font-semibold text-white">Semantic AI Editing</h3>
                            </div>

                            <p className="text-neutral-400 text-sm max-w-md mb-6">
                                "Make it dark mode." "Increase contrast." Step1 understands design intent, not just string replacement.
                            </p>

                            {/* Visual Simulation */}
                            <div className="mt-auto relative rounded-lg border border-white/10 bg-black p-3 font-mono text-xs leading-relaxed overflow-hidden shadow-xl">
                                <div className="flex gap-1.5 mb-2 border-b border-white/5 pb-2">
                                    <div className="w-2 h-2 rounded-full bg-red-500/20" />
                                    <div className="w-2 h-2 rounded-full bg-yellow-500/20" />
                                    <div className="w-2 h-2 rounded-full bg-green-500/20" />
                                </div>
                                <div className="space-y-1">
                                    <div className="text-neutral-500">// User Prompt</div>
                                    <div className="text-cyan-400">"Make the primary button red"</div>
                                    <div className="h-2" />
                                    <div className="text-neutral-500">// Step1 Action</div>
                                    <div className="flex items-center gap-2 flex-wrap">
                                        <span className="text-purple-400">update_token</span>
                                        <span className="text-neutral-300">primary:</span>
                                        <span className="line-through text-neutral-600">#0000FF</span>
                                        <span className="text-red-500">#FF0000</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Design Tokens (Span 1) */}
                    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/50 hover:bg-neutral-900/80 transition-colors">
                        <div className="relative z-10 p-6 h-full flex flex-col">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                                    <Layers className="w-4 h-4 text-neutral-400" />
                                </div>
                                <h3 className="text-lg font-semibold text-white">Tokens</h3>
                            </div>

                            <p className="text-neutral-400 text-sm mb-4">
                                Colors, fonts, spacing extracted as variables.
                            </p>

                            {/* Token Visuals */}
                            <div className="mt-auto grid grid-cols-2 gap-1.5">
                                <div className="h-10 rounded-lg bg-neutral-800 border border-white/5" />
                                <div className="h-10 rounded-lg bg-neutral-100" />
                                <div className="h-10 rounded-lg bg-cyan-500" />
                                <div className="h-10 rounded-lg bg-purple-500" />
                            </div>
                        </div>
                    </div>

                    {/* Card 3: Exact Export (Span 1) */}
                    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/50 hover:bg-neutral-900/80 transition-colors">
                        <div className="relative z-10 p-6 h-full flex flex-col">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                                    <Code2 className="w-4 h-4 text-neutral-400" />
                                </div>
                                <h3 className="text-lg font-semibold text-white">Clean Code</h3>
                            </div>

                            <p className="text-neutral-400 text-sm mb-4">
                                Production-ready React + Tailwind.
                            </p>

                            <div className="mt-auto p-2.5 rounded-lg bg-black border border-white/10 text-[10px] font-mono text-neutral-400">
                                <div>export default function</div>
                                <div className="pl-2 text-green-400">&lt;Hero /&gt;</div>
                                <div className="pl-2 text-green-400">&lt;Features /&gt;</div>
                                <div className="pl-2 text-green-400">&lt;Footer /&gt;</div>
                            </div>
                        </div>
                    </div>

                    {/* Card 4: CTA (Span 2) */}
                    <div className="md:col-span-2 group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-neutral-900 to-black hover:border-white/20 transition-all cursor-pointer">
                        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="relative z-10 p-6 flex items-center justify-between">
                            <div>
                                <h3 className="text-lg font-bold text-white">Ready to build?</h3>
                                <p className="text-neutral-400 text-sm">Start with 3 free clones per month.</p>
                            </div>
                            <div className="h-10 w-10 rounded-full bg-white text-black flex items-center justify-center transform group-hover:translate-x-1 transition-transform">
                                <ArrowRight className="w-4 h-4" />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </Container>
        </section>
    );
}



