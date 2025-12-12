import Link from "next/link";
import { Container } from "@/components/ui/container";
import { CHROME_WEBSTORE_URL } from "@/lib/links";
import { Chrome } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t border-white/10 bg-neutral-950 pt-16 pb-10 text-sm">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
                    <div className="md:col-span-2 space-y-4">
                        <Link href="/" className="font-bold text-2xl tracking-tight text-white">
                            Step1
                        </Link>
                        <p className="text-neutral-400 leading-relaxed max-w-md">
                            Clone a landing page you like, then make it yours with AI edits — copy, colors, and layout.
                        </p>

                        <a
                            href={CHROME_WEBSTORE_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2 font-semibold shadow-[0_0_20px_rgba(45,102,236,0.35)] hover:bg-primary/90 transition-colors"
                        >
                            <Chrome className="w-4 h-4" />
                            Add to Chrome
                        </a>

                        <p className="text-xs text-neutral-500">
                            Sign in only when your clone is ready to save.
                        </p>
                    </div>

                    <div className="space-y-3">
                        <h4 className="font-semibold text-white">Product</h4>
                        <ul className="space-y-2 text-neutral-400">
                            <li><Link href="/#showcase" className="hover:text-white transition-colors">Showcase</Link></li>
                            <li><Link href="/#demo" className="hover:text-white transition-colors">Demo</Link></li>
                            <li><Link href="/#how-it-works" className="hover:text-white transition-colors">How it works</Link></li>
                            <li><Link href="/#features" className="hover:text-white transition-colors">Features</Link></li>
                        </ul>
                    </div>

                    <div className="space-y-3">
                        <h4 className="font-semibold text-white">More</h4>
                        <ul className="space-y-2 text-neutral-400">
                            <li><Link href="/welcome" className="hover:text-white transition-colors">Templates</Link></li>
                            <li><Link href="/login" className="hover:text-white transition-colors">Sign in</Link></li>
                            <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link></li>
                            <li><Link href="/terms" className="hover:text-white transition-colors">Terms</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-neutral-500">
                    <p>© {new Date().getFullYear()} Step1. All rights reserved.</p>
                    <p className="text-neutral-600">MVP preview</p>
                </div>
            </Container>
        </footer>
    );
}


