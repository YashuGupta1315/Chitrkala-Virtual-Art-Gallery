import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import CategoriesPage from "./components/CategoriesPage";
import FolkRoom from "./components/FolkRoom";
import ClassicalRoom from "./components/ClassicalRoom";
import MiniatureRoom from "./components/MiniatureRoom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/artroom/folk" element={<FolkRoom />} />
        <Route path="/artroom/classical" element={<ClassicalRoom />} />
        <Route path="/artroom/miniature" element={<MiniatureRoom />} />
      </Routes>
    </Router>
  );
};

export default App;
