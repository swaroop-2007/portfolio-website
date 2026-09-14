import type { ExperienceEntry } from "@/lib/types";

export const experience: ExperienceEntry[] = [
  {
    id: "wipro",
    company: "Wipro Ltd",
    role: "AI Consultant",
    dateRange: "Mar 2025 – present",
    current: true,
    bullets: [
      "On-site with a large US financial services firm: data analytics, ML pipelines, feature store, agentic AI demos.",
      "5+ client stakeholder demos.",
    ],
  },
  {
    id: "navhub-ai",
    company: "NavHub AI",
    role: "Founding Engineer",
    dateRange: "Nov 2024 – present",
    location: "New York, US",
    current: true,
    bullets: [
      "Set up the product and business strategy that landed the company in the top 5% of its YC batch.",
      "Architected a full-stack analytics platform combining product metrics with NLP-driven insights.",
      "Led A/B testing and defined PMF KPIs, helping validate product-market fit 30% faster.",
      "Applied NLP to 10,000+ user interactions to surface behavior patterns that shaped product strategy.",
    ],
  },
  {
    id: "one-community-global",
    company: "One Community Global",
    role: "Software Engineer",
    dateRange: "TODO: dates",
    bullets: [
      "Resolved 5+ critical bugs (memory leaks, state management, rendering) by enforcing best practices with Prettier and building Jest unit and integration tests.",
      "Built interactive dashboards with Chart.js and D3.js, improving data visibility for 500+ users.",
      "Reviewed 50+ PRs to raise code quality (−15% post-deployment bugs); led a team of 10+ and helped recruiting cut time-to-fill by 20%.",
    ],
  },
  {
    id: "feynn-labs",
    company: "Feynn Labs",
    role: "Data Scientist",
    dateRange: "TODO: dates",
    bullets: [
      "ML on EV market data that shaped a client's go-to-market strategy.",
      "Insights supported a $50K raise.",
    ],
  },
  {
    id: "hodek-edge",
    company: "Hodek Edge Pvt Ltd",
    role: "Data Analyst",
    dateRange: "TODO: dates",
    bullets: [
      "SQL analysis on 100K+ financial records.",
      "Power BI reporting; Python automation (−30% manual work).",
    ],
  },
];
