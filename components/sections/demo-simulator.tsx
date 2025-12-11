"use client";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Wand2, Layout, MousePointer2, Loader2, CheckCircle2 } from "lucide-react";

export function DemoSimulator() {
    const [step, setStep] = useState<0 | 1 | 2>(0);
    // 0: Browse, 1: Scanning/Cloning, 2: Editor

    useEffect(() => {
        const timer = setInterval(() => {
            setStep((prev) => {
                if (prev === 0) return 1;
                if (prev === 1) return 2;
                return 0;
            });
        }, 4000); // 4 seconds per step
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="py-24 bg-neutral-950 border-t border-white/5 relative overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

            <Container>
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Text Description Side */}
                    <div className="flex-1 space-y-8">
                        <h2 className="text-3xl md:text-5xl font-bold">
                            From <span className="text-muted-foreground line-through">Thinking</span> to <span className="text-gradient">Building</span> in seconds.
                        </h2>

                        <div className="space-y-6">
                            {[
                                { id: 0, title: "Browse", icon: MousePointer2, desc: "Find a site you love." },
                                { id: 1, title: "Clone", icon: Loader2, desc: "One click to capture semantics." },
                                { id: 2, title: "Create", icon: Wand2, desc: "Edit with AI and publish." }
                            ].map((s) => (
                                <div
                                    key={s.id}
                                    className={`flex gap-4 p-4 rounded-lg transition-colors border ${step === s.id ? "bg-white/10 border-purple-500/50" : "border-transparent opacity-50"}`}
                                >
                                    <div className={`mt-1 bg-white/10 p-2 rounded-md h-fit ${step === s.id ? "text-purple-400" : "text-muted-foreground"}`}>
                                        <s.icon className={`w-5 h-5 ${step === s.id && s.id === 1 ? "animate-spin" : ""}`} />
                                    </div>
                                    <div>
                                        <h3 className={`font-semibold text-lg ${step === s.id ? "text-white" : "text-muted-foreground"}`}>{s.title}</h3>
                                        <p className="text-sm text-muted-foreground">{s.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <Button variant="outline" className="mt-4" onClick={() => setStep(0)}>
                            Restart Demo
                        </Button>
                    </div>

                    {/* Simulator Visual Side */}
                    <div className="flex-1 w-full max-w-lg">
                        <div className="relative aspect-square bg-black border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col">
                            {/* Simulated Browser UI */}
                            <div className="h-10 border-b border-white/10 bg-neutral-900 flex items-center px-4 justify-between z-20">
                                <div className="flex space-x-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                                </div>
                                {/* The Extension Icon - Active during step 1 */}
                                <div className={`transition-all duration-300 ${step === 0 ? "scale-100 opacity-100" : "scale-90 opacity-50"}`}>
                                    <div className="w-6 h-6 rounded bg-purple-600 flex items-center justify-center text-white cursor-pointer relative overflow-hidden">
                                        <span className="font-bold text-[10px]">S1</span>
                                        {step === 0 && (
                                            <motion.div
                                                className="absolute inset-0 bg-white/30"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: [0, 1, 0] }}
                                                transition={{ repeat: Infinity, duration: 1.5 }}
                                            />
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="relative flex-1 bg-neutral-900 overflow-hidden">
                                <AnimatePresence mode="wait">
                                    {step === 0 && (
                                        <motion.div
                                            key="browse"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center"
                                        >
                                            <div className="w-32 h-32 rounded-full bg-blue-500/20 mb-6 flex items-center justify-center border border-blue-500/30">
                                                <span className="text-4xl">🌐</span>
                                            </div>
                                            <h3 className="text-2xl font-bold text-gray-200">Cool Website</h3>
                                            <p className="text-gray-500 mt-2">Browsing inspiration...</p>

                                            {/* Simulated Cursor */}
                                            <motion.div
                                                className="absolute w-8 h-8 pointer-events-none text-white drop-shadow-lg"
                                                initial={{ bottom: 20, right: 20 }}
                                                animate={{ top: 10, right: 20 }}
                                                transition={{ duration: 1, delay: 2, ease: "easeInOut" }}
                                            >
                                                <MousePointer2 className="fill-black" />
                                            </motion.div>
                                        </motion.div>
                                    )}

                                    {step === 1 && (
                                        <motion.div
                                            key="scan"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center z-10"
                                        >
                                            <Loader2 className="w-12 h-12 text-purple-500 animate-spin mb-4" />
                                            <motion.div
                                                className="text-purple-300 font-mono text-sm"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 0.2 }}
                                            >
                                                Scanning layout...<br />
                                                Extracting colors...<br />
                                                Vectorizing assets...
                                            </motion.div>
                                        </motion.div>
                                    )}

                                    {step === 2 && (
                                        <motion.div
                                            key="editor"
                                            initial={{ y: 20, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            className="absolute inset-0 bg-neutral-950 flex flex-col"
                                        >
                                            {/* Editor Toolbar */}
                                            <div className="h-10 border-b border-white/10 flex items-center px-4 gap-4 bg-black/40">
                                                <div className="w-4 h-4 rounded bg-purple-500" />
                                                <div className="h-2 w-20 bg-white/10 rounded" />
                                                <div className="h-2 w-10 bg-white/10 rounded" />
                                                <div className="ml-auto px-2 py-1 bg-green-500/20 text-green-400 text-[10px] rounded border border-green-500/30">
                                                    Publish
                                                </div>
                                            </div>
                                            <div className="flex-1 p-8 flex flex-col items-center justify-center border-4 border-purple-500/20 m-4 rounded-lg border-dashed">
                                                <div className="w-32 h-32 rounded-full bg-purple-500/20 mb-6 flex items-center justify-center border border-purple-500/30">
                                                    <Wand2 className="w-12 h-12 text-purple-400" />
                                                </div>
                                                <h3 className="text-2xl font-bold text-white">Your Site</h3>
                                                <p className="text-purple-400 mt-2 text-sm bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
                                                    ✨ AI Enhanced
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
