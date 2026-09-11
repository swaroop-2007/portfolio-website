import { sideProjects } from "@/content/sideProjects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechTag } from "@/components/ui/TechTag";
import { ExternalLink } from "@/components/ui/ExternalLink";

export function SideProjects() {
  return (
    <section id="side-projects" className="py-16 md:py-24">
      <SectionHeading title="Side projects" description="Featured personal builds." />
      <div className="border-t border-ink/10">
        {sideProjects.map((project) => (
          <div
            key={project.id}
            className="border-b border-ink/10 py-6 md:py-8 flex flex-col gap-3"
          >
            <div className="flex items-start gap-3">
              <span aria-hidden className="mt-2.5 size-2 shrink-0 rounded-full bg-ink/40" />
              <h3 className="text-lg font-semibold">
                {project.title}
                {project.date ? (
                  <span className="ml-2 font-mono text-xs font-normal text-ink/65">
                    {project.date}
                  </span>
                ) : null}
              </h3>
            </div>
            <p className="max-w-[68ch] text-ink/80 pl-5">{project.description}</p>
            <div className="flex flex-wrap gap-2 pl-5">
              {project.tech.map((t) => (
                <TechTag key={t} label={t} />
              ))}
            </div>
            <div className="pl-5 flex flex-wrap items-center gap-4 text-sm">
              {project.links.repo ? (
                <ExternalLink href={project.links.repo}>Repo</ExternalLink>
              ) : null}
              {project.links.live ? (
                <ExternalLink href={project.links.live}>Live</ExternalLink>
              ) : null}
              {project.todos?.map((todo) => (
                <span key={todo} className="inline-flex items-center gap-1.5 font-mono text-xs text-ink/70">
                  <span aria-hidden className="size-1.5 rounded-full bg-transform" />
                  TODO: {todo}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
