"use client";

import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import { Download, Globe, Palette, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function HowItWorks() {
    const steps = [
        {
            id: 1,
            title: "Clone the Foundation",
            desc: "Visit any website. Step1's Chrome extension identifies structure, tokens, and assets instantly. No more Inspect Element.",
            icon: Download,
            image: (
                <div className="w-full h-full bg-neutral-900 flex items-center justify-center p-8 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 bg-purple-500/10 rounded-bl-2xl border-l border-b border-purple-500/20">
                        <div className="flex gap-2">
                            <div className="w-2 h-2 rounded-full bg-red-500" />
                            <div className="w-2 h-2 rounded-full bg-yellow-500" />
                        </div>
                    </div>
                    {/* Abstract Representation of a Browser Extension Popover */}
                    <div className="w-64 bg-neutral-800 rounded-lg shadow-2xl border border-white/10 p-4 transform rotate-[-5deg] hover:rotate-0 transition-transform duration-500">
                        <div className="flex items-center gap-3 border-b border-white/5 pb-3 mb-3">
                            <div className="w-8 h-8 rounded bg-purple-600 flex items-center justify-center text-white">S1</div>
                            <div>
                                <div className="text-xs font-bold text-white">Step1 Cloner</div>
                                <div className="text-[10px] text-green-400">Ready to capture</div>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="h-2 bg-white/10 rounded w-3/4" />
                            <div className="h-2 bg-white/10 rounded w-1/2" />
                            <div className="mt-4 h-8 bg-purple-600 rounded flex items-center justify-center text-xs font-bold text-white shadow-lg shadow-purple-900/50">
                                Clone Logic
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 2,
            title: "Edit by Vibe, Not Code",
            desc: "The AI Editor understands semantic intent. Ask for 'Dark Mode', 'Softer Roundness', or 'Playful Typography' and watch it happen.",
            icon: Palette,
            image: (
                <div className="w-full h-full bg-neutral-900 flex items-center justify-center p-8 relative overflow-hidden text-center">
                    {/* Chat UI Bubble */}
                    <div className="w-full max-w-sm">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-purple-600/20 text-purple-200 p-4 rounded-2xl rounded-tr-sm mb-4 text-sm text-left border border-purple-500/20"
                        >
                            <span className="text-xs opacity-50 block mb-1">User</span>
                            Make the buttons rounder and add a neon glow effect.
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5 }}
                            className="bg-white/5 p-6 rounded-xl border border-white/10 flex items-center justify-center gap-4"
                        >
                            <button className="px-6 py-2 rounded-full bg-black border border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.5)] text-purple-400 font-bold text-sm hover:scale-105 transition-transform">
                                Neon Button
                            </button>
                        </motion.div>
                    </div>
                </div>
            )
        },
        {
            id: 3,
            title: "Ship to Production",
            desc: "This isn't just a prototype. Export clean, componentized React + Tailwind code. Ready for Vercel, Netlify, or your repo.",
            icon: Globe,
            image: (
                <div className="w-full h-full bg-neutral-950 p-6 font-mono text-xs text-blue-300 leading-relaxed overflow-hidden">
                    <div className="opacity-50 select-none">
                        import &#123; Button &#125; from "@/components/ui";<br />
                        import &#123; Layout &#125; from "lucide-react";<br />
                        <br />
                        export default function Export() &#123;<br />
                        &nbsp;&nbsp;return (<br />
                    </div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="text-white bg-blue-500/10 p-2 rounded border-l-2 border-blue-500 my-1"
                    >
                        &nbsp;&nbsp;&nbsp;&nbsp;&lt;Button variant="neon"&gt;<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Shipped 🚀<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&lt;/Button&gt;
                    </motion.div>
                    <div className="opacity-50 select-none">
                        &nbsp;&nbsp;);<br />
                        &#125;
                    </div>
                </div>
            )
        }
    ];

    return (
        <section id="how-it-works" className="py-24 bg-black relative">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black pointer-events-none" />

            <Container className="relative z-10">
                <div className="text-center mb-24">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">How it works</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        From inspiration to implementation in three simple steps.
                    </p>
                </div>

                <div className="space-y-24 md:space-y-32">
                    {steps.map((step, index) => (
                        <div
                            key={step.id}
                            className={cn(
                                "flex flex-col md:flex-row items-center gap-8 md:gap-16",
                                index % 2 === 1 ? "md:flex-row-reverse" : ""
                            )}
                        >
                            {/* Text Side */}
                            <div className="flex-1 space-y-6 text-center md:text-left">
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 border border-white/10 mb-2">
                                    <step.icon className="w-6 h-6 text-purple-400" />
                                </div>
                                <h3 className="text-3xl md:text-4xl font-bold">
                                    {step.title}
                                </h3>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    {step.desc}
                                </p>
                                <div className="pt-2 flex justify-center md:justify-start">
                                    <button className="text-sm font-bold text-white flex items-center hover:text-purple-400 transition-colors">
                                        Learn more <ArrowRight className="w-4 h-4 ml-1" />
                                    </button>
                                </div>
                            </div>

                            {/* Visual Side */}
                            <motion.div
                                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ margin: "-100px" }}
                                transition={{ duration: 0.7 }}
                                className="flex-1 w-full max-w-xl aspect-[4/3] rounded-2xl border border-white/10 bg-white/5 overflow-hidden shadow-2xl group"
                            >
                                <div className="w-full h-full transition-transform duration-700 group-hover:scale-105">
                                    {step.image}
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
