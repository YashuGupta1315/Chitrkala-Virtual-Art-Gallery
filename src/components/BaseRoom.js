
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import WallWithImages from "./WallWithImages";
import Wall from "./Wall";

const BaseRoom = ({ images, roomDimensions, textures }) => {
  const { width, height, depth } = roomDimensions;

  return (
    <Canvas
      camera={{
        position: [0, height / 2, depth / 2], 
        fov: 50, 
        near: 0.1,
        far: 1000,
      }}
    >
      {/* Lights */}
      <ambientLight intensity={0.8} />
      <directionalLight position={[10, 20, 10]} intensity={1} />

      {/* Orbit Controls */}
      <OrbitControls
        target={[0, height / 2, 0]} 
        maxPolarAngle={Math.PI / 2.1}
        enableZoom
      />

      {/* Floor */}
      <Wall
        position={[0, 0, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        size={[width, depth]}
        texture={textures.floor}
      />

      {/* Ceiling */}
      <Wall
        position={[0, height, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        size={[width, depth]}
        texture={textures.ceiling}
      />

      {/* Side Walls */}
      <Wall
        position={[width / 2, height / 2, 0]}
        rotation={[0, Math.PI / 2, 0]}
        size={[depth, height]}
        texture={textures.wall}
      />
      <Wall
        position={[-width / 2, height / 2, 0]}
        rotation={[0, -Math.PI / 2, 0]}
        size={[depth, height]}
        texture={textures.wall}
      />

      {/* Back Wall */}
      <Wall
        position={[0, height / 2, -depth / 2]}
        rotation={[0, 0, 0]}
        size={[width, height]}
        texture={textures.wall}
      />

      {/* Images on Back Wall */}
      <WallWithImages
        images={images.back}
        wallWidth={width}
        wallHeight={height}
        depth={depth}
      />
    </Canvas>
  );
};

export default BaseRoom;
