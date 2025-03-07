import { TechnoList } from "@/utils/techno.list";

export interface Experience {
  id: string;
  companyName: string;
  position: string;
  description: string;
  startDate: string;
  endDate: string;
  contractType: ContractType;
  location: string;
  tasks: string[];
  technologiesUsed: TechnoList[];
  createdAt: string;
}

export enum ContractType {
  CDD = "CDD",
  CDI = "CDI",
  STAGE = "Stage",
  FREELANCE = "Freelance",
  COLLABORATION = "Collaboration",
}

export interface ExperienceDTO {
  companyName?: string;
  position?: string;
  description?: string;
  startDate?: string;
  endDate?: string;
  contractType?: ContractType;
  location?: string;
  tasks?: string[];
  technologiesUsed?: TechnoList[];
}
