import Image from "next/image";
import style from "./page.module.css";

function NotFoundPage() {
  return (
    <div className={style.errorContainer}>
      <div className={style.errorContent}>
        <Image
          src={`/image/not-found.png`}
          alt="Image"
          className={style.image}
          width={300}
          height={300}
          objectFit="cover"
        />
        <div className={style.errorMessage}>
          <div>Page non trouvé</div>
          <div>Veuillez consulter le service technique.</div>
          <a href="/">Revenir a la page d&apos; accueil</a>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;
