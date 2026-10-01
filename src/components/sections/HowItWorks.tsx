import { BarChart3, CheckCircle2, Lock } from "lucide-react";
import { howItWorks } from "@/data/content";
import { revealDelay } from "@/lib/cn";
import { Section } from "@/components/ui/Section";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

type Artifact = (typeof howItWorks.steps)[number]["artifact"];

export function HowItWorks() {
  return (
    <Section id="como-funciona" title={howItWorks.title} intro={howItWorks.intro} alt>
      <ol data-reveal className="relative grid gap-10 lg:grid-cols-4 lg:gap-6">
        {/* Línea que une los pasos y se llena al entrar en pantalla: vertical en móvil, horizontal en escritorio. */}
        <span
          aria-hidden="true"
          className="absolute bottom-6 left-[1.375rem] top-6 w-px bg-line-strong lg:bottom-auto lg:left-6 lg:right-[calc(25%-2.5rem)] lg:top-[1.375rem] lg:h-px lg:w-auto"
        >
          <span className="timeline-fill absolute inset-0 bg-primary" />
        </span>
        {howItWorks.steps.map((step, index) => (
          <li
            key={step.title}
            data-reveal
            style={revealDelay(200 + index * 300)}
            className="relative grid grid-cols-[2.75rem_1fr] gap-4 lg:grid-cols-1"
          >
            <span className="relative z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border border-primary bg-surface font-display text-lg font-bold text-primary">
              {index + 1}
            </span>
            <div className="pt-1.5 lg:pt-0">
              <h3 className="heading-3">{step.title}</h3>
              <p className="mt-1.5 max-w-[34ch] text-ink-muted">{step.text}</p>
              <StepArtifact artifact={step.artifact} />
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}

/** La pieza que el cliente ve en cada paso (decorativa). */
function StepArtifact({ artifact }: { artifact: Artifact }) {
  const { kind, lines } = artifact;
  return (
    <div aria-hidden="true" className="mt-5 max-w-[17rem] rounded-card border border-line bg-surface p-3 text-xs shadow-soft">
      {kind === "form" && (
        <div className="space-y-1.5">
          {lines.map((line) => (
            <div key={line}>
              <p className="text-[10.5px] font-medium text-ink-muted">{line}</p>
              <div className="mt-0.5 h-5 rounded-md border border-line bg-bg" />
            </div>
          ))}
        </div>
      )}

      {kind === "message" && (
        <div className="flex items-start gap-2">
          <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-soft text-primary">
            <WhatsAppIcon className="h-3.5 w-3.5" />
          </span>
          <p className="rounded-xl rounded-tl-sm bg-surface-alt px-2.5 py-2 leading-snug text-ink">
            {lines[0]}
            <span className="mt-1.5 block h-12 rounded-md bg-primary-soft" />
          </p>
        </div>
      )}

      {kind === "site" && (
        <div>
          <p className="flex items-center gap-1.5 rounded-full bg-surface-alt px-2.5 py-1 text-[10.5px] text-ink-muted">
            <Lock className="h-3 w-3" />
            {lines[0]}
          </p>
          <div className="mt-2 grid grid-cols-[1.4fr_1fr] gap-1.5">
            <span className="h-12 rounded-md bg-primary-soft" />
            <span className="h-12 rounded-md bg-surface-alt" />
          </div>
          <p className="mt-2 inline-flex items-center gap-1 rounded-full bg-success-soft px-2 py-0.5 text-[10.5px] font-semibold text-success">
            <CheckCircle2 className="h-3 w-3" />
            {lines[1]}
          </p>
        </div>
      )}

      {kind === "report" && (
        <div>
          <p className="flex items-center gap-1.5 font-semibold text-ink">
            <BarChart3 className="h-3.5 w-3.5 text-primary" />
            {lines[0]}
          </p>
          <div className="mt-2 space-y-1.5">
            {lines.slice(1).map((label, index) => (
              <div key={label}>
                <p className="text-[10.5px] text-ink-muted">{label}</p>
                <div className="mt-0.5 h-1.5 rounded-full bg-surface-alt">
                  <div className={`h-1.5 rounded-full bg-primary ${["w-4/5", "w-3/5", "w-2/5"][index]}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
