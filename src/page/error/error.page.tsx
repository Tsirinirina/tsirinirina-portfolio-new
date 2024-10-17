"use client";
import { ConnectionStatus, User } from "@/services/user/user.models";
import styles from "./connected.page.module.css";
import { useEffect, useState } from "react";
import { APIResponse } from "@/core/api.response";
import { HttpStatusCode } from "axios";
import { getUserById } from "@/services/user/user-service";
import { Button } from "@/components/buttons/button";
import {
  CookieName,
  removeCookie,
  setConnectionStatusCookies,
} from "@/utils/cookies.utils";
import { useRouter } from "next/navigation";
import PageLoader from "@/components/loader/page.loader";

interface ConnectedPageProps {
  userId?: string;
}

export default function ConnectedPage({ userId }: ConnectedPageProps) {
  /**
   * Page state
   */
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  /**
   * User State management
   */
  const [user, setUser] = useState<User>();

  const getUserInfo = async () => {
    if (userId) {
      setIsLoading(true);
      const res: APIResponse<User> = await getUserById(userId);
      if (res.status === HttpStatusCode.Ok) {
        setUser(res.data.data);
        setIsLoading(false);
      }
    }
  };

  const handleDisconnect = () => {
    setIsLoading(true);
    setConnectionStatusCookies(ConnectionStatus.DISCONNECTED);
    removeCookie(CookieName.AUTH);
    removeCookie(CookieName.USER_ID);
    removeCookie(CookieName.USER_ROLE);
    setIsLoading(false);
    router.push("/");
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        Vous êtes déjà connecté en tant que <b>{user && user.username}</b>.
      </div>
      <div>
        <Button.Submit styleType="default" onClick={handleDisconnect}>
          Se déconnecter
        </Button.Submit>
      </div>
    </div>
  );
}
