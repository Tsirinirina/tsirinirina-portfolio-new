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
import { signOut } from "next-auth/react";
import envConf from "@/core/env.constant";

interface ConnectedPageProps {
  user: any;
}

export default function ConnectedPage({ user }: ConnectedPageProps) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        Vous êtes déjà connecté en tant que <b>{user && user.username}</b>.
      </div>
      <div>
        <Button.Submit
          styleType="default"
          onClick={() => signOut({ callbackUrl: envConf.nextAuthUrl })}
        >
          Se déconnecter
        </Button.Submit>
      </div>
    </div>
  );
}
