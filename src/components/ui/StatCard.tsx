import { clsx } from "clsx";

interface StatCardProps {
  label: string;
  value: string;
  sub?: string;
  accent?: "default" | "success" | "warning" | "danger" | "primary";
  icon?: React.ReactNode;
  className?: string;
}

export function StatCard({
  label,
  value,
  sub,
  accent = "default",
  icon,
  className,
}: StatCardProps) {
  const accentColors = {
    default: "text-text-primary",
    success: "text-success",
    warning: "text-warning",
    danger: "text-danger",
    primary: "text-primary-light",
  };

  return (
    <div
      className={clsx(
        "rounded-xl bg-bg-elevated border border-border-subtle p-4 flex items-center gap-3",
        className
      )}
    >
      {icon && (
        <div className="w-8 h-8 rounded-lg bg-bg-card flex items-center justify-center text-text-secondary shrink-0">
          {icon}
        </div>
      )}
      <div>
        <p className={clsx("text-lg font-semibold leading-tight", accentColors[accent])}>
          {value}
        </p>
        <p className="text-xs text-text-muted uppercase tracking-wider mt-0.5">{label}</p>
        {sub && <p className="text-xs text-text-secondary mt-0.5">{sub}</p>}
      </div>
    </div>
  );
}
