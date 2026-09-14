import type { LineageNode as LineageNodeType } from "@/lib/types";

export type LineageNodeStatus = "idle" | "active" | "connected" | "dimmed";

const STAGE_STYLE: Record<
  LineageNodeType["stage"],
  { active: string; connected: string; dot: string }
> = {
  source: {
    active: "border-source shadow-[0_0_18px_var(--glow-source)] bg-source/10",
    connected: "border-source/60",
    dot: "bg-source",
  },
  transform: {
    active: "border-transform shadow-[0_0_18px_var(--glow-transform)] bg-transform/10",
    connected: "border-transform/60",
    dot: "bg-transform",
  },
  served: {
    active: "border-served shadow-[0_0_18px_var(--glow-served)] bg-served/10",
    connected: "border-served/60",
    dot: "bg-served",
  },
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
  const isHighlighted = status === "active" || status === "connected";
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
      className={`relative block border bg-paper px-3 py-2 transition-[border-color,box-shadow,background-color,opacity] ${stateClass}`}
    >
      <span
        aria-hidden
        className={`absolute top-1.5 right-1.5 size-1.5 rounded-full ${isHighlighted ? stage.dot : "bg-ink/20"}`}
      />
      <div className="text-sm font-semibold leading-snug pr-3">{node.label}</div>
      {node.sublabel ? (
        <div className="font-mono text-[0.6875rem] uppercase tracking-wider text-ink/70 mt-0.5">
          {node.sublabel}
        </div>
      ) : null}
    </a>
  );
}
