import React from "react";
import Landing_image from "../../components/Landing/Landing_image";

import Tour_bgBlur from "../../components/Tour_bgBlur/Tour_bgBlur";
import "./Team_carousel.css";
import Team_slider from "../../components/Slider/Team/Team_slider";
import Team_slider2 from "../../components/Slider/Team/Team_slider2";
import Splides from "../../components/Slider/Splides";
import { SplideSlide } from "@splidejs/react-splide";

const Team_carousel = () => {
  const brands = [
    { id: 1, image: "src/assets/images/brand.png" },
    { id: 2, image: "src/assets/images/brand.png" },
    { id: 3, image: "src/assets/images/brand.png" },
    { id: 4, image: "src/assets/images/brand.png" },
    { id: 5, image: "src/assets/images/brand.png" },
    { id: 6, image: "src/assets/images/brand.png" },
  ];

  const brand = brands.map((item) => {
    return (
      <SplideSlide key={item.id}>
        <div className=" px-20 py-5 brand-holder">
          <img src={item.image} alt="" />
        </div>
      </SplideSlide>
    );
  });
  return (
    <>
      <img src="src/assets/images/bg-01.jpg" className="fixed-bg" alt="" />
      <Landing_image about={"Team Carousel"} page={"Team carousel"} />
      {/* Team Members */}
      <div className=" px-10 min-h-screen py-32 relative bg-white">
        <div className=" text-center">
          <div className=" mb-10">
            <span className=" px-5 py-4 bg-[#64ab4513] text-primary rounded-lg font-semibold">
              Team members
            </span>
          </div>
          <h2>
            <span className=" md:text-[48px] font-bold leading-tight">
              Meet our best professional <br /> insurance agents
            </span>
          </h2>
          <Team_slider />
        </div>
      </div>

      {/* Explore Tour page */}
      <Tour_bgBlur check={"check availability"} />

      <div className=" px-10 min-h-screen py-32 relative bg-white">
        <div className=" text-center">
          <div className=" mb-10">
            <span className=" px-5 py-4 bg-[#64ab4513] text-primary rounded-lg font-semibold">
              Team members
            </span>
          </div>
          <h2>
            <span className=" md:text-[48px] font-bold leading-tight">
              Meet our best expert
            </span>
          </h2>
          <Team_slider2 />
        </div>
      </div>
      <hr />
      <div className=" py-20 overflow-hidden bg-white relative">
        <Splides brand={brand} view={5} controller={false} />
      </div>
    </>
  );
};

export default Team_carousel;