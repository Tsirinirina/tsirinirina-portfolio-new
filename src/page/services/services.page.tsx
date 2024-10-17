"use client";
import ServiceForm from "@/components/ui/service-form/service-form";
import style from "./services.page.module.css";

export default function ServicePage() {
  return (
    <div className={style.container}>
      <ServiceForm />
    </div>
  );
}
