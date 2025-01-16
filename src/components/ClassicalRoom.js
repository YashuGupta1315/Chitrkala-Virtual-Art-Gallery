import React from "react";
import BaseRoom from "./BaseRoom";


const ClassicalRoom = () => {
  const roomDimensions = { width: 40, height: 20, depth: 40 };

  const textures = {
    floor: "/assets/textures/floor.jpeg",
    wall: "/assets/textures/wall2.jpg",
    ceiling: "/assets/textures/celling.jpg",
  };

  const images = {
    back: ["/assets/images/classical1.jpg", "/assets/images/shankar-tandav.jpg","/assets/images/classical2.jpg","/assets/images/gopikapainting2.webp","/assets/images/classical3.jpg","/assets/images/classical4.jpeg","/assets/images/classical5.jpeg","/assets/images/Modern2.jpg", "/assets/images/classical6.webp",],
    
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
  
export default ClassicalRoom;
