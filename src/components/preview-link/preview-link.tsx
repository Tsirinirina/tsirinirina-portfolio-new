import { useState } from "react";
import styles from "./preview-link.module.css";
import Loader from "../loader/loader";

interface PreviewLinkProps {
  previewUrl: string;
}

const PreviewLink: React.FC<PreviewLinkProps> = ({ previewUrl }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // State to track iframe loading

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

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
            {isLoading && (
              <div className={styles.loader}>
                <Loader size={32} />
              </div>
            )}{" "}
            <iframe
              src={previewUrl}
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen
              title="Aperçu du site Web"
              onLoad={handleIframeLoad}
              style={{ display: isLoading ? "none" : "block" }}
            />
            <button className={styles.closeButton} onClick={closeModal}>
              Fermer
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PreviewLink;
