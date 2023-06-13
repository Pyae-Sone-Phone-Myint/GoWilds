import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Tours from "../pages/Tours/Tours";
import TourDetail from "../pages/Tours/TourDetail";

const Path = () => {
  const [name,setName]=useState("");
  return (
    <>
    
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/tours-page" element={<Tours name={name} setName={setName}/>}/>
        <Route path="/tours-page/tour-detail" element={<TourDetail name={name}/>}/>
      </Routes>
    </>
  );
};

export default Path;
