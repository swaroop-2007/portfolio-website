export type LineageStage = "source" | "transform" | "served";

export interface ProfileLinks {
  github: string;
  linkedin: string;
  email: string;
  resumeHref: string;
}

export interface Profile {
  name: string;
  location: string;
  positioningLine: string;
  bio: string;
  links: ProfileLinks;
}

export interface ExperienceEntry {
  id: string;
  company: string;
  role: string;
  dateRange: string;
  location?: string;
  bullets: string[];
  current?: boolean;
}

export interface SelectedWorkProject {
  id: string;
  title: string;
  description: string;
  tech: string[];
}

export interface ProjectLinks {
  repo?: string;
  live?: string;
}

export interface SideProject {
  id: string;
  title: string;
  description: string;
  date?: string;
  tech: string[];
  links: ProjectLinks;
  todos?: string[];
}

export interface ArchiveItem {
  id: string;
  title: string;
  date?: string;
  description: string;
  tech?: string[];
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface EducationEntry {
  id: string;
  school: string;
  degree: string;
  gpa: string;
  note?: string;
}

export interface Publication {
  title: string;
  url: string;
}

export interface LineageNode {
  id: string;
  stage: LineageStage;
  label: string;
  sublabel?: string;
  /** id of the page section this node jumps to when activated */
  sectionId: string;
  /** tags used to compute which Selected work / Side project rows highlight together with this node */
  tags?: string[];
}

export interface LineageEdge {
  from: string;
  to: string;
}
