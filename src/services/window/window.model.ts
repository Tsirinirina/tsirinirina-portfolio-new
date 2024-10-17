import { Display } from "../display/display.model";
import { Service } from "../service/service.model";
import { User } from "../user/user.models";
import { WindowType } from "../window-type/window-type.model";

export interface Window {
  _id: string;
  identifier: string;
  status: string;
  servicesConfiguration: ServicesConfiguration[];
  ticket?: string;
  type: WindowType;
  displays: Display[];
  agent?: string | User;
  createdAt: string;
  updatedAt: string;
}

export interface ServicesConfiguration {
  service: Service;
  priority: number;
  isChecked: boolean;
}

export interface CreateWindowDto {
  status: string;
  identifier: string;
  servicesConfiguration: CreateServicesConfigurationDto[];
  ticket?: string;
  type?: string;
  displays?: string[];
}

export interface CreateServicesConfigurationDto {
  service: string;
  priority: number;
  isChecked: boolean;
}
export interface UpdateWindowDto {
  status?: string;
  identifier?: string;
  servicesConfiguration?: [ServicesConfiguration] | any[];
  ticket?: string;
  type?: string;
  agent?: string | null;
  displays?: string[];
}

export interface DisplayWindow {
  _id: string;
  status: string;
  identifier: string;
  ticket?: {
    ticketNumber: string;
  };
  type: WindowType;
  updateStatusAt?: Date;
  servicesConfiguration: ServicesConfiguration[];
}

export enum WindowStatus {
  CLOSED = "CLOSED",
  READY = "READY",
  CALLING = "CALLING",
  IN_SESSION = "IN_SESSION",
  PAUSE = "PAUSE",
  ACTIVE = "ACTIVE",
  DISABLED = "DISABLED",
  MAINTENANCE = "MAINTENANCE",
}
