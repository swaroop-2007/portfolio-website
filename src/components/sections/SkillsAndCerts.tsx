import { skills, certifications } from "@/content/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechTag } from "@/components/ui/TechTag";

export function SkillsAndCerts() {
  return (
    <section id="skills" className="py-16 md:py-24">
      <SectionHeading title="Skills and certifications" />
      <div className="grid gap-8 md:grid-cols-2">
        {skills.map((group) => (
          <div key={group.category}>
            <h3 className="font-mono text-xs text-ink/50 mb-3">{group.category}</h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <TechTag key={item} label={item} />
              ))}
            </div>
          </div>
        ))}
        <div>
          <h3 className="font-mono text-xs text-ink/50 mb-3">Certifications</h3>
          <ul className="flex flex-col gap-1.5 text-ink/80">
            {certifications.map((cert) => (
              <li key={cert}>{cert}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
