import { clsx } from "clsx";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
  hover?: boolean;
}

export function Card({ children, className, glow, hover }: CardProps) {
  return (
    <div
      className={clsx(
        "rounded-2xl border border-border-subtle bg-bg-card shadow-card",
        hover &&
          "transition-all duration-300 hover:shadow-card-hover hover:border-border-default hover:-translate-y-0.5 cursor-pointer",
        glow && "glow-border",
        className
      )}
    >
      {children}
    </div>
  );
}
