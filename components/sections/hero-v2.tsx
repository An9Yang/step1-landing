"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { ArrowRight } from "lucide-react";
import { GridPattern } from "@/components/ui/design-system";

const quickLinks = [
    { name: "Stripe", url: "https://stripe.com" },
    { name: "Apple", url: "https://apple.com" },
    { name: "Shopify", url: "https://shopify.com" },
    { name: "Linear", url: "https://linear.app" },
];

export function HeroV2() {
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        const encodedUrl = encodeURIComponent(inputValue.trim());
        window.location.href = `/editor?url=${encodedUrl}`;
    };

    const handleQuickLink = (url: string) => {
        setInputValue(url);
    };

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center bg-background overflow-hidden snap-start">
            {/* Ambient Grid */}
            <GridPattern
                width={60}
                height={60}
                x={-1}
                y={-1}
                className="opacity-[0.03] [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_60%)]"
            />

            <Container className="relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-2xl mx-auto"
                >
                    {/* Headline */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-[1.1] mb-4">
                        Clone any page.
                    </h1>
                    <p className="text-xl md:text-2xl text-ink-muted font-medium mb-10">
                        Make it yours.
                    </p>

                    {/* URL Input Box - Taller, glass-card style */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full max-w-xl mx-auto mb-6"
                    >
                        <form onSubmit={handleSubmit}>
                            <div className="glass-card p-4 relative">
                                <textarea
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    placeholder="Paste a URL to clone..."
                                    rows={3}
                                    className="w-full bg-transparent text-foreground placeholder:text-ink-muted text-base outline-none resize-none leading-relaxed"
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter" && !e.shiftKey) {
                                            e.preventDefault();
                                            handleSubmit(e);
                                        }
                                    }}
                                />
                                <div className="flex justify-end mt-3">
                                    <button
                                        type="submit"
                                        disabled={!inputValue.trim()}
                                        className="h-10 px-5 rounded-[20px] bg-black text-white text-sm font-medium flex items-center gap-2 hover:bg-[#424242] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                                    >
                                        Clone
                                        <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </form>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex flex-wrap justify-center gap-2"
                    >
                        <span className="text-xs text-ink-muted mr-1 self-center">Try:</span>
                        {quickLinks.map((link) => (
                            <button
                                key={link.name}
                                type="button"
                                onClick={() => handleQuickLink(link.url)}
                                className="px-3 py-1.5 rounded-full text-xs font-medium text-ink-secondary hover:text-foreground bg-black/[0.04] hover:bg-black/[0.08] transition-colors"
                            >
                                {link.name}
                            </button>
                        ))}
                    </motion.div>
                </motion.div>
            </Container>
        </section>
    );
}
