import React from "react";
import Path from "./routes/Path";
import Navbar from "./components/Navbar/Navbar";

import Footer from "./components/Footer/Footer";

import "./App.css"


const App = () => {
  return (
    <>
      <div className="sticky top-0 z-[1000]">
        <Navbar />
      </div>
      <Path />
      <Footer />
    </>
  );
};

export default App;
