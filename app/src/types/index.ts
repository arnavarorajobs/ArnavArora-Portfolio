export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  details: string[];
  technologies: string[];
  color: string;
}

export interface Project {
  id: string;
  title: string;
  organization: string;
  period: string;
  description: string;
  details: string[];
  technologies: string[];
  image: string;
}

export interface Skill {
  category: string;
  items: string[];
}
