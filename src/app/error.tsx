"use client";
import Image from "next/image";
import style from "./page.module.css";

const error = ({}) => {
  return (
    <div className={style.errorContainer}>
      <div className={style.errorContent}>
        <Image
          src={`/image/error.png`}
          alt="Image"
          className={style.image}
          width={300}
          height={300}
          objectFit="cover"
        />
        <div className={style.errorMessage}>
          <div>Une erreur est survenue.</div>
          <div>
            S&apos; il vous plaît, veuillez contacter le service technique.
          </div>
          <a href="/">Revenir a la page d&apos; accueil</a>
        </div>
      </div>
    </div>
  );
};

export default error;
