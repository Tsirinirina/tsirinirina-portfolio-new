export interface Display {
  _id?: string;
  name: string;
  alias: string;
  ipAddress?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface CreateDisplayDto {
  name: string;
  alias: string;
  ipAddress?: string;
}

export interface UpdateDisplayDto extends CreateDisplayDto {}
