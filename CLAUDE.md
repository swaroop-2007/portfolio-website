# CLAUDE.md — Swaroop Udgaonkar portfolio site

This file is the project brief. Read it fully before doing anything. The resume PDF is in `docs/`.

## Goal

A personal portfolio site for Swaroop Udgaonkar, a data and AI engineer who builds production ML pipelines, feature stores, and agentic AI tools, and who is known for translating business needs into working systems. Audience: recruiters, hiring managers, and technical leads who will spend 30–90 seconds on the page. The site's job: make it obvious within one screen what Swaroop builds, then let people dig into projects.

## Tech stack

- Next.js (App Router) + TypeScript + Tailwind CSS
- Static-friendly (no database). Deploy target: Vercel.
- Keep dependencies minimal. Ask before adding any library heavier than a small utility.
- All site content lives in `src/content/` as typed TS objects (profile, experience, projects, skills). Components never hard-code copy, so content edits never touch layout code.

## Working agreement

1. Plan first. Before writing code, propose the design plan (see Design) and file structure, and wait for approval.
2. Work in milestones: scaffold → layout + content → hero interaction → polish → production build. Git commit after each milestone with a clear message.
3. After each milestone, make sure `npm run dev` works and tell me what to look at on http://localhost:3000.
4. Before calling anything done, run `npm run build` and fix all errors and warnings.
5. Never commit secrets. `.env*.local` stays in `.gitignore`.
6. If content is missing or ambiguous, leave a visible `TODO:` in the content file and list it for me. Do not invent metrics, dates, or links.

## Confidentiality rules (hard rules)

The professional work below was done for a client through Wipro.
- Never name the client. Refer to it as "a large US financial services firm".
- No internal table, column, system, or team names. No internal screenshots or architecture diagrams.
- Describe the problem, approach, and tech generically.

## Site map

1. Hero — name, one-line positioning, the signature interaction (see Design), links (GitHub, LinkedIn, resume, email)
2. Selected work — professional projects (confidential, generic)
3. Side projects — featured personal builds with links
4. Experience — timeline
5. Skills and certifications
6. Education and publication
7. Contact
8. Archive — compact list of older repos

## Content

### Profile
- Name: Swaroop Udgaonkar
- Location: New Jersey, US
- Positioning line (draft, refine with me): "Data and AI engineer. I turn business questions into production ML pipelines and AI agents."
- Short bio (draft): Technical Analyst at Wipro, working on-site with a financial services client on Azure Databricks, PySpark, and Unity Catalog. Builds curated data marts, feature stores, and ML pipelines behind wealth-management models, and has been building agentic AI tools on top of them. MS in Computer Science from UT Dallas.
- GitHub: https://github.com/swaroop-2007
- LinkedIn: https://www.linkedin.com/in/swaroopudgaonkar/
- Email: TODO: personal email (do NOT use the wipro.com address)
- Phone: do not publish
- Resume download: `public/resume.pdf` — TODO: add a re-exported copy (personal email, no phone)

### Selected work (professional — keep generic)

**Feature discovery agent**
Multi-agent system that lets data scientists find ML features by asking questions in plain English instead of browsing a catalog. A supervisor agent routes between a knowledge assistant and a natural-language-to-SQL space. Architecture evolved from LangGraph to Databricks Agent Bricks; shipped as a Databricks App. Tradeoff story worth telling: a serverless budget limit ruled out vector search, so retrieval was rebuilt as a SQL keyword-scoring function. Led the design and the client demo.
Tech: Databricks, Agent Bricks, LangGraph, Genie, Unity Catalog, Python

**AI test-generation agents**
Four GitHub Copilot agent plugins: one turns Jira stories and source-to-target mapping specs into data-engineering test cases; the second turns those test cases into runnable Databricks test notebooks. Integrates Jira through MCP with OAuth. The third one gets all the source artifacts by providing a github repo. Fourth one creates a Change Request Review for the Change Advisory Board of Data Analytics Production Implementations. This agent reviews the Change Request against the rules and notifies the leaders if the change is good for production implementation or not. Opens ServiceNow, connects with Confluence to give a score out of 100.
Tech: GitHub Copilot agents, MCP, Python, Databricks

**Geospatial boundary ingestion pipeline**
Pipeline that ingests GIS boundary shapefiles, reprojects geometry to EPSG:4326, runs point-in-polygon logic with GeoPandas and Databricks Spatial SQL, and loads serving tables for territory analytics.
Tech: Databricks, Spatial SQL, GeoPandas, PySpark

**Data platform migration and ML pipelines**
Moved ML feature pipelines from on-prem Oracle and DB2 to ADLS and Snowflake, including PySpark change-tracking (CDC) logic. Tuned Spark transformations supporting production deployment of 8+ ML models. Contributed to a feature store and a conversational data-governance tool, and set up data quality monitoring (schema anomaly detection, time-series profiling).
Tech: PySpark, Azure Databricks, ADLS, Snowflake, Delta Lake, Unity Catalog

**Data Feature Products for Data Science Team**
Built pipelines for data science team using aggregated logics for the Machine Learning models. The models help the Financial Advisors in the Firm to target their clients. Features are highly curated helping in communicating with end clients. 
Tech: Databricks PySpark, Snowflake, SQL, MLFlow


### Side projects (public — featured)

**StockSense** — React portfolio tracker with an AI chat assistant for US and Indian markets. TODO: repo link, live link, screenshot.

**Addvie Logistics website** — Front end for a logistics company: responsive layout, cross-browser support, interactive UI components. TODO: live URL, screenshot.

