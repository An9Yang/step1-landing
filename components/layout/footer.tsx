import Link from "next/link";
import { Container } from "@/components/ui/container";
import { CHROME_WEBSTORE_URL } from "@/lib/links";
import { Chrome } from "lucide-react";
import { ReflectiveLine } from "@/components/ui/reflective-line";

export function Footer() {
    return (
        <footer className="relative bg-background pt-12 pb-8 text-sm snap-start">
            {/* Top Separator */}
            <div className="absolute top-0 left-0 right-0 z-20">
                <ReflectiveLine />
            </div>
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div className="md:col-span-2 space-y-3">
                        <Link href="/" className="inline-flex items-center gap-2">
                            <svg width="22" height="22" viewBox="0 0 182 182" fill="none">
                                <path d="M55.7429 76.0664L105.052 55.7429L125.376 105.052" stroke="black" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M76.0664 125.376L105.052 55.7429" stroke="black" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span className="font-bold text-xl tracking-tight text-foreground">Step1</span>
                        </Link>
                        <p className="text-ink-secondary leading-relaxed max-w-sm text-sm">
                            Clone a landing page you like, then make it yours with AI edits.
                        </p>

                        <a
                            href={CHROME_WEBSTORE_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-[16px] bg-black text-white px-4 py-2 text-sm font-semibold hover:bg-[#424242] transition-colors"
                        >
                            <Chrome className="w-4 h-4" />
                            Add to Chrome
                        </a>
                    </div>

                    <div className="space-y-2">
                        <h4 className="font-semibold text-foreground text-sm">Product</h4>
                        <ul className="space-y-1.5 text-ink-secondary text-sm">
                            <li><Link href="/#showcase" className="hover:text-foreground transition-colors">Showcase</Link></li>
                            <li><Link href="/#demo" className="hover:text-foreground transition-colors">Demo</Link></li>
                            <li><Link href="/#features" className="hover:text-foreground transition-colors">Features</Link></li>
                        </ul>
                    </div>

                    <div className="space-y-2">
                        <h4 className="font-semibold text-foreground text-sm">More</h4>
                        <ul className="space-y-1.5 text-ink-secondary text-sm">
                            <li><Link href="/welcome" className="hover:text-foreground transition-colors">Templates</Link></li>
                            <li><Link href="/login" className="hover:text-foreground transition-colors">Sign in</Link></li>
                            <li><Link href="/privacy" className="hover:text-foreground transition-colors">Privacy</Link></li>
                            <li><Link href="/terms" className="hover:text-foreground transition-colors">Terms</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-black/5 pt-5 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-ink-muted">
                    <p>© {new Date().getFullYear()} Step1. All rights reserved.</p>
                    <p className="text-ink-muted">MVP preview</p>
                </div>
            </Container>
        </footer>
    );
}
