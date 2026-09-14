"use client";

import { selectedWork } from "@/content/selectedWork";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechTag } from "@/components/ui/TechTag";
import { Reveal } from "@/components/ui/Reveal";
import { useLineageHighlight } from "@/components/hero/LineageProvider";

export function SelectedWork() {
  const { activeNodeId, connectedNodeIds } = useLineageHighlight();

  return (
    <section id="selected-work" className="py-16 md:py-24">
      <SectionHeading
        title="Selected work"
        description="Professional projects, described generically — the work was done for a large US financial services firm."
      />
      <div className="border-t border-ink/10">
        {selectedWork.map((project, index) => {
          const isConnected = !activeNodeId || connectedNodeIds.has(project.id);
          return (
            <Reveal
              key={project.id}
              delay={Math.min(index * 40, 160)}
              className="border-b border-ink/10 py-6 md:py-8"
            >
              <div
                data-lineage-id={project.id}
                className={`flex flex-col gap-3 transition-[opacity,background-color] ${
                  isConnected ? "opacity-100" : "opacity-40"
                } ${activeNodeId && connectedNodeIds.has(project.id) ? "bg-served/6" : ""}`}
              >
                <div className="flex items-start gap-3">
                  <span
                    aria-hidden
                    className="mt-2.5 size-2 shrink-0 rounded-full bg-served"
                  />
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                </div>
                <p className="max-w-[68ch] text-ink/80 pl-5">{project.description}</p>
                <div className="flex flex-wrap gap-2 pl-5">
                  {project.tech.map((t) => (
                    <TechTag key={t} label={t} />
                  ))}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
