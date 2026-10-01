import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type FrameProps = { children: ReactNode; label: string; className?: string };

/** Marco de celular. `label` describe el mockup para lectores de pantalla. */
export function PhoneFrame({ children, label, className }: FrameProps) {
  return (
    <figure role="img" aria-label={label} className={cn("mx-auto w-[240px] sm:w-[270px]", className)}>
      <div className="rounded-[2.4rem] bg-device p-2.5 shadow-soft">
        <div className="relative aspect-[9/18.5] overflow-hidden rounded-[1.9rem]">
          <span className="absolute left-1/2 top-1.5 z-10 h-4 w-20 -translate-x-1/2 rounded-full bg-device" />
          <div className="h-full pt-6 [background:var(--mock-bg)]">{children}</div>
        </div>
      </div>
    </figure>
  );
}

/** Marco de laptop. */
export function LaptopFrame({ children, label, className }: FrameProps) {
  return (
    <figure role="img" aria-label={label} className={cn("mx-auto w-full max-w-[560px]", className)}>
      <div className="rounded-t-xl bg-device p-2 pb-2.5 sm:p-2.5">
        <div className="aspect-[16/10] overflow-hidden rounded-md">{children}</div>
      </div>
      <div className="relative mx-auto h-3 w-[108%] -translate-x-[3.7%] rounded-b-xl bg-device opacity-90">
        <span className="absolute left-1/2 top-0 h-1.5 w-16 -translate-x-1/2 rounded-b-md bg-[var(--border-strong)]" />
      </div>
    </figure>
  );
}

/** Ventana de navegador simple (para tarjetas de proyectos). */
export function BrowserFrame({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div aria-hidden="true" className={cn("overflow-hidden rounded-lg border border-line bg-surface", className)}>
      <div className="flex items-center gap-1.5 border-b border-line bg-surface-alt px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-[var(--border-strong)]" />
        <span className="h-2 w-2 rounded-full bg-[var(--border-strong)]" />
        <span className="h-2 w-2 rounded-full bg-[var(--border-strong)]" />
      </div>
      <div className="relative aspect-[16/10] overflow-hidden">
        <div className="absolute left-0 top-0 h-[160%] w-[160%] origin-top-left scale-[0.625]">{children}</div>
      </div>
    </div>
  );
}
