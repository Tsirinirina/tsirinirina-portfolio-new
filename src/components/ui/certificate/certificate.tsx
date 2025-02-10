import { Text } from "@/components/text/text";
import styles from "./certificat.module.css";
import data from "./certificats.json";

interface CertificateProps {}

const Certificate: React.FC<CertificateProps> = ({}) => {
  return (
    <div
      className={`${styles.container} ${styles.bordered}`}
      id="myCertificates"
    >
      <Text.Title
        tag="h1"
        fontWeight="bold"
        fontFamily={""}
        fontSize="36px"
        className={`lato ${styles.title}`}
      >
        Mes Diplômes
      </Text.Title>
      {data.certificats.map((i) => (
        <li>{i.name}</li>
      ))}
    </div>
  );
};

export default Certificate;
