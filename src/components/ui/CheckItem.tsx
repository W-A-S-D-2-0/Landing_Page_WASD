import { Check } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/** Ítem de lista con check verde. Úsalo dentro de un <ul>. */
export function CheckItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <li className={cn("flex items-start gap-2.5", className)}>
      <Check aria-hidden="true" className="mt-[0.3em] h-4 w-4 shrink-0 text-success" strokeWidth={2.25} />
      <span>{children}</span>
    </li>
  );
}
