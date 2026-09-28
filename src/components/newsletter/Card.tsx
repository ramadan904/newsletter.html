import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <article className={cn("mb-4 rounded-lg border bg-card p-[18px] sm:p-[22px]", className)}>
      {children}
    </article>
  );
}

export function CardTitle({ children, href, todo }: { children: ReactNode; href?: string; todo?: boolean }) {
  return (
    <h3 className="mb-1.5 text-[19px] font-bold leading-snug tracking-[-0.01em]">
      {href ? (
        <a href={href} data-todo={todo ? "link" : undefined} className="text-inherit no-underline hover:text-primary">
          {children}
        </a>
      ) : (
        children
      )}
    </h3>
  );
}

export function CardBody({ children }: { children: ReactNode }) {
  return <p className="mb-4 text-muted-foreground last:mb-0">{children}</p>;
}
