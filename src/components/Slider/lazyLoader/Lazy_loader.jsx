import React, { useState } from "react";
import "./lazy_loader.css";
import adventrue_img from "../../Adventure/adventure.json";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { ImCross } from "react-icons/im";

const Lazy_loader = () => {
 
  const tour = adventrue_img.map((item) => {
    return (
      <SplideSlide key={item.id} className=" h-screen cursor-grab">
        <div className=" rounded-md relative flex justify-center h-screen p-20 object-cover w-full">
          <img src={item.imageDetail} alt="" />
        </div>
      </SplideSlide>
    );
  });

  return (
    <div>
      <Splide
        options={{
          type: "loop",
          perPage: 1,
          cover: true,
          height: "10rem",
          lazyLoad: "nearby",
          breakpoints: {
            height: "6rem",
          },
          pagination: false,
        }}
        className=" "
      >
        {tour}
      </Splide>
    </div>
  );
};

export default Lazy_loader;
