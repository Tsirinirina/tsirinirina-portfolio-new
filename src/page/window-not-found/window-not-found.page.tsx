"use client";
import styles from "./window-not-found.page.module.css";
import { Button } from "@/components/buttons/button";
import { signOut, useSession } from "next-auth/react";
import envConf from "@/core/env.constant";
import WindowChoice from "@/components/window-choice/window-choice";
import { useContext } from "react";
import { WindowChoiceContext } from "@/context/window-choice.context";

interface ConnectedPageProps {}

export default function WindowNotFoundPage({}: ConnectedPageProps) {
  const { status } = useSession();
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        Veuillez sélectionner un guichet pour commencer.
      </div>
      {status === "authenticated" && <WindowChoice />}
    </div>
  );
}
