"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { CheckCircle, Calendar, Mail, Building, User } from "lucide-react";

const ROLE_OPTIONS = [
  "Managing Partner",
  "Legal Operations Manager",
  "Firm Administrator / COO",
  "Partner",
  "CFO / Director of Finance",
  "IT / Systems",
  "Other",
];

function InputField({
  label,
  id,
  type = "text",
  placeholder,
  required,
  value,
  onChange,
}: {
  label: string;
  id: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-text-secondary mb-1.5">
        {label} {required && <span className="text-danger">*</span>}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-3 rounded-xl bg-bg-elevated border border-border-default text-text-primary placeholder-text-muted text-sm outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition-all"
      />
    </div>
  );
}

function SelectField({
  label,
  id,
  required,
  value,
  onChange,
  options,
}: {
  label: string;
  id: string;
  required?: boolean;
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-text-secondary mb-1.5">
        {label} {required && <span className="text-danger">*</span>}
      </label>
      <select
        id={id}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-3 rounded-xl bg-bg-elevated border border-border-default text-sm outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition-all appearance-none cursor-pointer text-text-primary"
      >
        <option value="" disabled className="text-text-muted">Select your role</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
}

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    firm: "",
    role: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate() {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Enter a valid email";
    if (!form.firm.trim()) e.firm = "Firm name is required";
    if (!form.role) e.role = "Please select your role";
    return e;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitted(true);
  }

  const set = (key: string) => (v: string) => setForm((f) => ({ ...f, [key]: v }));

  return (
    <>
      <section className="pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-xl mb-12">
            <Badge variant="primary" size="md" className="mb-6">Get in touch</Badge>
            <h1 className="font-display text-5xl font-bold text-text-primary mb-4">
              Let&apos;s talk about
              <br />
              <span className="gradient-text">your firm</span>
            </h1>
            <p className="text-text-secondary text-lg">
              Request a demo, ask a question, or just say hello. Our team responds within one business day.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 items-start">
            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <Card className="p-10 text-center">
                  <div className="w-16 h-16 rounded-full bg-success/10 border border-success/30 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-success" />
                  </div>
                  <h2 className="font-display text-2xl font-bold text-text-primary mb-3">
                    We&apos;ll be in touch soon
                  </h2>
                  <p className="text-text-secondary mb-6">
                    Thanks, {form.name.split(" ")[0]}! We&apos;ve received your request and will reach out to {form.email} within one business day.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: "", email: "", firm: "", role: "", message: "" }); }}
                    className="text-sm text-primary-light hover:underline"
                  >
                    Submit another request
                  </button>
                </Card>
              ) : (
                <Card className="p-8">
                  <h2 className="font-display text-xl font-bold text-text-primary mb-6">
                    Request a Demo
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <InputField
                          label="Full name"
                          id="name"
                          placeholder="Alex Smith"
                          required
                          value={form.name}
                          onChange={set("name")}
                        />
                        {errors.name && (
                          <p className="text-xs text-danger mt-1">{errors.name}</p>
                        )}
                      </div>
                      <div>
                        <InputField
                          label="Work email"
                          id="email"
                          type="email"
                          placeholder="alex@lawfirm.com"
                          required
                          value={form.email}
                          onChange={set("email")}
                        />
                        {errors.email && (
                          <p className="text-xs text-danger mt-1">{errors.email}</p>
                        )}
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <InputField
                          label="Firm name"
                          id="firm"
                          placeholder="Pacific Legal Partners"
                          required
                          value={form.firm}
                          onChange={set("firm")}
                        />
                        {errors.firm && (
                          <p className="text-xs text-danger mt-1">{errors.firm}</p>
                        )}
                      </div>
                      <div>
                        <SelectField
                          label="Your role"
                          id="role"
                          required
                          value={form.role}
                          onChange={set("role")}
                          options={ROLE_OPTIONS}
                        />
                        {errors.role && (
                          <p className="text-xs text-danger mt-1">{errors.role}</p>
                        )}
                      </div>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-1.5">
                        What are you looking to solve?
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        placeholder="Tell us about your firm's current pain points..."
                        value={form.message}
                        onChange={(e) => set("message")(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-bg-elevated border border-border-default text-text-primary placeholder-text-muted text-sm outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl bg-primary hover:bg-primary-light text-white font-semibold shadow-glow-sm hover:shadow-glow transition-all duration-200 active:scale-[0.99]"
                    >
                      Request a Demo
                    </button>
                    <p className="text-xs text-text-muted text-center">
                      No spam. No commitment. We&apos;ll reach out within 24 hours.
                    </p>
                  </form>
                </Card>
              )}
            </div>

            {/* Side cards */}
            <div className="lg:col-span-2 space-y-4">
              {/* Calendly placeholder */}
              <Card className="p-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Calendar className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-text-primary mb-1">
                  Book directly
                </h3>
                <p className="text-sm text-text-secondary mb-4">
                  Prefer to pick a time right now? Use our scheduling link to
                  book a 30-minute demo with our team.
                </p>
                <button className="w-full py-2.5 rounded-xl border border-primary/40 text-primary-light text-sm font-medium hover:bg-primary/10 transition-colors">
                  Open Scheduling Link →
                </button>
              </Card>

              {/* Contact info */}
              <Card className="p-6">
                <h3 className="font-semibold text-text-primary mb-4">
                  Other ways to reach us
                </h3>
                <div className="space-y-3">
                  {[
                    { icon: Mail, label: "Email", value: "hello@beaconlegal.ai" },
                    { icon: Building, label: "Office", value: "Toronto, ON  ·  New York, NY" },
                    { icon: User, label: "Support", value: "support@beaconlegal.ai" },
                  ].map(({ icon: Icon, label, value }) => (
                    <div key={label} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-bg-elevated border border-border-subtle flex items-center justify-center shrink-0">
                        <Icon className="w-3.5 h-3.5 text-text-muted" />
                      </div>
                      <div>
                        <p className="text-xs text-text-muted">{label}</p>
                        <p className="text-sm text-text-secondary">{value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
