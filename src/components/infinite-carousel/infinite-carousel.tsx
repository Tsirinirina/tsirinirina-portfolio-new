// components/InfiniteCarousel.js

import { useEffect, useRef } from "react";
import styles from "./infinite-carousel.module.css"; // Pour ajouter des styles CSS

interface InfiniteCarouselProps {
  items: any[];
}

const InfiniteCarousel: React.FC<InfiniteCarouselProps> = ({ items }) => {
  const carouselRef = useRef(null);

  // Fonction pour animer le défilement horizontal
  useEffect(() => {
    const scrollElement = carouselRef.current as any;
    const scrollWidth = scrollElement.scrollWidth;
    const clientWidth = scrollElement.clientWidth;

    let scrollPosition = 0;

    const scrollCarousel = () => {
      if (scrollPosition >= scrollWidth) {
        scrollPosition = 0; // Réinitialiser à 0 pour un défilement infini
      }

      scrollElement.scrollLeft = scrollPosition;
      scrollPosition += 1; // Vitesse du défilement, ajuster selon vos besoins
    };

    const intervalId = setInterval(scrollCarousel, 20); // La vitesse du défilement est contrôlée ici

    return () => clearInterval(intervalId); // Nettoyer l'intervalle lors de la destruction du composant
  }, []);

  return (
    <div className={styles.carouselWrapper}>
      <div ref={carouselRef} className={styles.carousel}>
        {items.map((item, index) => (
          <div key={index} className={styles.carouselItem}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteCarousel;
