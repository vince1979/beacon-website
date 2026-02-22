"use client";

import { forwardRef } from "react";
import { clsx } from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  href?: string;
  as?: "button" | "a";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = "primary", size = "md", className, children, ...props },
    ref
  ) => {
    const base =
      "inline-flex items-center justify-center gap-2 font-medium rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg-base disabled:opacity-50 disabled:pointer-events-none select-none";

    const variants = {
      primary:
        "bg-primary hover:bg-primary-light text-white shadow-glow-sm hover:shadow-glow active:scale-[0.98]",
      secondary:
        "bg-bg-card border border-border-default text-text-primary hover:bg-bg-hover hover:border-border-strong active:scale-[0.98]",
      ghost:
        "text-text-secondary hover:text-text-primary hover:bg-bg-elevated active:scale-[0.98]",
      danger:
        "bg-danger/10 border border-danger/30 text-danger hover:bg-danger/20 active:scale-[0.98]",
    };

    const sizes = {
      sm: "px-3 py-1.5 text-sm",
      md: "px-5 py-2.5 text-sm",
      lg: "px-7 py-3.5 text-base",
    };

    return (
      <button
        ref={ref}
        className={clsx(base, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
