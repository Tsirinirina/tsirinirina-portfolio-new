export interface Personal {
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
  invitation: string;
}

export interface PersonalDTO {
  phones?: string[];
  address?: string;
  city?: string;
  jobTitle?: string;
  description?: string;
  slogan?: string;
  invitation?: string;
}
