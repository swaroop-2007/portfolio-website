import { education, publication } from "@/content/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { Reveal } from "@/components/ui/Reveal";

export function EducationAndPublication() {
  return (
    <section id="education" className="py-16 md:py-24">
      <SectionHeading title="Education and publication" />
      <div className="border-t border-ink/10">
        {education.map((entry, index) => (
          <Reveal
            key={entry.id}
            delay={Math.min(index * 40, 160)}
            className="border-b border-ink/10 py-6 flex flex-col md:flex-row md:items-baseline md:justify-between gap-1"
          >
            <div>
              <h3 className="text-lg font-semibold">{entry.school}</h3>
              <p className="text-ink/80">{entry.degree}</p>
              {entry.note ? <p className="text-ink/70 text-sm">{entry.note}</p> : null}
            </div>
            <span className="font-mono text-xs uppercase tracking-wider text-ink/65 shrink-0">GPA {entry.gpa}</span>
          </Reveal>
        ))}
        <Reveal
          delay={Math.min(education.length * 40, 160)}
          className="border-b border-ink/10 py-6"
        >
          <h3 className="font-mono text-xs uppercase tracking-wider text-ink/65 mb-2">Publication</h3>
          <ExternalLink href={publication.url} className="text-ink/80">
            {publication.title}
          </ExternalLink>
        </Reveal>
      </div>
    </section>
  );
}
