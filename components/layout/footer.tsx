import Link from "next/link";
import { Container } from "@/components/ui/container";
import { CHROME_WEBSTORE_URL } from "@/lib/links";
import { Chrome } from "lucide-react";
import { ReflectiveLine } from "@/components/ui/reflective-line";

export function Footer() {
    return (
        <footer className="relative bg-neutral-950 pt-12 pb-8 text-sm snap-start">
            {/* Top Separator */}
            <div className="absolute top-0 left-0 right-0 z-20">
                <ReflectiveLine />
            </div>
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div className="md:col-span-2 space-y-3">
                        <Link href="/" className="inline-flex items-center gap-2">
                            <svg width="22" height="22" viewBox="0 0 182 182" fill="none">
                                <path d="M55.7429 76.0664L105.052 55.7429L125.376 105.052" stroke="white" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M76.0664 125.376L105.052 55.7429" stroke="white" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span className="font-bold text-xl tracking-tight text-white">Step1</span>
                        </Link>
                        <p className="text-neutral-400 leading-relaxed max-w-sm text-sm">
                            Clone a landing page you like, then make it yours with AI edits.
                        </p>

                        <a
                            href={CHROME_WEBSTORE_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-semibold shadow-[0_0_20px_rgba(45,102,236,0.35)] hover:bg-primary/90 transition-colors"
                        >
                            <Chrome className="w-4 h-4" />
                            Add to Chrome
                        </a>
                    </div>

                    <div className="space-y-2">
                        <h4 className="font-semibold text-white text-sm">Product</h4>
                        <ul className="space-y-1.5 text-neutral-400 text-sm">
                            <li><Link href="/#showcase" className="hover:text-white transition-colors">Showcase</Link></li>
                            <li><Link href="/#demo" className="hover:text-white transition-colors">Demo</Link></li>
                            <li><Link href="/#features" className="hover:text-white transition-colors">Features</Link></li>
                        </ul>
                    </div>

                    <div className="space-y-2">
                        <h4 className="font-semibold text-white text-sm">More</h4>
                        <ul className="space-y-1.5 text-neutral-400 text-sm">
                            <li><Link href="/welcome" className="hover:text-white transition-colors">Templates</Link></li>
                            <li><Link href="/login" className="hover:text-white transition-colors">Sign in</Link></li>
                            <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link></li>
                            <li><Link href="/terms" className="hover:text-white transition-colors">Terms</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-5 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-neutral-500">
                    <p>© {new Date().getFullYear()} Step1. All rights reserved.</p>
                    <p className="text-neutral-600">MVP preview</p>
                </div>
            </Container>
        </footer>
    );
}



