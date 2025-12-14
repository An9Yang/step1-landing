"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { GridPattern } from "@/components/ui/design-system";
import { Sparkles, Layers, Code2, ArrowRight } from "lucide-react";

export function Features() {
    return (
        <section id="features" className="py-24 md:py-32 bg-black border-t border-white/5 relative overflow-hidden">
            <Container>
                <div className="text-center mb-20 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                        Capabilities you can feel.
                    </h2>
                    <p className="text-neutral-500 text-lg max-w-2xl mx-auto">
                        Not just "copy HTML". A complete design engineering workflow.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {/* Card 1: AI Editing (Span 2) */}
                    <div className="md:col-span-2 group relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/50 hover:bg-neutral-900/80 transition-colors">
                        <GridPattern className="opacity-10" />

                        <div className="relative z-10 p-8 md:p-10 h-full flex flex-col">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                                    <Sparkles className="w-5 h-5 text-cyan-400" />
                                </div>
                                <h3 className="text-xl font-semibold text-white">Semantic AI Editing</h3>
                            </div>

                            <p className="text-neutral-400 max-w-md mb-8">
                                "Make it dark mode." "Increase contrast." Step1 understands design intent, not just string replacement.
                            </p>

                            {/* Visual Simulation */}
                            <div className="mt-auto relative rounded-xl border border-white/10 bg-black p-4 font-mono text-sm leading-relaxed overflow-hidden shadow-2xl">
                                <div className="flex gap-2 mb-3 border-b border-white/5 pb-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/20" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/20" />
                                </div>
                                <div className="space-y-1">
                                    <div className="text-neutral-500">// User Prompt</div>
                                    <div className="text-cyan-400">"Make the primary button generic-red"</div>
                                    <div className="h-4" />
                                    <div className="text-neutral-500">// Step1 Action</div>
                                    <div className="flex items-center gap-2">
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
                    <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/50 hover:bg-neutral-900/80 transition-colors">
                        <div className="relative z-10 p-8 h-full flex flex-col">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/20">
                                    <Layers className="w-5 h-5 text-purple-400" />
                                </div>
                                <h3 className="text-xl font-semibold text-white">Tokens</h3>
                            </div>

                            <p className="text-neutral-400 text-sm mb-6">
                                Colors, fonts, and spacing are extracted as variables.
                            </p>

                            {/* Token Visuals */}
                            <div className="mt-auto grid grid-cols-2 gap-2">
                                <div className="h-12 rounded-lg bg-neutral-800 border border-white/5" />
                                <div className="h-12 rounded-lg bg-neutral-100" />
                                <div className="h-12 rounded-lg bg-cyan-500" />
                                <div className="h-12 rounded-lg bg-purple-500" />
                            </div>
                        </div>
                    </div>

                    {/* Card 3: Exact Export (Span 1) */}
                    <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/50 hover:bg-neutral-900/80 transition-colors">
                        <div className="relative z-10 p-8 h-full flex flex-col">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 rounded-lg bg-green-500/10 border border-green-500/20">
                                    <Code2 className="w-5 h-5 text-green-400" />
                                </div>
                                <h3 className="text-xl font-semibold text-white">Clean Code</h3>
                            </div>

                            <p className="text-neutral-400 text-sm mb-6">
                                Production-ready React + Tailwind. No spaghetti.
                            </p>

                            <div className="mt-auto p-3 rounded-lg bg-black border border-white/10 text-[10px] font-mono text-neutral-400">
                                <div>export default function</div>
                                <div className="pl-2 text-green-400">&lt;Hero /&gt;</div>
                                <div className="pl-2 text-green-400">&lt;Features /&gt;</div>
                                <div className="pl-2 text-green-400">&lt;Footer /&gt;</div>
                            </div>
                        </div>
                    </div>

                    {/* Card 4: CTA (Span 2) */}
                    <div className="md:col-span-2 group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-neutral-900 to-black hover:border-white/20 transition-all cursor-pointer">
                        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="relative z-10 p-8 flex items-center justify-between">
                            <div>
                                <h3 className="text-xl font-bold text-white">Ready to build?</h3>
                                <p className="text-neutral-400">Start with 3 free clones per month.</p>
                            </div>
                            <div className="h-12 w-12 rounded-full bg-white text-black flex items-center justify-center transform group-hover:translate-x-1 transition-transform">
                                <ArrowRight className="w-5 h-5" />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}



