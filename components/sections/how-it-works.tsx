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

                <div className="grid gap-6 md:grid-cols-3">
                    {steps.map((s) => (
                        <div key={s.step} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                            <div className="flex items-start justify-between gap-6">
                                <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                                    <s.icon className="w-5 h-5 text-primary" />
                                </div>
                                <div className="text-xs font-mono text-neutral-500">{s.step}</div>
                            </div>

                            <h3 className="mt-5 text-white font-semibold text-xl">{s.title}</h3>
                            <p className="mt-2 text-neutral-400 text-sm leading-relaxed">{s.desc}</p>

                            {"cta" in s && s.cta && <div className="mt-4">{s.cta}</div>}
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}


