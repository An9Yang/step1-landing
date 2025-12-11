"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { MousePointer2, Loader2, Sparkles, Wand2, Check, ArrowRight, Layout, Palette, Type, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

type Step = "browse" | "clone" | "edit" | "publish";

export function InteractiveGuide() {
    const [currentStep, setCurrentStep] = useState<Step>("browse");
    const [isHoveringExtension, setIsHoveringExtension] = useState(false);
    const [editMode, setEditMode] = useState<"colors" | "layout" | "text" | null>(null);
    const [siteTheme, setSiteTheme] = useState<"light" | "dark" | "blue">("light");

    const steps: { id: Step; label: string; desc: string }[] = [
        { id: "browse", label: "Browse", desc: "Find any site" },
        { id: "clone", label: "Clone", desc: "1-Click Capture" },
        { id: "edit", label: "Edit", desc: "AI Enhance" },
        { id: "publish", label: "Result", desc: "Production Ready" },
    ];

    const handleExtensionClick = () => {
        if (currentStep === "browse") {
            setCurrentStep("clone");
            setTimeout(() => setCurrentStep("edit"), 2500);
        }
    };

    const handleEditAction = (mode: "colors" | "layout" | "text") => {
        setEditMode(mode);
        if (mode === "colors") {
            setSiteTheme(prev => prev === "light" ? "dark" : prev === "dark" ? "blue" : "light");
        }
        // Simulate "AI thinking" then applying likely changes
    };

    return (
        <section className="py-24 bg-neutral-950 relative overflow-hidden">
            {/* Background Ambience */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none" />

            <Container className="relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-300 mb-4"
                    >
                        <Sparkles className="w-3 h-3 mr-2" />
                        Interactive Demo
                    </motion.div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        See how <span className="text-gradient">Fast</span> it really is.
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Don't just watch a video. Try the flow yourself right here.
                    </p>
                </div>

                {/* Progress Bar */}
                <div className="flex justify-center mb-12">
                    <div className="flex items-center gap-2 md:gap-4 bg-white/5 border border-white/10 p-2 rounded-full backdrop-blur-sm">
                        {steps.map((s, i) => (
                            <button
                                key={s.id}
                                onClick={() => {
                                    // simple navigation for demo purposes
                                    if (currentStep === "publish" || s.id === "browse") setCurrentStep(s.id);
                                }}
                                className={cn(
                                    "px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2",
                                    currentStep === s.id
                                        ? "bg-purple-600 text-white shadow-lg shadow-purple-900/20"
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
                            <div className="flex-1 text-center text-xs text-neutral-500 font-mono">
                                {currentStep === "browse" ? "awesome-site.com" : "localhost:3000"}
                            </div>
                            <div className="flex items-center gap-3">
                                {/* Extension Icon */}
                                <div
                                    className={cn(
                                        "relative cursor-pointer transition-all duration-300",
                                        currentStep === "browse" ? "opacity-100 hover:scale-110" : "opacity-50"
                                    )}
                                    onMouseEnter={() => setIsHoveringExtension(true)}
                                    onMouseLeave={() => setIsHoveringExtension(false)}
                                    onClick={handleExtensionClick}
                                >
                                    <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-600 to-indigo-600 flex items-center justify-center shadow-lg transform active:scale-95 transition-transform">
                                        <div className="w-4 h-4 border-2 border-white rounded-full flex items-center justify-center">
                                            <div className="w-1.5 h-1.5 bg-white rounded-full" />
                                        </div>
                                    </div>

                                    {currentStep === "browse" && (
                                        <div className="absolute top-10 right-0 w-max px-3 py-1.5 bg-purple-600 text-white text-xs rounded-md shadow-xl animate-bounce">
                                            Click me!
                                            <div className="absolute -top-1 right-3 w-2 h-2 bg-purple-600 rotate-45" />
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
                                            <div className="absolute inset-0 bg-purple-500 blur-2xl opacity-20 animate-pulse" />
                                            <Loader2 className="w-16 h-16 text-purple-500 animate-spin relative z-10" />
                                        </div>
                                        <h3 className="mt-8 text-2xl font-bold text-white">Analyzing Semantics...</h3>
                                        <div className="mt-4 flex flex-col gap-2 w-full max-w-xs text-sm text-neutral-400 font-mono">
                                            <motion.div
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.5 }}
                                                className="flex justify-between"
                                            >
                                                <span>Typography</span>
                                                <span className="text-green-400">Done</span>
                                            </motion.div>
                                            <motion.div
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 1.0 }}
                                                className="flex justify-between"
                                            >
                                                <span>Colors</span>
                                                <span className="text-green-400">Done</span>
                                            </motion.div>
                                            <motion.div
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 1.5 }}
                                                className="flex justify-between"
                                            >
                                                <span>Layout</span>
                                                <span className="text-green-400">Done</span>
                                            </motion.div>
                                        </div>
                                    </motion.div>
                                )}

                                {(currentStep === "edit" || currentStep === "publish") && (
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
                                        <div className="absolute top-4 left-4 right-4 bottom-4 border-2 border-dashed border-purple-500/30 rounded-lg pointer-events-none z-10 flex items-start justify-center pt-2">
                                            <span className="bg-purple-500/20 text-purple-600 px-2 py-0.5 text-[10px] rounded uppercase font-bold tracking-wider backdrop-blur-md">
                                                Editable Mode
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
                                                    Timeless<br />Elegance
                                                </motion.h1>
                                                <p className={cn(
                                                    "text-xl mb-8 max-w-md",
                                                    siteTheme === "dark" ? "text-gray-400" :
                                                        siteTheme === "blue" ? "text-blue-200" : "text-gray-500"
                                                )}>
                                                    A curated collection of minimal objects for the modern workspace.
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
                                    <h3 className="text-2xl font-bold">Find your inspiration</h3>
                                    <p className="text-muted-foreground">
                                        Navigate to any website on the internet. Step1 works with any stack, framework, or layout.
                                    </p>
                                    <div className="p-4 bg-white/5 rounded-lg border border-white/10 text-sm md:text-base">
                                        <div className="flex items-start gap-3">
                                            <MousePointer2 className="w-5 h-5 text-purple-400 mt-0.5 shrink-0" />
                                            <span>The extension icon glows when a site is clone-ready. <strong className="text-white">Click the icon in the preview</strong> to start.</span>
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
                                    <h3 className="text-2xl font-bold">Understanding the Vibe</h3>
                                    <p className="text-muted-foreground">
                                        Step1 doesn't just copy HTML. It uses vision models to understand the *design system*.
                                    </p>
                                    <div className="space-y-2">
                                        <div className="h-2 bg-white/10 rounded overflow-hidden">
                                            <motion.div
                                                className="h-full bg-purple-500"
                                                initial={{ width: "0%" }}
                                                animate={{ width: "100%" }}
                                                transition={{ duration: 2 }}
                                            />
                                        </div>
                                        <p className="text-xs text-right text-purple-400 font-mono">Processing...</p>
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
                                        <h3 className="text-2xl font-bold">Make it yours</h3>
                                        <p className="text-muted-foreground mt-2">
                                            You have full control. Use AI commands or manual controls to reshape the site.
                                        </p>
                                    </div>

                                    <div className="grid gap-3">
                                        <Button
                                            variant="outline"
                                            className="justify-start h-12 text-left bg-white/5 hover:bg-white/10 border-white/10"
                                            onClick={() => handleEditAction("colors")}
                                        >
                                            <Palette className="w-4 h-4 mr-3 text-purple-400" />
                                            <span>Reshuffle Theme / Colors</span>
                                        </Button>
                                        <Button
                                            variant="outline"
                                            className="justify-start h-12 text-left bg-white/5 hover:bg-white/10 border-white/10 opacity-50 cursor-not-allowed"
                                        >
                                            <Type className="w-4 h-4 mr-3 text-blue-400" />
                                            <span>Change Typography (Coming Soon)</span>
                                        </Button>
                                        <Button
                                            variant="outline"
                                            className="justify-start h-12 text-left bg-white/5 hover:bg-white/10 border-white/10 opacity-50 cursor-not-allowed"
                                        >
                                            <Layout className="w-4 h-4 mr-3 text-green-400" />
                                            <span>Auto-Layout Reform (Coming Soon)</span>
                                        </Button>
                                    </div>

                                    <Button
                                        onClick={() => setCurrentStep("publish")}
                                        className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white border-0"
                                    >
                                        Finish Editing <ArrowRight className="w-4 h-4 ml-2" />
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
                                        <Check className="w-8 h-8 text-green-500" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold">Ready to Ship</h3>
                                        <p className="text-muted-foreground mt-2">
                                            Your unique site is ready. Export to code or publish instantly.
                                        </p>
                                    </div>
                                    <div className="p-4 bg-black rounded-lg border border-white/10 font-mono text-xs text-green-400 overflow-hidden text-left">
                                        npm install @step1/cli<br />
                                        step1 init my-new-site<br />
                                        &gt; Ready in 0.4s
                                    </div>
                                    <Button
                                        onClick={() => setCurrentStep("browse")}
                                        variant="ghost"
                                        className="text-muted-foreground hover:text-white"
                                    >
                                        Start Over
                                    </Button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </Container>
        </section>
    );
}
