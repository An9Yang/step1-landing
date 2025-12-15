"use client";

import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import { CHROME_WEBSTORE_URL } from "@/lib/links";

export function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/20 backdrop-blur-md transition-all">
            <Container>
                <div className="flex h-16 items-center justify-between">
                    <Link href="/" className="flex items-center gap-2">
                        <svg width="22" height="22" viewBox="0 0 182 182" fill="none">
                            <path d="M55.7429 76.0664L105.052 55.7429L125.376 105.052" stroke="white" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M76.0664 125.376L105.052 55.7429" stroke="white" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
                            Step1
                        </span>
                    </Link>

                    <nav className="hidden md:flex items-center gap-6">
                        <Link href="/#showcase" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                            Showcase
                        </Link>
                        <Link href="/#demo" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                            Demo
                        </Link>
                        <Link href="/#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                            How it Works
                        </Link>
                        <Link href="/#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                            Features
                        </Link>
                    </nav>

                    <div className="flex items-center gap-4">
                        <Link href="/login" className="hidden sm:block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                            Sign In
                        </Link>
                        <Button
                            size="sm"
                            className="gap-2 group rounded-full bg-white text-black hover:bg-neutral-200 transition-all"
                            onClick={() => window.open(CHROME_WEBSTORE_URL, "_blank", "noopener,noreferrer")}
                        >
                            Add to Chrome
                            <MoveRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </div>
                </div>
            </Container>
        </header>
    );
}
