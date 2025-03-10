import { FlagNameList } from "@/utils/flag.name.list";
import { TechnoList } from "@/utils/techno.list";

export interface Language {
  id: string;
  name: string;
  ranking: string;
  percentage: string;
  flagName: FlagNameList;
  createdAt: string;
}

export interface LanguageDTO {
  name?: string;
  ranking?: string;
  percentage?: string;
  flagName?: FlagNameList;
}
