import { Quote } from "lucide-react";
import { Card } from "@/components/ui/Card";

const TESTIMONIALS = [
  {
    quote:
      "Beacon has completely changed how we start our day. The morning brief alone saves our billing team hours of coordination.",
    name: "Sarah Chen",
    title: "Chief Operations Officer",
    firm: "Pacific Legal Partners",
    initials: "SC",
    color: "#7C5CFF",
  },
  {
    quote:
      "The write-down threshold alerts caught three significant overbillings in our first month. It's paid for itself many times over.",
    name: "Michael Torres",
    title: "Managing Partner",
    firm: "Torres & Associates",
    initials: "MT",
    color: "#2DD4BF",
  },
  {
    quote:
      "Client Intelligence has transformed how we onboard new clients. What used to take a paralegal a day now takes 30 seconds.",
    name: "Jennifer Walsh",
    title: "Head of Client Relations",
    firm: "Meridian Law Group",
    initials: "JW",
    color: "#F59E0B",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            Trusted by the firms
            <br />
            <span className="gradient-text">leading the way</span>
          </h2>
          <p className="text-text-secondary text-lg">
            Don&apos;t take our word for it.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <Card key={i} className="p-6 flex flex-col gap-4">
              <Quote className="w-5 h-5 text-primary/60" />
              <p className="text-sm text-text-secondary leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-3 border-t border-border-subtle">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
                  style={{
                    backgroundColor: t.color + "20",
                    color: t.color,
                    border: `1px solid ${t.color}30`,
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-text-primary">{t.name}</p>
                  <p className="text-xs text-text-muted">{t.title}, {t.firm}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
