import React from "react";

interface EspacerProps {
  size: "sm" | "md" | "lg" | "xl";
}

const Espacer: React.FC<EspacerProps> = ({ size }) => {
  switch (size) {
    case "sm":
      return <div style={{ height: `${20}px` }}></div>;
    case "md":
      return <div style={{ height: `${40}px` }}></div>;
    case "lg":
      return <div style={{ height: `${80}px` }}></div>;
    case "xl":
      return <div style={{ height: `${160}px` }}></div>;
    default:
      return <div style={{ height: `${5}px` }}></div>;
  }
};

export default Espacer;
