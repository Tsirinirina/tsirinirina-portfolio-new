"use client";
import React, { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { TbLogout2 } from "react-icons/tb";
import style from "./logout.module.css";
import envConf from "@/core/env.constant";
import { removeUserInWindow } from "@/services/window/window.service";
import {
  getLocalStorageItem,
  removeLocalStorageItem,
} from "@/utils/localStorage.utils";
import { HttpStatusCode } from "axios";
import { WindowStatus } from "@/services/window/window.model";
const Logout = () => {
  const { data, status } = useSession();
  const [windowSelectedId, setWindowSelectedId] = useState<string>(
    () => getLocalStorageItem("windowSelectedId") || "" // Retrieve from localStorage
  );
  const clearAgent = async (id: string) => {
    const updateWindowDto = {
      windowId: id,
      windowData: { agent: null, status: WindowStatus.CLOSED },
    };

    const res = await removeUserInWindow(updateWindowDto);
    if (res.status == HttpStatusCode.Ok) {
      removeLocalStorageItem("windowSelectedId");
    }
  };
  return (
    <div className={style.btn}>
      <TbLogout2
        onClick={() => {
          clearAgent(windowSelectedId);
          signOut({ callbackUrl: envConf.nextAuthUrl });
        }}
        size={24}
      />
    </div>
  );
};

export default Logout;
