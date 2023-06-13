import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../pages/About/About";
import Team from "../pages/Team/Team";
import Gallery from "../pages/Gallery/Gallery";
import Team_carousel from "../pages/Team_carousel/Team_carousel";
import Home from "../pages/Home/Home";

const Path = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/team-carousel" element={<Team_carousel />} />
      </Routes>
    </>
  );
};

export default Path;
