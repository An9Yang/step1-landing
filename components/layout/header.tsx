"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import { CHROME_WEBSTORE_URL } from "@/lib/links";

export function Header() {
    return (
        <header className="fixed top-4 left-4 right-4 z-50 mx-auto max-w-5xl">
            <div className="glass-nav px-6 py-3 shadow-[0px_0px_8px_0px_rgba(0,0,0,0.08)]">
                <div className="flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2">
                        <svg width="22" height="22" viewBox="0 0 182 182" fill="none">
                            <path d="M55.7429 76.0664L105.052 55.7429L125.376 105.052" stroke="black" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M76.0664 125.376L105.052 55.7429" stroke="black" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className="text-xl font-bold text-foreground">
                            Step1
                        </span>
                    </Link>

                    <nav className="hidden md:flex items-center gap-6">
                        <Link href="/#showcase" className="text-sm opacity-[0.64] hover:opacity-100 transition-opacity">
                            Showcase
                        </Link>
                        <Link href="/#demo" className="text-sm opacity-[0.64] hover:opacity-100 transition-opacity">
                            Demo
                        </Link>
                        <Link href="/#how-it-works" className="text-sm opacity-[0.64] hover:opacity-100 transition-opacity">
                            How it Works
                        </Link>
                        <Link href="/#features" className="text-sm opacity-[0.64] hover:opacity-100 transition-opacity">
                            Features
                        </Link>
                    </nav>

                    <div className="flex items-center gap-4">
                        <Link href="/login" className="hidden sm:block text-sm font-medium opacity-[0.64] hover:opacity-100 transition-opacity">
                            Sign In
                        </Link>
                        <Button
                            size="sm"
                            className="gap-2 group"
                            onClick={() => window.open(CHROME_WEBSTORE_URL, "_blank", "noopener,noreferrer")}
                        >
                            Add to Chrome
                            <MoveRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
}
