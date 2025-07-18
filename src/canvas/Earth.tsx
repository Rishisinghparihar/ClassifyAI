import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Group } from "three";

import CanvasLoader from "../Loader";

// Earth Component
const Earth: React.FC = () => {
  const earth = useGLTF("./planet/scene.gltf");
  const earthRef = useRef<Group>(null);

  useFrame((_, delta) => {
    if (earthRef.current) {
      earthRef.current.rotation.y += delta * 0.2; // Adjust rotation speed
    }
  });

  return (
    <primitive
      ref={earthRef}
      object={earth.scene}
      scale={2.5}
      position-y={0}
    />
  );
};

// EarthCanvas Component
const EarthCanvas: React.FC = () => {
  return (
    <Canvas
      shadows
      frameloop="always" // better for animations
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
