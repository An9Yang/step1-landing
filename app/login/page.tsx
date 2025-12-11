"use client";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function LoginPage() {
    return (
        <main className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-purple-900/10 blur-[100px]" />
            <Container className="max-w-md relative z-10">
                <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-white mb-8">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
                </Link>
                <div className="bg-white/5 border border-white/10 p-8 rounded-xl backdrop-blur-md">
                    <h1 className="text-2xl font-bold mb-2">Welcome Back</h1>
                    <p className="text-muted-foreground mb-6">Sign in to access your cloned sites.</p>

                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Email</label>
                            <input type="email" className="w-full h-10 px-3 rounded-md bg-black/50 border border-white/10 focus:border-purple-500 focus:outline-none transition-colors" placeholder="you@example.com" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Password</label>
                            <input type="password" className="w-full h-10 px-3 rounded-md bg-black/50 border border-white/10 focus:border-purple-500 focus:outline-none transition-colors" placeholder="••••••••" />
                        </div>

                        <Button className="w-full" variant="glow">Sign In</Button>

                        <div className="relative my-4 text-center">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-white/10"></div>
                            </div>
                        </div>

                        <Button variant="outline" className="w-full">Continue with Google</Button>
                    </div>

                    <p className="text-xs text-center text-muted-foreground mt-6">
                        Don't have an account? <span className="text-purple-400 cursor-pointer hover:underline">Sign up</span>
                    </p>
                </div>
            </Container>
        </main>
    );
}
