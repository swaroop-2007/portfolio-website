"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import { lineageEdges, lineageNodes } from "@/content/lineage";
import type { LineageEdge } from "@/lib/types";

/**
 * A served-stage lineage node maps to one or more Selected work rows via
 * `tags` (falling back to the node's own id when a node represents exactly
 * one project, e.g. "feature-discovery-agent").
 */
function projectIdsForNode(nodeId: string): string[] {
  const node = lineageNodes.find((n) => n.id === nodeId);
  if (!node) return [nodeId];
  return node.tags && node.tags.length > 0 ? node.tags : [nodeId];
}

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
  /** Selected work project ids the connected served nodes map to */
  activeProjectIds: Set<string>;
}

const LineageHighlightContext = createContext<LineageHighlightValue | null>(null);

export function LineageProvider({ children }: { children: ReactNode }) {
  const [activeNodeId, setActiveNodeId] = useState<string | null>(null);

  const { connectedNodeIds, connectedEdgeKeys, activeProjectIds } = useMemo(() => {
    if (!activeNodeId) {
      return {
        connectedNodeIds: new Set<string>(),
        connectedEdgeKeys: new Set<string>(),
        activeProjectIds: new Set<string>(),
      };
    }
    const up = traverse(activeNodeId, "up");
    const down = traverse(activeNodeId, "down");
    const nodes = new Set([activeNodeId, ...up.nodes, ...down.nodes]);
    const edgeKeys = new Set([...up.edgeKeys, ...down.edgeKeys]);
    const projectIds = new Set(Array.from(nodes).flatMap(projectIdsForNode));
    return { connectedNodeIds: nodes, connectedEdgeKeys: edgeKeys, activeProjectIds: projectIds };
  }, [activeNodeId]);

  const value: LineageHighlightValue = {
    activeNodeId,
    setActiveNodeId,
    connectedNodeIds,
    connectedEdgeKeys,
    activeProjectIds,
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
