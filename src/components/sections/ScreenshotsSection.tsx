"use client";

import { useState } from "react";
import Image from "next/image";
import { clsx } from "clsx";
import { Monitor } from "lucide-react";

const SCREENS = [
  {
    id: "dashboard",
    label: "Dashboard",
    description: "Morning brief, portfolio health score, priority actions.",
    file: "/screens/dashboard.png",
    accent: "#7C5CFF",
  },
  {
    id: "billing",
    label: "Billing Review",
    description: "Proforma flags, write-down thresholds, DOF approvals.",
    file: "/screens/billing-review.png",
    accent: "#F59E0B",
  },
  {
    id: "intelligence",
    label: "Client Intelligence",
    description: "AI-powered due diligence across 13+ data sources.",
    file: "/screens/client-intelligence.png",
    accent: "#2DD4BF",
  },
  {
    id: "clients",
    label: "Client Portfolio",
    description: "Health filters, AR aging, revenue, matters.",
    file: "/screens/clients-portfolio.png",
    accent: "#7C5CFF",
  },
  {
    id: "settings",
    label: "Integrations",
    description: "Connected systems and upcoming integrations.",
    file: "/screens/settings-integrations.png",
    accent: "#60A5FA",
  },
];

function ScreenPlaceholder({ label, accent }: { label: string; accent: string }) {
  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center gap-4 bg-bg-elevated rounded-xl"
      style={{ minHeight: 340 }}
    >
      <div
        className="w-16 h-16 rounded-2xl flex items-center justify-center"
        style={{ backgroundColor: accent + "20", border: `1px solid ${accent}30` }}
      >
        <Monitor className="w-8 h-8" style={{ color: accent }} />
      </div>
      <div className="text-center">
        <p className="text-sm font-medium text-text-secondary">{label}</p>
        <p className="text-xs text-text-muted mt-1">
          Place screenshot at{" "}
          <code className="font-mono text-xs bg-bg-card px-1.5 py-0.5 rounded">
            public/screens/
          </code>
        </p>
      </div>
    </div>
  );
}

export function ScreenshotsSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-24 lg:py-32 bg-bg-surface border-y border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            See Beacon in{" "}
            <span className="gradient-text">action</span>
          </h2>
          <p className="text-text-secondary text-lg">
            Built for the way legal teams actually work — not the way software
            vendors think they do.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Tab list */}
          <div className="lg:col-span-1 flex lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0">
            {SCREENS.map((screen, i) => (
              <button
                key={screen.id}
                onClick={() => setActive(i)}
                className={clsx(
                  "flex-shrink-0 text-left px-4 py-3 rounded-xl border text-sm font-medium transition-all duration-200",
                  i === active
                    ? "border-primary/50 bg-primary/10 text-primary-light"
                    : "border-border-subtle bg-transparent text-text-secondary hover:text-text-primary hover:border-border-default"
                )}
                style={
                  i === active
                    ? { boxShadow: `0 0 12px ${SCREENS[i].accent}25` }
                    : {}
                }
              >
                {screen.label}
              </button>
            ))}
          </div>

          {/* Screenshot display */}
          <div className="lg:col-span-4">
            <div className="relative rounded-2xl border border-border-subtle overflow-hidden shadow-card bg-bg-card">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border-subtle bg-bg-elevated">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-danger/50" />
                  <div className="w-3 h-3 rounded-full bg-warning/50" />
                  <div className="w-3 h-3 rounded-full bg-success/50" />
                </div>
                <div className="flex-1 bg-bg-base rounded-md px-3 py-1 text-xs text-text-muted text-center max-w-xs mx-auto">
                  app.beaconlegal.ai
                </div>
              </div>

              {/* Screenshot */}
              <div className="relative" style={{ minHeight: 400 }}>
                {SCREENS.map((screen, i) => (
                  <div
                    key={screen.id}
                    className={clsx(
                      "transition-opacity duration-300",
                      i === active ? "opacity-100" : "opacity-0 absolute inset-0"
                    )}
                  >
                    <Image
                      src={screen.file}
                      alt={screen.label}
                      width={900}
                      height={600}
                      className="w-full h-auto"
                      onError={() => {}}
                      priority={i === 0}
                    />
                  </div>
                ))}
                {/* Fallback placeholder overlay - shown if needed */}
              </div>
            </div>

            {/* Caption */}
            <div className="mt-4 flex items-center gap-3">
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: SCREENS[active].accent }}
              />
              <p className="text-sm text-text-secondary">
                <span className="text-text-primary font-medium">
                  {SCREENS[active].label}:
                </span>{" "}
                {SCREENS[active].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
