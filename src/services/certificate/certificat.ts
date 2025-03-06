export interface Certificate {
  id: string;
  name: string;
  institute: string;
  description: string;
  type: "DIPLOMA" | "CERTIFICATION";
  startDate: string;
  endDate: string;
  fullDate: boolean;
  createdAt: string;
}

export interface CertificateDTO {
  name?: string;
  institute?: string;
  description?: string;
  type?: string;
  startDate?: string;
  endDate?: string;
  fullDate?: boolean;
}
