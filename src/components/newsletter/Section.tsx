import type { ReactNode } from "react";

export function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section aria-labelledby={id} className="mb-11">
      <div className="mb-[18px] flex items-baseline gap-3">
        <h2 id={id} className="m-0 whitespace-nowrap font-mono text-[13px] font-semibold uppercase tracking-[.14em]">
          {title}
        </h2>
        <span className="h-px flex-1 bg-border" />
      </div>
      {children}
    </section>
  );
}
