"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ExternalLink, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

type TemplateId = "stripe" | "apple";

type Template = {
    id: TemplateId;
    name: string;
    label: string;
    src: string;
};

const templates: Template[] = [
    { id: "stripe", name: "Stripe", label: "SaaS landing", src: "/showcase/stripe" },
    { id: "apple", name: "Apple", label: "Product launch", src: "/showcase/apple" },
];

export function Showcase() {
    const [activeId, setActiveId] = useState<TemplateId>("stripe");
    const active = useMemo(
        () => templates.find((t) => t.id === activeId) ?? templates[0],
        [activeId]
    );

    return (
        <section id="showcase" className="py-24 md:py-32 bg-neutral-950 border-t border-white/5 scroll-mt-20">
            <Container>
                <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-10">
                    <div className="max-w-2xl space-y-3">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 w-fit">
                            <Sparkles className="w-4 h-4 text-primary" />
                            <span className="text-xs font-mono tracking-wider uppercase text-primary">Showcase</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white">Proof of fidelity — scroll the clone.</h2>
                        <p className="text-neutral-400 text-lg leading-relaxed">
                            This is a real render (not a screenshot). Scroll and click around to feel what “1‑click clone” can look like.
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center justify-center md:justify-end gap-2">
                        <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur-sm">
                            {templates.map((t) => (
                                <button
                                    key={t.id}
                                    type="button"
                                    onClick={() => setActiveId(t.id)}
                                    className={cn(
                                        "relative rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                                        t.id === activeId ? "text-white" : "text-neutral-300 hover:text-white"
                                    )}
                                >
                                    {t.id === activeId && (
                                        <motion.span
                                            layoutId="showcase-active-template"
                                            className="absolute inset-0 rounded-full bg-primary/20 border border-primary/30"
                                            transition={{ type: "spring", stiffness: 500, damping: 40 }}
                                        />
                                    )}
                                    <span className="relative z-10">{t.name}</span>
                                </button>
                            ))}
                        </div>
                        <Button
                            size="sm"
                            variant="ghost"
                            className="rounded-full gap-2 text-neutral-300 hover:text-white hover:bg-white/5"
                            onClick={() => window.open(active.src, "_blank", "noopener,noreferrer")}
                        >
                            Open <ExternalLink className="w-4 h-4" />
                        </Button>
                    </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/50 overflow-hidden shadow-2xl">
                    <div className="h-12 px-4 flex items-center justify-between border-b border-white/10 bg-black/40">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/20" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                            <div className="w-3 h-3 rounded-full bg-green-500/20" />
                        </div>
                        <div className="text-xs text-neutral-400 font-mono">
                            {active.name} · {active.label}
                        </div>
                        <div className="text-xs text-neutral-500 hidden sm:block">Tip: scroll inside the frame</div>
                    </div>

                    <div className="aspect-[16/10] md:aspect-[16/9] w-full bg-white">
                        <iframe
                            title={`${active.name} clone preview`}
                            src={active.src}
                            className="h-full w-full"
                        />
                    </div>
                </div>

                <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-neutral-400">
                        <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1">
                            Real render
                        </span>
                        <span className="text-neutral-700">•</span>
                        <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1">
                            Scroll + click
                        </span>
                        <span className="text-neutral-700">•</span>
                        <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1">
                            Components + layout
                        </span>
                        <span className="text-neutral-700">•</span>
                        <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1">
                            Tokens (colors / type / spacing)
                        </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-4">
                        <Link
                            href="/welcome"
                            className="text-sm font-semibold text-white underline underline-offset-4 hover:text-neutral-200"
                        >
                            Start with verified templates
                        </Link>
                        <button
                            className="text-sm font-semibold text-neutral-300 hover:text-white underline underline-offset-4"
                            onClick={() =>
                                document.querySelector("#demo")?.scrollIntoView({ behavior: "smooth", block: "start" })
                            }
                        >
                            Try the demo
                        </button>
                    </div>
                </div>

                <p className="mt-5 text-xs text-neutral-500 leading-relaxed max-w-3xl">
                    Apple / Stripe are our upper‑bound references for clone quality. For best first results, start with the verified
                    templates list — especially on complex pages.
                </p>
            </Container>
        </section>
    );
}



