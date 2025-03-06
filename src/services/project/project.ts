import { TechnoList } from "@/utils/techno.list";

export interface Project {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  startDate: string;
  publishDate: string;
  technoList: TechnoList[];
  technoElements: TechnoList[];
  logoUri: string;
  clientInformation: string;
  link: string;
  version: string;
  status: string;
  type: ProjectType;
  priority: Priority;
  createdAt: string;
}

export enum ProjectType {
  WEBDEV = "Web Dev",
  MOBILEDEV = "Mobile Dev",
  UIUX = "UI/UX",
}

export enum Priority {
  HIGH = "HIGHT",
  NORMAL = "NORMAL",
}

export interface ProjectDTO {
  title?: string;
  shortTitle?: string;
  description?: string;
  startDate?: string;
  publishDate?: string;
  technoList?: TechnoList[];
  technoElements?: TechnoList[];
  logoUri?: string;
  clientInformation?: string;
  link?: string;
  version?: string;
  status?: string;
  type?: ProjectType;
  priority?: Priority;
  createdAt?: string;
}
