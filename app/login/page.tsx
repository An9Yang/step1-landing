"use client";

import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Lock, Sparkles } from "lucide-react";

export default function LoginPage() {
    return (
        <main className="min-h-screen bg-background text-foreground flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-black to-black opacity-70" />

            <Container className="max-w-md relative z-10">
                <Link href="/" className="inline-flex items-center text-sm text-neutral-400 hover:text-white mb-8">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
                </Link>

                <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-md">
                    <div className="flex items-start gap-3 mb-6">
                        <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                            <Lock className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold text-white">Your clone is ready</h1>
                            <p className="text-neutral-400 text-sm mt-1">
                                Sign in to save it and keep editing with AI.
                            </p>
                        </div>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-black/30 p-4 text-sm text-neutral-300 leading-relaxed mb-6">
                        <div className="flex items-start gap-2">
                            <Sparkles className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                            <p>
                                You only need an account when you want to <span className="text-white font-semibold">save</span>{" "}
                                and <span className="text-white font-semibold">continue editing</span>.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-neutral-200">Email</label>
                            <input
                                type="email"
                                className="w-full h-10 px-3 rounded-md bg-black/50 border border-white/10 focus:border-primary focus:outline-none transition-colors text-white"
                                placeholder="you@example.com"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-neutral-200">Password</label>
                            <input
                                type="password"
                                className="w-full h-10 px-3 rounded-md bg-black/50 border border-white/10 focus:border-primary focus:outline-none transition-colors text-white"
                                placeholder="••••••••"
                            />
                        </div>

                        <Button className="w-full rounded-xl">Sign In</Button>

                        <div className="relative my-2 text-center">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-white/10"></div>
                            </div>
                            <div className="relative inline-flex bg-transparent px-3 text-xs text-neutral-500">or</div>
                        </div>

                        <Button variant="outline" className="w-full rounded-xl bg-white/5 border-white/10 hover:bg-white/10 text-white">
                            Continue with Google
                        </Button>
                    </div>
                </div>
            </Container>
        </main>
    );
}



