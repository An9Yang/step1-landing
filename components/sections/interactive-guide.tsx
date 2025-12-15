"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { CHROME_WEBSTORE_URL, STEP1_TEMPLATES_URL } from "@/lib/links";
import { cn } from "@/lib/utils";
import {
    ArrowRight,
    Check,
    Chrome,
    ExternalLink,
    Loader2,
    Palette,
    Sparkles,
    Type,
} from "lucide-react";
import { ReflectiveLine } from "@/components/ui/reflective-line";

type Step = "browse" | "clone" | "edit" | "ready";

type DemoTheme = "light" | "dark" | "blue";

type HeadlineVariant = "original" | "rewrite";

type RailStep = {
    id: Step;
    label: string;
    desc: string;
};

function DemoLanding({
    theme,
    headlineVariant,
    isEditor,
}: {
    theme: DemoTheme;
    headlineVariant: HeadlineVariant;
    isEditor?: boolean;
}) {
    const rootClassName = cn(
        "relative h-full w-full flex flex-col transition-colors duration-700",
        theme === "dark"
            ? "bg-neutral-950 text-white"
            : theme === "blue"
                ? "bg-blue-950 text-blue-50"
                : "bg-white text-black"
    );

    const canvasClassName = cn(
        "flex-1 overflow-y-auto p-8 md:p-12",
        theme === "light" ? "bg-gradient-to-br from-gray-50 to-gray-200" : "bg-transparent"
    );

    const headlineClassName = cn(
        "text-5xl md:text-7xl font-serif mb-6 leading-[0.9]",
        theme === "dark" ? "text-white" : theme === "blue" ? "text-blue-100" : "text-gray-900"
    );

    const descClassName = cn(
        "text-xl mb-8 max-w-md",
        theme === "dark" ? "text-gray-400" : theme === "blue" ? "text-blue-200" : "text-gray-500"
    );

    const ctaClassName = cn(
        "inline-flex items-center justify-center px-8 py-3 rounded-full text-sm font-medium transition-colors w-fit",
        theme === "dark" ? "bg-white text-black" : theme === "blue" ? "bg-blue-500 text-white" : "bg-black text-white"
    );

    const headline =
        headlineVariant === "rewrite" ? (
            <>
                Launch<br />Faster
            </>
        ) : (
            <>
                Timeless<br />Elegance
            </>
        );

    const desc =
        headlineVariant === "rewrite"
            ? "Clone a landing you love, then rewrite it in minutes with AI edits."
            : "A curated collection of minimal objects for the modern workspace.";

    return (
        <div className={rootClassName}>
            {isEditor && (
                <div className="absolute inset-0 pointer-events-none z-10 p-4">
                    <div className="h-full w-full rounded-xl border-2 border-dashed border-white/20 flex items-start justify-center pt-2">
                        <span className="bg-black/60 text-white px-2 py-0.5 text-[10px] rounded uppercase font-bold tracking-wider backdrop-blur-md border border-white/10">
                            Editor preview
                        </span>
                    </div>
                </div>
            )}

            <div className={canvasClassName}>
                <nav className="flex justify-between items-center mb-16 opacity-80">
                    <div className="font-bold text-xl tracking-tight">BRAND</div>
                    <div className="hidden sm:flex gap-6 text-sm">
                        {(["Product", "Stories", "About"] as const).map((item) => (
                            <span key={item}>{item}</span>
                        ))}
                    </div>
                </nav>

                <div className="max-w-2xl">
                    <motion.h1 layout className={headlineClassName}>
                        {headline}
                    </motion.h1>
                    <p className={descClassName}>{desc}</p>
                    <div className={ctaClassName}>Explore Collection</div>
                </div>

                <div className="mt-16 grid grid-cols-3 gap-4 opacity-50">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="aspect-[4/5] bg-black/10 rounded-md" />
                    ))}
                </div>
            </div>
        </div>
    );
}

