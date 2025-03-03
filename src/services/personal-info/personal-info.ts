export interface PersonalInfo {
  firstname: string;
  lastname: string;
  emails: string;
  gender: string;
  phones: string[];
  birthDate: string;
  birthPlace: string;
  address: string;
  city: string;
  contry: string;
  jobTitle: string;
  description: string;
  slogan: string;
  socials: SocialType[];
}

export interface SocialType {
  name: string;
  url: string;
  username?: string;
}
