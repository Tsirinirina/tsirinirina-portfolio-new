import { useState } from "react";
import { Input } from "../inputs/input";
import { FormProvider, useForm } from "react-hook-form";
import { Button } from "../buttons/button";
import styles from "./contact-form.module.css";
import "./style.css";
import { Text } from "../text/text";
import { Bounce, ToastContainer, toast } from "react-toastify";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(false);
  const methods = useForm();

  const onSubmit = async (formData: any) => {
    setIsLoading(true);
    const { email, message } = formData;
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ subject: "Me contacter", email, message }),
    });

    const data = await res.json();
    if (res.ok) {
      toast.success("Message envoyé avec succès !");
      methods.reset();
      setIsLoading(false);
    } else {
      toast.error(data.error || "Une erreur est survenue.");
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <Text.Title tag="h1">👋 Bonjour !</Text.Title>
        <Text.Title tag="h2">Je suis à votre écoute</Text.Title>{" "}
      </div>

      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className={styles.form}>
          <div className={styles.inputContainer}>
            <Input.Email name="email" required placeholder="Votre email" />
          </div>
          <div className={styles.inputContainer}>
            <Input.TextArea
              name="message"
              required
              placeholder="Votre message"
            />
          </div>

          <motion.div
            className={styles.buttonContainer}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.9 }}
          >
            <Button.Submit
              styleType="secondary"
              width="100%"
              isLoading={isLoading}
            >
              Envoyer
            </Button.Submit>
          </motion.div>
          <div className={styles.messageContainer}>
            <ToastContainer
              position="bottom-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick={false}
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
              transition={Bounce}
            />
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
