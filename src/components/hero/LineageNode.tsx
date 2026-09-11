import type { LineageNode as LineageNodeType } from "@/lib/types";

const STAGE_COLOR: Record<LineageNodeType["stage"], string> = {
  source: "border-source/40 hover:border-source",
  transform: "border-transform/40 hover:border-transform",
  served: "border-served/40 hover:border-served",
};

export function LineageNode({ node }: { node: LineageNodeType }) {
  return (
    <a
      href={`#${node.sectionId}`}
      data-lineage-node={node.id}
      className={`block rounded border bg-paper px-3 py-2 transition-colors ${STAGE_COLOR[node.stage]}`}
    >
      <div className="text-sm font-semibold leading-snug">{node.label}</div>
      {node.sublabel ? (
        <div className="font-mono text-[0.6875rem] text-ink/60 mt-0.5">
          {node.sublabel}
        </div>
      ) : null}
    </a>
  );
}
