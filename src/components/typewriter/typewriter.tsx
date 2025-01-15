import React, { useState, useEffect, useRef } from "react";
import style from "./typewriter.module.css";
import clsx from "clsx";

type TypewriterProps = {
  children: string;
  typingSpeed?: number;
  className?: any;
  cursor?: boolean;
  fontSize?: string;
  fontWeight?: string;
  fontFamily: "inconsolate" | "source-code" | "lato";
};

export const Typewriter: React.FC<TypewriterProps> = ({
  children,
  typingSpeed = 100,
  className,
  cursor = true,
  fontSize = "12px",
  fontWeight = "200",
  fontFamily = "inconsolate",
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
      className={`${style.typewriterContainer} ${fontFamily}`}
      style={{ fontSize, fontWeight }}
    >
      <span>{displayedText}</span>
      {cursor && (
        <span className={clsx(style.typewriterCursor, fontFamily)}>|</span>
      )}
    </div>
  );
};

export default Typewriter;
