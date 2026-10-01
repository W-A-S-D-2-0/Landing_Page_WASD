"use client";

import { ArrowUpRight, CalendarCheck, Search } from "lucide-react";
import { useEffect, useId, useRef, useState, type KeyboardEvent } from "react";
import { services, type Service } from "@/data/content";
import { cn } from "@/lib/cn";
import { CheckItem } from "@/components/ui/CheckItem";
import { Section } from "@/components/ui/Section";

const items = services.items;

/** true si el foco está en un campo donde el usuario escribe. */
function isTyping(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) return false;
  return target.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName);
}

/**
 * Servicios como un teclado W·A·S·D: cada tecla es una pestaña (patrón
 * WAI-ARIA). Mientras la sección está en pantalla, también responde a las
 * teclas W, A, S y D del teclado físico.
 */
export function Services() {
  const baseId = useId();
  const [active, setActive] = useState(0);
  const [pressed, setPressed] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const pressTimer = useRef(0);

  function select(index: number, focus = false) {
    const next = (index + items.length) % items.length;
    setActive(next);
    setPressed(next);
    window.clearTimeout(pressTimer.current);
    pressTimer.current = window.setTimeout(() => setPressed(null), 160);
    if (focus) tabRefs.current[next]?.focus();
  }

  // Teclado físico: solo cuando la sección se ve y nadie está escribiendo.
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    let visible = false;
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    observer.observe(el);

    function onKey(event: globalThis.KeyboardEvent) {
      if (!visible || event.ctrlKey || event.metaKey || event.altKey || isTyping(event.target)) return;
      const index = items.findIndex((s) => s.key === event.key.toUpperCase());
      if (index === -1) return;
      setActive(index);
      setPressed(index);
      window.clearTimeout(pressTimer.current);
      pressTimer.current = window.setTimeout(() => setPressed(null), 160);
    }
    window.addEventListener("keydown", onKey);
    return () => {
      observer.disconnect();
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  function onTabKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const keys: Record<string, () => void> = {
      ArrowRight: () => select(index + 1, true),
      ArrowDown: () => select(index + 1, true),
      ArrowLeft: () => select(index - 1, true),
      ArrowUp: () => select(index - 1, true),
      Home: () => select(0, true),
      End: () => select(items.length - 1, true),
    };
    const action = keys[event.key];
    if (action) {
      event.preventDefault();
      action();
    }
  }

  const service = items[active];

  function keyButton(index: number) {
    const item = items[index];
    const selected = index === active;
    return (
      <button
        key={item.key}
        ref={(el) => {
          tabRefs.current[index] = el;
        }}
        id={`${baseId}-tab-${item.key}`}
        type="button"
        role="tab"
        aria-selected={selected}
        aria-controls={`${baseId}-panel`}
        tabIndex={selected ? 0 : -1}
        onClick={() => select(index)}
        onKeyDown={(e) => onTabKeyDown(e, index)}
        className={cn(
          "keycap-press flex h-16 w-16 flex-col items-center justify-center rounded-xl border font-display sm:h-20 sm:w-20",
          selected
            ? "border-primary border-b-[5px] bg-primary text-on-primary"
            : "border-line-strong border-b-[5px] bg-surface text-ink hover:border-primary hover:text-primary",
          pressed === index && "translate-y-[3px] border-b-2",
        )}
      >
        <span className="text-2xl font-bold leading-none sm:text-3xl">{item.key}</span>
        <span className={cn("mt-1 text-[10px] font-medium sm:text-[11px]", selected ? "opacity-90" : "text-ink-muted")}>
          {item.name.split(" ")[0]}
        </span>
        <span className="sr-only"> · {item.name}</span>
      </button>
    );
  }

  return (
    <Section id="servicios" title={services.title} intro={services.intro}>
      <div
        ref={sectionRef}
        data-reveal
        className="grid items-center gap-10 rounded-card border border-line bg-surface p-6 sm:p-10 lg:grid-cols-[auto_1fr] lg:gap-16"
      >
        <div className="flex flex-col items-center">
          <div role="tablist" aria-label={services.tablistLabel} className="flex flex-col items-center gap-2.5">
            <div className="flex">{keyButton(0)}</div>
            <div className="flex gap-2.5">{[1, 2, 3].map(keyButton)}</div>
          </div>
          <p className="mt-5 max-w-[26ch] text-center text-sm text-ink-muted">
            {services.hint}
            <span className="hidden lg:inline"> {services.keyboardHint}</span>
          </p>
        </div>

        <div
          id={`${baseId}-panel`}
          role="tabpanel"
          aria-labelledby={`${baseId}-tab-${service.key}`}
          className="grid gap-8 md:grid-cols-[1fr_minmax(0,17rem)] md:items-center"
        >
          <div key={service.key} className="anim-fade-up">
            <p className="eyebrow">{services.keyLabel} {service.key}</p>
            <h3 className="heading-2 mt-1 text-2xl sm:text-3xl">{service.name}</h3>
            <p className="mt-3 text-lg text-ink-muted">{service.description}</p>
            <ul className="mt-6 space-y-2.5">
              {service.benefits.map((benefit) => (
                <CheckItem key={benefit}>{benefit}</CheckItem>
              ))}
            </ul>
          </div>
          <div key={`p-${service.key}`} className="anim-fade-up [animation-delay:80ms]">
            <ServicePreview service={service} />
          </div>
        </div>
      </div>

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

/** Mini vista de ejemplo de cada servicio (decorativa). */
function ServicePreview({ service }: { service: Service }) {
  const { title, lines } = service.preview;
  return (
    <div aria-hidden="true" className="rounded-card border border-line bg-surface-alt p-4 text-sm">
      <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted">{title}</p>

      {service.key === "W" && (
        <div className="mt-3 rounded-lg border border-line bg-surface p-3">
          <p className="flex items-center gap-2 rounded-full border border-line px-3 py-1.5 text-xs text-ink-muted">
            <Search className="h-3.5 w-3.5" /> {lines[0]}
          </p>
          <p className="mt-3 font-semibold text-primary">{lines[1]}</p>
          <p className="mt-0.5 text-xs font-medium text-success">{lines[2]}</p>
          <p className="mt-2 flex flex-wrap gap-1.5">
            {lines[3].split(" · ").map((chip) => (
              <span key={chip} className="rounded-full bg-primary-soft px-2 py-0.5 text-xs font-medium text-primary">
                {chip}
              </span>
            ))}
          </p>
        </div>
      )}

      {service.key === "A" && (
        <div className="mt-3 flex flex-col gap-2">
          <p className="max-w-[85%] self-end rounded-xl rounded-br-sm bg-primary-soft px-3 py-2 text-ink">{lines[0]}</p>
          <p className="max-w-[85%] self-start rounded-xl rounded-bl-sm border border-line bg-surface px-3 py-2 text-ink">
            {lines[1]}
          </p>
        </div>
      )}

      {service.key === "S" && (
        <ul className="mt-3 space-y-2">
          {lines.map((line) => (
            <li key={line} className="flex items-start gap-2 rounded-lg border border-line bg-surface px-3 py-2 text-xs text-ink">
              <CalendarCheck className="mt-px h-3.5 w-3.5 shrink-0 text-success" />
              {line}
            </li>
          ))}
        </ul>
      )}

      {service.key === "D" && (
        <ul className="mt-3 grid gap-2">
          {lines.map((line, index) => (
            <li key={line} className="flex items-center gap-2.5 rounded-lg border border-line bg-surface px-3 py-2 text-xs text-ink">
              <span
                className={cn(
                  "h-6 w-6 shrink-0 rounded-md",
                  ["bg-primary-soft", "bg-accent-soft", "bg-success-soft"][index % 3],
                )}
              />
              {line}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
