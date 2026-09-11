"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import { lineageEdges } from "@/content/lineage";
import type { LineageEdge } from "@/lib/types";

interface Traversal {
  nodes: Set<string>;
  edgeKeys: Set<string>;
}

function edgeKey(edge: LineageEdge) {
  return `${edge.from}->${edge.to}`;
}

function traverse(startId: string, direction: "up" | "down"): Traversal {
  const nodes = new Set<string>();
  const edgeKeys = new Set<string>();
  const seen = new Set([startId]);
  let frontier = [startId];

  while (frontier.length > 0) {
    const next: string[] = [];
    for (const current of frontier) {
      for (const edge of lineageEdges) {
        const [from, to, step] =
          direction === "down" ? [edge.from, edge.to, edge.to] : [edge.to, edge.from, edge.from];
        if (from !== current) continue;
        edgeKeys.add(edgeKey(edge));
        nodes.add(to);
        if (!seen.has(step)) {
          seen.add(step);
          next.push(step);
        }
      }
    }
    frontier = next;
  }

  return { nodes, edgeKeys };
}

interface LineageHighlightValue {
  activeNodeId: string | null;
  setActiveNodeId: (id: string | null) => void;
  /** the active node plus every node reachable upstream/downstream from it */
  connectedNodeIds: Set<string>;
  connectedEdgeKeys: Set<string>;
}

const LineageHighlightContext = createContext<LineageHighlightValue | null>(null);

export function LineageProvider({ children }: { children: ReactNode }) {
  const [activeNodeId, setActiveNodeId] = useState<string | null>(null);

  const { connectedNodeIds, connectedEdgeKeys } = useMemo(() => {
    if (!activeNodeId) {
      return { connectedNodeIds: new Set<string>(), connectedEdgeKeys: new Set<string>() };
    }
    const up = traverse(activeNodeId, "up");
    const down = traverse(activeNodeId, "down");
    const nodes = new Set([activeNodeId, ...up.nodes, ...down.nodes]);
    const edgeKeys = new Set([...up.edgeKeys, ...down.edgeKeys]);
    return { connectedNodeIds: nodes, connectedEdgeKeys: edgeKeys };
  }, [activeNodeId]);

  const value: LineageHighlightValue = {
    activeNodeId,
    setActiveNodeId,
    connectedNodeIds,
    connectedEdgeKeys,
  };

  return (
    <LineageHighlightContext.Provider value={value}>{children}</LineageHighlightContext.Provider>
  );
}

export function useLineageHighlight() {
  const ctx = useContext(LineageHighlightContext);
  if (!ctx) {
    throw new Error("useLineageHighlight must be used within a LineageProvider");
  }
  return ctx;
}
