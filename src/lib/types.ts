export interface Skill {
  name: string;
  icon: string;
}

export interface SkillGroup {
  title: string;
  icon: string;
  skills: Skill[];
}

export interface ProjectHighlight {
  title: string;
  description: string;
}

export interface Project {
  tag: string;
  title: string;
  client: string;
  description: string;
  liveUrl: string;
  highlights: ProjectHighlight[];
  tech: string[];
}

export interface EducationItem {
  year: string;
  degree: string;
  school: string;
  detail?: string;
  award?: string;
  iconType: "graduation" | "book" | "briefcase" | "code";
}

export interface ContactInfo {
  label: string;
  value: string;
  href?: string;
  iconType: "email" | "phone" | "location";
}
