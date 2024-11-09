"use client";

import { cn } from "@/lib/utils";
import { type BaseProps } from "@/lib/types";

interface BackgroundPatternProps extends BaseProps {
  variant?: "dots" | "grid" | "noise";
  opacity?: number;
}

export function BackgroundPattern({
  variant = "dots",
  opacity = 0.1,
  className
}: BackgroundPatternProps) {
  return (
    <div 
      className={cn(
        "absolute inset-0 pointer-events-none",
        variant === "dots" && "bg-[radial-gradient(circle_at_center,_rgba(0,0,0,0.1)_1px,_transparent_1px)] bg-[length:24px_24px]",
        variant === "grid" && "bg-[linear-gradient(to_right,_rgba(0,0,0,0.1)_1px,_transparent_1px),_linear-gradient(to_bottom,_rgba(0,0,0,0.1)_1px,_transparent_1px)] bg-[size:24px_24px]",
        variant === "noise" && "bg-[url('/noise.png')]",
        className
      )}
      style={{ opacity }}
      aria-hidden="true"
    />
  );
}