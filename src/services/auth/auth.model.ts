import { User } from "../user/user.models";

export interface Auth {
  login: string;
  password: string;
}

export interface AuthDTO extends Auth {}

export interface AuthResponse {
  token: string;
  user: User;
}
