"use client";

import { Setting } from "@/services/setting/setting.model";
import { getAllSetting } from "@/services/setting/setting.service";
import { getLocalStorageItem } from "@/utils/localStorage.utils";
import { HttpStatusCode } from "axios";
import { useSession } from "next-auth/react";
import { createContext, useEffect, useState } from "react";

export interface SettingsContextType {
  settingsData: Setting[];
  setSettingsData: React.Dispatch<React.SetStateAction<any>>;
}

export const SettingsContext = createContext({} as SettingsContextType);

export const SettingsProvider = ({ children }: any) => {
  const { data, status } = useSession();
  const [settingsData, setSettingsData] = useState<Setting[]>([]);

  const loadData = async () => {
    const res = await getAllSetting();
    if (res.status === HttpStatusCode.Ok) {
      const settingData = res.data.data;
      setSettingsData(settingData);
    }
  };

  useEffect(() => {
    if (status === "authenticated") {
      loadData();
    }
  }, [status]);

  return (
    <SettingsContext.Provider value={{ settingsData, setSettingsData }}>
      {children}
    </SettingsContext.Provider>
  );
};
