// @ts-nocheck

import React, { useRef } from "react";
import { MeshTransmissionMaterial, useGLTF, Text } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useControls } from "leva";

export default function Model() {
  const { nodes } = useGLTF("/torrus.glb");
  const { viewport } = useThree();
  const torus = useRef(null);

  useFrame(() => {
    torus.current.rotation.x += 0.02;
  });

  const materialProps = useControls({
    thickness: { value: 0.2, min: 0, max: 3, step: 0.05 },
    roughness: { value: 0, min: 0, max: 1, step: 0.1 },
    transmission: { value: 1, min: 0, max: 1, step: 0.1 },
    ior: { value: 1.2, min: 0, max: 3, step: 0.1 },
    chromaticAberration: { value: 0.02, min: 0, max: 1 },
    backside: { value: true },
  });

  return (
    <group scale={viewport.width / 3.75}>
      <Text
        position={[2, 1, -4]}
        fontSize={0.5}
        color="white"
        anchorX="right"
        anchorY="center"
        fontWeight="bold"
      >
        We help you showcase, sell, and scale
      </Text>
      <Text
        position={[0, 0.5, -4]}
        fontSize={0.5}
        color="white"
        anchorX="center"
        anchorY="center"
      >
        your products with custom-built and cutting-edge technology.
      </Text>
      <Text
        position={[0, 0, -4]}
        fontSize={0.5}
        color="white"
        anchorX="center"
        anchorY="center"
      >
        ecommerce solutions, impactful branding,
      </Text>
      <Text
        position={[0, -0.5, -4]}
        fontSize={0.5}
        color="white"
        anchorX="center"
        anchorY="center"
      >
        and cutting-edge technology.
      </Text>
      <mesh ref={torus} {...nodes.Torus002}>
        <MeshTransmissionMaterial {...materialProps} />
      </mesh>
    </group>
  );
}
