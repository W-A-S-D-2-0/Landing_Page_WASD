import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/content";
import { revealDelay } from "@/lib/cn";
import { Card } from "@/components/ui/Card";
import { CheckItem } from "@/components/ui/CheckItem";
import { KeyCap } from "@/components/ui/KeyCap";
import { Section } from "@/components/ui/Section";

export function Services() {
  return (
    <Section id="servicios" title={services.title} intro={services.intro}>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
        {services.items.map((service, index) => (
          <li key={service.key} data-reveal style={revealDelay(index * 60)}>
            <Card className="group h-full transition-colors duration-200 hover:border-line-strong">
              <KeyCap letter={service.key} />
              <h3 className="heading-3 mt-5">
                <span className="sr-only">{service.key}: </span>
                {service.name}
              </h3>
              <p className="mt-2 text-ink-muted">{service.description}</p>
              <ul className="mt-5 space-y-2 border-t border-line pt-5 text-[0.9375rem]">
                {service.benefits.map((benefit) => (
                  <CheckItem key={benefit}>{benefit}</CheckItem>
                ))}
              </ul>
            </Card>
          </li>
        ))}
      </ul>

      <p
        data-reveal
        className="mt-10 flex items-center justify-center gap-2 text-center font-display text-lg font-semibold text-ink"
      >
        <ArrowUpRight aria-hidden="true" className="h-5 w-5 shrink-0 text-accent-ink" />
        {services.closing}
      </p>
    </Section>
  );
}
