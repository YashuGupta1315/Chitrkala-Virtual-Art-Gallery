import React from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/HomePage.css";


const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="homepage">
      <div className="background-image"></div>
      <div className="content">
        <img src="/assets/images/The-logo.png" alt="Chitrakala Logo" className="logo" />
        <h1>Chitrakala Virtual Art Gallery</h1>
        <p>Explore the Incredible Indian Culture & Heritage</p>
        <button onClick={() => navigate("/categories")}>Let's Explore</button>
      </div>
    </div>
  );
};

export default HomePage;
