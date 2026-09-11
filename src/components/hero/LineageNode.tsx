import type { LineageNode as LineageNodeType } from "@/lib/types";

export type LineageNodeStatus = "idle" | "active" | "connected" | "dimmed";

const STAGE_STYLE: Record<LineageNodeType["stage"], { active: string; connected: string }> = {
  source: { active: "border-source border-2 bg-source/5", connected: "border-source/60" },
  transform: { active: "border-transform border-2 bg-transform/5", connected: "border-transform/60" },
  served: { active: "border-served border-2 bg-served/5", connected: "border-served/60" },
};

export function LineageNode({
  node,
  status,
  nodeRef,
  onActivate,
}: {
  node: LineageNodeType;
  status: LineageNodeStatus;
  nodeRef: (el: HTMLAnchorElement | null) => void;
  onActivate: () => void;
}) {
  const stage = STAGE_STYLE[node.stage];
  const stateClass =
    status === "active"
      ? stage.active
      : status === "connected"
        ? stage.connected
        : status === "dimmed"
          ? "border-ink/10 opacity-40"
          : "border-ink/20 hover:border-ink/50";

  return (
    <a
      ref={nodeRef}
      href={`#${node.sectionId}`}
      data-lineage-node={node.id}
      onClick={onActivate}
      onFocus={onActivate}
      className={`block rounded border bg-paper px-3 py-2 transition-colors ${stateClass}`}
    >
      <div className="text-sm font-semibold leading-snug">{node.label}</div>
      {node.sublabel ? (
        <div className="font-mono text-[0.6875rem] text-ink/70 mt-0.5">{node.sublabel}</div>
      ) : null}
    </a>
  );
}
