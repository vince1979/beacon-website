import Link from "next/link";
import { Zap, Twitter, Linkedin, Github } from "lucide-react";

const FOOTER_LINKS = {
  Product: [
    { label: "Dashboard", href: "/product#dashboard" },
    { label: "Billing Review", href: "/product#billing" },
    { label: "Client Intelligence", href: "/product#intelligence" },
    { label: "Client Portfolio", href: "/product#clients" },
    { label: "Integrations", href: "/product#integrations" },
  ],
  Company: [
    { label: "About", href: "/company" },
    { label: "Careers", href: "/company#careers" },
    { label: "Contact", href: "/contact" },
    { label: "Blog", href: "#" },
  ],
  Resources: [
    { label: "Documentation", href: "#" },
    { label: "Pricing", href: "/pricing" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shadow-glow-sm">
                <Zap className="w-4 h-4 text-white" fill="white" />
              </div>
              <span className="font-display font-bold text-lg text-text-primary">
                Beacon
              </span>
            </Link>
            <p className="text-text-secondary text-sm leading-relaxed max-w-xs">
              AI-powered operations for modern law firms. Monitor, review, and
              act — all in one place.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {[
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Github, href: "#", label: "GitHub" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-bg-elevated border border-border-subtle flex items-center justify-center text-text-muted hover:text-text-primary hover:border-border-default transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-4">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-text-muted">
            © {new Date().getFullYear()} Beacon Legal Technologies, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-success animate-pulse-slow" />
            <span className="text-xs text-text-muted">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
