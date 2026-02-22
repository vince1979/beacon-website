import { clsx } from "clsx";

interface ClientBadgeProps {
  initials: string;
  name: string;
  color?: string;
  className?: string;
}

const COLORS = [
  { bg: "#F59E0B", text: "#fff" },
  { bg: "#2DD4BF", text: "#0A0D14" },
  { bg: "#7C5CFF", text: "#fff" },
  { bg: "#F87171", text: "#fff" },
  { bg: "#60A5FA", text: "#0A0D14" },
  { bg: "#A78BFA", text: "#fff" },
];

function hashColor(str: string) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return COLORS[Math.abs(hash) % COLORS.length];
}

export function ClientBadge({ initials, name, className }: ClientBadgeProps) {
  const { bg, text } = hashColor(name);
  return (
    <div className={clsx("flex flex-col items-center gap-1.5", className)}>
      <div
        className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold border-2 shrink-0"
        style={{
          backgroundColor: bg + "20",
          borderColor: bg + "60",
          color: bg,
          boxShadow: `0 0 12px ${bg}30`,
        }}
      >
        {initials}
      </div>
      <span className="text-xs text-text-muted text-center leading-tight max-w-[56px] truncate">
        {name}
      </span>
    </div>
  );
}
