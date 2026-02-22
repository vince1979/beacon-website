"use client";

import { clsx } from "clsx";

interface GlowRingProps {
  size?: number;
  color?: string;
  className?: string;
  children?: React.ReactNode;
}

export function GlowRing({
  size = 80,
  color = "#7C5CFF",
  className,
  children,
}: GlowRingProps) {
  return (
    <div
      className={clsx("relative flex items-center justify-center rounded-full", className)}
      style={{
        width: size,
        height: size,
        boxShadow: `0 0 20px ${color}40, 0 0 40px ${color}20`,
        border: `1.5px solid ${color}50`,
        background: `radial-gradient(circle at center, ${color}15 0%, transparent 70%)`,
      }}
    >
      {children}
    </div>
  );
}
