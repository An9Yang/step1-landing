"use client";

import { cn } from "@/lib/utils";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";

interface ReflectiveLineProps {
    className?: string;
}

export function ReflectiveLine({ className }: ReflectiveLineProps) {
    let mouseX = useMotionValue(0);

    function onMouseMove({ currentTarget, clientX }: MouseEvent) {
        let { left, width } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
    }

    return (
        <div
            className={cn("relative h-px w-full overflow-hidden", className)}
            onMouseMove={onMouseMove}
        >
            {/* Base Line: Very faint, fades out at ends to avoid stiffness */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-300 to-transparent" />

            {/* Moving Glint: Sharp, simulates metal reflection */}
            <motion.div
                className="absolute inset-y-0 w-32 bg-gradient-to-r from-transparent via-neutral-500/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                    left: useMotionTemplate`${mouseX}px`,
                    x: "-50%", // Center the glint on cursor
                }}
            />

            {/* Parent container needs 'group' for hover effect, but since this is a self-contained component
                that might be inside other groups, we handle hover state locally if possible.
                Actually, simpler: Just show glint always but low opacity, increase on hover?
                User said "when mouse moves over". Let's stick to mouse tracking.
            */}
            <div
                className="absolute inset-0 z-10 opacity-0 hover:opacity-100 transition-opacity duration-500"
            >
                <motion.div
                    className="absolute inset-y-0 w-40 bg-gradient-to-r from-transparent via-neutral-600/70 to-transparent blur-[1px]"
                    style={{
                        left: useMotionTemplate`${mouseX}px`,
                        x: "-50%",
                    }}
                />
            </div>
        </div>
    );
}
