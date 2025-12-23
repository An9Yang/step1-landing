import * as React from "react";

import { cn } from "@/lib/utils";

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "default" | "secondary" | "outline" | "ghost" | "glow";
    size?: "default" | "sm" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "default", size = "default", ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center whitespace-nowrap rounded-[16px] text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
                    {
                        "bg-black text-white hover:bg-[#424242]":
                            variant === "default",
                        "bg-fill-secondary text-foreground backdrop-blur-xl hover:bg-fill-tertiary":
                            variant === "secondary",
                        "border border-black/10 bg-transparent hover:bg-fill-tertiary":
                            variant === "outline",
                        "hover:bg-fill-tertiary": variant === "ghost",
                        "bg-black text-white shadow-[0_0_20px_rgba(0,0,0,0.15)] hover:bg-[#424242] hover:shadow-[0_0_28px_rgba(0,0,0,0.20)]":
                            variant === "glow",
                        "h-[50px] px-6 py-2": size === "default",
                        "h-9 rounded-[12px] px-4": size === "sm",
                        "h-[54px] rounded-[16px] px-8": size === "lg",
                        "h-10 w-10": size === "icon",
                    },
                    className
                )}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button };
