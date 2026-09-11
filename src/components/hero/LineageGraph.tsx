import { lineageNodes } from "@/content/lineage";
import { LineageNode } from "@/components/hero/LineageNode";
import type { LineageStage } from "@/lib/types";

const STAGES: { key: LineageStage; label: string }[] = [
  { key: "source", label: "sources" },
  { key: "transform", label: "transformations" },
  { key: "served", label: "served" },
];

export function LineageGraph() {
  return (
    <div
      role="group"
      aria-label="Career lineage: sources, transformations, and served outputs"
      className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6"
    >
      {STAGES.map((stage) => (
        <div key={stage.key} className="flex flex-col gap-3">
          <h2 className="font-mono text-xs text-ink/50">{stage.label}</h2>
          <div className="flex flex-col gap-3">
            {lineageNodes
              .filter((node) => node.stage === stage.key)
              .map((node) => (
                <LineageNode key={node.id} node={node} />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
