import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden border border-border-subtle bg-bg-card">
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-success/5 pointer-events-none" />
          <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-success/8 blur-2xl pointer-events-none" />

          <div className="relative px-8 py-16 lg:px-16 lg:py-20 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-medium text-primary-light">
                Limited spots available
              </span>
            </div>

            <h2 className="font-display text-4xl lg:text-6xl font-bold text-text-primary mb-6 max-w-3xl mx-auto">
              Ready to transform
              <br />
              <span className="gradient-text">your firm&apos;s operations?</span>
            </h2>

            <p className="text-text-secondary text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Join the firms using Beacon to stay ahead — with smarter
              billing reviews, faster client intelligence, and a portfolio
              health dashboard that actually tells you what to do.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary hover:bg-primary-light text-white font-semibold text-lg shadow-glow hover:shadow-glow transition-all duration-200 active:scale-[0.98]"
              >
                Request a Demo
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-bg-elevated border border-border-default text-text-primary font-semibold hover:bg-bg-hover transition-all duration-200"
              >
                View Pricing
              </Link>
            </div>

            <p className="mt-6 text-xs text-text-muted">
              No commitment required. We&apos;ll reach out within 24 hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
