import { problem } from "@/data/content";
import { revealDelay } from "@/lib/cn";
import { Section } from "@/components/ui/Section";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

export function Problem() {
  const { chat } = problem;
  return (
    <Section id="problema" title={problem.title} intro={problem.intro} alt>
      <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.85fr)_1fr] lg:gap-16">
        {/* Chat ilustrativo: las mismas preguntas una y otra vez (aparecen al hacer scroll). */}
        <figure
          data-reveal
          aria-label={`${chat.title}: ${chat.messages.map((m) => m.text).join(" ")}`}
          className="overflow-hidden rounded-card border border-line bg-surface shadow-soft"
        >
          <div className="flex items-center justify-between gap-3 border-b border-line px-5 py-3.5">
            <span className="flex items-center gap-2.5 font-display text-[0.9375rem] font-semibold leading-tight text-ink">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary-soft text-primary">
                <WhatsAppIcon className="h-4 w-4" />
              </span>
              {chat.title}
            </span>
            <span className="shrink-0 whitespace-nowrap rounded-full bg-accent-soft px-2.5 py-1 text-xs font-semibold text-accent-ink">
              {chat.status}
            </span>
          </div>
          <ul aria-hidden="true" className="space-y-2.5 bg-surface-alt/60 px-5 py-6">
            {chat.messages.map((message, index) => (
              <li
                key={index}
                data-reveal
                style={revealDelay(150 + index * 260)}
                className="flex w-fit max-w-[85%] items-end gap-3 rounded-2xl rounded-bl-sm border border-line bg-surface px-3.5 py-2 text-[0.9375rem] text-ink"
              >
                {message.text}
                <span className="shrink-0 text-[11px] text-ink-muted">{message.time}</span>
              </li>
            ))}
            <li
              data-reveal
              style={revealDelay(150 + chat.messages.length * 260)}
              className="pt-2 text-center text-sm font-medium text-ink-muted"
            >
              {chat.pending}
            </li>
          </ul>
        </figure>

        <ul className="divide-y divide-line">
          {problem.items.map(({ icon: Icon, title, text }, index) => (
            <li
              key={title}
              data-reveal
              style={revealDelay(index * 80)}
              className="grid grid-cols-[2.5rem_1fr] gap-4 py-6 first:pt-0 last:pb-0"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-[10px] bg-surface text-primary ring-1 ring-line">
                <Icon aria-hidden="true" className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <div>
                <h3 className="heading-3">{title}</h3>
                <p className="mt-1.5 max-w-[48ch] text-ink-muted">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
