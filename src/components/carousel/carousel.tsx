import React, { useState } from "react";
import "./carousel.css";
import {
  IoLogoJavascript,
  IoLogoReact,
  IoLogoPython,
  IoLogoNodejs,
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoAngular,
} from "react-icons/io5";

const carouselData = [
  <IoLogoJavascript key="js" className="text-yellow-400" size={40} />,
  <IoLogoReact key="react" className="text-blue-400" size={40} />,
  <IoLogoPython key="python" className="text-green-500" size={40} />,
  <IoLogoNodejs key="node" className="text-green-600" size={40} />,
  <IoLogoHtml5 key="html" className="text-orange-500" size={40} />,
  <IoLogoCss3 key="css" className="text-blue-500" size={40} />,
  <IoLogoAngular key="angular" className="text-red-500" size={40} />,
];
const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + carouselData.length) % carouselData.length
    );
  };

  return (
    <div className="carousel">
      <div className="carousel-container">{carouselData[currentIndex]}</div>
      <button className="prev" onClick={prevSlide}>
        Précédent
      </button>
      <button className="next" onClick={nextSlide}>
        Suivant
      </button>
    </div>
  );
};

export default Carousel;
