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
        <section className="py-32 bg-neutral-950 border-t border-white/5">
            <Container>
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-white">
                        Can you tell the difference?
                    </h2>
                    <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
                        We don't just copy HTML. We reconstruct the design system.
                        Drag the slider to compare the original Apple site with Step1's output.
                    </p>
                </div>

                <div
                    ref={containerRef}
                    className="relative w-full max-w-5xl mx-auto aspect-[16/10] rounded-xl overflow-hidden border border-white/10 shadow-2xl cursor-col-resize select-none group"
                    onMouseDown={handleMouseDown}
                    onTouchStart={handleMouseDown}
                >
                    {/* LEFT SIDE: ORIGINAL (Apple) */}
                    <div className="absolute inset-0 bg-black pointer-events-none">
                        <div className="h-full w-full relative bg-[#F5F5F7] text-black pt-12 overflow-hidden">
                            {/* Apple Mock Header */}
                            <div className="absolute top-0 w-full h-12 bg-[#1d1d1f] flex items-center justify-center gap-8 text-[11px] text-[#f5f5f7] font-medium z-10">
                                <span>Store</span>
                                <span>Mac</span>
                                <span>iPad</span>
                                <span>iPhone</span>
                            </div>
                            {/* Apple Mock Hero */}
                            <div className="flex flex-col items-center pt-16">
                                <h2 className="text-6xl font-semibold tracking-tight">iPhone 16 Pro</h2>
                                <p className="text-2xl mt-4 font-normal">Hello, Apple Intelligence.</p>
                                <div className="mt-8 flex gap-4">
                                    <button className="bg-[#0071e3] text-white px-5 py-2 rounded-full text-sm hover:bg-[#0077ed]">
                                        Learn more
                                    </button>
                                    <button className="text-[#0071e3] px-5 py-2 rounded-full text-sm hover:text-[#0077ed] border border-[#0071e3]">
                                        Buy
                                    </button>
                                </div>
                                <div className="mt-12 w-[300px] h-[400px] bg-gradient-to-b from-gray-300 to-gray-400 rounded-[40px] shadow-xl" />
                            </div>

                            <div className="absolute top-16 left-8 bg-black/80 text-white text-xs font-mono px-3 py-1.5 rounded backdrop-blur-md border border-white/10">
                                ORIGINAL SITE
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
                            <div className="absolute top-0 w-full h-12 bg-[#1d1d1f] flex items-center justify-center gap-8 text-[11px] text-[#f5f5f7] font-medium z-10">
                                <span>Store</span>
                                <span>Mac</span>
                                <span>iPad</span>
                                <span>iPhone</span>
                            </div>
                            {/* Apple Mock Hero - Identical */}
                            <div className="flex flex-col items-center pt-16">
                                <h2 className="text-6xl font-semibold tracking-tight">iPhone 16 Pro</h2>
                                <p className="text-2xl mt-4 font-normal">Hello, Apple Intelligence.</p>
                                <div className="mt-8 flex gap-4">
                                    <button className="bg-[#0071e3] text-white px-5 py-2 rounded-full text-sm hover:bg-[#0077ed]">
                                        Learn more
                                    </button>
                                    <button className="text-[#0071e3] px-5 py-2 rounded-full text-sm hover:text-[#0077ed] border border-[#0071e3]">
                                        Buy
                                    </button>
                                </div>
                                <div className="mt-12 w-[300px] h-[400px] bg-gradient-to-b from-gray-300 to-gray-400 rounded-[40px] shadow-xl" />
                            </div>

                            <div className="absolute top-16 right-8 bg-green-500/20 text-green-400 text-xs font-mono px-3 py-1.5 rounded backdrop-blur-md border border-green-500/30 flex items-center gap-2">
                                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                STEP1 CLONE
                            </div>
                        </div>
                    </div>

                    {/* Slider Handle */}
                    <div
                        className="absolute top-0 bottom-0 w-1 bg-white cursor-col-resize z-20 flex items-center justify-center group-hover:bg-blue-400 transition-colors"
                        style={{ left: `${sliderPosition}%` }}
                    >
                        <div className="w-12 h-12 bg-white rounded-full shadow-[0_0_20px_rgba(0,0,0,0.5)] flex items-center justify-center -ml-[1px] cursor-col-resize hover:scale-110 transition-transform">
                            <GripVertical className="w-5 h-5 text-neutral-800" />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
