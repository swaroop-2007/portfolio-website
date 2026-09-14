"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { lineageNodes, lineageEdges } from "@/content/lineage";
import { LineageNode, type LineageNodeStatus } from "@/components/hero/LineageNode";
import { useLineageHighlight } from "@/components/hero/LineageProvider";
import type { LineageStage } from "@/lib/types";

const STAGES: { key: LineageStage; label: string }[] = [
  { key: "source", label: "sources" },
  { key: "transform", label: "transformations" },
  { key: "served", label: "served" },
];

const STAGE_COLOR_VAR: Record<LineageStage, string> = {
  source: "var(--color-source)",
  transform: "var(--color-transform)",
  served: "var(--color-served)",
};

interface EdgeLine {
  key: string;
  path: string;
  length: number;
  toStage: LineageStage;
}

export function LineageGraph() {
  const { activeNodeId, setActiveNodeId, connectedNodeIds, connectedEdgeKeys } =
    useLineageHighlight();

  const containerRef = useRef<HTMLDivElement>(null);
  const nodeElsRef = useRef<Map<string, HTMLAnchorElement>>(new Map());
  const [edgeLines, setEdgeLines] = useState<EdgeLine[]>([]);
  const [drawn, setDrawn] = useState(false);
  const reducedMotionRef = useRef(false);

  const recomputeEdges = () => {
    const container = containerRef.current;
    if (!container) return;
    const containerRect = container.getBoundingClientRect();
    const lines: EdgeLine[] = [];
    for (const edge of lineageEdges) {
      const fromEl = nodeElsRef.current.get(edge.from);
      const toEl = nodeElsRef.current.get(edge.to);
      if (!fromEl || !toEl) continue;
      const fromRect = fromEl.getBoundingClientRect();
      const toRect = toEl.getBoundingClientRect();
      const x1 = fromRect.right - containerRect.left;
      const y1 = fromRect.top + fromRect.height / 2 - containerRect.top;
      const x2 = toRect.left - containerRect.left;
      const y2 = toRect.top + toRect.height / 2 - containerRect.top;
      const midX = (x1 + x2) / 2;
      const toStage = lineageNodes.find((n) => n.id === edge.to)?.stage ?? "served";
      lines.push({
        key: `${edge.from}->${edge.to}`,
        path: `M ${x1} ${y1} H ${midX} V ${y2} H ${x2}`,
        length: Math.abs(midX - x1) + Math.abs(y2 - y1) + Math.abs(x2 - midX),
        toStage,
      });
    }
    setEdgeLines(lines);
  };

  useLayoutEffect(() => {
    reducedMotionRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    recomputeEdges();
    const onResize = () => recomputeEdges();
    window.addEventListener("resize", onResize);
    document.fonts?.ready.then(() => recomputeEdges());
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const hasEdges = edgeLines.length > 0;
  useEffect(() => {
    if (!hasEdges) return;
    if (reducedMotionRef.current) {
      setDrawn(true);
      return;
    }
    const raf = requestAnimationFrame(() => requestAnimationFrame(() => setDrawn(true)));
    return () => cancelAnimationFrame(raf);
  }, [hasEdges]);

  const getStatus = (nodeId: string): LineageNodeStatus => {
    if (!activeNodeId) return "idle";
    if (nodeId === activeNodeId) return "active";
    if (connectedNodeIds.has(nodeId)) return "connected";
    return "dimmed";
  };

  return (
    <div
      ref={containerRef}
      role="group"
      aria-label="Career lineage: sources, transformations, and served outputs"
      className="relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6"
      onKeyDown={(event) => {
        if (event.key === "Escape") setActiveNodeId(null);
      }}
    >
      <svg
        aria-hidden
        className="hidden md:block absolute inset-0 w-full h-full pointer-events-none overflow-visible"
      >
        {edgeLines.map((edge) => {
          const isConnected = connectedEdgeKeys.has(edge.key);
          const isDimmed = activeNodeId !== null && !isConnected;
          return (
            <path
              key={edge.key}
              d={edge.path}
              fill="none"
              stroke={isConnected ? STAGE_COLOR_VAR[edge.toStage] : "var(--color-ink)"}
              strokeOpacity={isConnected ? 0.9 : isDimmed ? 0.06 : 0.18}
              strokeWidth={isConnected ? 1.5 : 1}
              strokeDasharray={edge.length}
              strokeDashoffset={drawn ? 0 : edge.length}
              style={{ transition: "stroke-dashoffset 700ms ease, stroke-opacity 200ms ease, stroke 200ms ease" }}
            />
          );
        })}
      </svg>

      {STAGES.map((stage) => (
        <div key={stage.key} className="relative flex flex-col gap-3">
          <h2 className="font-mono text-xs uppercase tracking-wider text-ink/65">{stage.label}</h2>
          <div className="flex flex-col gap-3">
            {lineageNodes
              .filter((node) => node.stage === stage.key)
              .map((node) => (
                <LineageNode
                  key={node.id}
                  node={node}
                  status={getStatus(node.id)}
                  nodeRef={(el) => {
                    if (el) nodeElsRef.current.set(node.id, el);
                    else nodeElsRef.current.delete(node.id);
                  }}
                  onActivate={() => setActiveNodeId(node.id)}
                />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
