import { archive, archiveNote } from "@/content/sideProjects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { Reveal } from "@/components/ui/Reveal";

export function Archive() {
  return (
    <section id="archive" className="py-16 md:py-24">
      <SectionHeading title="Archive" description="Older repos, compact." />
      <ul className="border-t border-ink/10">
        {archive.map((item, index) => (
          <li key={item.id}>
            <Reveal
              delay={Math.min(index * 30, 150)}
              className="border-b border-ink/10 py-4 flex flex-col md:flex-row md:items-baseline md:gap-3"
            >
              <span className="font-semibold shrink-0">{item.title}</span>
              {item.date ? (
                <span className="font-mono text-xs text-ink/65 shrink-0">{item.date}</span>
              ) : null}
              <span className="text-ink/70">{item.description}</span>
            </Reveal>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-ink/70">
        {archiveNote.text}{" "}
        <ExternalLink href={archiveNote.href}>See all repos on GitHub</ExternalLink>
      </p>
    </section>
  );
}
