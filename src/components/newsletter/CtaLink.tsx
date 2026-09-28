import { cn } from "@/lib/utils";
import type { Link } from "@/data/issue";

export function CtaLink({ link }: { link: Link }) {
  return (
    <a
      href={link.href}
      data-todo={link.todo ? "link" : undefined}
      className={cn(
        "inline-block rounded-[9px] px-[18px] py-2.5 text-sm font-semibold no-underline transition hover:brightness-110",
        link.variant === "ghost"
          ? "border border-border bg-transparent text-primary"
          : "bg-primary text-primary-foreground",
      )}
    >
      {link.label}
    </a>
  );
}
