import { testimonials } from "@/data/testimonials";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";

/** Oculta hasta que `testimonials.enabled` sea true y haya testimonios reales. */
export function Testimonials() {
  if (!testimonials.enabled || testimonials.items.length === 0) return null;
  return (
    <Section id="testimonios" title={testimonials.title} alt>
      <ul className="grid gap-6 md:grid-cols-3">
        {testimonials.items.map((t) => (
          <li key={t.name} data-reveal>
            <Card className="h-full">
              <figure>
                <blockquote className="text-ink">“{t.quote}”</blockquote>
                <figcaption className="mt-4 text-sm">
                  <span className="font-semibold text-ink">{t.name}</span>
                  <span className="text-ink-muted"> · {t.business}</span>
                </figcaption>
              </figure>
            </Card>
          </li>
        ))}
      </ul>
    </Section>
  );
}
