import { problem } from "@/data/content";
import { revealDelay } from "@/lib/cn";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";

export function Problem() {
  return (
    <Section id="problema" title={problem.title} intro={problem.intro} alt>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
        {problem.items.map(({ icon: Icon, title, text }, index) => (
          <li key={title} data-reveal style={revealDelay(index * 60)}>
            <Card className="h-full">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-[10px] bg-primary-soft text-primary">
                <Icon aria-hidden="true" className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <h3 className="heading-3 mt-4">{title}</h3>
              <p className="mt-2 text-ink-muted">{text}</p>
            </Card>
          </li>
        ))}
      </ul>
    </Section>
  );
}
