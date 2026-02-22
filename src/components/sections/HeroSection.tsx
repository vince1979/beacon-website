import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { PortfolioGauge } from "@/components/ui/PortfolioGauge";
import { StatCard } from "@/components/ui/StatCard";
import { Badge } from "@/components/ui/Badge";
import { Clock, DollarSign, FileText } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(124,92,255,0.12) 0%, transparent 40%),
            radial-gradient(circle at 80% 20%, rgba(45,212,191,0.08) 0%, transparent 35%)
          `,
        }}
      />
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-medium text-primary-light">
                Now in Private Beta
              </span>
            </div>

            <h1 className="font-display text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight mb-6">
              <span className="text-text-primary">AI-powered</span>
              <br />
              <span className="gradient-text">operations</span>
              <br />
              <span className="text-text-primary">for modern</span>
              <br />
              <span className="text-text-primary">law firms</span>
            </h1>

            <p className="text-lg text-text-secondary leading-relaxed max-w-xl mb-8">
              Beacon brings together portfolio health monitoring, proforma
              review, client intelligence, and billing workflows — giving your
              firm a single source of operational truth.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary hover:bg-primary-light text-white font-semibold shadow-glow hover:shadow-glow transition-all duration-200 active:scale-[0.98]"
              >
                Request a Demo
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/product"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-bg-card border border-border-default text-text-primary font-semibold hover:bg-bg-hover hover:border-border-strong transition-all duration-200 active:scale-[0.98]"
              >
                <Play className="w-4 h-4 text-text-secondary" />
                View Product
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-6 mt-10 pt-8 border-t border-border-subtle">
              {[
                { label: "Law firms", value: "50+" },
                { label: "Proformas reviewed", value: "12K+" },
                { label: "Avg. write-down saved", value: "18%" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-xl font-bold font-display text-text-primary">
                    {stat.value}
                  </p>
                  <p className="text-xs text-text-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: App preview card */}
          <div className="relative lg:flex justify-end hidden">
            <div className="relative w-full max-w-sm">
              {/* Glow behind card */}
              <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-2xl" />

              {/* Main card */}
              <div className="relative rounded-3xl border border-border-subtle bg-bg-card shadow-card overflow-hidden">
                {/* Mock header */}
                <div className="px-5 pt-5 pb-4 border-b border-border-subtle">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-text-primary">
                        Good afternoon, Alex
                      </p>
                      <p className="text-xs text-text-muted mt-0.5">
                        Sunday, February 22
                      </p>
                    </div>
                    <Badge variant="success">
                      <div className="w-1.5 h-1.5 rounded-full bg-success" />
                      Connected
                    </Badge>
                  </div>
                </div>

                {/* Gauge */}
                <div className="flex justify-center py-6">
                  <PortfolioGauge value={44} size={140} />
                </div>

                {/* Stats */}
                <div className="px-4 pb-4 grid grid-cols-3 gap-2">
                  <StatCard
                    label="Actions"
                    value="18"
                    icon={<FileText className="w-3.5 h-3.5" />}
                  />
                  <StatCard
                    label="Pending"
                    value="$620K"
                    accent="warning"
                    icon={<DollarSign className="w-3.5 h-3.5" />}
                  />
                  <StatCard
                    label="Hours"
                    value="19.3h"
                    icon={<Clock className="w-3.5 h-3.5" />}
                  />
                </div>

                {/* Morning brief */}
                <div className="mx-4 mb-4 rounded-xl bg-bg-elevated border border-border-subtle p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-base">✦</span>
                    <span className="text-sm font-semibold text-text-primary">
                      Your Morning Brief
                    </span>
                  </div>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    <span className="text-warning font-medium">
                      TODAY&apos;S PRIORITY
                    </span>
                    <br />
                    You have 18 items requiring attention. TELUS Corporation
                    proforma has a write-down flag and needs DOF approval.
                  </p>
                </div>
              </div>

              {/* Floating warning card */}
              <div className="absolute -right-4 top-1/3 w-48 rounded-xl bg-bg-card border border-warning/30 p-3 shadow-card">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm">⚠️</span>
                  <span className="text-xs font-medium text-warning">
                    Write-down Flag
                  </span>
                </div>
                <p className="text-xs text-text-secondary leading-tight">
                  30% exceeds 25% threshold
                </p>
                <p className="text-xs font-semibold text-text-primary mt-1">
                  -$27,630
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
