import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import New01 from "../pages/New/New01";
import News01Page2 from "../pages/New/News01Page2";
import News1Detail from "../pages/New/News1Detail";


const Path = () => {
  return (
    <>
    
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/news01" element={<New01/>}/>
        <Route path="/news01page2" element={<News01Page2/>}/>
        <Route path="/new1detail" element={<News1Detail/>}/>
        
      </Routes>
    </>
  );
};

export default Path;
