import { howItWorks } from "@/data/content";
import { revealDelay } from "@/lib/cn";
import { Section } from "@/components/ui/Section";

export function HowItWorks() {
  return (
    <Section id="como-funciona" title={howItWorks.title} intro={howItWorks.intro} alt>
      <ol className="relative grid gap-8 lg:grid-cols-4 lg:gap-6">
        {/* Línea que une los pasos: vertical en móvil, horizontal en escritorio. */}
        <span
          aria-hidden="true"
          className="absolute bottom-6 left-[1.375rem] top-6 w-px bg-line-strong lg:bottom-auto lg:left-6 lg:right-[calc(25%-2.5rem)] lg:top-[1.375rem] lg:h-px lg:w-auto"
        />
        {howItWorks.steps.map((step, index) => (
          <li
            key={step.title}
            data-reveal
            style={revealDelay(index * 80)}
            className="relative grid grid-cols-[2.75rem_1fr] gap-4 lg:grid-cols-1"
          >
            <span className="relative z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border border-primary bg-surface font-display text-lg font-bold text-primary">
              {index + 1}
            </span>
            <div className="pt-1.5 lg:pt-0">
              <h3 className="heading-3">{step.title}</h3>
              <p className="mt-1.5 max-w-[34ch] text-ink-muted">{step.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
