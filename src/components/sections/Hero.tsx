import { Check } from "lucide-react";
import { hero } from "@/data/content";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { HeroDemo } from "@/components/mockups/HeroDemo";

export function Hero() {
  return (
    <section aria-labelledby="hero-titulo" className="pb-20 pt-10 sm:pt-14 lg:pb-28 lg:pt-20">
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

        <HeroDemo />
      </Container>
    </section>
  );
}
