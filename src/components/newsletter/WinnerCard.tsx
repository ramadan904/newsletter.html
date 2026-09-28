import type { Winner } from "@/data/issue";
import { Badges } from "./Badge";
import { Card, CardBody, CardTitle } from "./Card";
import { CtaLink } from "./CtaLink";

export function WinnerCard({ winner }: { winner: Winner }) {
  return (
    <Card>
      <Badges badges={winner.badges} />
      <CardTitle href={winner.href} todo={winner.todo}>
        {winner.title}
      </CardTitle>
      <p className="mb-3 text-sm text-faint">{winner.byline}</p>
      <CardBody>{winner.body}</CardBody>
      <CtaLink link={winner.cta} />
    </Card>
  );
}
