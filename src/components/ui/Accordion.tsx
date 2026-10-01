"use client";

import { ChevronDown } from "lucide-react";
import { useId, useState } from "react";
import { cn } from "@/lib/cn";

type AccordionItem = { question: string; answer: string };

/** Acordeón accesible (botones con aria-expanded + regiones). Varios pueden estar abiertos. */
export function Accordion({ items, headingLevel = 3 }: { items: AccordionItem[]; headingLevel?: 3 | 4 }) {
  const baseId = useId();
  const [open, setOpen] = useState<Set<number>>(() => new Set());
  const Heading = headingLevel === 3 ? "h3" : "h4";

  function toggle(index: number) {
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  }

  return (
    <div className="divide-y divide-line rounded-card border border-line bg-surface">
      {items.map((item, index) => {
        const isOpen = open.has(index);
        const buttonId = `${baseId}-btn-${index}`;
        const panelId = `${baseId}-panel-${index}`;
        return (
          <div key={item.question}>
            <Heading className="font-sans text-base font-semibold sm:text-[1.0625rem]">
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(index)}
                className="flex min-h-14 w-full items-center justify-between gap-4 px-5 py-4 text-left text-ink transition-colors hover:text-primary sm:px-6"
              >
                <span>{item.question}</span>
                <ChevronDown
                  aria-hidden="true"
                  className={cn(
                    "h-5 w-5 shrink-0 text-ink-muted transition-transform duration-200 motion-reduce:transition-none",
                    isOpen && "rotate-180",
                  )}
                />
              </button>
            </Heading>
            <div
              id={panelId}
              data-open={isOpen}
              className="collapse-grid"
            >
              <div className="overflow-hidden" inert={!isOpen}>
                <p className="max-w-[65ch] px-5 pb-5 text-ink-muted sm:px-6">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
