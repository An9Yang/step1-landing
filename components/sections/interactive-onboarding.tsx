
"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Sparkles, Layout, Palette, ArrowUp, Send, Globe, Check, MessageSquare, Chrome } from "lucide-react";
import { cn } from "@/lib/utils";

// UX Component: Coachmark
function Coachmark({ children, className, side = "bottom" }: { children: React.ReactNode, className?: string, side?: "top" | "bottom" }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9, y: side === "bottom" ? 10 : -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: side === "bottom" ? 10 : -10 }}
            className={cn("absolute z-50 pointer-events-none whitespace-nowrap", className)}
        >
            <div className="relative flex flex-col items-center">
                {side === "bottom" && (
                    <div className="w-4 h-4 bg-blue-600 rotate-45 transform border-t border-l border-white/20 -mb-2 z-20" />
                )}

                <div className="bg-blue-600 text-white text-sm font-bold px-4 py-2 rounded-lg shadow-xl shadow-blue-900/40 relative z-10 flex items-center gap-2 border border-white/20 backdrop-blur-sm">
                    {children}
                </div>

                {side === "top" && (
                    <div className="w-4 h-4 bg-blue-600 rotate-45 transform border-b border-r border-white/20 -mt-2 z-20" />
                )}
            </div>
        </motion.div>
    );
}

