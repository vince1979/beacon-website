import type { Metadata } from "next";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { CTASection } from "@/components/sections/CTASection";
import { Target, Heart, Zap, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Company",
  description:
    "Beacon was built by a team that has seen the frustration of fragmented legal operations firsthand.",
};

const TEAM = [
  {
    name: "Alex Bergman",
    role: "Co-founder & CEO",
    bio: "Former Big Law associate. Built Beacon to solve the operational chaos he experienced firsthand.",
    initials: "AB",
    color: "#7C5CFF",
  },
  {
    name: "Maya Chen",
    role: "Co-founder & CTO",
    bio: "Ex-Palantir engineer. Obsessed with making complex data simple and actionable.",
    initials: "MC",
    color: "#2DD4BF",
  },
  {
    name: "James O'Brien",
    role: "Head of Product",
    bio: "Built billing and practice management software for 10+ years. Deeply understands how law firms work.",
    initials: "JO",
    color: "#F59E0B",
  },
  {
    name: "Priya Sharma",
    role: "Head of Customer Success",
    bio: "Former Director of Legal Operations at a top-50 firm. Your success is her mission.",
    initials: "PS",
    color: "#60A5FA",
  },
];

const VALUES = [
  {
    icon: Target,
    color: "#7C5CFF",
    title: "Relentless focus on value",
    description:
      "We measure ourselves by how much time, money, and stress we save your firm. Every feature earns its place.",
  },
  {
    icon: Heart,
    color: "#F87171",
    title: "Built for practitioners",
    description:
      "We spent months inside law firms before writing a line of code. Beacon reflects how legal teams actually work.",
  },
  {
    icon: Zap,
    color: "#F59E0B",
    title: "Move at legal speed",
    description:
      "Legal moves fast. Deadlines matter. Beacon is designed to help you act on what matters before it becomes a problem.",
  },
  {
    icon: Globe,
    color: "#2DD4BF",
    title: "Open by design",
    description:
      "We believe your data belongs to you. Beacon plays well with your existing systems and won't lock you in.",
  },
];

export default function CompanyPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge variant="primary" size="md" className="mb-6">Our story</Badge>
            <h1 className="font-display text-5xl lg:text-6xl font-bold text-text-primary mb-6">
              Built by people who
              <br />
              <span className="gradient-text">know the problem</span>
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed">
              Beacon was founded by a team that spent years inside law firms and
              legal technology — and got frustrated watching brilliant lawyers
              waste hours on broken billing workflows and missed risk signals.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-bg-surface border-y border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-4xl font-bold text-text-primary mb-6">
                Our mission
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed mb-6">
                Law firms generate enormous value for their clients. But too much
                of that value gets eroded by operational friction — slow billing
                cycles, missed write-down flags, reactive client management.
              </p>
              <p className="text-text-secondary text-lg leading-relaxed">
                Beacon&apos;s mission is to eliminate that friction. We believe
                every law firm, regardless of size, deserves institutional-grade
                operational intelligence. We&apos;re building the platform that
                makes that possible.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Founded", value: "2024" },
                { label: "Customers", value: "50+" },
                { label: "Proformas processed", value: "12K+" },
                { label: "Cities", value: "6" },
              ].map((stat) => (
                <Card key={stat.label} className="p-6 text-center">
                  <p className="font-display text-3xl font-bold gradient-text mb-1">
                    {stat.value}
                  </p>
                  <p className="text-sm text-text-muted">{stat.label}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl font-bold text-text-primary mb-12">
            What we believe
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((value, i) => {
              const Icon = value.icon;
              return (
                <Card key={i} className="p-6">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: value.color + "15", border: `1px solid ${value.color}30` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: value.color }} />
                  </div>
                  <h3 className="font-semibold text-text-primary mb-2">{value.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {value.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-bg-surface border-y border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl font-bold text-text-primary mb-12">
            The team
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM.map((member, i) => (
              <Card key={i} className="p-6">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-lg font-bold mb-4"
                  style={{
                    backgroundColor: member.color + "20",
                    color: member.color,
                    border: `1px solid ${member.color}30`,
                  }}
                >
                  {member.initials}
                </div>
                <h3 className="font-semibold text-text-primary">{member.name}</h3>
                <p className="text-xs text-text-muted mb-3">{member.role}</p>
                <p className="text-sm text-text-secondary leading-relaxed">{member.bio}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Careers */}
      <section id="careers" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <Badge variant="success" size="md" className="mb-6">We&apos;re hiring</Badge>
            <h2 className="font-display text-4xl font-bold text-text-primary mb-4">
              Join us
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed mb-8">
              We&apos;re a small, ambitious team building something genuinely new for
              an industry that needs it. If you love hard problems, care about
              craft, and want your work to matter — we&apos;d love to meet you.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-semibold shadow-glow-sm hover:shadow-glow hover:bg-primary-light transition-all"
            >
              See open roles
            </a>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
