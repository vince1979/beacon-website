import { Shield, Lock, Eye, Server } from "lucide-react";
import { Card } from "@/components/ui/Card";

const PILLARS = [
  {
    icon: Shield,
    title: "Security-first architecture",
    description:
      "Built from the ground up with security in mind. Encrypted at rest and in transit.",
  },
  {
    icon: Lock,
    title: "Role-based access control",
    description:
      "Fine-grained permissions. Partners, associates, and billing staff see only what they need.",
  },
  {
    icon: Eye,
    title: "Full audit trail",
    description:
      "Every action logged. Every proforma change tracked. Complete accountability.",
  },
  {
    icon: Server,
    title: "SOC 2-ready infrastructure",
    description:
      "Hosted on enterprise-grade infrastructure designed for compliance-sensitive environments.",
  },
];

export function SecuritySection() {
  return (
    <section className="py-12 lg:py-20 bg-bg-surface border-y border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-success/10 border border-success/20 mb-6">
              <Shield className="w-3.5 h-3.5 text-success" />
              <span className="text-xs font-medium text-success">
                Enterprise-grade security
              </span>
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-text-primary mb-4">
              Built for firms that
              <br />
              <span className="gradient-text">can&apos;t afford risk</span>
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed mb-8">
              Legal data is sensitive. Beacon treats it that way. Our
              security-first architecture ensures your client information and
              billing data is protected at every layer.
            </p>

            <div className="flex flex-wrap gap-3">
              {["TLS 1.3", "AES-256", "SOC 2-Ready", "RBAC", "Audit Logs"].map(
                (item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-lg bg-bg-elevated border border-border-subtle text-xs font-medium text-text-secondary"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {PILLARS.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <Card key={i} className="p-5">
                  <div className="w-9 h-9 rounded-lg bg-success/10 flex items-center justify-center mb-3">
                    <Icon className="w-4.5 h-4.5 text-success w-[18px] h-[18px]" />
                  </div>
                  <h3 className="text-sm font-semibold text-text-primary mb-1.5">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    {pillar.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
