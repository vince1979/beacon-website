import { ClientBadge } from "@/components/ui/ClientBadge";

const CLIENTS = [
  { initials: "CR", name: "CN Rail" },
  { initials: "TC", name: "TELUS" },
  { initials: "RC", name: "RBC" },
  { initials: "RC", name: "Rogers" },
  { initials: "SI", name: "Shopify" },
  { initials: "TB", name: "TD" },
  { initials: "BA", name: "Brookfield" },
  { initials: "LU", name: "Lululemon" },
];

export function TrustedBySection() {
  return (
    <section className="border-y border-border-subtle bg-bg-surface py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold text-text-muted uppercase tracking-widest mb-8">
          Trusted by law firms serving
        </p>
        <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
          {CLIENTS.map((client, i) => (
            <ClientBadge
              key={i}
              initials={client.initials}
              name={client.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
