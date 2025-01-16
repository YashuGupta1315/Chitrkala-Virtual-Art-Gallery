import React from "react";
import { useTexture } from "@react-three/drei";

const ImagePlane = ({ image, position, size }) => {
  const texture = useTexture(image);

  return (
    <mesh position={position}>
      <planeGeometry args={size} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
};

export default ImagePlane;
