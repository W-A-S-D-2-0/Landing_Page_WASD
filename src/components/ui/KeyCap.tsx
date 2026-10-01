import { cn } from "@/lib/cn";

type KeyCapProps = {
  letter: string;
  size?: "sm" | "md";
  className?: string;
};

/** Letra con forma de tecla discreta: borde fino y base un poco más gruesa. */
export function KeyCap({ letter, size = "md", className }: KeyCapProps) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "inline-flex shrink-0 select-none items-center justify-center rounded-lg border border-line-strong border-b-[3px] bg-surface font-display font-bold text-primary",
        size === "md" ? "h-11 w-11 text-lg" : "h-7 w-7 text-xs",
        className,
      )}
    >
      {letter}
    </span>
  );
}
