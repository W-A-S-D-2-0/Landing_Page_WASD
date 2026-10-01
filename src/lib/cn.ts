import type { CSSProperties } from "react";

/** Une clases condicionales: cn("a", cond && "b") → "a b". */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

/** Retraso de la animación de aparición para elementos con data-reveal. */
export function revealDelay(ms: number): CSSProperties {
  return { "--reveal-delay": `${ms}ms` } as CSSProperties;
}
