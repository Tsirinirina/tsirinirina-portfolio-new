export interface Skill {
  id: string;
  name: string;
  category: SkillsCategory;
  percentage: number;
  ranking: string;
  createdAt: string;
}

export enum SkillsCategory {
  PROGRAMMING_LANGUAGE = "PROGRAMMING_LANGUAGE",
  FRONT_END = "FRONT_END",
  BACK_END = "BACK_END",
  DATABASE = "DATABASE",
  VERSION_CONTROL = "VERSION_CONTROL",
  CLOUD = "CLOUD",
}

export interface SkillDTO {
  category?: SkillsCategory;
  name?: string;
  percentage?: number;
  ranking?: string;
}
