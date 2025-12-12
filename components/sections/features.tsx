"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { CHROME_WEBSTORE_URL, STEP1_TEMPLATES_URL } from "@/lib/links";
import { Sparkles, Layers, Code2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function Features() {
    type FeatureId = "ai" | "tokens" | "export";

    const features = useMemo(
        () =>
            [
                {
                    id: "ai",
                    label: "AI Editing",
                    title: "Edit with intent (not guesswork).",
                    desc: "Say what you want. Step1 applies changes consistently across the design system.",
                    icon: Sparkles,
                },
                {
                    id: "tokens",
                    label: "Design Tokens",
                    title: "Extract the design system automatically.",
                    desc: "Colors, typography, spacing, and components become editable tokens — not random div soup.",
                    icon: Layers,
                },
                {
                    id: "export",
                    label: "Export / Publish",
                    title: "Own the output — clean React + Tailwind.",
                    desc: "Export production‑ready code you can ship, iterate, and maintain. No locked screenshots.",
                    icon: Code2,
                },
            ] as const,
        []
    );

    const [activeId, setActiveId] = useState<FeatureId>("ai");
    const active = useMemo(
        () => features.find((f) => f.id === activeId) ?? features[0],
        [features, activeId]
    );

    return (
        <section id="features" className="py-24 md:py-32 bg-black border-t border-white/5 scroll-mt-20">
            <Container>
                <div className="text-center mb-14 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-white">Capabilities you can feel.</h2>
                    <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
                        Step1 is not “copy HTML.” It’s a workflow: clone structure + tokens, then edit with intent.
                    </p>
                </div>

                <div className="max-w-6xl mx-auto glass-panel rounded-2xl overflow-hidden">
                    <div className="p-4 md:p-6 border-b border-white/10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 p-1 w-fit">
                            {features.map((f) => (
                                <button
                                    key={f.id}
                                    type="button"
                                    onClick={() => setActiveId(f.id)}
                                    className={cn(
                                        "relative rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                                        f.id === activeId ? "text-white" : "text-neutral-300 hover:text-white"
                                    )}
                                >
                                    {f.id === activeId && (
                                        <motion.span
                                            layoutId="features-active"
                                            className="absolute inset-0 rounded-full bg-primary/20 border border-primary/30"
                                            transition={{ type: "spring", stiffness: 500, damping: 40 }}
                                        />
                                    )}
                                    <span className="relative z-10 inline-flex items-center gap-2">
                                        <f.icon className="w-4 h-4 text-primary" />
                                        {f.label}
                                    </span>
                                </button>
                            ))}
                        </div>

                        <div className="text-sm text-neutral-400">
                            {activeId === "ai" && "Try it in the demo — no login required."}
                            {activeId === "tokens" && "Design tokens are what make AI edits stay consistent."}
                            {activeId === "export" && "You get code you can own and ship."}
                        </div>
                    </div>

                    <div className="p-6 md:p-8 grid gap-8 lg:grid-cols-2 items-start">
                        <div className="space-y-3">
                            <h3 className="text-2xl md:text-3xl font-bold text-white">{active.title}</h3>
                            <p className="text-neutral-400 leading-relaxed">{active.desc}</p>
                            <p className="text-xs text-neutral-500 leading-relaxed">
                                Sign in only when your clone is ready to save — the demo stays clickable without an account.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-black/40 p-5 md:p-6 overflow-hidden">
                            <AnimatePresence mode="wait">
                                {activeId === "ai" && (
                                    <motion.div
                                        key="panel-ai"
                                        initial={{ opacity: 0, y: 8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -8 }}
                                        transition={{ duration: 0.2 }}
                                        className="space-y-4"
                                    >
                                        <div className="text-xs font-mono text-neutral-500">Example prompts</div>
                                        <div className="space-y-3">
                                            <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                                                <div className="text-[11px] text-neutral-500 font-mono mb-1">You</div>
                                                <div className="text-sm text-white">“Make this hero dark mode and increase contrast.”</div>
                                            </div>
                                            <div className="rounded-xl border border-white/10 bg-black/40 p-3">
                                                <div className="text-[11px] text-neutral-500 font-mono mb-1">Step1</div>
                                                <div className="text-sm text-neutral-200">
                                                    Updated color tokens + applied across components (buttons, nav, background).
                                                </div>
                                            </div>
                                            <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                                                <div className="text-[11px] text-neutral-500 font-mono mb-1">You</div>
                                                <div className="text-sm text-white">“Rewrite the headline for indie devs.”</div>
                                            </div>
                                        </div>
                                        <div className="text-xs text-neutral-500">
                                            The point: edits operate on semantics and tokens, not fragile DOM hacks.
                                        </div>
                                    </motion.div>
                                )}

                                {activeId === "tokens" && (
                                    <motion.div
                                        key="panel-tokens"
                                        initial={{ opacity: 0, y: 8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -8 }}
                                        transition={{ duration: 0.2 }}
                                        className="space-y-5"
                                    >
                                        <div className="text-xs font-mono text-neutral-500">Extracted tokens (example)</div>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-neutral-200">
                                                <span className="w-3 h-3 rounded-full bg-white" /> bg
                                            </span>
                                            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-neutral-200">
                                                <span className="w-3 h-3 rounded-full bg-neutral-900 border border-white/10" /> fg
                                            </span>
                                            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-neutral-200">
                                                <span className="w-3 h-3 rounded-full bg-primary" /> primary
                                            </span>
                                        </div>

                                        <div className="grid sm:grid-cols-2 gap-3 text-sm">
                                            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                                                <div className="text-neutral-500 text-xs font-mono mb-2">Typography</div>
                                                <div className="text-neutral-200">Font: Inter</div>
                                                <div className="text-neutral-200">Scale: 14 → 56</div>
                                            </div>
                                            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                                                <div className="text-neutral-500 text-xs font-mono mb-2">Spacing</div>
                                                <div className="text-neutral-200">Rhythm: 4 / 8 / 12</div>
                                                <div className="text-neutral-200">Radius: 8 / 16</div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}

                                {activeId === "export" && (
                                    <motion.div
                                        key="panel-export"
                                        initial={{ opacity: 0, y: 8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -8 }}
                                        transition={{ duration: 0.2 }}
                                        className="space-y-4"
                                    >
                                        <div className="text-xs font-mono text-neutral-500">Export preview</div>
                                        <pre className="rounded-xl border border-white/10 bg-black/70 p-4 text-[12px] leading-relaxed text-neutral-200 overflow-x-auto">
{`export default function Landing() {
  return (
    <main className="bg-background text-foreground">
      <Hero />
      <Pricing />
      <FAQ />
    </main>
  );
}`}
                                        </pre>
                                        <div className="text-xs text-neutral-500">
                                            Clean, editable components — ready to ship (or publish).
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>

                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <Button
                        variant="glow"
                        className="h-11 rounded-full px-6 font-semibold"
                        onClick={() => window.open(CHROME_WEBSTORE_URL, "_blank", "noopener,noreferrer")}
                    >
                        Add to Chrome
                    </Button>
                    <Link
                        href={STEP1_TEMPLATES_URL}
                        className="text-sm font-semibold text-neutral-300 hover:text-white underline underline-offset-4"
                    >
                        Open verified templates
                    </Link>
                </div>
            </Container>
        </section>
    );
}


