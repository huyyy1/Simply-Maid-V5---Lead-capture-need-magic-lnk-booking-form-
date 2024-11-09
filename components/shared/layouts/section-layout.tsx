"use client";

import { motion } from "framer-motion";
import { type WithTitle } from "@/lib/types";
import { cn } from "@/lib/utils";

interface SectionLayoutProps extends WithTitle {
  variant?: "default" | "accent" | "primary";
  spacing?: "sm" | "md" | "lg";
  pattern?: "none" | "dots" | "grid" | "noise";
  gradient?: boolean;
}

export function SectionLayout({
  title,
  description,
  variant = "default",
  spacing = "lg",
  pattern = "none",
  gradient = false,
  className,
  children
}: SectionLayoutProps) {
  return (
    <section className={cn(
      "relative",
      variant === "accent" && "bg-accent",
      variant === "primary" && "bg-primary text-white",
      spacing === "sm" && "py-12",
      spacing === "md" && "py-16",
      spacing === "lg" && "py-24",
      className
    )}>
      {pattern !== "none" && (
        <div 
          className={cn(
            "absolute inset-0 pointer-events-none",
            pattern === "dots" && "bg-[radial-gradient(circle_at_center,_rgba(0,0,0,0.1)_1px,_transparent_1px)] bg-[length:24px_24px]",
            pattern === "grid" && "bg-[linear-gradient(to_right,_rgba(0,0,0,0.1)_1px,_transparent_1px),_linear-gradient(to_bottom,_rgba(0,0,0,0.1)_1px,_transparent_1px)] bg-[size:24px_24px]",
            pattern === "noise" && "bg-[url('/noise.png')]"
          )}
          style={{ opacity: 0.1 }}
          aria-hidden="true"
        />
      )}
      {gradient && (
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      )}
      <div className="container px-4 mx-auto relative">
        {(title || description) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">{title}</h2>
            {description && (
              <p className="text-lg text-muted-foreground">{description}</p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}