export function InteractiveOnboarding() {
    // Flow: Browse -> Clone -> Editor(Chat) -> Publishing -> Live
    const [status, setStatus] = useState<"browsing" | "cloning" | "editor" | "publishing" | "live">("browsing");
    const [chatInput, setChatInput] = useState("");
    const [messages, setMessages] = useState<{ role: 'ai' | 'user', text: string }[]>([
        { role: 'ai', text: "I've cloned the site. What would you like to change?" }
    ]);

    // Step Info for Header
    const stepInfo = {
        browsing: { step: 1, title: "Find it.", desc: "Browsing 'alex.design'. This could be any site on the internet." },
        cloning: { step: 2, title: "Clone it.", desc: "Step1 analyzes the DOM, styles, and assets." },
        editor: { step: 2, title: "Own it.", desc: "You have the code. Use AI to make it yours." },
        publishing: { step: 3, title: "Ship it.", desc: "Deploying to the edge..." },
        live: { step: 3, title: "Live.", desc: "Your custom version is now online." }
    };

    const currentStep = stepInfo[status] || stepInfo.browsing;

    // Actions
    const handleClone = () => {
        setStatus("cloning");
        setTimeout(() => setStatus("editor"), 2000);
    };

    const handleChatSubmit = (e?: React.FormEvent) => {
        e?.preventDefault();
        setMessages(prev => [...prev, { role: 'user', text: "Change to Dark Mode" }]);
        setChatInput("");

        // Simulate AI Thinking
        setTimeout(() => {
            setMessages(prev => [...prev, { role: 'ai', text: "Generating Dark Mode theme..." }]);
            // Actual visual change happens via state in the render
        }, 600);
    };

    const handlePublish = () => {
        setStatus("publishing");
        setTimeout(() => setStatus("live"), 2000);
    };

    const handleReset = () => {
        setStatus("browsing");
        setMessages([{ role: 'ai', text: "I've cloned the site. What would you like to change?" }]);
    };

    return (
        <section id="onboarding" className="py-24 bg-neutral-950 relative overflow-hidden border-t border-white/5 scroll-mt-20">
            <Container>
                {/* 1. Header Narrative */}
                <div className="text-center mb-10 h-32 flex flex-col items-center justify-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={status}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="space-y-3"
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-blue-400 uppercase tracking-wider">
                                Step {currentStep.step} / 3
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-white">
                                {currentStep.title}
                            </h2>
                            <p className="text-neutral-400 text-lg">
                                {currentStep.desc}
                            </p>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* 2. Main Window */}
                <div className="w-full max-w-6xl mx-auto bg-neutral-900 rounded-xl border border-white/10 shadow-2xl aspect-[16/10] flex flex-col relative group ring-1 ring-white/5 transition-all duration-1000">

                    {/* Browser Toolbar */}
                    <div className="h-14 border-b border-white/10 flex items-center justify-between px-4 bg-black/40 z-20 relative rounded-t-xl">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/20" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                            <div className="w-3 h-3 rounded-full bg-green-500/20" />
                        </div>

                        {/* OmniBox */}
                        <div className="flex-1 mx-6 max-w-3xl">
                            <div className="bg-white/5 rounded-md px-4 py-2 text-xs text-neutral-400 text-center font-mono flex items-center justify-center gap-2 transition-all duration-500 border border-white/5 relative overflow-hidden">
                                <AnimatePresence mode="wait">
                                    {(status === "browsing" || status === "cloning") ? (
                                        <motion.div
                                            key="url-external"
                                            initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -20, opacity: 0 }}
                                            className="flex items-center gap-2"
                                        >
                                            <Globe className="w-3 h-3" /> alex.design
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="url-internal"
                                            initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -20, opacity: 0 }}
                                            className="flex items-center gap-2 text-blue-400"
                                        >
                                            <Sparkles className="w-3 h-3" /> step1.new/project-x
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>

                        {/* Top Right Actions */}
                        <div className="flex items-center gap-3">

                            {/* Publish Button (Wrapper for positioning) */}
                            <div className="relative">
                                <AnimatePresence>
                                    {(status === "editor" && messages.length > 2) && (
                                        <Coachmark className="top-12 left-1/2 -translate-x-1/2">
                                            Now Publish it!
                                        </Coachmark>
                                    )}
                                </AnimatePresence>

                                <AnimatePresence>
                                    {(status === "editor" && messages.length > 2) && (
                                        <motion.div
                                            initial={{ scale: 0, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                        >
                                            <Button
                                                size="sm"
                                                onClick={handlePublish}
                                                className="h-9 bg-green-600 hover:bg-green-500 text-white border border-green-400/20 shadow-[0_0_20px_rgba(22,163,74,0.4)]"
                                            >
                                                Publish
                                            </Button>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Extension Icon (Wrapper for positioning) */}
                            <div className="relative">
                                <AnimatePresence>
                                    {status === "browsing" && (
                                        <Coachmark className="top-12 left-1/2 -translate-x-1/2 w-max">
                                            Click Step1 to Clone
                                        </Coachmark>
                                    )}
                                </AnimatePresence>

                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={handleClone}
                                    disabled={status !== "browsing"}
                                    className={cn(
                                        "w-9 h-9 rounded-md flex items-center justify-center transition-all relative z-20",
                                        status === "browsing"
                                            ? "bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.5)] cursor-pointer ring-2 ring-blue-500/50"
                                            : "bg-neutral-800 text-neutral-600 opacity-50"
                                    )}
                                >
                                    <Sparkles className="w-4 h-4" />
                                    {status === "browsing" && (
                                        <span className="absolute inset-0 rounded-md ring-2 ring-blue-400 animate-ping opacity-20" />
                                    )}
                                </motion.button>
                            </div>
                        </div>
                    </div>

                    {/* 3. The Workspace */}
                    <div className="flex-1 relative flex overflow-hidden bg-neutral-900 rounded-b-xl">

                        {/* LEFT PANEL: AI Chat (Only visible in Editor) */}
                        <motion.div
                            initial={{ width: 0, opacity: 0 }}
                            animate={{
                                width: status === "editor" || status === "publishing" || status === "live" ? 320 : 0,
                                opacity: status === "editor" || status === "publishing" || status === "live" ? 1 : 0
                            }}
                            className="bg-neutral-950 border-r border-white/10 flex flex-col z-10 shrink-0 relative"
                        >
                            {/* Chat Header */}
                            <div className="p-4 border-b border-white/10 flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                <span className="text-xs font-bold text-white uppercase tracking-wider">Step1 AI</span>
                            </div>

                            {/* Chat Messages */}
                            <div className="flex-1 p-4 space-y-4 overflow-y-auto">
                                {messages.map((msg, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className={cn(
                                            "p-3 rounded-lg text-sm max-w-[90%]",
                                            msg.role === 'ai' ? "bg-white/10 text-neutral-200" : "bg-blue-600 text-white ml-auto"
                                        )}
                                    >
                                        {msg.text}
                                    </motion.div>
                                ))}
                            </div>

                            {/* Chat Input Area */}
                            <div className="p-4 border-t border-white/10 bg-neutral-900 relative">


                                {/* Suggestion Chips */}
                                {messages.length === 1 && (
                                    <div className="flex gap-2 mb-3 overflow-visible pb-2">
                                        <div className="relative">
                                            <AnimatePresence>
                                                {(status === "editor" && messages.length === 1) && (
                                                    <Coachmark side="top" className="bottom-full mb-2 left-1/2 -translate-x-1/2">
                                                        Click to Change
                                                    </Coachmark>
                                                )}
                                            </AnimatePresence>

                                            <button
                                                onClick={() => handleChatSubmit()}
                                                className="whitespace-nowrap px-3 py-1.5 rounded-full bg-blue-500/20 border border-blue-500/40 text-blue-300 text-xs hover:bg-blue-500/30 transition-colors"
                                            >
                                                Change to Dark Mode
                                            </button>
                                        </div>
                                    </div>
                                )}

                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Type a change..."
                                        className="w-full bg-black/50 border border-white/10 rounded-lg pl-3 pr-10 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                                        disabled={status !== "editor" || messages.length > 1}
                                    />
                                    <div className="absolute right-2 top-2 p-1 bg-white/10 rounded text-neutral-400">
                                        <ArrowUp className="w-3 h-3" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* RIGHT PANEL: Website Preview */}
                        <div className="flex-1 relative bg-white overflow-hidden perspective-[1200px]">



                            <AnimatePresence mode="wait">
                                {/* STATE 1 & 2: ORIGINAL / CLONING */}
                                {(status === "browsing" || status === "cloning") && (
                                    <motion.div
                                        key="original"
                                        exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                                        className="absolute inset-0 bg-[#f8f9fa] overflow-y-auto scroll-smooth"
                                    >
                                        <div className="max-w-4xl mx-auto p-12 bg-white min-h-full shadow-sm">
                                            <nav className="flex justify-between items-center mb-20 opacity-50">
                                                <div className="font-bold text-xl tracking-tighter">ALEX.DESIGN</div>
                                                <div className="flex gap-8 text-sm font-medium"><span>Work</span><span>Services</span><span>About</span></div>
                                            </nav>

                                            {/* Hero Area */}
                                            <div className="space-y-8 mb-24">
                                                <div className="inline-block px-4 py-1.5 rounded-full bg-neutral-100 text-neutral-600 text-xs font-bold tracking-wide uppercase">Available for hire</div>
                                                <h1 className="text-7xl font-serif font-medium leading-[0.9] text-neutral-900 tracking-tight">
                                                    Digital experiences <br /> that matter.
                                                </h1>
                                                <p className="text-xl text-neutral-500 max-w-lg leading-relaxed">
                                                    I craft minimal, user-focused interfaces for forward-thinking brands.
                                                </p>
                                            </div>

                                            {/* Works Grid (Scrollable Content) */}
                                            <div className="grid grid-cols-2 gap-8 mb-24 opacity-50">
                                                <div className="space-y-4">
                                                    <div className="aspect-[4/3] bg-neutral-200 rounded-lg" />
                                                    <div className="text-sm font-medium">Lumina Interface</div>
                                                </div>
                                                <div className="space-y-4">
                                                    <div className="aspect-[4/3] bg-neutral-200 rounded-lg" />
                                                    <div className="text-sm font-medium">Apex Branding</div>
                                                </div>
                                                <div className="space-y-4">
                                                    <div className="aspect-[4/3] bg-neutral-200 rounded-lg" />
                                                    <div className="text-sm font-medium">Mono Systems</div>
                                                </div>
                                                <div className="space-y-4">
                                                    <div className="aspect-[4/3] bg-neutral-200 rounded-lg" />
                                                    <div className="text-sm font-medium">Flow App</div>
                                                </div>
                                            </div>

                                            {/* Brief Footer */}
                                            <div className="border-t pt-12 text-sm text-neutral-400 flex justify-between">
                                                <div>© 2024 Alex Design</div>
                                                <div className="flex gap-4"><span>Twitter</span><span>LinkedIn</span><span>Email</span></div>
                                            </div>
                                        </div>

                                        {/* Cloning Overlay */}
                                        {status === "cloning" && (
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                className="absolute inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50"
                                            >
                                                <div className="flex flex-col items-center gap-6 text-white p-8">
                                                    <div className="relative">
                                                        <div className="w-16 h-16 border-4 border-white/20 border-t-blue-500 rounded-full animate-spin" />
                                                        <Sparkles className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 text-blue-500 animate-pulse" />
                                                    </div>
                                                    <div className="text-xl font-medium tracking-tight font-mono">Importing to Step1...</div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </motion.div>
                                )}

                                {/* STATE 3 & 4: EDITOR / PUBLISHING */}
                                {(status === "editor" || status === "publishing") && (
                                    <motion.div
                                        key="editor"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className={cn(
                                            "absolute inset-0 overflow-y-auto transition-colors duration-700",
                                            messages.length > 2 ? "bg-[#050505]" : "bg-[#f8f9fa]" // Dark Mode Switch
                                        )}
                                    >
                                        <div className="max-w-4xl mx-auto p-12 min-h-full relative transition-colors duration-700">
                                            {/* Selection Highlight (to show it's editable) */}
                                            {messages.length < 3 && (
                                                <div className="absolute inset-0 border-4 border-blue-500/20 pointer-events-none z-10 mix-blend-multiply" />
                                            )}

                                            <nav className="flex justify-between items-center mb-24 opacity-50">
                                                <div className={cn("font-bold text-xl tracking-tighter", messages.length > 2 ? "text-white" : "text-black")}>ALEX.DESIGN</div>
                                                <div className={cn("flex gap-8 text-sm font-medium", messages.length > 2 ? "text-neutral-400" : "text-neutral-600")}>
                                                    <span>Work</span>
                                                    <span>About</span>
                                                </div>
                                            </nav>
                                            <div className="space-y-8 mb-24">
                                                <div className={cn("inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase transition-colors", messages.length > 2 ? "bg-white text-black" : "bg-neutral-100 text-neutral-600")}>Available for hire</div>
                                                <h1 className={cn("text-7xl font-serif font-medium leading-[0.9] tracking-tight transition-colors", messages.length > 2 ? "text-white" : "text-neutral-900")}>
                                                    Digital experiences <br /> that matter.
                                                </h1>
                                            </div>
                                            <div className="grid grid-cols-2 gap-8 mb-12">
                                                <div className={cn("aspect-[4/3] rounded-lg border transition-colors", messages.length > 2 ? "bg-white/5 border-white/10" : "bg-neutral-200 border-transparent")} />
                                                <div className={cn("aspect-[4/3] rounded-lg border transition-colors", messages.length > 2 ? "bg-white/5 border-white/10" : "bg-neutral-200 border-transparent")} />
                                            </div>
                                        </div>

                                        {/* Deployment Overlay */}
                                        {status === "publishing" && (
                                            <motion.div
                                                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                                                className="absolute inset-0 bg-black/90 backdrop-blur-md flex flex-col items-center justify-center z-50 text-white"
                                            >
                                                <Globe className="w-16 h-16 text-green-500 mb-6 animate-pulse" />
                                                <h3 className="text-2xl font-bold mb-2">Deploying to Edge</h3>
                                                <div className="w-64 h-1 bg-white/20 rounded-full overflow-hidden">
                                                    <motion.div
                                                        className="h-full bg-green-500"
                                                        initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: 1.5 }}
                                                    />
                                                </div>
                                            </motion.div>
                                        )}
                                    </motion.div>
                                )}

                                {/* STATE 5: LIVE */}
                                {status === "live" && (
                                    <motion.div
                                        key="live"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="absolute inset-0 bg-[#000] flex flex-col items-center justify-center text-center p-8"
                                    >
                                        <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mb-8 shadow-[0_0_50px_rgba(34,197,94,0.5)]">
                                            <Check className="w-12 h-12 text-black" strokeWidth={4} />
                                        </div>
                                        <h2 className="text-4xl font-bold text-white mb-4">You're Online!</h2>
                                        <p className="text-neutral-400 mb-6 max-w-md">
                                            Your site has been successfully cloned, customized, and deployed.
                                        </p>
                                        <div className="flex items-center gap-3 bg-white/10 px-6 py-3 rounded-lg border border-white/10 mb-8">
                                            <Globe className="w-4 h-4 text-green-400" />
                                            <span className="text-white font-mono">alex.step1.site</span>
                                        </div>

                                        {/* Primary CTA after demo completion */}
                                        <div className="flex flex-col items-center gap-4">
                                            <Button
                                                size="lg"
                                                className="h-14 px-8 text-lg bg-[#2D66EC] hover:bg-[#2253C6] text-white rounded-full font-bold shadow-[0_0_30px_rgba(45,102,236,0.5)] transition-all hover:scale-105"
                                            >
                                                <Chrome className="w-5 h-5 mr-2" />
                                                Try it on a Real Site
                                            </Button>
                                            <button
                                                onClick={handleReset}
                                                className="text-neutral-500 hover:text-white text-sm transition-colors"
                                            >
                                                or replay the demo
                                            </button>
                                        </div>
                                    </motion.div>
                                )}

                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
