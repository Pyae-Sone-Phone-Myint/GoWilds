import React from "react";
import { BsPlus } from "react-icons/bs";
import Splides from "../Slider/Splides";
import { SplideSlide } from "@splidejs/react-splide";
import "./adventure_gallery.css";
import tours from "./adventure.json";

const Adventure_gallery = () => {
  const tour = tours.map((item) => {
    return (
      <SplideSlide key={item.id}>
        <div className=" rounded-md overflow-hidden relative">
          <img src={item.image} alt="" />
          <div className="tour_card_content w-full absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] flex flex-col items-center justify-center gap-3 cursor-pointer">
            <BsPlus
              className=" p-2 rounded-full bg-secondary text-white"
              size={"2.5rem"}
            />
            <div className="text-center">
              <h3 className=" text-xl font-bold text-white">
                Discovery Islands
              </h3>
              <p className=" capitalize text-[#ffffffe6]">adventure</p>
            </div>
          </div>
        </div>
      </SplideSlide>
    );
  });

  return (
    <div className="flex relative bg-white">
      <div className="absolute px-5 -top-48 z-50">
        <Splides brand={tour} view={5}/>
      </div>
    </div>
  );
};

export default Adventure_gallery;
