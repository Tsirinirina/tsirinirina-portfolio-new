import React, { useState, useEffect, useRef } from "react";
import style from "./typewriter-code.module.css";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

type TypewriterCodeProps = {
  children: string | any;
  typingSpeed?: number;
  className?: string;
  cursor?: boolean;
  language?: "html" | "javascript";
};

export const TypewriterCode: React.FC<TypewriterCodeProps> = ({
  children,
  typingSpeed = 100,
  className = "",
  cursor = true,
  language = "javascript",
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const customStyle: React.CSSProperties = {
    fontSize: "14px",
    backgroundColor: "transparent",
    background: "transparent",
    display: "inline", // Ensure text and cursor stay on the same line
    whiteSpace: "pre-wrap", // Preserve spacing and newlines
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once visible
        }
      },
      { threshold: 0.1 }
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
      <SyntaxHighlighter
        language={language}
        style={atomOneDark}
        customStyle={customStyle}
        wrapLongLines={false} // Avoid wrapping text to the next line
      >
        {displayedText}
      </SyntaxHighlighter>
      {cursor && <span className={style.typewriterCursor}>|</span>}
    </div>
  );
};

export default TypewriterCode;
