import React, { useState, useEffect, useRef } from "react";
import style from "./typewriter.module.css";

type TypewriterProps = {
  children: string;
  typingSpeed?: number;
  className?: string;
  cursor?: boolean;
};

export const Typewriter: React.FC<TypewriterProps> = ({
  children,
  typingSpeed = 100,
  className = "",
  cursor = true,
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once visible
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isVisible && currentIndex < children.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + children[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, typingSpeed);

      return () => clearTimeout(timeout);
    }
  }, [isVisible, currentIndex, children, typingSpeed]);

  return (
    <div
      ref={containerRef}
      className={`${style.typewriterContainer} ${className}`}
    >
      <span>{displayedText}</span>
      {cursor && <span className={style.typewriterCursor}>|</span>}
    </div>
  );
};

export default Typewriter;
