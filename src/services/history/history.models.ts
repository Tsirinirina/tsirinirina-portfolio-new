import { ActionName, EntityName } from "@/core/constant.history";
import { User } from "../user/user.models";

export interface Action {
  _id?: string;
  name: ActionName;
  proof?: string;
}

/**
 * Represents a history
 */
export interface History {
  _id?: string;

  action: Action;

  user: User;

  targetId: string;

  entity: EntityName;

  createdAt?: string;
}

/**
 * Represents a history
 */
export interface CreateHistoryDto {
  action: {
    name: ActionName;
    proof?: string;
  };

  user: string;

  targetId: string;

  entity: string;
}

export interface CreateDtoWithHistory<T> {
  createDataDto: T;
  createHistoryDto: CreateHistoryDto;
}

export interface UpdateDtoWithHistory<T> {
  updateDataDto: T;
  createHistoryDto: CreateHistoryDto;
}
