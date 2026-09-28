import { cn } from "@/lib/utils";
import type { Badge as BadgeData, BadgeTone } from "@/data/issue";

const tones: Record<BadgeTone, string> = {
  default: "bg-muted text-muted-foreground border-border",
  award: "bg-gold-soft text-gold border-transparent",
  prize: "bg-primary-soft text-primary border-transparent",
  urgent: "bg-urgent-soft text-urgent border-transparent",
};

export function Badges({ badges, className }: { badges: BadgeData[]; className?: string }) {
  return (
    <div className="mb-3.5 flex flex-wrap gap-2">
      {badges.map((b) => (
        <span
          key={b.label}
          className={cn(
            "inline-block whitespace-nowrap rounded-full border px-2.5 py-1 font-mono text-[11px] uppercase tracking-[.06em]",
            tones[b.tone ?? "default"],
            className,
          )}
        >
          {b.label}
        </span>
      ))}
    </div>
  );
}
