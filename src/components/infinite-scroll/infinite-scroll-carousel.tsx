"use client";

import type React from "react";
import { useState, useEffect, useRef } from "react";
import styles from "./infinite-scroll-carousel.module.css";

interface InfiniteScrollCarouselProps {
  items: React.ReactNode[];
  autoScroll?: boolean;
  scrollSpeed?: number;
  className?: string;
}

export default function InfiniteScrollCarousel({
  items,
  autoScroll = true,
  scrollSpeed = 3000,
  className = "",
}: InfiniteScrollCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalItems = items.length;
  const carouselRef = useRef<HTMLDivElement>(null);

  const displayItems = [...items, ...items, ...items];

  useEffect(() => {
    if (!autoScroll) return;

    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % totalItems);
    }, scrollSpeed);

    return () => clearInterval(interval);
  }, [autoScroll, scrollSpeed, totalItems]);

  return (
    <div className={`${styles.carouselWrapper} ${className}`} ref={carouselRef}>
      <div className={styles.carouselContainer}>
        <div
          className={styles.carouselTrack}
          style={{
            transform: `translateX(calc(0% - ${activeIndex * 100}px - 50px))`,
          }}
        >
          {displayItems.map((item, index) => {
            const relativeIndex =
              (index - totalItems - activeIndex + totalItems) % totalItems;
            const isMiddle = relativeIndex === 0;

            return (
              <div
                key={index}
                className={`${styles.carouselItem} ${
                  isMiddle
                    ? styles.active
                    : Math.abs(relativeIndex) === 1
                    ? styles.nearActive
                    : styles.inactive
                }`}
              >
                {item}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
