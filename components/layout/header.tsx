"use client";

import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import { CHROME_WEBSTORE_URL } from "@/lib/links";

export function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-neutral-200/50 bg-white/80 backdrop-blur-md transition-all">
            <Container>
                <div className="flex h-16 items-center justify-between">
                    <Link href="/" className="flex items-center gap-2">
                        <svg width="22" height="22" viewBox="0 0 182 182" fill="none">
                            <path d="M55.7429 76.0664L105.052 55.7429L125.376 105.052" stroke="#171717" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M76.0664 125.376L105.052 55.7429" stroke="#171717" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className="text-xl font-bold text-neutral-900">
                            Step1
                        </span>
                    </Link>

                    <nav className="hidden md:flex items-center gap-6">
                        <Link href="/#showcase" className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">
                            Showcase
                        </Link>
                        <Link href="/#demo" className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">
                            Demo
                        </Link>
                        <Link href="/#how-it-works" className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">
                            How it Works
                        </Link>
                        <Link href="/#features" className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">
                            Features
                        </Link>
                    </nav>

                    <div className="flex items-center gap-4">
                        <Link href="/login" className="hidden sm:block text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors">
                            Sign In
                        </Link>
                        <Button
                            size="sm"
                            className="gap-2 group rounded-full bg-neutral-900 text-white hover:bg-neutral-800 shadow-lg transition-shadow"
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
