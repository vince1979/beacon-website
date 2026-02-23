import { Plug, BarChart3, Zap } from "lucide-react";

const STEPS = [
  {
    number: "01",
    icon: Plug,
    iconColor: "#2DD4BF",
    title: "Connect your systems",
    description:
      "Link Billstream, Elite 3E, iManage, and other firm systems in minutes. Beacon syncs proformas, time entries, and client data automatically.",
  },
  {
    number: "02",
    icon: BarChart3,
    iconColor: "#7C5CFF",
    title: "Beacon builds your intelligence layer",
    description:
      "Portfolio health scores are calculated nightly. Billing thresholds and approval rules are configured once. AI monitors patterns continuously.",
  },
  {
    number: "03",
    icon: Zap,
    iconColor: "#F59E0B",
    title: "Act on what matters",
    description:
      "Every morning, your brief tells you exactly what needs attention. Review proformas, run client checks, and take action — all without switching apps.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            Up and running in{" "}
            <span className="gradient-text">days, not months</span>
          </h2>
          <p className="text-text-secondary text-lg">
            No lengthy implementation. No consultant required. Beacon is
            designed to deliver value immediately.
          </p>
        </div>

        {/* Steps */}
        <div className="relative grid md:grid-cols-3 gap-8">
          {/* Connector line */}
          <div className="hidden md:block absolute top-10 left-1/3 right-1/3 h-px bg-gradient-to-r from-transparent via-border-default to-transparent" />

          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={i} className="relative flex flex-col items-center text-center">
                {/* Step number */}
                <div className="relative mb-6">
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center border"
                    style={{
                      backgroundColor: step.iconColor + "12",
                      borderColor: step.iconColor + "30",
                      boxShadow: `0 0 20px ${step.iconColor}20`,
                    }}
                  >
                    <Icon className="w-8 h-8" style={{ color: step.iconColor }} />
                  </div>
                  <div
                    className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold bg-bg-base border"
                    style={{ borderColor: step.iconColor + "40", color: step.iconColor }}
                  >
                    {i + 1}
                  </div>
                </div>

                <h3 className="font-display text-xl font-semibold text-text-primary mb-3">
                  {step.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
