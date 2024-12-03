"use client";

import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import Model from "./Model";

const Scene = () => {
  return (
    <Canvas style={{ background: "#000000" }}>
      <Model />
      <directionalLight intensity={2} position={[0, 2, 3]} />
      <Environment preset="city" />
    </Canvas>
  );
};

export default Scene;
