"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { MousePointer2, Loader2, Sparkles, Check, ArrowRight, Palette, Type, ExternalLink, Chrome } from "lucide-react";
import { cn } from "@/lib/utils";
import { CHROME_WEBSTORE_URL, STEP1_TEMPLATES_URL } from "@/lib/links";
import Link from "next/link";

type Step = "browse" | "clone" | "edit" | "publish";

export function InteractiveGuide() {
    const [currentStep, setCurrentStep] = useState<Step>("browse");
    const [siteTheme, setSiteTheme] = useState<"light" | "dark" | "blue">("light");
    const [headlineVariant, setHeadlineVariant] = useState<"original" | "rewrite">("original");

    const reset = () => {
        setCurrentStep("browse");
        setSiteTheme("light");
        setHeadlineVariant("original");
    };

    const steps: { id: Step; label: string; desc: string }[] = [
        { id: "browse", label: "Browse", desc: "Pick a page" },
        { id: "clone", label: "Clone", desc: "1 click" },
        { id: "edit", label: "Edit", desc: "AI commands" },
        { id: "publish", label: "Try it", desc: "Real site" },
    ];

    const getBrowserURL = () => {
        switch (currentStep) {
            case "browse": return "awwwards.com";
            case "clone": return "step1.app/cloning…";
            case "edit": return "step1.app/editor/landing-v1";
            case "publish": return "step1.app/welcome";
            default: return "about:blank";
        }
    };

    const handleExtensionClick = () => {
        if (currentStep === "browse") {
            setCurrentStep("clone");
            setTimeout(() => setCurrentStep("edit"), 2500);
        }
    };

    const handleEditAction = (mode: "colors" | "layout" | "text") => {
        if (mode === "colors") {
            setSiteTheme(prev => prev === "light" ? "dark" : prev === "dark" ? "blue" : "light");
            return;
        }
        if (mode === "text") {
            setHeadlineVariant((prev) => (prev === "original" ? "rewrite" : "original"));
        }
    };

    return (
        <section id="demo" className="py-24 bg-neutral-950 relative overflow-hidden border-t border-white/5 scroll-mt-20">
            {/* Background Ambience */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-primary/15 rounded-full blur-[120px] pointer-events-none" />

            <Container className="relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-primary mb-4"
                    >
                        <Sparkles className="w-3 h-3 mr-2" />
                        Interactive Demo
                    </motion.div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Try the clone flow — right here.
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Click the extension icon, watch the scan, then apply a couple AI-style edits.
                    </p>
                </div>

                {/* Progress Bar */}
                <div className="flex justify-center mb-12">
                    <div className="flex items-center gap-2 md:gap-4 bg-white/5 border border-white/10 p-2 rounded-full backdrop-blur-sm">
                        {steps.map((s, i) => (
                            <button
                                key={s.id}
                                onClick={() => {
                                    if (currentStep === "publish" || s.id === "browse") setCurrentStep(s.id);
                                }}
                                className={cn(
                                    "px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2",
                                    currentStep === s.id
                                        ? "bg-primary text-white shadow-lg shadow-black/20"
                                        : "text-muted-foreground hover:text-white"
                                )}
                            >
                                <span className={cn("w-5 h-5 rounded-full flex items-center justify-center text-[10px] border", currentStep === s.id ? "border-transparent bg-white/20" : "border-white/20")}>
                                    {i + 1}
                                </span>
                                <span className="hidden md:inline">{s.label}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Main Interactive Window */}
                <div className="grid lg:grid-cols-[1fr_350px] gap-8 items-start max-w-6xl mx-auto">

                    {/* Visual Canvas */}
                    <motion.div
                        layout
                        className="aspect-[16/10] bg-neutral-900 rounded-xl border border-white/10 shadow-2xl relative overflow-hidden group"
                    >
                        {/* Browser Bar */}
                        <div className="h-10 border-b border-white/10 bg-neutral-900/90 backdrop-blur-md flex items-center px-4 justify-between z-30 relative">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/20" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                                <div className="w-3 h-3 rounded-full bg-green-500/20" />
                            </div>
                            <div className="flex-1 flex justify-center">
                                <motion.div
                                    key={currentStep}
                                    initial={{ opacity: 0, y: 5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="bg-black/50 px-4 py-1 rounded text-xs text-neutral-500 font-mono flex items-center gap-2"
                                >
                                    {currentStep === "publish" && <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />}
                                    {getBrowserURL()}
                                </motion.div>
                            </div>
                            <div className="flex items-center gap-3">
                                {/* Extension Icon */}
                                <div
                                    className={cn(
                                        "relative cursor-pointer transition-all duration-300",
                                        currentStep === "browse" ? "opacity-100 hover:scale-110" : "opacity-30"
                                    )}
                                    onClick={handleExtensionClick}
                                >
                                    <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-primary to-purple-500 flex items-center justify-center shadow-lg transform active:scale-95 transition-transform">
                                        <div className="w-4 h-4 border-2 border-white rounded-full flex items-center justify-center">
                                            <div className="w-1.5 h-1.5 bg-white rounded-full" />
                                        </div>
                                    </div>

                                    {currentStep === "browse" && (
                                        <div className="absolute top-10 right-0 w-max px-3 py-1.5 bg-black text-white text-xs rounded-md shadow-xl z-50 border border-white/10">
                                            Click Step1 to clone
                                            <div className="absolute -top-1 right-3 w-2 h-2 bg-black rotate-45 border-l border-t border-white/10" />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Content Area */}
                        <div className="absolute inset-0 top-10 overflow-hidden bg-white text-black">
                            <AnimatePresence mode="wait">
                                {currentStep === "browse" && (
                                    <motion.div
                                        key="site-original"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        className="h-full w-full flex flex-col"
                                    >
                                        {/* Mock Landing Page */}
                                        <div className="flex-1 bg-gradient-to-br from-gray-50 to-gray-200 p-8 md:p-12 overflow-y-auto">
                                            <nav className="flex justify-between items-center mb-16 opacity-50">
                                                <div className="font-bold text-xl tracking-tight">BRAND</div>
                                                <div className="flex gap-6 text-sm">
                                                    <span>Product</span>
                                                    <span>Stories</span>
                                                    <span>About</span>
                                                </div>
                                            </nav>
                                            <div className="max-w-2xl">
                                                <h1 className="text-5xl md:text-7xl font-serif mb-6 text-gray-900 leading-[0.9]">
                                                    Timeless<br />Elegance
                                                </h1>
                                                <p className="text-xl text-gray-500 mb-8 max-w-md">
                                                    A curated collection of minimal objects for the modern workspace.
                                                </p>
                                                <div className="inline-block bg-black text-white px-8 py-3 rounded-full text-sm font-medium">
                                                    Explore Collection
                                                </div>
                                            </div>
                                            <div className="mt-16 grid grid-cols-3 gap-4 opacity-50">
                                                {[1, 2, 3].map(i => (
                                                    <div key={i} className="aspect-[4/5] bg-gray-300 rounded-sm" />
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                )}

                                {currentStep === "clone" && (
                                    <motion.div
                                        key="scanning"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="absolute inset-0 bg-neutral-900/90 backdrop-blur-sm z-20 flex flex-col items-center justify-center p-8"
                                    >
                                        <div className="relative">
                                            <div className="absolute inset-0 bg-primary blur-2xl opacity-20 animate-pulse" />
                                            <Loader2 className="w-16 h-16 text-primary animate-spin relative z-10" />
                                        </div>
                                        <h3 className="mt-8 text-2xl font-bold text-white">Cloning to Step1...</h3>
                                        <div className="mt-4 flex flex-col gap-2 w-full max-w-xs text-sm text-neutral-400 font-mono">
                                            <motion.div
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.5 }}
                                                className="flex justify-between"
                                            >
                                                <span>Resolving Assets</span>
                                                <span className="text-green-400">Done</span>
                                            </motion.div>
                                            <motion.div
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 1.0 }}
                                                className="flex justify-between"
                                            >
                                                <span>Generating Tokens</span>
                                                <span className="text-green-400">Done</span>
                                            </motion.div>
                                            <motion.div
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 1.5 }}
                                                className="flex justify-between"
                                            >
                                                <span>Building React Components</span>
                                                <span className="text-green-400">Done</span>
                                            </motion.div>
                                        </div>
                                    </motion.div>
                                )}

                                {currentStep === "edit" && (
                                    <motion.div
                                        key="editor-view"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className={cn(
                                            "h-full w-full flex flex-col transition-colors duration-700",
                                            siteTheme === "dark" ? "bg-neutral-900 text-white" :
                                                siteTheme === "blue" ? "bg-blue-950 text-blue-50" :
                                                    "bg-white text-black"
                                        )}
                                    >
                                        <div className="absolute top-4 left-4 right-4 bottom-4 border-2 border-dashed border-primary/30 rounded-lg pointer-events-none z-10 flex items-start justify-center pt-2">
                                            <span className="bg-black/60 text-white px-2 py-0.5 text-[10px] rounded uppercase font-bold tracking-wider backdrop-blur-md border border-white/10">
                                                Editor preview
                                            </span>
                                        </div>

                                        <div className="flex-1 p-8 md:p-12 overflow-y-auto">
                                            <nav className="flex justify-between items-center mb-16 opacity-80">
                                                <div className="font-bold text-xl tracking-tight">BRAND</div>
                                                <div className="flex gap-6 text-sm">
                                                    <span>Product</span>
                                                    <span>Stories</span>
                                                    <span>About</span>
                                                </div>
                                            </nav>
                                            <div className="max-w-2xl">
                                                <motion.h1
                                                    layout
                                                    className={cn(
                                                        "text-5xl md:text-7xl font-serif mb-6 leading-[0.9]",
                                                        siteTheme === "dark" ? "text-white" :
                                                            siteTheme === "blue" ? "text-blue-100" : "text-gray-900"
                                                    )}
                                                >
                                                    {headlineVariant === "rewrite" ? (
                                                        <>
                                                            Launch<br />Faster
                                                        </>
                                                    ) : (
                                                        <>
                                                            Timeless<br />Elegance
                                                        </>
                                                    )}
                                                </motion.h1>
                                                <p className={cn(
                                                    "text-xl mb-8 max-w-md",
                                                    siteTheme === "dark" ? "text-gray-400" :
                                                        siteTheme === "blue" ? "text-blue-200" : "text-gray-500"
                                                )}>
                                                    {headlineVariant === "rewrite"
                                                        ? "Clone a landing you love, then rewrite it in minutes with AI edits."
                                                        : "A curated collection of minimal objects for the modern workspace."}
                                                </p>
                                                <div className={cn(
                                                    "inline-block px-8 py-3 rounded-full text-sm font-medium transition-colors",
                                                    siteTheme === "dark" ? "bg-white text-black" :
                                                        siteTheme === "blue" ? "bg-blue-500 text-white" : "bg-black text-white"
                                                )}>
                                                    Explore Collection
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}

                                {currentStep === "publish" && (
                                    <motion.div
                                        key="ready-view"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="h-full w-full bg-neutral-950 text-white flex items-center justify-center p-8"
                                    >
                                        <div className="max-w-md text-center">
                                            <div className="w-14 h-14 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center mx-auto">
                                                <Check className="w-7 h-7 text-green-400" />
                                            </div>
                                            <h3 className="mt-6 text-2xl font-bold">Your clone is ready.</h3>
                                            <p className="mt-2 text-neutral-300 leading-relaxed">
                                                Install the extension to clone a real page, then sign in only when you want to save and keep editing.
                                            </p>

                                            <div className="mt-6 flex flex-col gap-3">
                                                <Button
                                                    className="h-11 rounded-full font-semibold"
                                                    onClick={() => window.open(CHROME_WEBSTORE_URL, "_blank", "noopener,noreferrer")}
                                                >
                                                    <Chrome className="w-4 h-4 mr-2" />
                                                    Add to Chrome
                                                </Button>
                                                <Link
                                                    href={STEP1_TEMPLATES_URL}
                                                    className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-neutral-300 hover:text-white"
                                                >
                                                    Start with verified templates <ExternalLink className="w-4 h-4 opacity-70" />
                                                </Link>
                                                <Button variant="ghost" className="text-neutral-300 hover:text-white" onClick={reset}>
                                                    Replay demo
                                                </Button>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>

                    {/* Controls / Instructions Side */}
                    <div className="flex flex-col gap-6 h-full justify-center">
                        <AnimatePresence mode="wait">
                            {currentStep === "browse" && (
                                <motion.div
                                    key="info-browse"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    className="space-y-4"
                                >
                                    <h3 className="text-2xl font-bold">Pick a page</h3>
                                    <p className="text-muted-foreground">
                                        For the best first run, start with a clean marketing page or one of our verified templates.
                                    </p>
                                    <div className="p-4 bg-white/5 rounded-lg border border-white/10 text-sm md:text-base">
                                        <div className="flex items-start gap-3">
                                            <MousePointer2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                                            <span><strong className="text-white">Click the Step1 icon</strong> (top right) to start cloning.</span>
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {currentStep === "clone" && (
                                <motion.div
                                    key="info-clone"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    className="space-y-4"
                                >
                                    <h3 className="text-2xl font-bold">Cloning…</h3>
                                    <p className="text-muted-foreground">
                                        Step1 captures structure and design tokens so the output stays editable and consistent.
                                    </p>
                                    <div className="space-y-2">
                                        <div className="h-2 bg-white/10 rounded overflow-hidden">
                                            <motion.div
                                                className="h-full bg-primary"
                                                initial={{ width: "0%" }}
                                                animate={{ width: "100%" }}
                                                transition={{ duration: 2 }}
                                            />
                                        </div>
                                        <p className="text-xs text-right text-neutral-400 font-mono">Processing...</p>
                                    </div>
                                </motion.div>
                            )}

                            {currentStep === "edit" && (
                                <motion.div
                                    key="info-edit"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    className="space-y-6"
                                >
                                    <div>
                                        <h3 className="text-2xl font-bold">Edit with intent</h3>
                                        <p className="text-muted-foreground mt-2">
                                            Try a couple “AI commands” — the preview updates like an editor would.
                                        </p>
                                    </div>

                                    <div className="grid gap-3">
                                        <Button
                                            variant="outline"
                                            className="justify-start h-12 text-left bg-white/5 hover:bg-white/10 border-white/10 text-white rounded-xl"
                                            onClick={() => handleEditAction("colors")}
                                        >
                                            <Palette className="w-4 h-4 mr-3 text-primary" />
                                            <span className="font-semibold">“Make it dark”</span>
                                        </Button>
                                        <Button
                                            variant="outline"
                                            className="justify-start h-12 text-left bg-white/5 hover:bg-white/10 border-white/10 text-white rounded-xl"
                                            onClick={() => handleEditAction("text")}
                                        >
                                            <Type className="w-4 h-4 mr-3 text-primary" />
                                            <span className="font-semibold">“Rewrite the headline”</span>
                                        </Button>
                                    </div>

                                    <Button
                                        onClick={() => setCurrentStep("publish")}
                                        className="w-full rounded-xl"
                                    >
                                        Finish demo <ArrowRight className="w-4 h-4 ml-2" />
                                    </Button>
                                </motion.div>
                            )}

                            {currentStep === "publish" && (
                                <motion.div
                                    key="info-publish"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="space-y-6 text-center lg:text-left"
                                >
                                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-4">
                                        <Check className="w-8 h-8 text-green-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold">Your clone is ready.</h3>
                                        <p className="text-muted-foreground mt-2">
                                            Install the extension to clone a real page. Sign in only when you want to save and keep editing.
                                        </p>
                                    </div>

                                    <div className="flex flex-col gap-3">
                                        <Button
                                            className="w-full rounded-xl"
                                            onClick={() => window.open(CHROME_WEBSTORE_URL, "_blank", "noopener,noreferrer")}
                                        >
                                            <Chrome className="w-4 h-4 mr-2" />
                                            Add to Chrome
                                        </Button>

                                        <Link
                                            href={STEP1_TEMPLATES_URL}
                                            className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-neutral-300 hover:text-white"
                                        >
                                            Open templates <ExternalLink className="w-4 h-4 opacity-70" />
                                        </Link>

                                        <Button variant="ghost" className="text-neutral-300 hover:text-white" onClick={reset}>
                                            Replay demo
                                        </Button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </Container>
        </section>
    );
}
