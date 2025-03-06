export interface SocialType {
  id: string;
  name: string;
  url: string;
  username?: string;
}

export interface SocialTypeDTO {
  name?: string;
  url?: string;
  username?: string;
}
