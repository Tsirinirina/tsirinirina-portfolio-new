import WindowNotFoundPage from "@/page/window-not-found/window-not-found.page";
import { Window, WindowStatus } from "@/services/window/window.model";
import {
  getAllWindow,
  getWindowById,
  setUserInWindow,
} from "@/services/window/window.service";
import { getLocalStorageItem } from "@/utils/localStorage.utils";
import { HttpStatusCode } from "axios";
import { useSession } from "next-auth/react";
import { createContext, useEffect, useState } from "react";

/**
 * The Window Choice Type
 */
export interface WindowChoiceContextType {
  windowData: Window;
  setWindowSelectedId: React.Dispatch<React.SetStateAction<any>>;
}

/**
 * The Window Context Implementation
 */
export const WindowChoiceContext = createContext({} as WindowChoiceContextType);

/**
 * Window Choice Provider to Wrap the page
 * @param children
 * @returns
 */
export const WindowChoiceProvider = ({ children }: any) => {
  const { data, status } = useSession();
  const [windowSelectedId, setWindowSelectedId] = useState<string>(
    () => getLocalStorageItem("windowSelectedId") || "" // Retrieve from localStorage
  );
  const [windowData, setWindowData] = useState<Window | any>();

  const loadData = async (id: string) => {
    if (!id) return; // Ensure you don't fetch data if the ID is empty
    const res = await getWindowById(id);
    if (res.status === HttpStatusCode.Ok) {
      setWindowData(res.data.data);
    }
  };

  const updateWindowAgent = async (id: string) => {
    const updateWindowDto = {
      windowId: id,
      windowData: {
        agent: data?.user._id.toString(),
        status: WindowStatus.ACTIVE,
      },
    };
    await setUserInWindow(updateWindowDto);
  };

  useEffect(() => {
    if (status === "authenticated" && windowSelectedId) {
      loadData(windowSelectedId); // Fetch window data when ID is set
      updateWindowAgent(windowSelectedId);
    }
  }, [status, windowSelectedId]); // Add windowSelectedId to dependencies

  // Save windowSelectedId to localStorage when it changes
  useEffect(() => {
    if (windowSelectedId) {
      localStorage.setItem("windowSelectedId", windowSelectedId);
      //
    }
  }, [windowSelectedId]);

  return (
    <WindowChoiceContext.Provider value={{ windowData, setWindowSelectedId }}>
      {children}
    </WindowChoiceContext.Provider>
  );
};
