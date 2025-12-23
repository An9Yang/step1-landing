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
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/20 to-transparent" />

            {/* Moving Glint: Simulates light reflection on glass/metal */}
            <motion.div
                className="absolute inset-y-0 w-32 bg-gradient-to-r from-transparent via-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                    left: useMotionTemplate`${mouseX}px`,
                    x: "-50%",
                }}
            />

            {/* Interactive glint on hover */}
            <div
                className="absolute inset-0 z-10 opacity-0 hover:opacity-100 transition-opacity duration-500"
            >
                <motion.div
                    className="absolute inset-y-0 w-40 bg-gradient-to-r from-transparent via-black/40 to-transparent blur-[1px]"
                    style={{
                        left: useMotionTemplate`${mouseX}px`,
                        x: "-50%",
                    }}
                />
            </div>
        </div>
    );
}
