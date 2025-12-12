"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Container } from "@/components/ui/container";
import { ExternalLink, MousePointer2, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

type TemplateSite = {
    title: string;
    desc: string;
    url: string;
    badge?: "Verified";
};

export default function WelcomePage() {
    const sites: TemplateSite[] = useMemo(
        () => [
            { title: "Stripe", desc: "Clean SaaS landing patterns.", url: "https://stripe.com", badge: "Verified" },
            { title: "Vercel", desc: "Modern developer-first marketing pages.", url: "https://vercel.com", badge: "Verified" },
            { title: "Linear", desc: "Strong typography and tight spacing rhythm.", url: "https://linear.app", badge: "Verified" },
            { title: "Notion", desc: "Content-forward layouts.", url: "https://www.notion.so" },
            { title: "Framer Templates", desc: "Pick a template-style landing to clone.", url: "https://www.framer.com/templates/" },
            { title: "Awwwards", desc: "Browse inspiration — start with simpler pages.", url: "https://www.awwwards.com/" },
        ],
        []
    );

    const [lastOpened, setLastOpened] = useState<string | null>(null);

    const openSite = (s: TemplateSite) => {
        window.open(s.url, "_blank", "noopener,noreferrer");
        setLastOpened(s.title);
    };

    return (
        <main className="min-h-screen bg-background text-foreground">
            <Header />

            <div className="pt-28 pb-20">
                <Container>
                    <div className="max-w-3xl mx-auto text-center space-y-4">
                        <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-green-500/10 text-green-400 border border-green-500/20">
                            <ShieldCheck className="w-4 h-4" />
                            <span className="font-semibold text-sm">Step1 installed</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold text-white">Pick a site to clone</h1>
                        <p className="text-lg text-neutral-400 leading-relaxed">
                            To hit the aha moment fast, start with a{" "}
                            <span className="text-white font-semibold">Verified</span> template. When the site opens,{" "}
                            <span className="text-white font-semibold">click the Step1 icon</span> in your Chrome toolbar.
                        </p>
                    </div>

                    {lastOpened && (
                        <div className="mt-10 max-w-4xl mx-auto rounded-2xl border border-primary/30 bg-primary/10 p-4 flex items-start gap-3">
                            <MousePointer2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                            <div className="text-sm text-neutral-300 leading-relaxed">
                                <div className="text-white font-semibold mb-1">Quick reminder</div>
                                On <span className="text-white font-semibold">{lastOpened}</span>, click the Step1 icon (top right) to{" "}
                                <span className="text-white font-semibold">Clone</span>.
                            </div>
                        </div>
                    )}

                    <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {sites.map((s) => (
                            <button
                                key={s.title}
                                onClick={() => openSite(s)}
                                className="group text-left rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors"
                            >
                                <div className="flex items-start justify-between gap-3">
                                    <div>
                                        <div className="text-white font-semibold text-lg">{s.title}</div>
                                        <p className="mt-2 text-sm text-neutral-400 leading-relaxed">{s.desc}</p>
                                    </div>
                                    {s.badge && (
                                        <div className={cn("px-2 py-1 rounded-full text-[11px] font-semibold border", "bg-white/5 text-white border-white/10")}>
                                            {s.badge}
                                        </div>
                                    )}
                                </div>

                                <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-neutral-300 group-hover:text-white transition-colors">
                                    Open site <ExternalLink className="w-4 h-4 opacity-70" />
                                </div>
                            </button>
                        ))}
                    </div>

                    <div className="mt-14 text-center">
                        <Link href="/" className="text-sm font-semibold text-neutral-300 hover:text-white underline underline-offset-4">
                            Back to home
                        </Link>
                    </div>
                </Container>
            </div>
        </main>
    );
}


