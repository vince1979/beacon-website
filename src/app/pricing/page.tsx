"use client";

import { useState } from "react";
import { CheckCircle, Minus, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { CTASection } from "@/components/sections/CTASection";

const TIERS = [
  {
    name: "Starter",
    monthly: 299,
    annual: 249,
    description: "For smaller firms getting started with operational intelligence.",
    badge: null,
    highlight: false,
    features: [
      { label: "Up to 5 users", included: true },
      { label: "Portfolio health dashboard", included: true },
      { label: "Billing review (basic)", included: true },
      { label: "Client intelligence checks", included: true },
      { label: "25 intelligence checks / month", included: true },
      { label: "Billstream integration", included: true },
      { label: "DOF approval workflows", included: false },
      { label: "Custom threshold rules", included: false },
      { label: "Advanced analytics", included: false },
      { label: "API access", included: false },
      { label: "Dedicated CSM", included: false },
      { label: "Custom integrations", included: false },
    ],
    cta: "Start Free Trial",
    ctaHref: "/contact",
  },
  {
    name: "Growth",
    monthly: 899,
    annual: 749,
    description: "For growing firms that need full billing intelligence and approval workflows.",
    badge: "Most Popular",
    highlight: true,
    features: [
      { label: "Up to 25 users", included: true },
      { label: "Portfolio health dashboard", included: true },
      { label: "Billing review (full)", included: true },
      { label: "Client intelligence checks", included: true },
      { label: "Unlimited intelligence checks", included: true },
      { label: "Billstream integration", included: true },
      { label: "DOF approval workflows", included: true },
      { label: "Custom threshold rules", included: true },
      { label: "Advanced analytics", included: true },
      { label: "API access", included: false },
      { label: "Dedicated CSM", included: false },
      { label: "Custom integrations", included: false },
    ],
    cta: "Start Free Trial",
    ctaHref: "/contact",
  },
  {
    name: "Enterprise",
    monthly: null,
    annual: null,
    description: "For large firms and multi-office operations that need full control.",
    badge: null,
    highlight: false,
    features: [
      { label: "Unlimited users", included: true },
      { label: "Portfolio health dashboard", included: true },
      { label: "Billing review (full)", included: true },
      { label: "Client intelligence checks", included: true },
      { label: "Unlimited intelligence checks", included: true },
      { label: "Billstream integration", included: true },
      { label: "DOF approval workflows", included: true },
      { label: "Custom threshold rules", included: true },
      { label: "Advanced analytics", included: true },
      { label: "API access", included: true },
      { label: "Dedicated CSM", included: true },
      { label: "Custom integrations", included: true },
    ],
    cta: "Talk to Sales",
    ctaHref: "/contact",
  },
];

export default function PricingPage() {
  const [annual, setAnnual] = useState(true);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="primary" size="md" className="mb-6">Simple pricing</Badge>
          <h1 className="font-display text-5xl lg:text-6xl font-bold text-text-primary mb-6">
            Transparent pricing
            <br />
            <span className="gradient-text">that scales with you</span>
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto mb-8">
            Start small and grow. Every plan includes a 14-day free trial and
            onboarding support.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-3 p-1 rounded-full bg-bg-elevated border border-border-subtle">
            <button
              onClick={() => setAnnual(false)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                !annual
                  ? "bg-bg-card text-text-primary shadow-surface"
                  : "text-text-muted hover:text-text-secondary"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                annual
                  ? "bg-bg-card text-text-primary shadow-surface"
                  : "text-text-muted hover:text-text-secondary"
              }`}
            >
              Annual
              <span className="text-xs font-semibold text-success bg-success/10 px-2 py-0.5 rounded-full">
                Save 17%
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 items-start">
            {TIERS.map((tier) => (
              <div
                key={tier.name}
                className={`relative rounded-2xl border p-8 ${
                  tier.highlight
                    ? "border-primary/50 bg-bg-card glow-border"
                    : "border-border-subtle bg-bg-card"
                }`}
              >
                {tier.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge variant="primary" size="md">
                      {tier.badge}
                    </Badge>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="font-display text-xl font-bold text-text-primary mb-1">
                    {tier.name}
                  </h3>
                  <p className="text-sm text-text-secondary">{tier.description}</p>
                </div>

                <div className="mb-6">
                  {tier.monthly !== null ? (
                    <>
                      <span className="text-4xl font-bold font-display text-text-primary">
                        ${annual ? tier.annual : tier.monthly}
                      </span>
                      <span className="text-text-muted text-sm">/mo</span>
                      {annual && (
                        <p className="text-xs text-text-muted mt-1">Billed annually</p>
                      )}
                    </>
                  ) : (
                    <span className="text-2xl font-bold font-display text-text-primary">
                      Custom pricing
                    </span>
                  )}
                </div>

                <a
                  href={tier.ctaHref}
                  className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-sm transition-all duration-200 mb-8 ${
                    tier.highlight
                      ? "bg-primary hover:bg-primary-light text-white shadow-glow-sm hover:shadow-glow"
                      : "bg-bg-elevated border border-border-default text-text-primary hover:border-border-strong"
                  }`}
                >
                  {tier.cta}
                  <ArrowRight className="w-4 h-4" />
                </a>

                <ul className="space-y-3">
                  {tier.features.map((feature) => (
                    <li
                      key={feature.label}
                      className="flex items-center gap-2.5"
                    >
                      {feature.included ? (
                        <CheckCircle className="w-4 h-4 text-success shrink-0" />
                      ) : (
                        <Minus className="w-4 h-4 text-text-muted shrink-0" />
                      )}
                      <span
                        className={`text-sm ${
                          feature.included ? "text-text-secondary" : "text-text-muted"
                        }`}
                      >
                        {feature.label}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* FAQ teaser */}
          <div className="mt-16 text-center">
            <p className="text-text-secondary text-sm">
              Questions about pricing?{" "}
              <a href="/contact" className="text-primary-light hover:underline font-medium">
                Talk to our team
              </a>{" "}
              — we&apos;re happy to build a custom plan.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
