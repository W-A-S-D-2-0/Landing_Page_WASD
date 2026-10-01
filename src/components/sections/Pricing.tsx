"use client";

import { useState } from "react";
import {
  billingOptions,
  defaultBilling,
  formatSoles,
  hasBillingOptions,
  plans,
  priceFor,
  pricingNote,
  type BillingMode,
  type Plan,
} from "@/data/plans";
import { cn, revealDelay } from "@/lib/cn";
import { whatsappUrl } from "@/lib/whatsapp";
import { ButtonLink } from "@/components/ui/Button";
import { CheckItem } from "@/components/ui/CheckItem";
import { KeyCap } from "@/components/ui/KeyCap";
import { Section } from "@/components/ui/Section";

function PlanCard({ plan, mode }: { plan: Plan; mode: BillingMode }) {
  const price = priceFor(plan, mode);
  const fullName = `${plan.level} · ${plan.name}`;
  return (
    <article
      aria-labelledby={`plan-${plan.id}`}
      className={cn(
        "relative flex h-full flex-col rounded-card border bg-surface p-6",
        plan.highlighted ? "border-2 border-primary" : "border-line",
      )}
    >
      {plan.highlighted && (
        <span className="absolute -top-3.5 left-6 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-on-accent">
          Más elegido
        </span>
      )}

      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-medium text-ink-muted">{plan.level}</p>
          <h3 id={`plan-${plan.id}`} className="heading-3 mt-0.5">
            {plan.name}
          </h3>
        </div>
        <span className="flex gap-1" aria-label={`Incluye ${plan.keys.join(" + ")}`} role="img">
          {plan.keys.map((key) => (
            <KeyCap key={key} letter={key} size="sm" />
          ))}
        </span>
      </div>

      <p className="mt-3 text-[0.9375rem] text-ink-muted">{plan.summary}</p>

      <div className="mt-6 border-t border-line pt-5" aria-live="polite">
        <p className="flex flex-wrap items-baseline gap-x-1.5">
          {price.prefix && <span className="text-sm font-medium text-ink-muted">{price.prefix}</span>}
          {/* La key reinicia la animación cuando el monto cambia con el interruptor. */}
          <span
            key={`${price.amount}-${price.period}`}
            className="anim-fade-up font-display text-[2rem] font-bold leading-none tracking-tight text-ink"
          >
            {price.amount === null ? "A cotizar" : formatSoles(price.amount)}
          </span>
          {price.period && <span className="text-[0.9375rem] font-medium text-ink-muted">{price.period}</span>}
        </p>
        <p className="mt-2 text-sm text-ink-muted">{price.note}</p>
      </div>

      <ul className="mt-6 flex-1 space-y-2.5 text-[0.9375rem]">
        {plan.includesPrevious && <CheckItem className="font-semibold">Todo lo del nivel anterior</CheckItem>}
        {plan.features.map((feature) => (
          <CheckItem key={feature}>{feature}</CheckItem>
        ))}
      </ul>

      <ButtonLink
        href={whatsappUrl({ type: "plan", planName: fullName })}
        variant={plan.highlighted ? "primary" : "secondary"}
        className="mt-8 w-full"
        track={{ event: "plan_click", label: plan.id }}
      >
        {plan.cta}
      </ButtonLink>
    </article>
  );
}

export function Pricing() {
  const [mode, setMode] = useState<BillingMode>(defaultBilling);
  const toggleApplies = plans.filter(hasBillingOptions).map((p) => p.level);

  return (
    <Section
      id="precios"
      title="Precios claros, sin sorpresas"
      intro="Empieza con lo que necesitas hoy y sube de nivel cuando quieras."
      alt
    >
      <div data-reveal className="mb-10 flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:gap-4">
        <div
          role="radiogroup"
          aria-label="Forma de pago"
          className="inline-flex rounded-full border border-line bg-surface p-1"
        >
          {billingOptions.map((option) => {
            const checked = option.value === mode;
            return (
              <button
                key={option.value}
                type="button"
                role="radio"
                aria-checked={checked}
                onClick={() => setMode(option.value)}
                className={cn(
                  "min-h-10 rounded-full px-5 text-[0.9375rem] font-medium transition-colors duration-200",
                  checked ? "bg-primary text-on-primary" : "text-ink-muted hover:text-ink",
                )}
              >
                {option.label}
              </button>
            );
          })}
        </div>
        <p className="text-sm text-ink-muted">Aplica al {toggleApplies.join(", ")}.</p>
      </div>

      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
        {plans.map((plan, index) => (
          <li key={plan.id} data-reveal style={revealDelay(index * 60)}>
            <PlanCard plan={plan} mode={mode} />
          </li>
        ))}
      </ul>

      <p className="mt-8 text-center text-sm text-ink-muted">{pricingNote}</p>
    </Section>
  );
}