function DemoScanning() {
    const rows = useMemo(
        () => [
            { k: "Layout structure", v: "Done" },
            { k: "Design tokens", v: "Done" },
            { k: "React components", v: "Done" },
        ],
        []
    );

    return (
        <div className="absolute inset-0 bg-neutral-950/90 backdrop-blur-sm z-20 flex flex-col items-center justify-center p-8 text-center">
            <div className="relative">
                <div className="absolute inset-0 bg-white blur-2xl opacity-10 animate-pulse" />
                <Loader2 className="w-14 h-14 text-white animate-spin relative z-10" />
            </div>
            <h3 className="mt-6 text-2xl font-bold text-white">Cloning…</h3>
            <p className="mt-2 text-sm text-neutral-400 max-w-md">
                Extracting layout, assets, and design tokens so the result stays editable.
            </p>
            <div className="mt-5 w-full max-w-sm text-xs text-neutral-400 font-mono space-y-2">
                {rows.map((r) => (
                    <div key={r.k} className="flex justify-between">
                        <span>{r.k}</span>
                        <span className="text-green-400">{r.v}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

function DemoReady({ onReplay }: { onReplay: () => void }) {
    return (
        <div className="h-full w-full bg-neutral-950 text-white flex items-center justify-center p-8">
            <div className="max-w-md text-center">
                <div className="w-14 h-14 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center mx-auto">
                    <Check className="w-7 h-7 text-green-400" />
                </div>
                <h3 className="mt-6 text-2xl font-bold">Your cloned site is ready.</h3>
                <p className="mt-2 text-neutral-300 leading-relaxed">
                    This is where we’d ask you to <span className="text-white font-semibold">sign in</span> to save and keep editing.
                    The demo stays clickable without an account.
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

                    <Link
                        href="/login"
                        className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-neutral-400 hover:text-white"
                    >
                        Preview the sign‑in gate <ExternalLink className="w-4 h-4 opacity-70" />
                    </Link>

                    <Button variant="ghost" className="text-neutral-300 hover:text-white" onClick={onReplay}>
                        Replay demo
                    </Button>
                </div>
            </div>
        </div>
    );
}

export function InteractiveGuide() {
    const [currentStep, setCurrentStep] = useState<Step>("browse");
    const [siteTheme, setSiteTheme] = useState<DemoTheme>("light");
    const [headlineVariant, setHeadlineVariant] = useState<HeadlineVariant>("original");

    const cloneTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const reset = () => {
        if (cloneTimeoutRef.current) {
            clearTimeout(cloneTimeoutRef.current);
            cloneTimeoutRef.current = null;
        }
        setCurrentStep("browse");
        setSiteTheme("light");
        setHeadlineVariant("original");
    };

    useEffect(() => {
        return () => {
            if (cloneTimeoutRef.current) clearTimeout(cloneTimeoutRef.current);
        };
    }, []);

    const railSteps: RailStep[] = useMemo(
        () => [
            { id: "browse", label: "Browse", desc: "Pick a page (templates recommended)" },
            { id: "clone", label: "Clone", desc: "One click in Chrome" },
            { id: "edit", label: "Edit", desc: "AI-style commands" },
            { id: "ready", label: "Ready", desc: "Sign in only to save" },
        ],
        []
    );

    const url = useMemo(() => {
        switch (currentStep) {
            case "browse":
                return "awwwards.com";
            case "clone":
                return "step1.app/cloning…";
            case "edit":
                return "step1.app/editor/landing-v1";
            case "ready":
                return "step1.app/sign-in";
            default:
                return "about:blank";
        }
    }, [currentStep]);

    const startClone = () => {
        if (cloneTimeoutRef.current) {
            clearTimeout(cloneTimeoutRef.current);
            cloneTimeoutRef.current = null;
        }
        setCurrentStep("clone");
        cloneTimeoutRef.current = setTimeout(() => {
            setCurrentStep("edit");
            cloneTimeoutRef.current = null;
        }, 2000);
    };

    const handleExtensionClick = () => {
        if (currentStep !== "browse") return;
        startClone();
    };

    const cycleTheme = () => {
        setSiteTheme((prev) => (prev === "light" ? "dark" : prev === "dark" ? "blue" : "light"));
    };

    const toggleHeadline = () => {
        setHeadlineVariant((prev) => (prev === "original" ? "rewrite" : "original"));
    };

    return (
        <section id="demo" className="min-h-screen flex flex-col justify-center bg-neutral-950 relative overflow-hidden snap-start py-16 md:py-20">
            {/* Top Separator */}
            <div className="absolute top-0 left-0 right-0 z-20">
                <ReflectiveLine />
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-white/5 rounded-full blur-[150px] pointer-events-none" />

            <Container className="relative z-10">
                <div className="text-center mb-10 md:mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-neutral-300 mb-5"
                    >
                        <Sparkles className="w-3 h-3 mr-2" />
                        Interactive Demo
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold mb-4"
                    >
                        Click once. See the flow.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto"
                    >
                        No login required. Click the Step1 icon, watch the clone, then apply AI-style edits.
                    </motion.p>
                </div>

                <div className="w-full max-w-5xl mx-auto mb-16">
                    <ReflectiveLine />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="grid lg:grid-cols-[1fr_320px] gap-8 items-start max-w-5xl mx-auto"
                >
                    {/* Demo Window */}
                    <motion.div
                        layout
                        className="aspect-[16/10] bg-neutral-900 rounded-2xl border border-white/10 shadow-2xl relative overflow-hidden"
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
                                    {currentStep === "ready" && <div className="w-2 h-2 rounded-full bg-white animate-pulse" />}
                                    {url}
                                </motion.div>
                            </div>

                            {/* Extension Icon */}
                            <div
                                role="button"
                                tabIndex={0}
                                aria-label="Click Step1 to clone"
                                className={cn(
                                    "relative transition-all duration-300",
                                    currentStep === "browse" ? "cursor-pointer opacity-100 hover:scale-110" : "opacity-30"
                                )}
                                onClick={handleExtensionClick}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter" || e.key === " ") handleExtensionClick();
                                }}
                            >
                                <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center ring-2 ring-white/50 shadow-[0_0_16px_rgba(255,255,255,0.3)] transform active:scale-95 transition-transform">
                                    <svg width="16" height="16" viewBox="0 0 182 182" fill="none" className="translate-x-[0.5px] -translate-y-[0.5px]">
                                        <path d="M55.7429 76.0664L105.052 55.7429L125.376 105.052" stroke="#1a1a1a" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M76.0664 125.376L105.052 55.7429" stroke="#1a1a1a" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>

                                {currentStep === "browse" && (
                                    <div className="absolute top-10 right-0 w-max px-3 py-1.5 bg-black text-white text-xs rounded-md shadow-xl z-50 border border-white/10">
                                        Click Step1 to clone
                                        <div className="absolute -top-1 right-3 w-2 h-2 bg-black rotate-45 border-l border-t border-white/10" />
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Content */}
                        <div className="absolute inset-0 top-10 overflow-hidden bg-white text-black">
                            <AnimatePresence mode="wait">
                                {currentStep === "browse" && (
                                    <motion.div
                                        key="demo-browse"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="absolute inset-0"
                                    >
                                        <DemoLanding theme="light" headlineVariant="original" />
                                        <div className="absolute bottom-4 left-4 right-4">
                                            <div className="rounded-xl border border-white/10 bg-black/60 backdrop-blur-md px-4 py-3 text-sm text-white flex items-center justify-between gap-4">
                                                <span className="text-neutral-200">
                                                    Tip: open a template, then click the Step1 icon in Chrome.
                                                </span>
                                                <Link
                                                    href={STEP1_TEMPLATES_URL}
                                                    className="inline-flex items-center gap-2 text-sm font-semibold text-white underline underline-offset-4 hover:text-neutral-200 shrink-0"
                                                >
                                                    Templates <ExternalLink className="w-4 h-4 opacity-70" />
                                                </Link>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}

                                {currentStep === "clone" && (
                                    <motion.div
                                        key="demo-clone"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="absolute inset-0"
                                    >
                                        <DemoLanding theme="light" headlineVariant="original" />
                                        <DemoScanning />
                                    </motion.div>
                                )}

                                {currentStep === "edit" && (
                                    <motion.div
                                        key="demo-edit"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="absolute inset-0"
                                    >
                                        <DemoLanding theme={siteTheme} headlineVariant={headlineVariant} isEditor />

                                        <div className="absolute bottom-4 left-4 right-4">
                                            <div className="rounded-2xl border border-white/10 bg-black/70 backdrop-blur-md p-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2">
                                                <div className="flex flex-wrap items-center gap-2">
                                                    <button
                                                        type="button"
                                                        onClick={cycleTheme}
                                                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm font-semibold text-white hover:bg-white/10"
                                                    >
                                                        <Palette className="w-4 h-4 text-neutral-400" />
                                                        “Make it dark”
                                                    </button>
                                                    <button
                                                        type="button"
                                                        onClick={toggleHeadline}
                                                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm font-semibold text-white hover:bg-white/10"
                                                    >
                                                        <Type className="w-4 h-4 text-neutral-400" />
                                                        “Rewrite the hero”
                                                    </button>
                                                </div>

                                                <Button
                                                    className="rounded-full h-10 px-5 font-semibold"
                                                    onClick={() => setCurrentStep("ready")}
                                                >
                                                    Finish demo <ArrowRight className="w-4 h-4 ml-2" />
                                                </Button>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}

                                {currentStep === "ready" && (
                                    <motion.div
                                        key="demo-ready"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="absolute inset-0"
                                    >
                                        <DemoReady onReplay={reset} />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>

                    {/* Narrative Rail - Redesigned */}
                    <div className="flex flex-col gap-8 pt-4">
                        <div>
                            <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500 mb-6 pl-12">
                                The Workflow
                            </div>
                            <div className="relative space-y-0">
                                {/* Continuous vertical line background */}
                                <div className="absolute left-[39px] top-4 bottom-10 w-px bg-white/10" />

                                {railSteps.map((s, idx) => {
                                    const isActive = s.id === currentStep;
                                    const isPast = railSteps.findIndex(step => step.id === currentStep) > idx;

                                    const onClick = () => {
                                        if (s.id === "browse") return reset();
                                        if (s.id === "clone") return startClone();
                                        return setCurrentStep(s.id);
                                    };

                                    return (
                                        <button
                                            key={s.id}
                                            type="button"
                                            onClick={onClick}
                                            className="group relative flex w-full items-start gap-6 py-4 text-left transition-colors"
                                        >
                                            {/* Number */}
                                            <span className={cn(
                                                "w-8 text-right font-mono text-[10px] leading-6 transition-colors duration-300 pt-0.5",
                                                isActive ? "text-white" : "text-neutral-600 group-hover:text-neutral-400"
                                            )}>
                                                {String(idx + 1).padStart(2, "0")}
                                            </span>

                                            {/* Timeline & Dot */}
                                            <div className="relative flex flex-col items-center">
                                                <div className={cn(
                                                    "z-10 flex h-3 w-3 items-center justify-center rounded-full border transition-all duration-500 mt-2",
                                                    isActive
                                                        ? "border-white bg-white shadow-[0_0_10px_rgba(255,255,255,0.4)] scale-110"
                                                        : isPast
                                                            ? "border-white/50 bg-white/20"
                                                            : "border-white/10 bg-neutral-900 group-hover:border-white/30"
                                                )}>
                                                    <div className={cn(
                                                        "h-1 w-1 rounded-full transition-colors",
                                                        isActive ? "bg-neutral-900" : "bg-transparent"
                                                    )} />
                                                </div>
                                            </div>

                                            {/* Content */}
                                            <div className="flex-1 pt-0.5">
                                                <h3 className={cn(
                                                    "text-sm font-semibold tracking-tight transition-colors duration-300",
                                                    isActive ? "text-white" : "text-neutral-400 group-hover:text-neutral-200"
                                                )}>
                                                    {s.label}
                                                </h3>
                                                <p className={cn(
                                                    "mt-1 text-xs leading-relaxed transition-colors duration-300",
                                                    isActive ? "text-neutral-300" : "text-neutral-600 group-hover:text-neutral-500"
                                                )}>
                                                    {s.desc}
                                                </p>
                                            </div>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="space-y-3">
                            {currentStep === "browse" && (
                                <>
                                    <div className="text-white font-semibold text-lg">Start simple.</div>
                                    <p className="text-sm text-neutral-400 leading-relaxed">
                                        For the cleanest first run, begin with verified templates — then click the Step1 icon in Chrome.
                                    </p>
                                    <Link
                                        href={STEP1_TEMPLATES_URL}
                                        className="inline-flex items-center gap-2 text-sm font-semibold text-white underline underline-offset-4 hover:text-neutral-200"
                                    >
                                        Open templates <ExternalLink className="w-4 h-4 opacity-70" />
                                    </Link>
                                </>
                            )}

                            {currentStep === "clone" && (
                                <>
                                    <div className="text-white font-semibold text-lg">Cloning…</div>
                                    <p className="text-sm text-neutral-400 leading-relaxed">
                                        We capture structure + design tokens so the output remains editable and consistent.
                                    </p>
                                </>
                            )}

                            {currentStep === "edit" && (
                                <>
                                    <div className="text-white font-semibold text-lg">Edit with intent.</div>
                                    <p className="text-sm text-neutral-400 leading-relaxed">
                                        Try a couple commands in the editor bar. Notice how changes stay consistent.
                                    </p>
                                    <p className="text-xs text-neutral-500 leading-relaxed">
                                        The real product signs you in only when you save — not upfront.
                                    </p>
                                </>
                            )}

                            {currentStep === "ready" && (
                                <>
                                    <div className="text-white font-semibold text-lg">Try it for real.</div>
                                    <p className="text-sm text-neutral-400 leading-relaxed">
                                        Install the extension to clone a real page. Use templates to hit the aha moment faster.
                                    </p>
                                    <Button
                                        className="w-full rounded-full h-11 font-semibold bg-white text-black hover:bg-neutral-200"
                                        onClick={() => window.open(CHROME_WEBSTORE_URL, "_blank", "noopener,noreferrer")}
                                    >
                                        <Chrome className="w-4 h-4 mr-2" />
                                        Add to Chrome
                                    </Button>
                                </>
                            )}
                        </div>
                    </div>
                </motion.div>
            </Container>
        </section>
    );
}
