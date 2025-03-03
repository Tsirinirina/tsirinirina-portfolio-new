import Citation from "../citation/citation";
import styles from "./info-container.module.css";
import SocialContainer from "../social-container/social-container";
import Downloader from "@/components/download/download";
import data from "./personal-info.json";
import { Text } from "@/components/text/text";
import Typewriter from "@/components/typewriter/typewriter";
import ContactForm from "@/components/contact-form/contact-form";

interface InfoContainerProps {}

const InfoContainer: React.FC<InfoContainerProps> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.personal}>
        {/* <Biographie bio={data.description} /> */}
        <Citation>{data.slogan}</Citation>
        <Typewriter
          typingSpeed={80}
          className={""}
          fontFamily="gabarito"
          fontSize="28px"
          fontWeight="400"
        >
          {`${data.firstname} ${data.lastname}`}
        </Typewriter>
        <Text.Subtitle fontSize="16px" fontFamily={"lato"} fontWeight="300">
          N'hésitez pas à me contacter pour discuter de vos projets ou poser vos
          questions. Je suis disponible par message, appel ou via mes réseaux
          sociaux !
        </Text.Subtitle>
        <Downloader
          title="Télécharger mon CV"
          link="https://drive.google.com/file/d/1LuTsaueZw9YPBuZQwSeN3ZjinBlmn9hU/view?usp=sharing"
        />
        <SocialContainer socials={data.socials} />
      </div>
      <div className={styles.contactForm}>
        <ContactForm />
      </div>
    </div>
  );
};

export default InfoContainer;
