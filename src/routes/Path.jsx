import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About/About";
import Team from "../pages/Team/Team";

const Path = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path={"/team"} element={<Team />} />
      </Routes>
    </>
  );
};

export default Path;
