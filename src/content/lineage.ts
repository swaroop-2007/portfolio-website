import type { LineageNode, LineageEdge } from "@/lib/types";

// Nodes read left to right: sources (education, early roles) -> transformations
// (skill clusters) -> served (current selected work). `tags` link a node to
// the Selected work / Side project rows it should highlight together with —
// wired up in the hero interaction milestone.
export const lineageNodes: LineageNode[] = [
  {
    id: "ut-dallas",
    stage: "source",
    label: "UT Dallas",
    sublabel: "MS, Computer Science",
    sectionId: "education",
  },
  {
    id: "pune-university",
    stage: "source",
    label: "Pune University",
    sublabel: "BE, Computer Engineering",
    sectionId: "education",
  },
  {
    id: "early-roles",
    stage: "source",
    label: "Early analyst roles",
    sublabel: "Hodek Edge · Feynn Labs · One Community Global",
    sectionId: "experience",
  },
  {
    id: "data-platform",
    stage: "transform",
    label: "Data platform",
    sublabel: "Databricks · PySpark · SQL",
    sectionId: "skills",
    tags: ["Databricks", "PySpark", "Snowflake", "ADLS", "Unity Catalog", "Spatial SQL", "GeoPandas"],
  },
  {
    id: "ai-ml",
    stage: "transform",
    label: "AI / agents",
    sublabel: "LangGraph · MCP · Agent Bricks",
    sectionId: "skills",
    tags: ["LangGraph", "Agent Bricks", "Genie", "MCP", "GitHub Copilot agents"],
  },
  {
    id: "feature-discovery-agent",
    stage: "served",
    label: "Feature discovery agent",
    sectionId: "selected-work",
    tags: ["feature-discovery-agent"],
  },
  {
    id: "ai-test-generation-agents",
    stage: "served",
    label: "AI test-generation agents",
    sectionId: "selected-work",
    tags: ["ai-test-generation-agents"],
  },
  {
    id: "geospatial-boundary-ingestion",
    stage: "served",
    label: "Geospatial ingestion",
    sectionId: "selected-work",
    tags: ["geospatial-boundary-ingestion"],
  },
  {
    id: "data-platform-migration",
    stage: "served",
    label: "Platform migration",
    sectionId: "selected-work",
    tags: ["data-platform-migration"],
  },
  {
    id: "data-feature-products",
    stage: "served",
    label: "Feature products",
    sectionId: "selected-work",
    tags: ["data-feature-products"],
  },
];

export const lineageEdges: LineageEdge[] = [
  { from: "ut-dallas", to: "data-platform" },
  { from: "ut-dallas", to: "ai-ml" },
  { from: "pune-university", to: "data-platform" },
  { from: "early-roles", to: "data-platform" },
  { from: "data-platform", to: "feature-discovery-agent" },
  { from: "data-platform", to: "geospatial-boundary-ingestion" },
  { from: "data-platform", to: "data-platform-migration" },
  { from: "data-platform", to: "data-feature-products" },
  { from: "ai-ml", to: "feature-discovery-agent" },
  { from: "ai-ml", to: "ai-test-generation-agents" },
];
