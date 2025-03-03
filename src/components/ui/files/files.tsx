import Downloader from "@/components/download/download";
import styles from "./files.module.css";

interface FilesProps {}

const Files: React.FC<FilesProps> = () => {
  return (
    <div className={styles.container}>
      <Downloader
        title="Télécharger mon CV"
        link="https://drive.google.com/file/d/1LuTsaueZw9YPBuZQwSeN3ZjinBlmn9hU/view?usp=sharing"
      />
    </div>
  );
};

export default Files;
