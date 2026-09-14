import type { SideProject, ArchiveItem } from "@/lib/types";

export const sideProjects: SideProject[] = [
  {
    id: "stocksense",
    title: "StockSense",
    description:
      "React portfolio tracker with an AI chat assistant for US and Indian markets.",
    tech: ["React", "AI chat assistant"],
    links: {},
    todos: ["repo link", "live link", "screenshot"],
  },
  {
    id: "gpt-stock-market-analysis",
    title: "GPT for Stock Market Analysis",
    date: "Nov 2023",
    description:
      "Fine-tuned GPT-3.5 Turbo for technical analysis; computes SMA, EMA, RSI, and MACD and generates plots from user input.",
    tech: ["GPT-3.5 Turbo", "Python"],
    links: {},
    todos: ["repo link"],
  },
  {
    id: "science-search-engine",
    title: "Custom search engine for science data",
    date: "Apr 2024",
    description:
      "Crawled ~123K science web pages with Scrapy and Beautiful Soup into MongoDB; Flask search engine with indexing, clustering, and query expansion.",
    tech: ["Scrapy", "Beautiful Soup", "MongoDB", "Flask"],
    links: {},
    todos: ["repo link"],
  },
  {
    id: "posture-estimation-yoga",
    title: "Posture estimation for yoga asanas",
    date: "May 2023",
    description:
      "TensorFlow pose estimation (93% accuracy) plus a PyTorch Siamese network that compares the user's pose to a reference and generates a report. Flask web app, tested with Selenium and Pytest. Published as a research paper.",
    tech: ["TensorFlow", "PyTorch", "Flask", "Selenium", "Pytest"],
    links: {},
  },
];

export const archive: ArchiveItem[] = [
  {
    id: "salary-prediction",
    title: "Salary prediction system",
    date: "Dec 2022",
    description:
      "Selenium scraper across 10 job sites; regression and boosting models. TODO: resume states \"97% accuracy\" for a regression task — replace with R² or MAE.",
    tech: ["Selenium", "Python"],
  },
  {
    id: "movie-piracy-prediction",
    title: "Movie piracy prediction",
    date: "May 2023",
    description:
      "XGBoost, SVM, and logistic regression implemented from scratch and benchmarked against scikit-learn.",
    tech: ["XGBoost", "SVM", "scikit-learn"],
  },
  {
    id: "course-management-system",
    title: "Course management system",
    date: "Dec 2022",
    description: "Java, Spring Boot, Spring Security, MySQL, JUnit.",
    tech: ["Java", "Spring Boot", "Spring Security", "MySQL", "JUnit"],
  },
  {
    id: "telemedicine-system",
    title: "Telemedicine system",
    date: "Dec 2022",
    description: "MySQL schema with complex queries; Java CRUD web app.",
    tech: ["Java", "MySQL"],
  },
];

export const archiveNote = {
  text: "Older repos: face recognition, criminal identification via facial recognition, object detection, GAN image generation, happiness detector, voice assistant for YouTube.",
  href: "https://github.com/swaroop-2007?tab=repositories",
};
