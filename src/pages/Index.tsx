import { issue } from "@/data/issue";
import { Section } from "@/components/newsletter/Section";
import { WinnerCard } from "@/components/newsletter/WinnerCard";
import { ProgramCard } from "@/components/newsletter/ProgramCard";
import { HackathonCard } from "@/components/newsletter/HackathonCard";
import { ThemeToggle } from "@/components/ThemeToggle";

const Index = () => {
  return (
    <div className="mx-auto max-w-[660px] px-4 pb-16">
      <header className="mb-9 border-b pb-7 pt-11">
        <div className="mb-2.5 flex items-center justify-between gap-4">
          <p className="m-0 font-mono text-[11px] uppercase tracking-[.16em] text-faint">
            Devpost Weekly · {issue.date}
          </p>
          <ThemeToggle />
        </div>
        <h1 className="m-0 text-[clamp(30px,8vw,42px)] font-bold leading-[1.08] tracking-[-0.025em]">
          {issue.headline}
        </h1>
        <p className="mt-3 max-w-[46ch] text-muted-foreground">{issue.dek}</p>
      </header>

      <main>
        <Section id="winners" title="Winner Spotlights">
          {issue.winners.map((w) => (
            <WinnerCard key={w.title} winner={w} />
          ))}
        </Section>

        <Section id="programs" title="Resources & Programs">
          {issue.programs.map((p) => (
            <ProgramCard key={p.title} program={p} />
          ))}
        </Section>

        <Section id="featured" title="Featured Hackathons">
          {issue.featured.map((h) => (
            <HackathonCard key={h.title} hackathon={h} />
          ))}
        </Section>

        <Section id="trending" title="Trending This Week">
          {issue.trending.map((h) => (
            <HackathonCard key={h.title} hackathon={h} />
          ))}
        </Section>
      </main>

      <footer className="border-t pt-[22px] text-[13px] text-faint">
        {issue.footer.map((line) => (
          <p key={line} className="mb-2">
            {line}
          </p>
        ))}
      </footer>
    </div>
  );
};

export default Index;
