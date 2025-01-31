import { Text } from "@/components/text/text";
import styles from "./certificat.module.css";
import data from "./certificats.json";

interface CertificateProps {}

const Certificate: React.FC<CertificateProps> = ({}) => {
  return (
    <div className={styles.container} id="myCertificates">
      <Text.Title
        tag="h1"
        fontWeight="bold"
        fontFamily={""}
        fontSize="36px"
        className={`lato ${styles.title}`}
      >
        Mes Compétences
      </Text.Title>
      {/* {data.certificats.map((i) => (
        <li>{i.name}</li>
      ))} */}
    </div>
  );
};

export default Certificate;
