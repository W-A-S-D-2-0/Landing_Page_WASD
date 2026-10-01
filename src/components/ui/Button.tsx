import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import type { AnalyticsEvent } from "@/lib/analytics";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-[10px] font-semibold transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary: "bg-primary text-on-primary hover:bg-primary-hover",
  secondary: "border border-line-strong bg-surface text-ink hover:border-primary hover:text-primary",
  ghost: "text-primary hover:bg-primary-soft",
};

const sizes: Record<Size, string> = {
  md: "px-4 py-2 text-[0.9375rem]",
  lg: "px-6 py-3 text-base",
};

type Common = {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  /** Evento de analítica que se dispara al hacer clic (ver TrackClicks). */
  track?: { event: AnalyticsEvent; label: string };
};

export function buttonClasses(variant: Variant = "primary", size: Size = "md", className?: string) {
  return cn(base, variants[variant], sizes[size], className);
}

function trackAttrs(track?: Common["track"]) {
  return track ? { "data-track": track.event, "data-track-label": track.label } : {};
}

export function ButtonLink({
  variant,
  size,
  className,
  track,
  children,
  ...props
}: Common & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  const external = props.href.startsWith("http");
  return (
    <a
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...trackAttrs(track)}
      {...props}
      className={buttonClasses(variant, size, className)}
    >
      {children}
    </a>
  );
}

export function Button({
  variant,
  size,
  className,
  track,
  children,
  type = "button",
  ...props
}: Common & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type={type}
      {...trackAttrs(track)}
      {...props}
      className={buttonClasses(variant, size, className)}
    >
      {children}
    </button>
  );
}
