"use client";
import { SessionProvider } from "next-auth/react";
import { PageContainer } from "../page-container/page.container";
import { WindowChoiceProvider } from "@/context/window-choice.context";
import { NextUIProvider } from "@nextui-org/system";
import { SettingsProvider } from "@/context/setting.context";
interface SessionWrapperProps {
  children: React.ReactNode;
}

const SessionWrapper: React.FC<SessionWrapperProps> = ({ children }) => {
  return (
    <SessionProvider>
      <WindowChoiceProvider>
        <NextUIProvider>
          <SettingsProvider>
            <PageContainer>{children}</PageContainer>
          </SettingsProvider>
        </NextUIProvider>
      </WindowChoiceProvider>
    </SessionProvider>
  );
};

export default SessionWrapper;
