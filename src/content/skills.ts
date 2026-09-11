import type { SkillGroup, EducationEntry, Publication } from "@/lib/types";

export const skills: SkillGroup[] = [
  {
    category: "Languages",
    items: ["Python", "SQL", "PySpark", "R", "JavaScript", "TypeScript"],
  },
  {
    category: "Data platform",
    items: [
      "Azure Databricks",
      "Unity Catalog",
      "Delta Lake",
      "ADLS",
      "Snowflake",
      "Oracle",
      "MySQL",
      "MongoDB",
    ],
  },
  {
    category: "AI/ML",
    items: [
      "LangGraph",
      "Databricks Agent Bricks",
      "Genie",
      "MCP",
      "GitHub Copilot agents",
      "TensorFlow",
      "PyTorch",
      "scikit-learn",
    ],
  },
  {
    category: "BI",
    items: ["Power BI", "Tableau"],
  },
  {
    category: "Web",
    items: ["React", "Flask", "HTML/CSS"],
  },
];

export const certifications: string[] = [
  "Google Data Analytics",
  "Google Generative AI",
  "Gemini for Data Analysts",
  "Databricks Fundamentals",
  "GitHub Copilot",
];

export const education: EducationEntry[] = [
  {
    id: "utd",
    school: "The University of Texas at Dallas",
    degree: "MS, Computer Science",
    gpa: "3.5",
    note: "Graduate Student Assistant",
  },
  {
    id: "pune",
    school: "Pune University",
    degree: "BE, Computer Engineering",
    gpa: "3.9",
    note: "Secretary, Computer Society of India chapter",
  },
];

export const publication: Publication = {
  title: "Posture Estimation for Yoga Asanas",
  url: "https://troindia.in/journal/ijcesr/vol9iss5/29-36.pdf",
};
