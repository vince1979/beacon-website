"use client";

import { useState } from "react";
import { clsx } from "clsx";
import {
  TrendingUp, AlertTriangle, CheckCircle, Clock,
  Search, Zap, Link, ChevronRight,
  ArrowUp, ArrowDown, Filter, Bell
} from "lucide-react";

function Badge({ children, color = "purple" }: { children: React.ReactNode; color?: string }) {
  const colors: Record<string, string> = {
    purple: "bg-[#7C5CFF]/15 text-[#9B7DFF] border-[#7C5CFF]/25",
    teal:   "bg-[#2DD4BF]/15 text-[#2DD4BF] border-[#2DD4BF]/25",
    amber:  "bg-[#F59E0B]/15 text-[#F59E0B] border-[#F59E0B]/25",
    red:    "bg-[#F87171]/15 text-[#F87171] border-[#F87171]/25",
    blue:   "bg-[#60A5FA]/15 text-[#60A5FA] border-[#60A5FA]/25",
    green:  "bg-emerald-500/15 text-emerald-400 border-emerald-500/25",
  };
  return (
    <span className={clsx("inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-semibold border", colors[color])}>
      {children}
    </span>
  );
}

function GaugeRing({ value, size = 80 }: { value: number; size?: number }) {
  const r = size * 0.38;
  const cx = size / 2;
  const cy = size / 2;
  const totalArc = 270;
  const startAngle = 135;
  const circumference = 2 * Math.PI * r;
  const arcLength = (totalArc / 360) * circumference;
  const color = value >= 70 ? "#2DD4BF" : value >= 40 ? "#F59E0B" : "#F87171";
  const toRad = (deg: number) => (deg * Math.PI) / 180;
  const arcPath = (startDeg: number, endDeg: number) => {
    const start = { x: cx + r * Math.cos(toRad(startDeg)), y: cy + r * Math.sin(toRad(startDeg)) };
    const end = { x: cx + r * Math.cos(toRad(endDeg)), y: cy + r * Math.sin(toRad(endDeg)) };
    const large = endDeg - startDeg > 180 ? 1 : 0;
    return `M ${start.x} ${start.y} A ${r} ${r} 0 ${large} 1 ${end.x} ${end.y}`;
  };
  return (
    <svg width={size} height={size}>
      <path d={arcPath(startAngle, startAngle + totalArc)} fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth={size * 0.07} strokeLinecap="round" />
      <path d={arcPath(startAngle, startAngle + (value / 100) * totalArc)} fill="none" stroke={color} strokeWidth={size * 0.07} strokeLinecap="round" style={{ filter: `drop-shadow(0 0 4px ${color}80)` }} />
      <text x={cx} y={cy + 4} textAnchor="middle" fill="white" fontSize={size * 0.18} fontWeight="700">{value}</text>
      <text x={cx} y={cy + size * 0.18} textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize={size * 0.1}>score</text>
    </svg>
  );
}

