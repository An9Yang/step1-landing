import * as React from "react";
// import { Slot } from "@radix-ui/react-slot"; 
// Removed unused import to fix lint error
// Actually, for "Zero-dependency strategy" mentioned in PRD, I should stick to simple HTML button unless I need polymorphism. 
// "Zero-dependency UI" -> I'll avoid Radix if possible or keep it minimal. 
// I'll implementing a standard button without Slot for now to stay zero-dep as requested, or just use 'asChild' pattern if I really need it, but let's keep it simple.

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
                    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
                    {
                        "bg-primary text-primary-foreground hover:bg-primary/90":
                            variant === "default",
                        "bg-secondary text-secondary-foreground hover:bg-secondary/80":
                            variant === "secondary",
                        "border border-input bg-background hover:bg-accent hover:text-accent-foreground":
                            variant === "outline",
                        "hover:bg-accent hover:text-accent-foreground": variant === "ghost",
                        "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg hover:shadow-xl hover:opacity-90 transition-all duration-300":
                            variant === "glow",
                        "h-10 px-4 py-2": size === "default",
                        "h-9 rounded-md px-3": size === "sm",
                        "h-11 rounded-md px-8": size === "lg",
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
