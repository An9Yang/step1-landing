"use client";

import { useState, useRef, useEffect } from "react";
import { Container } from "@/components/ui/container";
import { GripVertical, MousePointer2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function CapabilityComparison() {
    const [sliderPosition, setSliderPosition] = useState(50);
    const containerRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);

    const handleMove = (event: MouseEvent | TouchEvent) => {
        if (!isDragging || !containerRef.current) return;

        const containerRect = containerRef.current.getBoundingClientRect();
        const clientX = 'touches' in event ? event.touches[0].clientX : event.clientX;

        let newPos = ((clientX - containerRect.left) / containerRect.width) * 100;
        newPos = Math.max(0, Math.min(100, newPos));

        setSliderPosition(newPos);
    };

    const handleMouseUp = () => setIsDragging(false);
    const handleMouseDown = () => setIsDragging(true);

    useEffect(() => {
        if (isDragging) {
            window.addEventListener('mousemove', handleMove);
            window.addEventListener('mouseup', handleMouseUp);
            window.addEventListener('touchmove', handleMove);
            window.addEventListener('touchend', handleMouseUp);
        }
        return () => {
            window.removeEventListener('mousemove', handleMove);
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('touchmove', handleMove);
            window.removeEventListener('touchend', handleMouseUp);
        };
    }, [isDragging]);

    return (
        <section id="comparison" className="py-24 md:py-32 bg-black border-t border-white/5 scroll-mt-20">
            <Container>
                <div className="text-center mb-16 space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono uppercase tracking-wider">
                        <MousePointer2 className="w-3 h-3" />
                        Interactive Proof
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
                        Can you tell the difference?
                    </h2>
                    <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        We don't just screenshot pixels. We reconstruct the <span className="text-white">design system</span>.
                        Drag the slider to compare the original Apple iPhone page with Step1's pixel-perfect code output.
                    </p>
                </div>

                <div
                    ref={containerRef}
                    className="relative w-full max-w-5xl mx-auto aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 shadow-2xl cursor-col-resize select-none group touch-none"
                    onMouseDown={handleMouseDown}
                    onTouchStart={handleMouseDown}
                >
                    {/* LEFT SIDE: ORIGINAL (Apple) */}
                    <div className="absolute inset-0 bg-black pointer-events-none">
                        <div className="h-full w-full relative bg-[#F5F5F7] text-black pt-12 overflow-hidden">
                            {/* Apple Mock Header */}
                            <div className="absolute top-0 w-full h-12 bg-[#1d1d1f] flex items-center justify-center gap-8 text-[11px] text-[#f5f5f7] font-medium z-10 w-full">
                                <span>Store</span>
                                <span>Mac</span>
                                <span>iPad</span>
                                <span>iPhone</span>
                            </div>
                            {/* Apple Mock Hero */}
                            <div className="flex flex-col items-center pt-24 md:pt-32 scale-90 md:scale-100 origin-top transition-transform">
                                <h2 className="text-5xl md:text-7xl font-semibold tracking-tight text-[#1d1d1f]">iPhone 16 Pro</h2>
                                <p className="text-xl md:text-3xl mt-4 font-normal text-[#1d1d1f]">Hello, Apple Intelligence.</p>
                                <div className="mt-8 flex gap-4">
                                    <button className="bg-[#0071e3] text-white px-5 py-2.5 rounded-full text-base font-medium hover:bg-[#0077ed]">
                                        Learn more
                                    </button>
                                    <button className="text-[#0071e3] px-5 py-2.5 rounded-full text-base font-medium hover:text-[#0077ed] border border-[#0071e3]">
                                        Buy
                                    </button>
                                </div>
                            </div>

                            <div className="absolute top-16 left-6 bg-black/80 text-white text-xs font-mono px-3 py-1.5 rounded backdrop-blur-md border border-white/10 shadow-lg">
                                ORIGINAL (Reference)
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE: CLONE (Step1) - Layered on top, clipped */}
                    <div
                        className="absolute inset-0 bg-black pointer-events-none"
                        style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
                    >
                        <div className="h-full w-full relative bg-[#F5F5F7] text-black pt-12 overflow-hidden">
                            {/* Apple Mock Header - Identical */}
                            <div className="absolute top-0 w-full h-12 bg-[#1d1d1f] flex items-center justify-center gap-8 text-[11px] text-[#f5f5f7] font-medium z-10 w-full">
                                <span>Store</span>
                                <span>Mac</span>
                                <span>iPad</span>
                                <span>iPhone</span>
                            </div>
                            {/* Apple Mock Hero - Identical */}
                            <div className="flex flex-col items-center pt-24 md:pt-32 scale-90 md:scale-100 origin-top transition-transform">
                                <h2 className="text-5xl md:text-7xl font-semibold tracking-tight text-[#1d1d1f]">iPhone 16 Pro</h2>
                                <p className="text-xl md:text-3xl mt-4 font-normal text-[#1d1d1f]">Hello, Apple Intelligence.</p>
                                <div className="mt-8 flex gap-4">
                                    <button className="bg-[#0071e3] text-white px-5 py-2.5 rounded-full text-base font-medium hover:bg-[#0077ed]">
                                        Learn more
                                    </button>
                                    <button className="text-[#0071e3] px-5 py-2.5 rounded-full text-base font-medium hover:text-[#0077ed] border border-[#0071e3]">
                                        Buy
                                    </button>
                                </div>
                            </div>

                            <div className="absolute top-16 right-6 bg-blue-600/90 text-white text-xs font-mono px-3 py-1.5 rounded backdrop-blur-md border border-blue-400/30 flex items-center gap-2 shadow-lg z-20">
                                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse border border-green-200" />
                                STEP1 CLONE (Code)
                            </div>
                        </div>
                    </div>

                    {/* Slider Handle */}
                    <div
                        className="absolute top-0 bottom-0 w-0.5 bg-white cursor-col-resize z-20 flex items-center justify-center group-hover:bg-blue-400 transition-colors"
                        style={{ left: `${sliderPosition}%` }}
                    >
                        <div className="w-10 h-10 bg-white rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.5)] flex items-center justify-center -ml-[1px] cursor-col-resize hover:scale-110 active:scale-95 transition-transform border-4 border-black/10">
                            <GripVertical className="w-4 h-4 text-neutral-800" />
                        </div>
                    </div>
                </div>

                <div className="mt-6 flex items-center justify-center gap-2 text-sm text-neutral-500 font-mono">
                    <span className="animate-pulse">←</span> Drag to compare <span className="animate-pulse">→</span>
                </div>
            </Container>
        </section>
    );
}
