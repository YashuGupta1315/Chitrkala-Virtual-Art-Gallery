import React from "react";
import ImagePlane from "./ImagePlane";

const WallWithImages = ({ images, wallWidth, wallHeight, depth }) => {
  const rows = 3; 
  const imagesPerRow = Math.ceil(images.length / rows); 
  const imageSize = wallHeight / (rows + 2); 
  const verticalSpacing = wallHeight / (rows + 1); 
  const verticalOffset = wallHeight / 8; 
  const horizontalSpacing = wallWidth / (imagesPerRow + 1); 
  return (
    <>
      {images.map((image, index) => {
        const row = Math.floor(index / imagesPerRow);
        const col = index % imagesPerRow;

     
        const x = col * horizontalSpacing - wallWidth / 2 + horizontalSpacing;
        const y = wallHeight / 2 - row * verticalSpacing + verticalOffset; 
        const z = -depth / 2 + 0.01; 
        return (
          <ImagePlane
            key={index}
            image={image}
            position={[x, y, z]}
            size={[imageSize, imageSize]} 
          />
        );
      })}
    </>
  );
};

export default WallWithImages;
