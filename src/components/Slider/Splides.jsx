import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import React from "react";
import "@splidejs/react-splide/css";
import "./splides.css";

const Splides = ({ brand, view, controller = true }) => {
  const screen = window.innerWidth < 796;
  return (
    <>
      <Splide
        options={{
          type: "loop",
          autoplay: true,
          speed: 1500,
          perPage: screen ? 1 : view,
          focus: "center",
          gap: "2rem",
          pagination: false,
          arrows: controller,
        }}
      >
        {brand}
      </Splide>
    </>
  );
};

export default Splides;
