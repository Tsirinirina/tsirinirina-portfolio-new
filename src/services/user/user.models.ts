export interface User {
  _id: string;
  firstname: string;
  lastname: string;
  username: string;
  address: string;
  city?: string;
  postalCode?: string;
  birthDate: string;
  birthPlace: string;
  creationDate: string;
  email: string;
  gender: string;
  phone: string[];
  photo: string;
  role:
    | {
        _id: string;
        name: string;
        alias: string;
        privileges: [
          {
            _id: string;
            name: string;
            groups: {
              _id: string;
              name: string;
              description: string;
            };
          }
        ];
        description: string;
      }
    | string;
  isActive: boolean;
  isDelete: boolean;
  failedConnectionCount?: number;
  createdAt: string;
  updatedAt: string;
}

export interface createUserDto {
  firstname: string;
  lastname: string;
  username: string;
  address: string;
  birthDate: string;
  birthPlace: string;
  password: string;
  email: string;
  gender: string;
  phone: string[];
  role: string;
  creationDate: string;
  photo?: string;
  filters?: [];
  isActive?: boolean;
  isDelete?: boolean;
}

export interface updateUserDto {
  firstname?: string;
  lastname?: string;
  username?: string;
  address?: string;
  birthDate?: string;
  birthPlace?: string;
  password?: string;
  email?: string;
  gender?: string;
  phone?: string[];
  role?: string;
  creationDate?: string;
  photo?: string;
  filters?: [];
  isActive?: boolean;
  isDelete?: boolean;
}

export enum ConnectionStatus {
  CONNECTED = "CONNECTED",
  DISCONNECTED = "DISCONNECTED",
  EXPIRED = "EXPIRED",
}
