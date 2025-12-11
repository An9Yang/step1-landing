"use client";

import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import { motion } from "framer-motion";

export function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/5 backdrop-blur-md transition-all">
            <Container>
                <div className="flex h-16 items-center justify-between">
                    <Link href="/" className="flex items-center space-x-2">
                        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
                            Step1
                        </span>
                    </Link>

                    <nav className="hidden md:flex items-center gap-6">
                        <Link href="#showcase" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                            Showcase
                        </Link>
                        <Link href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                            Features
                        </Link>
                        <Link href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                            How it Works
                        </Link>
                    </nav>

                    <div className="flex items-center gap-4">
                        <Link href="/login" className="hidden sm:block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                            Sign In
                        </Link>
                        <Button variant="glow" size="sm" className="gap-2 group">
                            Add to Chrome
                            <MoveRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </div>
                </div>
            </Container>
        </header>
    );
}
