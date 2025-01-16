import React from "react";
import BaseRoom from "./BaseRoom";
import "../Styles/FolkRoom.css";

const FolkRoom = () => {
  // Room dimensions
  const roomDimensions = { width: 40, height: 20, depth: 40 };

  // Textures for the room
  const textures = {
    floor: "/assets/textures/floor.jpeg",
    wall: "/assets/textures/wall2.jpg",
    ceiling: "/assets/textures/celling.jpg",
  };

  const images = {
    back: [
      "/assets/images/folk-art1.jpg",
      "/assets/images/folk2.jpeg",
      "/assets/images/folk3.jpg",
      "/assets/images/folk4.jpg",
      "/assets/images/folk5.jpeg",
      "/assets/images/folk6.jpg",
      "/assets/images/folk7.jpeg",
      "/assets/images/folk9.jpg",
      "/assets/images/folk1.jpg",
      
    ],
  };


  return (
    <div className="full-screen-room">
      <BaseRoom
        images={images} 
        roomDimensions={roomDimensions}
        textures={textures}
      />
    </div>
  );
};

export default FolkRoom;
