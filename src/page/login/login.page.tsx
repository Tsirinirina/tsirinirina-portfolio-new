import { ReactNode } from "react";
import styles from "./login.page.module.css";
import LoginForm from "@/components/ui/login-form/login.form";

interface LoginPageProps {}

export default function LoginPage({}: LoginPageProps) {
  return <LoginForm />;
}
