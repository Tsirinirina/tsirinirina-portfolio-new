import Citation from "../citation/citation";
import styles from "./info-container.module.css";
import SocialContainer from "../social-container/social-container";
import Downloader from "@/components/download/download";
import data from "./personal-info.json";
import { Text } from "@/components/text/text";
import Typewriter from "@/components/typewriter/typewriter";
import ContactForm from "@/components/contact-form/contact-form";
import { IoLocationSharp } from "react-icons/io5";

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
          {data.invitation}
        </Text.Subtitle>
        <Downloader title="Voir mon CV" link={data.cvUrls[0]} />
        <SocialContainer socials={data.socials} />
        <p className={styles.location}>
          <IoLocationSharp />
          {data.city}, {data.contry}
        </p>
        <Text.Subtitle fontSize="12px" fontFamily={"lato"} fontWeight="300">
          © {new Date().getFullYear()} Tsirinirina | Créé avec passion et
          professionnalisme.
        </Text.Subtitle>
      </div>
      <div className={styles.contactForm}>
        <ContactForm />
      </div>
    </div>
  );
};

export default InfoContainer;