**GPT for Stock Market Analysis** (Nov 2023) — Fine-tuned GPT-3.5 Turbo for technical analysis; computes SMA, EMA, RSI, and MACD and generates plots from user input. TODO: repo link.

**Custom Search Engine for Science Data** (Apr 2024) — Crawled ~123K science web pages with Scrapy and Beautiful Soup into MongoDB; Flask search engine with indexing, clustering, and query expansion. TODO: repo link.

**Posture Estimation for Yoga Asanas** (May 2023) — TensorFlow pose estimation (93% accuracy) plus a PyTorch Siamese network that compares the user's pose to a reference and generates a report; Flask web app; tested with Selenium and Pytest. Published as a research paper. TODO: paper link.

### Side projects (archive — compact list)
- Salary Prediction System (Dec 2022) — Selenium scraper across 10 job sites; regression and boosting models. (TODO: resume says "97% accuracy"; for regression, state R² or MAE instead.)
- Movie Piracy Prediction (May 2023) — XGBoost, SVM, logistic regression implemented from scratch and benchmarked against scikit-learn.
- Course Management System (Dec 2022) — Java, Spring Boot, Spring Security, MySQL, JUnit.
- Telemedicine System (Dec 2022) — MySQL schema with complex queries; Java CRUD web app.
- Older repos: face recognition, criminal identification via facial recognition, object detection, GAN image generation, happiness detector, voice assistant for YouTube. Link to https://github.com/swaroop-2007?tab=repositories

### Experience
- **Wipro Ltd** — Consultant / Technical Analyst, Mar 2025 – present. On-site with a financial services client: data analytics, ML pipelines, feature store, agentic AI demos, 5+ client stakeholder demos.
- **One Community Global** — Data Analyst. TODO: dates. SEO and search-trend analysis (+25% traffic, +15% CTR); led a team of 10+.
- **Feynn Labs** — Data Scientist. TODO: dates. ML on EV market data that shaped a client's go-to-market; insights supported a $50K raise.
- **Hodek Edge Pvt Ltd** — Data Analyst. TODO: dates. SQL analysis on 100K+ financial records; Power BI reporting; Python automation (−30% manual work).

### Skills
- Languages: Python, SQL, PySpark, R, JavaScript, TypeScript
- Data platform: Azure Databricks, Unity Catalog, Delta Lake, ADLS, Snowflake, Oracle, MySQL, MongoDB
- AI/ML: LangGraph, Databricks Agent Bricks, Genie, MCP, GitHub Copilot agents, TensorFlow, PyTorch, scikit-learn
- BI: Power BI, Tableau
- Web: React, Flask, HTML/CSS

### Certifications
Google Data Analytics; Google Generative AI; Gemini for Data Analysts; Databricks Fundamentals; GitHub Copilot

### Education
- The University of Texas at Dallas — MS, Computer Science (GPA 3.5). Graduate Student Assistant.
- Pune University — BE, Computer Engineering (GPA 3.9). Secretary, Computer Society of India chapter.

### Publication
Posture Estimation for Yoga Asanas — TODO: link

## Design

### Direction
Ground the design in Swaroop's actual world: data lineage, lakehouse pipelines, feature stores, and maps. Default concept is **Lineage**:

- The hero is a small interactive lineage graph of Swaroop's career, read left to right like a data lineage view: sources (education, early analyst roles) → transformations (skills, tools) → served outputs (current projects). Edges draw in once on page load; that is the page's single orchestrated motion moment.
- Clicking or keyboard-focusing a node highlights its upstream and downstream path and jumps to the matching section or filters projects.
- Everything else is quiet, disciplined, typographic. The graph is the one bold element.

Alternative concepts to offer during planning (I'll pick one):
- **Notebook** — the page reads like a data notebook; each section is a cell, and the hero cell "runs" once to render the intro.
- **Territory map** — geospatial-inspired; projects plotted as regions on an abstract boundary map.

### Process
1. Produce a design plan before code: 4–6 named hex colors, 1–2 typefaces with roles and a clear type scale, ASCII wireframes for desktop and mobile, and alignment rules.
2. Review the plan against this brief. If any part looks like what you'd produce for any generic developer portfolio, revise it and tell me what changed and why.
3. Then build.

### Avoid (generic defaults)
- Cream background with serif display and terracotta accent; near-black with a single acid-green accent
- Grids of identical rounded cards with the same soft shadow; gradient washes as decoration
- All-caps eyebrow labels above headings; one highlighted word in a headline; "→" appended to every link
- Fade-and-slide-up on every section; hover animations on every card
- 01 / 02 / 03 numbering unless the content is truly a sequence (the experience timeline is; projects are not)
- Default font choices (Inter, Roboto, system stack) unless justified in the plan

### Quality floor
- Responsive down to 360px wide; the lineage graph needs a sensible mobile form (e.g., vertical)
- Visible keyboard focus; full keyboard access to the graph
- Respect `prefers-reduced-motion` (no draw-in animation)
- WCAG AA contrast
- Metadata: title, description, Open Graph image, favicon, sitemap
- Copy: sentence case, plain verbs, active voice, no filler

## Phase 2 (later, only when asked)

"Ask about Swaroop" — a small chat panel answering questions about Swaroop's work, grounded only in `src/content/`. Implementation: Next.js route handler calling the Claude API server-side; API key only in Vercel environment variables, never in client code; basic rate limiting; refuses questions outside the portfolio content.
