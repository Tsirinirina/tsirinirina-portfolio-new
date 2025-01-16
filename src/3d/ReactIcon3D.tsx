import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows } from "@react-three/drei";
import ReactIcon from "../../public/React-icon";
import { Suspense } from "react";
import { AmbientLight } from "three";

const ReactIcon3D = () => {
  return (
    <Canvas>
      <ambientLight>
        <OrbitControls enableZoom={false} />
        <Suspense fallback={null}>
          <ReactIcon />
        </Suspense>
        <Environment preset="night" />
        <ContactShadows
          position={[0, -2.5, 0]}
          opacity={0.5}
          scale={50}
          blur={1}
          far={10}
          resolution={256}
          color="#000000"
        />
      </ambientLight>
    </Canvas>
  );
};

export default ReactIcon3D;
