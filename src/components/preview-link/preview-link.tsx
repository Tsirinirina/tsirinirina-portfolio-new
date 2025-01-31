import { useState } from "react";
import styles from "./preview-link.module.css";

interface PreviewLinkProps {
  previewUrl: string;
}

const PreviewLink: React.FC<PreviewLinkProps> = ({ previewUrl }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <button className={styles.learnMore} onClick={openModal}>
        <span className={styles.circle} aria-hidden="true">
          <span className={`${styles.icon} ${styles.arrow}`}></span>
        </span>
        <span className={`${styles.buttonText} lexend-deca`}>Voir demo</span>
      </button>

      {isModalOpen && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={previewUrl}
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen
              title="Aperçu du site Web"
            />
            <button className={styles.closeButton} onClick={closeModal}>
              Ferner
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PreviewLink;
