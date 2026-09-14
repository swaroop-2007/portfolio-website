import type { SelectedWorkProject } from "@/lib/types";

// TODO: the "change-review-agent" description below was reworded to drop
// the internal board/process name from CLAUDE.md ("Change Advisory Board of
// Data Analytics Production Implementations") per the confidentiality hard
// rule (no internal team names). Please confirm the generic wording is
// accurate before this ships.
export const selectedWork: SelectedWorkProject[] = [
  {
    id: "feature-discovery-agent",
    title: "Feature discovery agent",
    description:
      "Multi-agent system that lets data scientists find ML features by asking questions in plain English instead of browsing a catalog. A supervisor agent routes between a knowledge assistant and a natural-language-to-SQL space. Architecture evolved from LangGraph to Databricks Agent Bricks; shipped as a Databricks App. A serverless budget limit ruled out vector search, so retrieval was rebuilt as a SQL keyword-scoring function. Led the design and the client demo.",
    tech: ["Databricks", "Agent Bricks", "LangGraph", "Genie", "Unity Catalog", "Python"],
  },
  {
    id: "test-case-generator-agent",
    title: "Test case generator agent",
    description:
      "GitHub Copilot agent plugin that turns Jira stories and source-to-target mapping specs into data-engineering test cases. Integrates with Jira through MCP with OAuth.",
    tech: ["GitHub Copilot agents", "MCP", "Jira", "Python"],
  },
  {
    id: "test-notebook-generator-agent",
    title: "Test notebook generator agent",
    description:
      "GitHub Copilot agent plugin that turns data-engineering test cases into runnable Databricks test notebooks.",
    tech: ["GitHub Copilot agents", "Databricks", "Python"],
  },
  {
    id: "repo-artifact-agent",
    title: "Repo artifact assembly agent",
    description:
      "GitHub Copilot agent plugin that assembles the source artifacts needed for test generation directly from a GitHub repo.",
    tech: ["GitHub Copilot agents", "GitHub", "Python"],
  },
  {
    id: "change-review-agent",
    title: "Change request review agent",
    description:
      "GitHub Copilot agent plugin that reviews change requests against an internal governance checklist, flags whether a change is ready for production, and notifies stakeholders — pulling context from a ticketing system and a wiki and returning a readiness score out of 100.",
    tech: ["GitHub Copilot agents", "Python"],
  },
  {
    id: "geospatial-boundary-ingestion",
    title: "Geospatial boundary ingestion pipeline",
    description:
      "Pipeline that ingests GIS boundary shapefiles, reprojects geometry to EPSG:4326, runs point-in-polygon logic with GeoPandas and Databricks Spatial SQL, and loads serving tables for territory analytics.",
    tech: ["Databricks", "Spatial SQL", "GeoPandas", "PySpark"],
  },
  {
    id: "data-platform-migration",
    title: "Data platform migration and ML pipelines",
    description:
      "Moved ML feature pipelines from on-prem Oracle and DB2 to ADLS and Snowflake, including PySpark change-tracking (CDC) logic. Tuned Spark transformations supporting production deployment of 8+ ML models. Contributed to a feature store and a conversational data-governance tool, and set up data quality monitoring (schema anomaly detection, time-series profiling).",
    tech: ["PySpark", "Azure Databricks", "ADLS", "Snowflake", "Delta Lake", "Unity Catalog"],
  },
  {
    id: "data-feature-products",
    title: "Data feature products for the data science team",
    description:
      "Built pipelines for the data science team, aggregating features for machine learning models that help financial advisors at the firm target their clients. Features are highly curated to support communication with end clients.",
    tech: ["Databricks", "PySpark", "Snowflake", "SQL", "MLflow"],
  },
];
