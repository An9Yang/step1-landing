import Link from "next/link";
import { Container } from "@/components/ui/container";
import { CHROME_WEBSTORE_URL, STEP1_TEMPLATES_URL } from "@/lib/links";
import { Chrome, MousePointer2, Sparkles } from "lucide-react";

export function HowItWorks() {
    const steps = [
        {
            step: "01",
            title: "Install",
            desc: "Add the Step1 Chrome extension. After install, we’ll open a welcome page with verified templates to try first.",
            icon: Chrome,
            cta: (
                <a
                    href={CHROME_WEBSTORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-white underline underline-offset-4 hover:text-neutral-200"
                >
                    Add to Chrome
                </a>
            ),
        },
        {
            step: "02",
            title: "Clone",
            desc: "Visit any public page and click Step1. We capture structure + design tokens so the output stays editable.",
            icon: MousePointer2,
            cta: (
                <Link
                    href={STEP1_TEMPLATES_URL}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-white underline underline-offset-4 hover:text-neutral-200"
                >
                    Start with templates
                </Link>
            ),
        },
        {
            step: "03",
            title: "Create",
            desc: "Edit with AI (copy, colors, layout). Sign in only when your clone is ready to save — then export or publish.",
            icon: Sparkles,
            cta: (
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                    <Link
                        href="/#features"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-white underline underline-offset-4 hover:text-neutral-200"
                    >
                        See editing capabilities
                    </Link>
                    <a
                        href={CHROME_WEBSTORE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-300 underline underline-offset-4 hover:text-white"
                    >
                        Add to Chrome
                    </a>
                </div>
            ),
        },
    ] as const;

    return (
        <section id="how-it-works" className="py-24 md:py-32 bg-black border-t border-white/5 scroll-mt-20">
            <Container>
                <div className="text-center mb-14 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-white">How it works</h2>
                    <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
                        A short path from inspiration → editable code → your own landing page.
                    </p>
                </div>

                <ol className="max-w-4xl mx-auto">
                    {steps.map((s, idx) => (
                        <li key={s.step} className="relative pb-10 last:pb-0">
                            <div className="absolute left-0 top-0 flex flex-col items-center">
                                <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                                    <s.icon className="w-5 h-5 text-primary" />
                                </div>
                                {idx !== steps.length - 1 && (
                                    <div className="w-px flex-1 bg-gradient-to-b from-white/15 via-white/10 to-transparent mt-3" />
                                )}
                            </div>

                            <div className="pl-14">
                                <div className="flex items-baseline gap-3">
                                    <div className="text-xs font-mono text-neutral-500">{s.step}</div>
                                    <h3 className="text-white font-semibold text-xl">{s.title}</h3>
                                </div>
                                <p className="mt-2 text-neutral-400 text-sm leading-relaxed">{s.desc}</p>
                                {"cta" in s && s.cta && <div className="mt-4">{s.cta}</div>}
                            </div>
                        </li>
                    ))}
                </ol>
            </Container>
        </section>
    );
}


