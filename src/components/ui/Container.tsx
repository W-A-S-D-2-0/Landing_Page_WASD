import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export function Container({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div {...props} className={cn("mx-auto w-full max-w-6xl px-4 sm:px-6", className)} />;
}
