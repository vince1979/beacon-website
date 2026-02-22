"use client";

import { useEffect, useRef, useState } from "react";
import { clsx } from "clsx";

interface PortfolioGaugeProps {
  value?: number;
  max?: number;
  size?: number;
  label?: string;
  className?: string;
}

function getGaugeColor(value: number) {
  if (value >= 70) return "#2DD4BF";
  if (value >= 40) return "#F59E0B";
  return "#F87171";
}

export function PortfolioGauge({
  value = 44,
  max = 100,
  size = 140,
  label = "Portfolio Health",
  className,
}: PortfolioGaugeProps) {
  const [animated, setAnimated] = useState(false);
  const ref = useRef<SVGCircleElement>(null);

  const radius = (size - 20) / 2;
  const circumference = 2 * Math.PI * radius;
  // Only 3/4 of the circle (270deg)
  const arcLength = circumference * 0.75;
  const percent = value / max;
  const fillLength = arcLength * percent;
  const dashOffset = arcLength - fillLength;

  const color = getGaugeColor(value);

  useEffect(() => {
    const timeout = setTimeout(() => setAnimated(true), 200);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={clsx("flex flex-col items-center", className)}>
      <div className="relative" style={{ width: size, height: size }}>
        <svg
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          style={{ transform: "rotate(135deg)" }}
        >
          {/* Track */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="8"
            strokeDasharray={`${arcLength} ${circumference}`}
            strokeLinecap="round"
          />
          {/* Fill */}
          <circle
            ref={ref}
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth="8"
            strokeDasharray={`${arcLength} ${circumference}`}
            strokeDashoffset={animated ? dashOffset : arcLength}
            strokeLinecap="round"
            style={{
              transition: "stroke-dashoffset 1.5s cubic-bezier(0.4, 0, 0.2, 1)",
              filter: `drop-shadow(0 0 6px ${color}80)`,
            }}
          />
        </svg>
        {/* Center value */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span
            className="text-3xl font-bold font-display"
            style={{ color: color }}
          >
            {value}
          </span>
        </div>
      </div>
      <p className="text-xs text-text-muted mt-1 tracking-wide">{label}</p>
    </div>
  );
}
