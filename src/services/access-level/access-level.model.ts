export interface AccessLevel {
  _id?: string;
  name: string;
  alias: string;
  level: number;
  isDefault?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface CreateAccessLevelDto {
  name: string;
  alias: string;
  level: number;
}

export interface UpdateAccessLevelDto {
  name?: string;
  alias?: string;
  level?: number;
}

export enum BASIC_ACCESS_LEVEL {
  STANDARD = "Standard",
  HIGH_PRIORITY = "Haute Priorité",
}
