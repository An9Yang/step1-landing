import { Container } from "@/components/ui/container";
import Link from "next/link";
import { Twitter, Github, Linkedin, ArrowRight } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t border-white/10 bg-neutral-950 pt-20 pb-10 text-sm">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="space-y-4">
                        <Link href="/" className="font-bold text-2xl tracking-tighter text-white">
                            Step1
                        </Link>
                        <p className="text-muted-foreground leading-relaxed max-w-xs">
                            The intelligent interface for Vibe Coding. Clone, edit, and ship in seconds.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <Link href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                                <Twitter className="w-4 h-4 text-muted-foreground" />
                            </Link>
                            <Link href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                                <Github className="w-4 h-4 text-muted-foreground" />
                            </Link>
                            <Link href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                                <Linkedin className="w-4 h-4 text-muted-foreground" />
                            </Link>
                        </div>
                    </div>

                    {/* Links Column 1 */}
                    <div className="space-y-4">
                        <h4 className="font-bold text-white">Product</h4>
                        <ul className="space-y-3 text-muted-foreground">
                            <li><Link href="#" className="hover:text-purple-400 transition-colors">Features</Link></li>
                            <li><Link href="#" className="hover:text-purple-400 transition-colors">Integrations</Link></li>
                            <li><Link href="#" className="hover:text-purple-400 transition-colors">Changelog</Link></li>
                            <li><Link href="#" className="hover:text-purple-400 transition-colors">Pricing</Link></li>
                        </ul>
                    </div>

                    {/* Links Column 2 */}
                    <div className="space-y-4">
                        <h4 className="font-bold text-white">Resources</h4>
                        <ul className="space-y-3 text-muted-foreground">
                            <li><Link href="#" className="hover:text-purple-400 transition-colors">Documentation</Link></li>
                            <li><Link href="#" className="hover:text-purple-400 transition-colors">API Reference</Link></li>
                            <li><Link href="#" className="hover:text-purple-400 transition-colors">Community</Link></li>
                            <li><Link href="#" className="hover:text-purple-400 transition-colors">Blog</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter Column */}
                    <div className="space-y-4">
                        <h4 className="font-bold text-white">Stay Updated</h4>
                        <p className="text-muted-foreground text-xs leading-relaxed">
                            Join our newsletter for the latest AI coding tips and feature updates.
                        </p>
                        <form className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-white/5 border border-white/10 rounded px-3 py-2 text-xs w-full focus:outline-none focus:border-purple-500/50 transition-colors"
                            />
                            <button className="bg-purple-600 hover:bg-purple-500 text-white rounded px-3 py-2 transition-colors">
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
                    <p>© {new Date().getFullYear()} Step1 Inc. All rights reserved.</p>
                    <div className="flex gap-8">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                        <Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
