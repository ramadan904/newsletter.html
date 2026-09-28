import type { Program } from "@/data/issue";
import { Badges } from "./Badge";
import { Card, CardBody, CardTitle } from "./Card";
import { CtaLink } from "./CtaLink";

export function ProgramCard({ program }: { program: Program }) {
  return (
    <Card className="border-transparent bg-primary-soft">
      <Badges badges={program.badges} className="border-border bg-card" />
      <CardTitle>{program.title}</CardTitle>
      <CardBody>{program.body}</CardBody>
      <ul className="mb-4 list-none p-0">
        {program.perks.map((perk) => (
          <li
            key={perk.strong}
            className="relative mb-[7px] pl-[22px] text-[15px] text-muted-foreground before:absolute before:left-1 before:top-2.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-primary"
          >
            <strong className="font-semibold text-foreground">{perk.strong}</strong>
            {perk.rest}
          </li>
        ))}
      </ul>
      <CtaLink link={program.cta} />
    </Card>
  );
}
