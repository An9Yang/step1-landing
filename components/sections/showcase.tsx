"use client";

import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import { useRef } from "react";

export function Showcase() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    // Placeholder content for the "cloned" site (e.g. Apple style)
    const MockSite = () => (
        <div className="w-full bg-black text-white min-h-[150vh] flex flex-col items-center pt-20 font-sans cursor-default select-none pointer-events-none">
            {/* Mock Header */}
            <div className="w-full max-w-[90%] flex justify-between items-center mb-16 opacity-70">
                <div className="flex gap-4 text-xs font-light">
                    <span>Store</span>
                    <span>Mac</span>
                    <span>iPad</span>
                    <span>iPhone</span>
                    <span>Watch</span>
                </div>
            </div>

            <div className="text-center space-y-4">
                <h2 className="text-5xl md:text-7xl font-semibold tracking-tighter">Vision Pro</h2>
                <p className="text-xl md:text-2xl font-light text-gray-300">Welcome to the era of spatial computing.</p>
                <div className="flex gap-4 justify-center mt-4">
                    <span className="text-blue-400 hover:underline text-sm md:text-base">Learn more &gt;</span>
                    <span className="text-blue-400 hover:underline text-sm md:text-base">Buy &gt;</span>
                </div>
            </div>

            <div className="mt-12 w-3/4 aspect-video bg-gradient-to-b from-gray-800 to-black rounded-lg flex items-center justify-center border border-white/10">
                <span className="text-white/20 text-4xl font-thin tracking-widest">PRODUCT IMAGE</span>
            </div>

            <div className="mt-24 text-center space-y-4">
                <h2 className="text-5xl md:text-7xl font-semibold tracking-tighter">iPhone 15 Pro</h2>
                <p className="text-xl md:text-2xl font-light text-gray-300">Titanium. So strong. So light. So Pro.</p>
                <div className="flex gap-4 justify-center mt-4">
                    <span className="text-blue-400 hover:underline text-sm md:text-base">Learn more &gt;</span>
                    <span className="text-blue-400 hover:underline text-sm md:text-base">Buy &gt;</span>
                </div>
            </div>
            <div className="mt-12 w-3/4 aspect-video bg-gradient-to-b from-gray-900 to-black rounded-lg flex items-center justify-center border border-white/10">
                <span className="text-white/20 text-4xl font-thin tracking-widest">PRODUCT IMAGE</span>
            </div>
        </div>
    );

    return (
        <section id="showcase" className="py-24 relative overflow-hidden">
            <Container className="flex flex-col items-center">
                <div className="text-center mb-16 max-w-3xl">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold mb-6"
                    >
                        See it in Action
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-muted-foreground"
                    >
                        Browse any website, click the extension, and get a pixel-perfect clone ready for AI editing.
                    </motion.p>
                </div>

                {/* The Scrollable Frame */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="w-full max-w-5xl aspect-[16/10] md:aspect-video rounded-xl border border-white/10 bg-neutral-900/50 shadow-2xl overflow-hidden relative group"
                >
                    {/* Browser Header Bar */}
                    <div className="absolute top-0 left-0 right-0 h-8 md:h-10 bg-neutral-900 border-b border-white/5 flex items-center px-4 gap-2 z-20">
                        <div className="flex gap-1.5">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                            <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                        </div>
                        <div className="flex-1 flex justify-center px-4">
                            <div className="w-full max-w-md h-5 md:h-6 bg-black/50 rounded flex items-center justify-center text-[10px] md:text-xs text-neutral-500 font-mono">
                                apple.com/v1/clone
                            </div>
                        </div>
                        {/* Step1 Extension Icon Placeholder */}
                        <div className="w-6 h-6 rounded bg-purple-600/20 flex items-center justify-center text-purple-400">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-4 h-4"
                            >
                                <circle cx="12" cy="12" r="10" />
                                <path d="m9 12 2 2 4-4" />
                            </svg>
                        </div>
                    </div>

                    {/* Scrollable Content Area */}
                    <div
                        ref={scrollContainerRef}
                        className="absolute top-8 md:top-10 inset-x-0 bottom-0 overflow-y-auto scrollbar-hide bg-black text-white"
                    >
                        <MockSite />
                    </div>

                    {/* Overlay Gradient to hint more content */}
                    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent pointer-events-none z-10" />
                </motion.div>
            </Container>
        </section>
    );
}
