"use client";
import styles from "./login.form.module.css"; // Import the CSS module
import { Input } from "@/components/inputs/input";
import { Button } from "@/components/buttons/button";
import { FormProvider, useForm } from "react-hook-form";
import { LuUnlock, LuUser2 } from "react-icons/lu";
import { Auth } from "@/services/auth/auth.model";
import { HttpStatusCode } from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { testApi } from "@/services/api/api-service";
import PageLoader from "@/components/loader/page.loader";
import Loader from "@/components/loader/loader";
import { signIn, useSession } from "next-auth/react";
import ConnectedPage from "@/page/connected/connected.page";

export default function LoginForm() {
  /**
   * Page state
   */
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { data, status } = useSession<any>();

  /**
   * Form State
   */
  const methods = useForm<Auth>({
    defaultValues: {
      login: "",
      password: "",
    },
  });

  const [submitBtnIsLoading, setSubmitBtnIsLoading] = useState<boolean>(false);

  /**
   * Form State
   * @param data
   */
  const onSubmit = async (data: Auth) => {
    setSubmitBtnIsLoading(true);
    const res = await signIn("credentials", {
      username: data.login,
      password: data.password,
      redirect: false,
    });

    if (res?.ok) {
      router.push("/service");
      setSubmitBtnIsLoading(false);
    } else {
      handleAuthFailure();
      setSubmitBtnIsLoading(false);
    }
  };

  const handleAuthFailure = () => {
    methods.setError("login", {
      type: "validate",
      message: "Identité incorrecte",
    });
    methods.setError("password", {
      type: "validate",
      message: "Mot de passe incorrect",
    });
  };

  const handleTestAPI = async () => {
    try {
      const res = await testApi();
      if (res.status === HttpStatusCode.Ok) {
        setIsLoading(false);
      } else {
        setIsLoading(true);
      }
    } catch (error) {
      setIsLoading(true);
    }
  };

  useEffect(() => {
    handleTestAPI();
  }, [isLoading]);

  if (isLoading) {
    return <PageLoader />;
  }

  if (status === "authenticated") {
    return <ConnectedPage user={data.user} />;
  }

  return (
    <FormProvider {...methods}>
      <form
        className={styles.formBox}
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <h2 className={styles.title}>Veuillez vous authentifier</h2>
        <div className={styles.spaceY}>
          <div className={styles.formField}>
            <label className={styles.label}>
              <LuUser2 size={26} />
            </label>
            <Input.Text name="login" placeholder="Entrer votre identifiant" />
          </div>
          <div className={styles.formField}>
            <label className={styles.label}>
              <LuUnlock size={26} />
            </label>
            <Input.Password name="password" placeholder="********" />
          </div>
        </div>
        <div className={styles.buttonContainer}>
          {/* <Button.Reset styleType="tertiary" width="100px">
          Annuler
        </Button.Reset> */}
          <Button.Submit
            styleType="primary"
            width="200px"
            disabled={submitBtnIsLoading}
          >
            {submitBtnIsLoading ? <Loader /> : "Se Connecter"}
          </Button.Submit>
        </div>
      </form>
    </FormProvider>
  );
}
