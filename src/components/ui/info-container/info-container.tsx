import MailTo from "@/components/mailto/mailto";
import Biographie from "../biographie/biographie";
import Citation from "../citation/citation";
import styles from "./info-container.module.css";
import SocialContainer from "../social-container/social-container";

interface InfoContainerProps {}

const InfoContainer: React.FC<InfoContainerProps> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.personal}>
        <Biographie />
        <Citation />
        <SocialContainer />
      </div>
      <div className={styles.contactForm}>CONTACT FORM</div>
    </div>
  );
};

export default InfoContainer;
