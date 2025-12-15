"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import { Clock, TrendingUp, Check, Chrome } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CHROME_WEBSTORE_URL } from "@/lib/links";
import { ReflectiveLine } from "@/components/ui/reflective-line";

export function ValueRoi() {
    const [rate, setRate] = useState(100);
    const [pages, setPages] = useState(2);

    const manualHours = 40;
    const step1Hours = 4;
    const savedHours = (manualHours - step1Hours) * pages;
    const savedMoney = savedHours * rate;

    return (
        <section id="roi" className="min-h-screen flex flex-col justify-center py-24 md:py-32 bg-neutral-900 snap-start relative overflow-hidden">
            {/* Top Separator */}
            <div className="absolute top-0 left-0 right-0 z-20">
                <ReflectiveLine />
            </div>
            {/* Ambient Background */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-green-900/10 rounded-full blur-[120px] pointer-events-none" />

            <Container className="relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-start">
                    {/* Left Column: Context & Inputs */}
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-mono uppercase tracking-wider mb-8">
                            <TrendingUp className="w-3 h-3" />
                            ROI Calculator
                        </div>
                        <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6 leading-[1.1]">
                            Stop burning cash on <br />
                            <span className="text-neutral-500">boilerplate code.</span>
                        </h2>
                        <p className="text-lg text-neutral-400 mb-12 max-w-md leading-relaxed font-light">
                            Your time is worth more than recreating standard layouts. Step1 handles the heavy lifting so you can focus on the unique 10%.
                        </p>

                        <div className="space-y-12">
                            {/* Input 1 */}
                            <div className="space-y-4 group">
                                <div className="flex justify-between items-baseline">
                                    <label className="text-sm font-medium text-neutral-400 group-hover:text-green-400 transition-colors">Your Hourly Rate</label>
                                    <span className="text-2xl font-mono text-white tracking-tight">${rate}/hr</span>
                                </div>
                                <div className="relative h-2 bg-white/5 rounded-full overflow-hidden">
                                    <div className="absolute top-0 left-0 h-full bg-green-500/50" style={{ width: `${(rate / 500) * 100}%` }} />
                                    <input
                                        type="range"
                                        min="20"
                                        max="500"
                                        step="10"
                                        value={rate}
                                        onChange={(e) => setRate(Number(e.target.value))}
                                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                    />
                                </div>
                            </div>

                            {/* Input 2 */}
                            <div className="space-y-4 group">
                                <div className="flex justify-between items-baseline">
                                    <label className="text-sm font-medium text-neutral-400 group-hover:text-green-400 transition-colors">Pages per Month</label>
                                    <span className="text-2xl font-mono text-white tracking-tight">{pages} pages</span>
                                </div>
                                <div className="relative h-2 bg-white/5 rounded-full overflow-hidden">
                                    <div className="absolute top-0 left-0 h-full bg-green-500/50" style={{ width: `${(pages / 10) * 100}%` }} />
                                    <input
                                        type="range"
                                        min="1"
                                        max="10"
                                        step="1"
                                        value={pages}
                                        onChange={(e) => setPages(Number(e.target.value))}
                                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Results Card */}
                    <div className="relative lg:mt-10">
                        <div className="absolute inset-x-8 inset-y-8 bg-green-500/20 rounded-full blur-[80px]" />
                        <div className="relative bg-neutral-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 text-center space-y-8 shadow-2xl overflow-hidden hover:border-green-500/30 transition-colors duration-500">

                            {/* Subtle internal light line */}
                            <div className="absolute top-0 left-0 right-0">
                                <ReflectiveLine />
                            </div>

                            <div>
                                <h3 className="text-neutral-500 font-mono text-xs uppercase tracking-widest mb-2">Monthly Savings Potential</h3>
                            </div>

                            <div className="space-y-4">
                                <motion.div
                                    key={savedMoney}
                                    initial={{ scale: 0.9, opacity: 0, filter: "blur(10px)" }}
                                    animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
                                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                                    className="text-6xl md:text-7xl font-semibold text-white tracking-tighter"
                                >
                                    ${savedMoney.toLocaleString()}
                                </motion.div>
                                <p className="text-green-400 text-sm font-medium flex items-center justify-center gap-2 bg-green-400/10 py-1.5 px-4 rounded-full mx-auto w-fit">
                                    <Clock className="w-3 h-3" />
                                    <span>{savedHours} Hours Saved / Month</span>
                                </p>
                            </div>

                            <div className="pt-8 border-t border-dashed border-white/10 grid grid-cols-2 gap-4">
                                <div className="p-4 rounded-2xl bg-white/[0.02]">
                                    <div className="text-2xl font-semibold text-neutral-300 mb-1">{manualHours * pages}h</div>
                                    <div className="text-[10px] text-neutral-500 font-mono uppercase tracking-wider">Manual Coding</div>
                                </div>
                                <div className="p-4 rounded-2xl bg-green-500/[0.05] border border-green-500/10">
                                    <div className="text-2xl font-semibold text-green-400 mb-1">{step1Hours * pages}h</div>
                                    <div className="text-[10px] text-green-500/70 font-mono uppercase tracking-wider">With Step1</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Final CTA - Cleaner Version */}
                <div className="mt-40 text-center relative">
                    <div className="mb-16">
                        <ReflectiveLine />
                    </div>

                    <div className="relative z-10 space-y-6 max-w-3xl mx-auto">
                        <h3 className="text-3xl md:text-4xl font-semibold text-white leading-tight">
                            Build your agency engine.
                        </h3>
                        <p className="text-lg text-neutral-400 font-light">
                            Join 4,000+ developers who are shipping faster with Step1.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4 text-sm text-neutral-400 py-4">
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

                        <div className="pt-4">
                            <Button
                                size="lg"
                                className="h-12 px-10 text-lg bg-[#2D66EC] hover:bg-[#2253C6] text-white rounded-full font-medium shadow-[0_0_30px_-5px_rgba(45,102,236,0.5)] hover:shadow-[0_0_50px_-10px_rgba(45,102,236,0.7)] transition-all hover:scale-105"
                                onClick={() => window.open(CHROME_WEBSTORE_URL, "_blank", "noopener,noreferrer")}
                            >
                                <Chrome className="w-5 h-5 mr-2" />
                                Add to Chrome - Free
                            </Button>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}

