import type { Hackathon } from "@/data/issue";
import { Badges } from "./Badge";
import { Card, CardBody, CardTitle } from "./Card";
import { CtaLink } from "./CtaLink";

export function HackathonCard({ hackathon }: { hackathon: Hackathon }) {
  return (
    <Card>
      <Badges badges={hackathon.badges} />
      <CardTitle>{hackathon.title}</CardTitle>
      <dl className="mb-4 border-t">
        {hackathon.meta.map((row) => (
          <div key={row.key} className="flex gap-3.5 border-b py-2 text-sm">
            <dt className="shrink-0 basis-[78px] pt-[3px] font-mono text-[11px] uppercase tracking-[.08em] text-faint sm:basis-24">
              {row.key}
            </dt>
            <dd className="m-0 flex-1">{row.value}</dd>
          </div>
        ))}
      </dl>
      {hackathon.body && <CardBody>{hackathon.body}</CardBody>}
      <div className="flex flex-wrap gap-2.5">
        {hackathon.ctas.map((cta) => (
          <CtaLink key={cta.label} link={cta} />
        ))}
      </div>
    </Card>
  );
}
