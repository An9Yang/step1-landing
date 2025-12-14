"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import { DollarSign, Clock, TrendingUp, Info, Chrome, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CHROME_WEBSTORE_URL } from "@/lib/links";

export function ValueRoi() {
    const [rate, setRate] = useState(100);
    const [pages, setPages] = useState(2);

    // Assumptions:
    // Manual: 40 hours per page
    // Step1: 4 hours per page
    // Savings: 36 hours * rate * pages
    const manualHours = 40;
    const step1Hours = 4;
    const savedHours = (manualHours - step1Hours) * pages;
    const savedMoney = savedHours * rate;

    return (
        <section id="roi" className="py-24 md:py-32 bg-neutral-900 border-t border-white/5 scroll-mt-20 relative overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-green-900/10 rounded-full blur-[120px] pointer-events-none" />

            <Container className="relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-mono uppercase tracking-wider mb-6">
                            <TrendingUp className="w-3 h-3" />
                            ROI Calculator
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            Stop burning cash on <br />
                            <span className="text-neutral-500">boilerplate code.</span>
                        </h2>
                        <p className="text-lg text-neutral-400 mb-12 max-w-md leading-relaxed">
                            Your time is worth more than recreating standard layouts. Step1 handles the heavy lifting (90%) so you can focus on the unique 10%.
                        </p>

                        <div className="space-y-10">
                            <div className="space-y-4">
                                <div className="flex justify-between items-baseline">
                                    <label className="text-sm font-medium text-neutral-300">Your Hourly Rate</label>
                                    <span className="text-2xl font-mono text-white">${rate}/hr</span>
                                </div>
                                <input
                                    type="range"
                                    min="20"
                                    max="500"
                                    step="10"
                                    value={rate}
                                    onChange={(e) => setRate(Number(e.target.value))}
                                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-green-500 hover:accent-green-400 transition-all"
                                />
                            </div>

                            <div className="space-y-4">
                                <div className="flex justify-between items-baseline">
                                    <label className="text-sm font-medium text-neutral-300">Pages per Month</label>
                                    <span className="text-2xl font-mono text-white">{pages} pages</span>
                                </div>
                                <input
                                    type="range"
                                    min="1"
                                    max="10"
                                    step="1"
                                    value={pages}
                                    onChange={(e) => setPages(Number(e.target.value))}
                                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-green-500 hover:accent-green-400 transition-all"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 bg-green-500/5 rounded-3xl blur-3xl transform rotate-3" />
                        <div className="relative bg-black/80 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12 text-center space-y-8 shadow-2xl">
                            <div>
                                <h3 className="text-neutral-400 font-medium text-sm uppercase tracking-wider">Monthly Savings Potential</h3>
                            </div>

                            <div className="space-y-2">
                                <motion.div
                                    key={savedMoney}
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                                    className="text-6xl md:text-8xl font-bold text-white font-mono tracking-tighter"
                                >
                                    ${savedMoney.toLocaleString()}
                                </motion.div>
                                <p className="text-green-500 font-medium flex items-center justify-center gap-2">
                                    <Clock className="w-4 h-4" />
                                    <span>{savedHours} Hours Saved / Month</span>
                                </p>
                            </div>

                            <div className="pt-8 border-t border-white/10 grid grid-cols-2 gap-4">
                                <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                                    <div className="text-3xl font-bold text-white mb-1">{manualHours * pages}h</div>
                                    <div className="text-xs text-neutral-500 font-mono">Manual Coding</div>
                                </div>
                                <div className="p-4 rounded-2xl bg-green-500/10 border border-green-500/20">
                                    <div className="text-3xl font-bold text-green-400 mb-1">{step1Hours * pages}h</div>
                                    <div className="text-xs text-green-500/70 font-mono">With Step1</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Final CTA */}
                <div className="mt-32 text-center">
                    <div className="relative inline-flex flex-col items-center gap-8 p-10 md:p-16 rounded-3xl bg-black border border-white/10 overflow-hidden max-w-4xl mx-auto shadow-2xl">
                        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-transparent opacity-50" />

                        <div className="relative z-10 space-y-4">
                            <h3 className="text-3xl md:text-5xl font-bold text-white">
                                Build your agency engine.
                            </h3>
                            <p className="text-lg text-neutral-400 max-w-xl mx-auto">
                                Join 4,000+ developers who are shipping faster with Step1.
                            </p>
                        </div>

                        <div className="relative z-10 flex flex-wrap justify-center gap-6 text-sm text-neutral-300 bg-white/5 p-4 rounded-full border border-white/10">
                            <div className="flex items-center gap-2">
                                <Check className="w-4 h-4 text-green-500" />
                                <span>3 free clones/mo</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Check className="w-4 h-4 text-green-500" />
                                <span>AI editing included</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Check className="w-4 h-4 text-green-500" />
                                <span>No credit card needed</span>
                            </div>
                        </div>

                        <Button
                            size="lg"
                            className="relative z-10 h-16 px-12 text-xl bg-[#2D66EC] hover:bg-[#2253C6] text-white rounded-full font-bold shadow-[0_0_40px_rgba(45,102,236,0.6)] hover:shadow-[0_0_60px_rgba(45,102,236,0.8)] transition-all hover:scale-105"
                            onClick={() => window.open(CHROME_WEBSTORE_URL, "_blank", "noopener,noreferrer")}
                        >
                            <Chrome className="w-6 h-6 mr-3" />
                            Add to Chrome - Free
                        </Button>
                    </div>
                </div>
            </Container>
        </section>
    );
}
