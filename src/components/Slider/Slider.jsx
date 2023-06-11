import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import { Autoplay, Navigation } from "swiper";
import "./slide.css";
const Slider = ({ slide, mSize = 1, dSize = 1, nav_icon = false, space }) => {
  const screen = window.innerWidth < 796;
  return (
    <>
      <Swiper
        slidesPerView={screen ? mSize : dSize}
        spaceBetween={space}
        loop={true}
        loopFillGroupWithBlank={true}
        speed={1500}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={nav_icon}
        modules={[Navigation, Autoplay]}
        className=" w-full"
      >
        {slide}
      </Swiper>
    </>
  );
};

export default Slider;
