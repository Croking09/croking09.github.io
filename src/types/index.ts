export interface NavbarItem {
  id: string;
  label: string;
}

export type TechnologyCategory = "Frontend" | "Backend" | "Tool";

export interface Technology {
  id: string;
  name: string;
  color: string;
  logo: ImageMetadata;
  category: TechnologyCategory;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: Technology["id"][];
  url: string;
  image: ImageMetadata;
}
