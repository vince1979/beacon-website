import {
  Activity,
  FileText,
  Search,
  Users,
  Plug,
  Brain,
} from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

const FEATURES = [
  {
    icon: Activity,
    iconColor: "#7C5CFF",
    iconBg: "rgba(124,92,255,0.12)",
    title: "Portfolio Health Dashboard",
    description:
      "Start every day with a live health score across your entire client portfolio. See outstanding actions, pending amounts, hours, and priority alerts at a glance.",
    badge: { label: "Core", variant: "primary" as const },
    highlights: ["Morning brief", "Health score", "Priority queue"],
  },
  {
    icon: FileText,
    iconColor: "#F59E0B",
    iconBg: "rgba(245,158,11,0.12)",
    title: "Proforma & Billing Review",
    description:
      "Enforce write-down thresholds, manage DOF approvals, flag overages, and submit proformas — with full audit trail and partner notes.",
    badge: { label: "Billing", variant: "warning" as const },
    highlights: ["Threshold flags", "DOF approvals", "Audit trail"],
  },
  {
    icon: Brain,
    iconColor: "#2DD4BF",
    iconBg: "rgba(45,212,191,0.12)",
    title: "Client Intelligence",
    description:
      "Run comprehensive AI-powered due diligence across 13+ data sources — SEC EDGAR, OFAC, Google News, OpenCorporates, and more — in seconds.",
    badge: { label: "AI-Powered", variant: "success" as const },
    highlights: ["13+ data sources", "Company & individual", "Instant verdicts"],
  },
  {
    icon: Users,
    iconColor: "#7C5CFF",
    iconBg: "rgba(124,92,255,0.12)",
    title: "Client Portfolio",
    description:
      "Filter, sort, and watchlist your entire client book. Track health scores, AR aging, revenue, and matter counts with real-time updates.",
    badge: { label: "Portfolio", variant: "primary" as const },
    highlights: ["Health filters", "AR aging", "Watchlists"],
  },
  {
    icon: Plug,
    iconColor: "#60A5FA",
    iconBg: "rgba(96,165,250,0.12)",
    title: "Integrations",
    description:
      "Billstream connected live. Thomson Reuters Elite 3E, iManage, Intapp Time, Chrome River, and Intapp Conflicts coming soon.",
    badge: { label: "Coming Soon", variant: "outline" as const },
    highlights: ["Elite 3E", "iManage", "Intapp Time"],
  },
  {
    icon: Search,
    iconColor: "#F59E0B",
    iconBg: "rgba(245,158,11,0.12)",
    title: "AI Insight Engine",
    description:
      "Beacon surfaces the signal in your data — flagging unusual patterns, realization drops, and engagement risks before they become problems.",
    badge: { label: "AI", variant: "warning" as const },
    highlights: ["Pattern detection", "Risk signals", "Daily brief"],
  },
];

export function FeaturesSection() {
  return (
    <section className="py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-bg-elevated border border-border-subtle mb-4">
            <span className="text-xs font-medium text-text-secondary">Platform capabilities</span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            Everything your firm
            <br />
            <span className="gradient-text">needs to operate</span>
          </h2>
          <p className="text-text-secondary text-lg leading-relaxed">
            Beacon consolidates your billing intelligence, client data, and
            operational workflows into a single, AI-enhanced workspace.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <Card
                key={i}
                hover
                className="p-6 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: feature.iconBg }}
                  >
                    <Icon
                      className="w-5 h-5"
                      style={{ color: feature.iconColor }}
                    />
                  </div>
                  <Badge variant={feature.badge.variant}>
                    {feature.badge.label}
                  </Badge>
                </div>

                <h3 className="font-display text-lg font-semibold text-text-primary mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-4">
                  {feature.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-3 border-t border-border-subtle">
                  {feature.highlights.map((h) => (
                    <span
                      key={h}
                      className="text-xs font-medium text-text-muted bg-bg-elevated px-2 py-1 rounded-md"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
