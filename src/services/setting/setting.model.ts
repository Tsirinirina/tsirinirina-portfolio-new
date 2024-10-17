export interface Setting {
  _id?: string;
  settingKey: string;
  settingValue: SettingValueType;
  settingType: "String" | "Number" | "Boolean" | "Array" | "Object" | "Color";
  settingValidationType: "Max" | "Min" | "Other";
  inputFieldName: string;
  createdAt?: string;
  updatedAt?: string;
}

export type SettingValueType =
  | string
  | number
  | boolean
  | any[]
  | { [key: string]: any };

export interface CreateSettingDto {
  settingValue: string | number | any;
}

export interface UpdateSettingDto {
  settingId: string;
  settingValue: any;
}
