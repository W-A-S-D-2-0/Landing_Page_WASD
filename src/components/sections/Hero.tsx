import { BarChart3, Check } from "lucide-react";
import { hero } from "@/data/content";
import { mockFor } from "@/data/sectors";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PhoneFrame } from "@/components/mockups/Devices";
import { MockSite } from "@/components/mockups/MockSite";

export function Hero() {
  return (
    <section aria-labelledby="hero-titulo" className="pb-16 pt-10 sm:pt-14 lg:pb-24 lg:pt-20">
      <Container className="grid items-center gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-10">
        <div>
          <h1 id="hero-titulo" className="heading-1 max-w-[18ch]">
            {hero.title}
          </h1>
          <p className="lead mt-5 max-w-[46ch] text-[1.1875rem] sm:text-xl">
            {hero.subtitle}
          </p>

          <div
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <ButtonLink href="#diagnostico" size="lg" track={{ event: "demo_cta_click", label: "hero" }}>
              {hero.primaryCta}
            </ButtonLink>
            <ButtonLink href="#precios" size="lg" variant="secondary">
              {hero.secondaryCta}
            </ButtonLink>
          </div>

          <ul
            className="mt-8 flex flex-col gap-2.5 text-[0.9375rem] font-medium text-ink sm:flex-row sm:flex-wrap sm:gap-x-6"
          >
            {hero.guarantees.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-success-soft">
                  <Check aria-hidden="true" className="h-3.5 w-3.5 text-success" strokeWidth={2.5} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto">
          <div className="absolute inset-x-[-12%] inset-y-[8%] -z-10 rounded-[2rem] bg-surface-alt" aria-hidden="true" />
          <PhoneFrame label={hero.mockupLabel}>
            <MockSite theme="cafe" content={mockFor("cafe")} />
          </PhoneFrame>

          {/* Tarjeta de ejemplo del reporte semanal (sin cifras inventadas). */}
          <div
            aria-hidden="true"
            className="absolute -left-10 bottom-10 hidden w-48 rounded-card border border-line bg-surface p-3.5 shadow-soft sm:block lg:-left-16"
          >
            <p className="flex items-center gap-1.5 text-xs font-semibold text-ink">
              <BarChart3 className="h-3.5 w-3.5 text-primary" />
              Tu reporte semanal
            </p>
            <div className="mt-2.5 space-y-2">
              {[
                ["Visitas", "w-4/5"],
                ["Clics a WhatsApp", "w-3/5"],
                ["Reservas", "w-2/5"],
              ].map(([label, width]) => (
                <div key={label}>
                  <p className="text-[10.5px] text-ink-muted">{label}</p>
                  <div className="mt-1 h-1.5 rounded-full bg-surface-alt">
                    <div className={`h-1.5 rounded-full bg-primary ${width}`} />
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-2.5 text-[10px] text-ink-muted">Ejemplo ilustrativo</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
