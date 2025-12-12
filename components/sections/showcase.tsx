"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
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
                        <h2 className="text-3xl md:text-5xl font-bold text-white">See the output first.</h2>
                        <p className="text-neutral-400 text-lg leading-relaxed">
                            Scroll inside the frame — this is a real page render (not a static image).
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center justify-center md:justify-end gap-2">
                        {templates.map((t) => (
                            <Button
                                key={t.id}
                                size="sm"
                                variant={t.id === activeId ? "default" : "outline"}
                                className={cn(
                                    "rounded-full",
                                    t.id !== activeId && "bg-white/5 border-white/10 hover:bg-white/10 text-white"
                                )}
                                onClick={() => setActiveId(t.id)}
                            >
                                {t.name}
                            </Button>
                        ))}
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

                <div className="mt-8 grid gap-6 md:grid-cols-3">
                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                        <div className="text-white font-semibold mb-2">What Step1 extracts</div>
                        <ul className="space-y-1 text-sm text-neutral-300">
                            <li className="text-neutral-400">Layout structure & reusable components</li>
                            <li className="text-neutral-400">Typography scale & spacing rhythm</li>
                            <li className="text-neutral-400">Color tokens, shadows, and effects</li>
                        </ul>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5 md:col-span-2">
                        <div className="text-white font-semibold mb-2">New here? Start with verified templates.</div>
                        <p className="text-sm text-neutral-400 leading-relaxed">
                            We’ve curated a short list of sites that clone cleanly — it reduces surprises and helps you reach the aha moment faster.
                        </p>
                        <div className="mt-4 flex flex-wrap items-center gap-3">
                            <Link
                                href="/welcome"
                                className="text-sm font-semibold text-white underline underline-offset-4 hover:text-neutral-200"
                            >
                                See templates
                            </Link>
                            <button
                                className="text-sm font-semibold text-neutral-300 hover:text-white underline underline-offset-4"
                                onClick={() => document.querySelector("#demo")?.scrollIntoView({ behavior: "smooth", block: "start" })}
                            >
                                Try the demo
                            </button>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}


