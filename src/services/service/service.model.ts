export interface Service {
  _id?: string;
  name: string;
  nbWaiting?: number;
  nbFinished?: number;
  prefix?: string;
  lastTicketNumber?: number;
  ticketWrapNumber?: number;
  createdAt?: string;
  updatedAt?: string;
  nbActiveWindows?: number;
}

export interface CreateServiceDto {
  name: string;
  nbWaiting?: string;
  nbFinished?: string;
  prefix?: string;
  lastTicketNumber?: string;
  ticketWrapNumber?: string;
}

export interface UpdateServiceDto {
  name: string;
  nbWaiting?: number;
  nbFinished?: number;
  prefix?: string;
  lastTicketNumber?: number;
  ticketWrapNumber?: number;
}

export enum ServiceStatus {}
