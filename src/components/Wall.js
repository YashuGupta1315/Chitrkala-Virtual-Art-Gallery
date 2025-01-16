import React from "react";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";

const Wall = ({ position, rotation = [0, 0, 0], size, texture }) => {
  const map = useTexture(texture);

  return (
    <mesh position={position} rotation={rotation}>
      <planeGeometry args={size} />
      <meshStandardMaterial map={map}  side={THREE.DoubleSide} />
    </mesh>
  );
};

export default Wall;
