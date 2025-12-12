"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import { DollarSign, Clock, TrendingUp, Info, Chrome, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

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
        <section id="roi" className="py-32 bg-neutral-900 border-t border-white/5 scroll-mt-20">
            <Container>
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Stop burning cash on <br />
                            <span className="text-neutral-500">boilerplate code.</span>
                        </h2>
                        <p className="text-lg text-neutral-400 mb-12 max-w-md">
                            Your time is worth more than recreating standard layouts. Step1 handles the heavy lifting so you can focus on the unique 10%.
                        </p>

                        <div className="space-y-8">
                            <div className="space-y-4">
                                <label className="block text-sm font-medium text-neutral-300">
                                    Your Hourly Rate: <span className="text-white font-mono">${rate}</span>
                                </label>
                                <input
                                    type="range"
                                    min="20"
                                    max="500"
                                    step="10"
                                    value={rate}
                                    onChange={(e) => setRate(Number(e.target.value))}
                                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-green-500"
                                />
                                <div className="flex justify-between text-xs text-neutral-500">
                                    <span>$20/hr</span>
                                    <span>$500/hr</span>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <label className="block text-sm font-medium text-neutral-300">
                                    Landing Pages per Month: <span className="text-white font-mono">{pages}</span>
                                </label>
                                <input
                                    type="range"
                                    min="1"
                                    max="10"
                                    step="1"
                                    value={pages}
                                    onChange={(e) => setPages(Number(e.target.value))}
                                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-green-500"
                                />
                                <div className="flex justify-between text-xs text-neutral-500">
                                    <span>1 Page</span>
                                    <span>10 Pages</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 bg-green-500/5 rounded-3xl blur-3xl transform rotate-3" />
                        <div className="relative bg-black border border-white/10 rounded-3xl p-8 md:p-12 text-center space-y-8">
                            <div>
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-500/10 mb-4">
                                    <TrendingUp className="w-6 h-6 text-green-500" />
                                </div>
                                <h3 className="text-neutral-400 font-medium">Monthly Savings Potential</h3>
                            </div>

                            <div className="space-y-2">
                                <motion.div
                                    key={savedMoney}
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ type: "spring" }}
                                    className="text-6xl md:text-7xl font-bold text-white font-mono tracking-tighter"
                                >
                                    ${savedMoney.toLocaleString()}
                                </motion.div>
                                <p className="text-green-500 font-medium">
                                    +{savedHours} Hours Saved / Month
                                </p>
                            </div>

                            <div className="pt-8 border-t border-white/10 grid grid-cols-2 gap-4">
                                <div>
                                    <div className="text-2xl font-bold text-white">{manualHours * pages}h</div>
                                    <div className="text-xs text-neutral-500">Manual Coding</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-green-400">{step1Hours * pages}h</div>
                                    <div className="text-xs text-neutral-500">With Step1</div>
                                </div>
                            </div>

                            {/* Calculation Basis */}
                            <div className="pt-6 flex items-start gap-2 text-xs text-neutral-500">
                                <Info className="w-3 h-3 mt-0.5 shrink-0" />
                                <span>Based on average dev time: 40h to build a responsive landing page from scratch vs 4h with Step1 (clone + customize).</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Pricing + Final CTA */}
                <div className="mt-24 text-center">
                    <div className="inline-flex flex-col items-center gap-6 p-8 rounded-2xl bg-black/50 border border-white/10">
                        <h3 className="text-2xl font-bold text-white">Start for Free</h3>

                        <div className="flex flex-wrap justify-center gap-6 text-sm text-neutral-400">
                            <div className="flex items-center gap-2">
                                <Check className="w-4 h-4 text-green-500" />
                                <span>3 free clones / month</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Check className="w-4 h-4 text-green-500" />
                                <span>AI editing included</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Check className="w-4 h-4 text-green-500" />
                                <span>No credit card required</span>
                            </div>
                        </div>

                        <Button
                            size="lg"
                            className="h-14 px-10 text-lg bg-[#2D66EC] hover:bg-[#2253C6] text-white rounded-full font-bold shadow-[0_0_30px_rgba(45,102,236,0.5)] transition-all hover:scale-105"
                        >
                            <Chrome className="w-5 h-5 mr-2" />
                            Add to Chrome - It's Free
                        </Button>

                        <p className="text-xs text-neutral-500">
                            Pro plan: $19/mo for unlimited clones
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    );
}
