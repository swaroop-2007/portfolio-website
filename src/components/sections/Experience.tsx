import { experience } from "@/content/experience";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24">
      <SectionHeading title="Experience" />
      <ol className="border-t border-ink/10">
        {experience.map((entry) => (
          <li key={entry.id} className="border-b border-ink/10 py-6 md:py-8">
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1">
              <h3 className="text-lg font-semibold">
                {entry.company}
                <span className="font-normal text-ink/70"> — {entry.role}</span>
              </h3>
              <span className="font-mono text-xs text-ink/50 shrink-0">
                {entry.dateRange}
              </span>
            </div>
            <ul className="mt-3 flex flex-col gap-1.5 max-w-[68ch] text-ink/80">
              {entry.bullets.map((bullet) => (
                <li key={bullet} className="pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-ink/40">
                  {bullet}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
