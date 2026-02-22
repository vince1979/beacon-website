import type { Metadata } from "next";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { StatCard } from "@/components/ui/StatCard";
import { PortfolioGauge } from "@/components/ui/PortfolioGauge";
import { CTASection } from "@/components/sections/CTASection";
import {
  Activity,
  FileText,
  Brain,
  Users,
  Plug,
  AlertTriangle,
  CheckCircle,
  Clock,
  DollarSign,
  Filter,
  Star,
  Search,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Product",
  description:
    "Explore Beacon's platform: Dashboard, Billing Review, Client Intelligence, Client Portfolio, and Integrations.",
};

const MODULES = [
  {
    id: "dashboard",
    icon: Activity,
    iconColor: "#7C5CFF",
    label: "Dashboard",
    title: "Your daily command center",
    description:
      "The Dashboard gives every partner and billing lead a single, AI-curated view of what matters today. Morning briefs surface the highest-priority items. Portfolio Pulse flags risks before they escalate.",
    features: [
      "AI-generated morning brief with priority ranking",
      "Live portfolio health score (0–100)",
      "Outstanding actions, pending amounts, billable hours",
      "Upcoming meetings with Intelligence readiness indicator",
      "Portfolio Pulse — real-time risk signals",
      "AI Insight of the Day",
    ],
    preview: (
      <div className="p-5">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-sm font-semibold text-text-primary">Good morning, Alex</p>
            <p className="text-xs text-text-muted">Sunday, February 22</p>
          </div>
          <Badge variant="success">
            <div className="w-1.5 h-1.5 rounded-full bg-success" />
            Connected
          </Badge>
        </div>
        <div className="flex justify-center mb-4">
          <PortfolioGauge value={44} size={120} />
        </div>
        <div className="grid grid-cols-3 gap-2 mb-4">
          <StatCard label="Actions" value="18" icon={<FileText className="w-3.5 h-3.5" />} />
          <StatCard label="Pending" value="$620K" accent="warning" icon={<DollarSign className="w-3.5 h-3.5" />} />
          <StatCard label="Hours" value="19.3h" icon={<Clock className="w-3.5 h-3.5" />} />
        </div>
        <div className="rounded-lg bg-bg-elevated border border-border-subtle p-3">
          <p className="text-xs font-semibold text-warning mb-1">TODAY&apos;S PRIORITY</p>
          <p className="text-xs text-text-secondary">TELUS proforma has a write-down flag — DOF approval required before EOD.</p>
        </div>
      </div>
    ),
  },
  {
    id: "billing",
    icon: FileText,
    iconColor: "#F59E0B",
    label: "Billing Review",
    title: "Proforma control, reimagined",
    description:
      "Beacon's Billing Review replaces scattered email approvals with a structured, threshold-driven workflow. Write-down flags are automatic. DOF approvals are tracked. Partner notes are preserved.",
    features: [
      "Proformas, time entries, and expenses in one view",
      "Configurable write-down threshold flags (e.g. >25%)",
      "Designated Originating Fees (DOF) approval tracking",
      "Partner notes and client instruction records",
      "Submit, forward, defer, or return with a single click",
      "Full audit trail on every proforma",
    ],
    preview: (
      <div className="p-5">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-2 h-2 rounded-full bg-success" />
          <span className="text-xs font-medium text-success">BILLSTREAM CONNECTED</span>
        </div>
        <div className="flex gap-2 mb-4 flex-wrap">
          <Badge variant="primary">All (18)</Badge>
          <Badge variant="outline">Proformas (7)</Badge>
          <Badge variant="outline">Time Entries (7)</Badge>
          <Badge variant="outline">Expenses (4)</Badge>
        </div>
        <div className="rounded-xl bg-bg-elevated border border-warning/30 p-4">
          <div className="flex items-start justify-between mb-2">
            <div>
              <p className="text-sm font-semibold text-text-primary">TELUS Corporation</p>
              <p className="text-xs text-text-muted">CRTC Regulatory Filing · MT-88403</p>
            </div>
            <Badge variant="warning">RETURN</Badge>
          </div>
          <div className="flex items-center gap-2 text-xs text-warning bg-warning/10 rounded-lg px-3 py-2 mb-2">
            <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
            Write-down of 30.0% exceeds 25% threshold
          </div>
          <div className="space-y-1 text-xs">
            <div className="flex justify-between text-text-secondary">
              <span>Fees</span><span>$87,500</span>
            </div>
            <div className="flex justify-between text-danger">
              <span>Write-down (30.0%)</span><span>-$27,630</span>
            </div>
            <div className="flex justify-between text-text-primary font-semibold border-t border-border-subtle pt-1 mt-1">
              <span>Modified Total</span><span>$64,470</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "intelligence",
    icon: Brain,
    iconColor: "#2DD4BF",
    label: "Client Intelligence",
    title: "Due diligence in seconds",
    description:
      "Beacon's Intelligence module runs comprehensive background checks across 13+ data sources simultaneously — surfacing regulatory flags, sanctions, legal proceedings, and news risk before you engage.",
    features: [
      "Company and individual due diligence",
      "13+ data sources: SEC, OFAC, Google News, OpenCorporates",
      "Regulatory databases: EPA, OSHA, CFPB, DOL, FDA",
      "Litigation history via CourtListener",
      "UK Companies House and international sources",
      "Instant verdict with source attribution",
    ],
    preview: (
      <div className="p-5">
        <div className="text-center mb-4">
          <p className="text-sm font-bold text-primary-light font-display">Client Intelligence</p>
          <p className="text-xs text-text-muted">Comprehensive due diligence powered by AI</p>
        </div>
        <div className="flex gap-2 mb-4 justify-center">
          <div className="px-3 py-1.5 rounded-full bg-primary text-white text-xs font-medium">🏢 Company</div>
          <div className="px-3 py-1.5 rounded-full border border-border-default text-text-secondary text-xs font-medium">👤 Individual</div>
        </div>
        <div className="rounded-xl border border-border-default bg-bg-elevated px-3 py-2.5 flex items-center gap-2 mb-3">
          <Search className="w-4 h-4 text-text-muted" />
          <span className="text-sm text-text-muted">Enter company name...</span>
        </div>
        <div className="flex flex-wrap gap-1.5 mb-3">
          {["SEC EDGAR", "OFAC", "Google News", "OpenCorporates", "OSHA", "EPA ECHO", "FDA", "DOL"].map(src => (
            <span key={src} className="text-xs bg-bg-card border border-border-subtle px-2 py-0.5 rounded-md text-text-muted">{src}</span>
          ))}
        </div>
        <div className="flex items-center justify-center gap-2 text-xs text-text-muted">
          <div className="w-1.5 h-1.5 rounded-full bg-success" />
          Powered by 13+ data sources
        </div>
      </div>
    ),
  },
  {
    id: "clients",
    icon: Users,
    iconColor: "#7C5CFF",
    label: "Client Portfolio",
    title: "Your entire book, at a glance",
    description:
      "The Clients module gives relationship partners a live view of every client in your portfolio — health scores, revenue, AR aging, matter counts, and custom watchlists.",
    features: [
      "Portfolio-wide health scores with trend indicators",
      "Filter by Active, Warning, Flagged, or Watchlist",
      "Revenue, AR aging (in days), and matter counts",
      "Searchable, sortable client table",
      "Add clients to watchlists for priority monitoring",
      "Quick access to Intelligence from any client card",
    ],
    preview: (
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div>
            <p className="text-sm font-bold text-text-primary">Client Portfolio</p>
            <p className="text-xs text-text-muted">10 clients</p>
          </div>
          <button className="text-xs px-3 py-1.5 rounded-lg bg-primary text-white font-medium">+ Add Client</button>
        </div>
        <div className="grid grid-cols-4 gap-2 mb-3">
          <StatCard label="Total" value="10" />
          <StatCard label="Active" value="8" accent="success" />
          <StatCard label="Avg Health" value="36" accent="warning" />
          <StatCard label="Watch" value="2" accent="danger" />
        </div>
        <div className="flex gap-2 mb-3 flex-wrap">
          {["All", "Active", "Warning", "Flagged"].map((f, i) => (
            <span key={f} className={`text-xs px-3 py-1 rounded-full border font-medium cursor-pointer ${i === 0 ? "bg-primary text-white border-primary" : "border-border-subtle text-text-secondary"}`}>{f}</span>
          ))}
          <span className="text-xs px-3 py-1 rounded-full border border-border-subtle text-text-secondary font-medium cursor-pointer flex items-center gap-1"><Star className="w-3 h-3" />Watchlist</span>
        </div>
        {[
          { score: 54, name: "6621309 Canada Inc", rev: "$38K", ar: "32d", matters: 6, status: "Active" },
          { score: 50, name: "lululemon Athletica", rev: "$46K", ar: "31d", matters: 5, status: "Active" },
          { score: 47, name: "Meridian Capital Group", rev: "$20K", ar: "45d", matters: 5, status: "Active" },
        ].map((c, i) => (
          <div key={i} className="rounded-lg border border-border-subtle bg-bg-elevated p-3 mb-2">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full border flex items-center justify-center text-xs font-bold" style={{ borderColor: c.score > 50 ? "#F59E0B60" : "#F8717160", color: c.score > 50 ? "#F59E0B" : "#F87171" }}>{c.score}</div>
                <span className="text-xs font-medium text-text-primary">{c.name}</span>
              </div>
              <Badge variant="success">{c.status}</Badge>
            </div>
            <div className="grid grid-cols-3 gap-1.5">
              {[["Revenue", c.rev, "default"], ["AR Age", c.ar, "warning"], ["Matters", String(c.matters), "default"]].map(([label, val, accent]) => (
                <div key={label} className="bg-bg-card rounded-md p-1.5 text-center">
                  <p className={`text-xs font-semibold ${accent === "warning" ? "text-warning" : "text-text-primary"}`}>{val}</p>
                  <p className="text-[10px] text-text-muted uppercase">{label}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "integrations",
    icon: Plug,
    iconColor: "#60A5FA",
    label: "Integrations",
    title: "Connect your existing systems",
    description:
      "Beacon is designed to sit on top of your existing legal software stack — pulling data in, applying intelligence, and pushing actions back out. No rip-and-replace required.",
    features: [
      "Billstream — live, proforma and billing data",
      "Thomson Reuters Elite 3E — practice management (coming soon)",
      "iManage — document management (coming soon)",
      "Intapp Time — time entry management (coming soon)",
      "Chrome River — expense management (coming soon)",
      "Intapp Conflicts — conflict checks (coming soon)",
    ],
    preview: (
      <div className="p-5">
        <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-3">Connected Systems</p>
        {[
          { initials: "BS", name: "Billstream", sub: "Proforma & Billing Review", status: "connected", color: "#7C5CFF" },
          { initials: "IT", name: "Intapp Time", sub: "Time Entry Management", status: "soon", color: "#60A5FA" },
          { initials: "3E", name: "Thomson Reuters 3E", sub: "Practice Management", status: "soon", color: "#2DD4BF" },
          { initials: "iM", name: "iManage", sub: "Document Management", status: "soon", color: "#F59E0B" },
        ].map((item) => (
          <div key={item.name} className="flex items-center gap-3 rounded-lg border border-border-subtle bg-bg-elevated p-3 mb-2">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center text-xs font-bold shrink-0" style={{ backgroundColor: item.color + "20", color: item.color }}>{item.initials}</div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-text-primary">{item.name}</p>
              <p className="text-xs text-text-muted">{item.sub}</p>
            </div>
            {item.status === "connected"
              ? <Badge variant="success"><CheckCircle className="w-3 h-3" />Connected</Badge>
              : <Badge variant="outline">Coming Soon</Badge>
            }
          </div>
        ))}
      </div>
    ),
  },
];

export default function ProductPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="primary" size="md" className="mb-6">Platform Overview</Badge>
          <h1 className="font-display text-5xl lg:text-6xl font-bold text-text-primary mb-6">
            One platform.
            <br />
            <span className="gradient-text">Total operational clarity.</span>
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Beacon brings together every operational workflow a modern law firm needs —
            billing intelligence, client monitoring, due diligence, and integrations.
          </p>
        </div>
      </section>

      {/* Modules */}
      {MODULES.map((module, i) => {
        const Icon = module.icon;
        const isEven = i % 2 === 0;
        return (
          <section
            key={module.id}
            id={module.id}
            className={`py-20 lg:py-28 ${i % 2 !== 0 ? "bg-bg-surface border-y border-border-subtle" : ""}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className={`grid lg:grid-cols-2 gap-16 items-center ${!isEven ? "lg:grid-flow-dense" : ""}`}>
                {/* Content */}
                <div className={!isEven ? "lg:col-start-2" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: module.iconColor + "15", border: `1px solid ${module.iconColor}30` }}
                    >
                      <Icon className="w-5 h-5" style={{ color: module.iconColor }} />
                    </div>
                    <span
                      className="text-sm font-semibold uppercase tracking-wider"
                      style={{ color: module.iconColor }}
                    >
                      {module.label}
                    </span>
                  </div>
                  <h2 className="font-display text-3xl lg:text-4xl font-bold text-text-primary mb-4">
                    {module.title}
                  </h2>
                  <p className="text-text-secondary leading-relaxed mb-6">
                    {module.description}
                  </p>
                  <ul className="space-y-2.5">
                    {module.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <CheckCircle
                          className="w-4 h-4 mt-0.5 shrink-0"
                          style={{ color: module.iconColor }}
                        />
                        <span className="text-sm text-text-secondary">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Preview */}
                <div className={!isEven ? "lg:col-start-1 lg:row-start-1" : ""}>
                  <div className="relative">
                    <div
                      className="absolute -inset-3 rounded-3xl blur-xl opacity-30"
                      style={{ backgroundColor: module.iconColor }}
                    />
                    <Card className="relative overflow-hidden">
                      {module.preview}
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      <CTASection />
    </>
  );
}
