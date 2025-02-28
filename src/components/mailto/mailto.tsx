import styles from "./mailto.module.css";

interface MailToProps {
  mail: string;
}

const MailTo: React.FC<MailToProps> = ({ mail }) => (
  <a className={styles.mailtoLink} href={`mailto:${mail}`}>
    {mail}
  </a>
);

export default MailTo;
