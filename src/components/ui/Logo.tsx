import { cn } from "@/lib/cn";

/** Marca: cuatro teclas (W arriba, A S D abajo) + texto WASD. Placeholder hasta tener logo final. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 24" aria-hidden="true" className={cn("h-6 w-8", className)} fill="none">
      <rect x="11" y="1" width="10" height="10" rx="2.5" fill="var(--primary)" />
      <rect x="0.75" y="13.75" width="9.5" height="9.5" rx="2.25" stroke="var(--primary)" strokeWidth="1.5" />
      <rect x="11.25" y="13.75" width="9.5" height="9.5" rx="2.25" stroke="var(--primary)" strokeWidth="1.5" />
      <rect x="21.75" y="13.75" width="9.5" height="9.5" rx="2.25" stroke="var(--primary)" strokeWidth="1.5" />
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark />
      <span className="font-display text-xl font-bold tracking-tight text-ink">WASD</span>
    </span>
  );
}
