import React from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/CategoriesPage.css";
//import classical from "/assets/images/classical1.jpg";
// import folk from "/assets/images/folk4.jpg";
// import mini from "/assets/images/mini1.jpg";

const CategoriesPage = () => {
  const navigate = useNavigate();

  return (
    <div className="categories">
      <div className="cards">
        <div className="card" onClick={() => navigate("/artroom/folk")}>
          <img src="/assets/images/folk4.jpg" alt="Indian Folk Art" />
          <h3>Indian Folk Art</h3>
          <p className="description">Explore the vibrant and traditional folk art of India.</p>
          <button
            className="virtual-gallery-button"
            onClick={(e) => {
              e.stopPropagation(); 
              navigate("/artroom/folk");
            }}
          >
            Virtual Gallery
          </button>
          <p className="hover-info">
            Indian folk art paintings are vibrant expressions of regional culture, showcasing traditional themes and techniques. They often depict daily life, mythology, and nature, using bold colors and intricate patterns that reflect the rich heritage of India.
          </p>
        </div>
        <div className="card" onClick={() => navigate("/artroom/classical")}>
          <img src="/assets/images/classical1.jpg" alt="Classical Art" />
          <h3>Classical Art</h3>
          <p className="description">Dive into India's classical art heritage.</p>
          <button
            className="virtual-gallery-button"
            onClick={(e) => {
              e.stopPropagation();
              navigate("/artroom/classical");
            }}
          >
            Virtual Gallery
          </button>
          <p className="hover-info">
            Indian classical art paintings showcase the rich cultural heritage of India, characterized by intricate details, vibrant colors, and spiritual themes. Prominent styles include Mughal, Rajput, and Pahari, each reflecting unique regional influences and artistic traditions.
          </p>
        </div>
        <div className="card" onClick={() => navigate("/artroom/miniature")}>
          <img src="/assets/images/mini1.jpg" alt="Miniature Art" />
          <h3>Miniature Art</h3>
          <p className="description">Discover the intricate beauty of miniature paintings.</p>
          <button
            className="virtual-gallery-button"
            onClick={(e) => {
              e.stopPropagation();
              navigate("/artroom/miniature");
            }}
          >
            Virtual Gallery
          </button>
          <p className="hover-info">
            Indian miniature art paintings are intricate, small-scale artworks that depict vibrant scenes from mythology, history, and nature. Originating in the 16th century, they showcase exquisite detail and rich colors, reflecting India's cultural heritage and artistic traditions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;