function MiniSparkline({ values, color }: { values: number[]; color: string }) {
  const max = Math.max(...values);
  const min = Math.min(...values);
  const w = 60; const h = 24;
  const points = values.map((v, i) => {
    const x = (i / (values.length - 1)) * w;
    const y = h - ((v - min) / (max - min || 1)) * h;
    return `${x},${y}`;
  }).join(" ");
  return (
    <svg width={w} height={h}>
      <polyline points={points} fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function DashboardMockup() {
  return (
    <div className="p-4 space-y-3 text-xs">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[11px] text-[#8899BB]">Good morning, Sarah</p>
          <p className="text-sm font-semibold text-white">Monday · Feb 24</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Bell className="w-4 h-4 text-[#8899BB]" />
            <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-[#F87171]" />
          </div>
          <div className="w-7 h-7 rounded-full bg-[#7C5CFF]/30 border border-[#7C5CFF]/40 flex items-center justify-center text-[10px] font-bold text-[#9B7DFF]">SL</div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {[
          { label: "Portfolio Health", value: "74", delta: "+3", up: true },
          { label: "Active Matters", value: "312", delta: "+8", up: true },
          { label: "AR > 90 Days", value: "$2.1M", delta: "+12%", up: false },
          { label: "Proformas Due", value: "18", delta: "-4", up: true },
        ].map((s) => (
          <div key={s.label} className="bg-[#141C2B] rounded-xl p-2.5 border border-white/5">
            <p className="text-[9px] text-[#8899BB] leading-tight mb-1">{s.label}</p>
            <p className="text-sm font-bold text-white">{s.value}</p>
            <div className={clsx("flex items-center gap-0.5 text-[9px] mt-0.5", s.up ? "text-emerald-400" : "text-[#F87171]")}>
              {s.up ? <ArrowUp className="w-2.5 h-2.5" /> : <ArrowDown className="w-2.5 h-2.5" />}
              {s.delta}
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-5 gap-3">
        <div className="col-span-3 bg-[#141C2B] rounded-xl border border-white/5 p-3">
          <div className="flex items-center gap-2 mb-2">
            <Zap className="w-3.5 h-3.5 text-[#7C5CFF]" />
            <p className="text-[11px] font-semibold text-white">Morning Brief</p>
            <Badge color="purple">AI</Badge>
          </div>
          <div className="space-y-2">
            {[
              { icon: AlertTriangle, color: "#F87171", text: "Rogers Media AR has exceeded 90-day threshold — $340K outstanding" },
              { icon: Clock, color: "#F59E0B", text: "14 proformas pending review — 3 flagged for write-down" },
              { icon: TrendingUp, color: "#2DD4BF", text: "CN Rail matter volume up 22% — consider capacity review" },
              { icon: CheckCircle, color: "#7C5CFF", text: "Shopify Q1 retainer renewed — $280K locked through March" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2">
                <item.icon className="w-3 h-3 mt-0.5 flex-shrink-0" style={{ color: item.color }} />
                <p className="text-[10px] text-[#8899BB] leading-snug">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-2 bg-[#141C2B] rounded-xl border border-white/5 p-3 flex flex-col items-center justify-center gap-1">
          <p className="text-[10px] text-[#8899BB]">Portfolio Health</p>
          <GaugeRing value={74} size={90} />
          <div className="flex gap-2 mt-1">
            <div className="text-center"><p className="text-[9px] text-emerald-400 font-semibold">18</p><p className="text-[8px] text-[#4A5568]">Healthy</p></div>
            <div className="text-center"><p className="text-[9px] text-[#F59E0B] font-semibold">9</p><p className="text-[8px] text-[#4A5568]">At Risk</p></div>
            <div className="text-center"><p className="text-[9px] text-[#F87171] font-semibold">3</p><p className="text-[8px] text-[#4A5568]">Critical</p></div>
          </div>
        </div>
      </div>
      <div className="bg-[#141C2B] rounded-xl border border-white/5 p-3">
        <p className="text-[11px] font-semibold text-white mb-2">Priority Actions</p>
        <div className="grid grid-cols-3 gap-2">
          {[
            { label: "Review Rogers AR", tag: "Urgent", color: "red" },
            { label: "Approve TD proformas", tag: "Due today", color: "amber" },
            { label: "CN Rail capacity check", tag: "This week", color: "purple" },
          ].map((a) => (
            <div key={a.label} className="flex items-center justify-between bg-[#0E1420] rounded-lg px-2.5 py-2">
              <p className="text-[10px] text-[#8899BB]">{a.label}</p>
              <Badge color={a.color}>{a.tag}</Badge>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function BillingMockup() {
  return (
    <div className="p-4 space-y-3 text-xs">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-white">Billing Review</p>
          <p className="text-[11px] text-[#8899BB]">18 proformas pending · 3 flagged</p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-1.5 px-2.5 py-1.5 bg-[#141C2B] border border-white/10 rounded-lg text-[10px] text-[#8899BB]">
            <Filter className="w-3 h-3" /> Filter
          </button>
          <button className="px-2.5 py-1.5 bg-[#7C5CFF] rounded-lg text-[10px] text-white font-medium">Bulk Approve</button>
        </div>
      </div>
      <div className="space-y-2">
        {[
          { client: "TD Bank", matter: "M-2024-0892 · Securities Review", amount: "$48,200", hours: "94.5h", partner: "JO", flag: "Write-down suggested", flagColor: "red", flagIcon: AlertTriangle, items: [{ label: "Excess hours vs. budget", val: "+18h", bad: true }, { label: "Rate variance", val: "-3%", bad: false }] },
          { client: "Rogers Media", matter: "M-2024-1104 · Regulatory", amount: "$31,500", hours: "62h", partner: "MC", flag: "Pending DOF approval", flagColor: "amber", flagIcon: Clock, items: [{ label: "Within budget", val: "✓", bad: false }, { label: "DOF threshold", val: ">$30K", bad: true }] },
          { client: "Shopify Inc.", matter: "M-2024-0741 · M&A Advisory", amount: "$22,800", hours: "45h", partner: "AB", flag: "Ready to send", flagColor: "teal", flagIcon: CheckCircle, items: [{ label: "Under budget", val: "-8h", bad: false }, { label: "Approved by", val: "AB", bad: false }] },
        ].map((p, i) => (
          <div key={i} className={clsx("bg-[#141C2B] rounded-xl border p-3", p.flagColor === "red" ? "border-[#F87171]/20" : p.flagColor === "amber" ? "border-[#F59E0B]/20" : "border-white/5")}>
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-2 min-w-0">
                <div className="w-6 h-6 rounded-full bg-[#7C5CFF]/20 flex items-center justify-center text-[9px] font-bold text-[#9B7DFF] flex-shrink-0">{p.partner}</div>
                <div className="min-w-0">
                  <p className="text-[11px] font-semibold text-white">{p.client}</p>
                  <p className="text-[9px] text-[#4A5568] truncate">{p.matter}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <div className="text-right">
                  <p className="text-[11px] font-bold text-white">{p.amount}</p>
                  <p className="text-[9px] text-[#4A5568]">{p.hours}</p>
                </div>
                <Badge color={p.flagColor}><p.flagIcon className="w-2.5 h-2.5 mr-1" />{p.flag}</Badge>
              </div>
            </div>
            <div className="flex gap-3 mt-2 pt-2 border-t border-white/5">
              {p.items.map((it, j) => (
                <div key={j} className="flex items-center gap-1">
                  <span className="text-[9px] text-[#4A5568]">{it.label}:</span>
                  <span className={clsx("text-[9px] font-medium", it.bad ? "text-[#F87171]" : "text-emerald-400")}>{it.val}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function IntelligenceMockup() {
  return (
    <div className="p-4 space-y-3 text-xs">
      <div>
        <p className="text-sm font-semibold text-white mb-1">Client Intelligence</p>
        <div className="flex items-center gap-2 bg-[#0E1420] border border-white/10 rounded-xl px-3 py-2">
          <Search className="w-3.5 h-3.5 text-[#4A5568]" />
          <span className="text-[11px] text-[#4A5568]">Search any client, matter, contact, or company…</span>
          <div className="ml-auto"><Badge color="purple"><Zap className="w-2.5 h-2.5 mr-0.5" />AI</Badge></div>
        </div>
      </div>
      <div className="bg-[#141C2B] rounded-xl border border-[#7C5CFF]/20 p-3">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-7 h-7 rounded-lg bg-[#7C5CFF]/20 flex items-center justify-center text-[10px] font-bold text-[#9B7DFF]">RB</div>
          <div>
            <p className="text-[11px] font-semibold text-white">RBC Capital Markets</p>
            <p className="text-[9px] text-[#4A5568]">Financial Services · Toronto, ON</p>
          </div>
          <div className="ml-auto flex gap-1.5">
            <Badge color="teal">Active</Badge>
            <Badge color="purple">Tier 1</Badge>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-2 mb-3">
          {[
            { label: "YTD Revenue", value: "$1.2M", color: "#2DD4BF" },
            { label: "Open Matters", value: "14", color: "#7C5CFF" },
            { label: "AR Balance", value: "$84K", color: "#F59E0B" },
            { label: "Health Score", value: "88", color: "#2DD4BF" },
          ].map((s) => (
            <div key={s.label} className="bg-[#0E1420] rounded-lg p-2 text-center">
              <p style={{ color: s.color }} className="text-sm font-bold">{s.value}</p>
              <p className="text-[9px] text-[#4A5568] mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>
        <div className="mb-2">
          <p className="text-[10px] text-[#8899BB] mb-1.5 font-medium">Data sources checked</p>
          <div className="flex flex-wrap gap-1">
            {["Aderant", "iManage", "SEDAR", "LinkedIn", "Dun & Bradstreet", "Bloomberg", "Credit Bureau", "Corp Registry", "News API", "Court Records", "OSFI", "CRA", "Sanctions"].map((s) => (
              <span key={s} className="px-1.5 py-0.5 bg-[#0E1420] border border-white/5 rounded text-[9px] text-[#4A5568]">{s}</span>
            ))}
          </div>
        </div>
        <div className="bg-[#0E1420] rounded-lg p-2.5 border border-[#7C5CFF]/15">
          <div className="flex items-center gap-1.5 mb-1">
            <Zap className="w-3 h-3 text-[#7C5CFF]" />
            <p className="text-[10px] font-semibold text-white">AI Verdict</p>
          </div>
          <p className="text-[10px] text-[#8899BB] leading-relaxed">RBC Capital is a low-risk, high-value client. No adverse news, sanctions clear, credit strong. AR aging within acceptable range. Recommended for continued engagement.</p>
        </div>
      </div>
    </div>
  );
}

function PortfolioMockup() {
  const clients = [
    { name: "CN Rail", initials: "CN", rev: "$1.8M", ar: "$42K", matters: 22, health: 91, trend: [60,65,72,68,80,91], color: "#2DD4BF" },
    { name: "TELUS Corp", initials: "TC", rev: "$1.4M", ar: "$128K", matters: 17, health: 63, trend: [80,75,71,68,65,63], color: "#F59E0B" },
    { name: "Shopify Inc.", initials: "SI", rev: "$980K", ar: "$18K", matters: 9, health: 88, trend: [70,75,80,83,86,88], color: "#2DD4BF" },
    { name: "Rogers Media", initials: "RM", rev: "$760K", ar: "$340K", matters: 11, health: 34, trend: [65,60,52,45,38,34], color: "#F87171" },
    { name: "TD Bank", initials: "TD", rev: "$1.1M", ar: "$65K", matters: 15, health: 76, trend: [70,72,74,73,75,76], color: "#2DD4BF" },
  ];
  return (
    <div className="p-4 space-y-3 text-xs">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-white">Client Portfolio</p>
          <p className="text-[11px] text-[#8899BB]">30 clients · 4 at risk</p>
        </div>
        <div className="flex gap-1.5">
          {["All", "Healthy", "At Risk", "Critical"].map((f, i) => (
            <button key={f} className={clsx("px-2 py-1 rounded-lg text-[10px] font-medium", i === 0 ? "bg-[#7C5CFF] text-white" : "bg-[#141C2B] text-[#8899BB] border border-white/5")}>{f}</button>
          ))}
        </div>
      </div>
      <div className="bg-[#141C2B] rounded-xl border border-white/5 overflow-hidden">
        <div className="grid grid-cols-12 gap-2 px-3 py-2 border-b border-white/5">
          {["Client", "", "YTD Rev", "AR", "Matters", "Health", "", "Trend"].map((h, i) => (
            <p key={i} className={clsx("text-[9px] font-medium text-[#4A5568] uppercase tracking-wide", i === 0 ? "col-span-3" : i === 6 ? "col-span-1" : "col-span-1 text-center")}>{h}</p>
          ))}
          <p className="col-span-2 text-[9px] font-medium text-[#4A5568] uppercase tracking-wide text-center">Trend</p>
        </div>
        {clients.map((c) => (
          <div key={c.name} className="grid grid-cols-12 gap-2 px-3 py-2.5 items-center border-b border-white/[0.03]">
            <div className="col-span-3 flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg flex items-center justify-center text-[9px] font-bold flex-shrink-0" style={{ background: `${c.color}20`, color: c.color }}>{c.initials}</div>
              <p className="text-[11px] font-medium text-white truncate">{c.name}</p>
            </div>
            <div className="col-span-1" />
            <p className="col-span-1 text-[10px] text-white text-center">{c.rev}</p>
            <p className={clsx("col-span-1 text-[10px] text-center", parseInt(c.ar.replace(/\D/g,"")) > 100000 ? "text-[#F87171]" : "text-white")}>{c.ar}</p>
            <p className="col-span-1 text-[10px] text-[#8899BB] text-center">{c.matters}</p>
            <div className="col-span-1 flex items-center justify-center">
              <span className="text-[10px] font-semibold" style={{ color: c.color }}>{c.health}</span>
            </div>
            <div className="col-span-1" />
            <div className="col-span-2 flex items-center justify-center">
              <MiniSparkline values={c.trend} color={c.color} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function IntegrationsMockup() {
  const integrations = [
    { name: "Aderant Expert", desc: "Practice management & billing", status: "connected", icon: "AE", color: "#7C5CFF" },
    { name: "iManage Work", desc: "Document management system", status: "connected", icon: "iM", color: "#2DD4BF" },
    { name: "Billstream", desc: "eBilling & invoice delivery", status: "connected", icon: "BS", color: "#60A5FA" },
    { name: "Microsoft 365", desc: "Email, calendar & contacts", status: "connected", icon: "M3", color: "#F59E0B" },
    { name: "Salesforce CRM", desc: "Client relationship management", status: "coming_soon", icon: "SF", color: "#4A5568" },
    { name: "NetDocuments", desc: "Cloud document management", status: "coming_soon", icon: "ND", color: "#4A5568" },
  ];
  return (
    <div className="p-4 space-y-3 text-xs">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-white">Integrations</p>
          <p className="text-[11px] text-[#8899BB]">4 connected · 2 available</p>
        </div>
        <button className="flex items-center gap-1.5 px-2.5 py-1.5 bg-[#7C5CFF] rounded-lg text-[10px] text-white font-medium">
          <Link className="w-3 h-3" /> Add Integration
        </button>
      </div>
      <div className="flex items-center gap-2 bg-[#2DD4BF]/10 border border-[#2DD4BF]/20 rounded-xl px-3 py-2">
        <div className="w-1.5 h-1.5 rounded-full bg-[#2DD4BF] animate-pulse" />
        <p className="text-[10px] text-[#2DD4BF] font-medium">All systems synced · Last updated 3 minutes ago</p>
        <ChevronRight className="w-3 h-3 text-[#2DD4BF] ml-auto" />
      </div>
      <div className="grid grid-cols-2 gap-2">
        {integrations.map((item) => (
          <div key={item.name} className={clsx("bg-[#141C2B] rounded-xl border p-3", item.status === "connected" ? "border-white/5" : "border-white/[0.03] opacity-60")}>
            <div className="flex items-start justify-between mb-2">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center text-[10px] font-bold" style={{ background: `${item.color}20`, color: item.color }}>{item.icon}</div>
              {item.status === "connected" ? (
                <Badge color="teal"><CheckCircle className="w-2.5 h-2.5 mr-1" />Connected</Badge>
              ) : (
                <Badge color="blue">Coming soon</Badge>
              )}
            </div>
            <p className="text-[11px] font-semibold text-white">{item.name}</p>
            <p className="text-[9px] text-[#4A5568] mt-0.5">{item.desc}</p>
            {item.status === "connected" && (
              <div className="mt-2 pt-2 border-t border-white/5 flex items-center gap-1">
                <div className="w-1 h-1 rounded-full bg-emerald-400" />
                <p className="text-[9px] text-[#4A5568]">Live sync enabled</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

const SCREENS = [
  { id: "dashboard", label: "Dashboard", description: "Morning brief, portfolio health score, priority actions.", accent: "#7C5CFF", component: DashboardMockup },
  { id: "billing", label: "Billing Review", description: "Proforma flags, write-down thresholds, DOF approvals.", accent: "#F59E0B", component: BillingMockup },
  { id: "intelligence", label: "Client Intelligence", description: "AI-powered due diligence across 13+ data sources.", accent: "#2DD4BF", component: IntelligenceMockup },
  { id: "clients", label: "Client Portfolio", description: "Health filters, AR aging, revenue, matters.", accent: "#7C5CFF", component: PortfolioMockup },
  { id: "settings", label: "Integrations", description: "Connected systems and upcoming integrations.", accent: "#60A5FA", component: IntegrationsMockup },
];

export function ScreenshotsSection() {
  const [active, setActive] = useState(0);
  const ActiveMockup = SCREENS[active].component;

  return (
    <section className="py-24 lg:py-32 bg-bg-surface border-y border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            See Beacon in{" "}
            <span className="gradient-text">action</span>
          </h2>
          <p className="text-text-secondary text-lg">
            Built for the way legal teams actually work — not the way software vendors think they do.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
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
                style={i === active ? { boxShadow: `0 0 12px ${SCREENS[i].accent}25` } : {}}
              >
                {screen.label}
              </button>
            ))}
          </div>

          <div className="lg:col-span-4">
            <div className="relative rounded-2xl border border-border-subtle overflow-hidden shadow-card bg-[#0A0D14]">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border-subtle bg-[#0E1420]">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#F87171]/50" />
                  <div className="w-3 h-3 rounded-full bg-[#F59E0B]/50" />
                  <div className="w-3 h-3 rounded-full bg-[#2DD4BF]/50" />
                </div>
                <div className="flex-1 bg-[#0A0D14] rounded-md px-3 py-1 text-xs text-[#4A5568] text-center max-w-xs mx-auto">
                  app.beaconlegal.ai
                </div>
              </div>
              <div className="min-h-[420px]">
                <ActiveMockup />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-3">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: SCREENS[active].accent }} />
              <p className="text-sm text-text-secondary">
                <span className="text-text-primary font-medium">{SCREENS[active].label}:</span>{" "}
                {SCREENS[active].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
