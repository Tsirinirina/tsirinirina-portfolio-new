"use client";
import { ReactNode, useContext, useEffect, useState } from "react";
import styles from "./page.container.module.css";
import { LuUser2 } from "react-icons/lu";
import { APP_NAME, APP_VERSION } from "@/core/config.constant";
import { ThemeSwitcher } from "../theme-switcher/theme-switcher";
import { Menu } from "../menu/menu";
import { useSession } from "next-auth/react";
import Logout from "../logout/logout";
import { useRouter } from "next/navigation";
import PageLoader from "../loader/page.loader";
import { DropdownUi } from "../shared/dropdown";
import { UserLoggedDropdownItemsOptions } from "@/core/dropdown.items.options";
import WindowChoice from "../window-choice/window-choice";
import WindowNotFoundPage from "@/page/window-not-found/window-not-found.page";
import { WindowChoiceContext } from "@/context/window-choice.context";

interface PageContainerProps {
  children: ReactNode;
}

export function PageContainer({ children }: PageContainerProps) {
  /**
   * Page state
   */
  const router = useRouter();
  const { data, status } = useSession();

  const { windowData } = useContext(WindowChoiceContext);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.replace("/");
    }
    if (status === "authenticated") {
      router.replace("/service");
    }
  }, [status, router]);

  const [selectedKey, setSelectedKey] = useState<any>();

  const handleSelected = (key: any) => {
    console.log("KEY=", key);
  };

  useEffect(() => {
    if (status === "authenticated" && windowData) {
      router.refresh();
    }
  }, [windowData]);
  return (
    <div className={styles.container}>
      <div className={styles.loginBox}>
        <div className={styles.header}>
          <span className={styles.start}>{APP_VERSION}</span>
          <div className={styles.end}>
            {status === "authenticated" && <WindowChoice />}
            <ThemeSwitcher />
            {status === "authenticated" && (
              <>
                <DropdownUi
                  label={
                    <div className={styles.userConnectedInfo}>
                      <span>{data.user.username}</span>
                      <LuUser2 size={24} />
                    </div>
                  }
                  dropdownItems={UserLoggedDropdownItemsOptions}
                  onSelected={handleSelected}
                />
              </>
            )}
            {status === "authenticated" && <Logout />}
          </div>
        </div>

        {status === "authenticated" && (
          <div className={styles.menuBox}>
            <Menu />
          </div>
        )}

        <div className={styles.section}>
          {status === "loading" ? (
            <>
              <PageLoader />
            </>
          ) : (
            <>
              {status === "authenticated" && !windowData ? (
                <>
                  <WindowNotFoundPage />
                </>
              ) : (
                <>{children}</>
              )}
            </>
          )}
        </div>
        <div className={styles.footer}>
          <span className={styles.appName}>© {APP_NAME}</span>
        </div>
      </div>
    </div>
  );
}
