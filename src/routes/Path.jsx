import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import About from "../pages/About/About";
import Team from "../pages/Team/Team";
import Gallery from "../pages/Gallery/Gallery";
import Team_carousel from "../pages/Team_carousel/Team_carousel";
import Home from "../pages/Home/Home";

import Tours from "../pages/Tours/Tours";
import TourDetail from "../pages/Tours/TourDetail";

import ContactPage from "../pages/Contact/ContactPage";


const Path = () => {
  const [name,setName]=useState("");
  return (
    <>
      <Routes>


        <Route path="/" element={<Home/>}/>
        <Route path="/tours-page" element={<Tours name={name} setName={setName}/>}/>
        <Route path="/tours-page/tour-detail" element={<TourDetail name={name}/>}/>
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/team-carousel" element={<Team_carousel />} />

      </Routes>
    </>
  );
};

export default Path;
