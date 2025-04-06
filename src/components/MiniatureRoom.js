import React from "react";
import BaseRoom from "./BaseRoom";
import "../Styles/MiniatureRoom.css";
const MiniatureRoom = () => {
  const roomDimensions = { width: 40, height: 20, depth: 40 };

  const textures = {
    floor: "/assets/textures/floor.jpeg",
    wall: "/assets/textures/wall2.jpg",
    ceiling: "/assets/textures/celling.jpg",
  };
  const images = {
    back: ["/assets/images/mini1.jpg", "/assets/images/mini6.jpg","/assets/images/mini2.jpg", "/assets/images/gopikapainting2.webp","/assets/images/mini3.jpg", "/assets/images/mini4.jpeg","/assets/images/mini5.jpg", "/assets/images/mini2.jpg", "/assets/images/mini7.jpg",],
   
  };

  return (
    <div className="full-screen-room">
      <BaseRoom
        images={images} 
        roomDimensions={roomDimensions}
        textures={textures}
      />
    </div>);
};

export default MiniatureRoom;
