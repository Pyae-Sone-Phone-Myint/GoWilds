import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import ContactPage from "../pages/Contact/ContactPage";

const Path = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
};

export default Path;
