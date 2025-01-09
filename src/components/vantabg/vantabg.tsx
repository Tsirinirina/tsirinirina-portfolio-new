"use client";
import React, { useEffect, useRef, useState } from "react";
import NET from "vanta/src/vanta.net";
import * as THREE from "three";
import styles from "./vantabg.module.css";

const VantaBackground = () => {
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (vantaEffect) {
      vantaEffect.destroy();
    }
    setVantaEffect(
      NET({
        el: vantaRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0x435da7, // Couleur du réseau
        backgroundColor: 0x130f1b, // Couleur de fond
        points: 6.0, // Nombre de points
        maxDistance: 23.0, // Distance maximale entre les points
        spacing: 20.0, // Espacement des points
      })
    );
    setVantaEffect(
      NET({
        el: vantaRef.current,
        THREE,
        color: 0xd22a6d,
        backgroundColor: 0x130f1b,
      })
    );

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return (
    <div
      ref={vantaRef}
      style={{ width: "100%", height: "100vh" }}
      className={styles.vantaContainer}
    />
  );
};

export default VantaBackground;
