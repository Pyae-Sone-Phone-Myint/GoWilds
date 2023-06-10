import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import { Autoplay, Navigation } from "swiper";
import "./slide.css";
import slides from "./team.json";
import {
  FaShareAlt,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";

const Slider = () => {
  const slide = slides.map((item) => {
    return (
      <SwiperSlide
        key={item.name}
        className=" team-card text-center relative z-30"
      >
        <div className="team-img relative overflow-hidden rounded-lg mx-4">
          <img src={item.image} className="" alt={item.name} />
          <div className="team-social absolute bottom-0 right-0 text-white ">
            <div className="team-social-link flex flex-col items-center p-3 bg-primary gap-4">
              <a href="#">
                <FaFacebookF />
              </a>
              <a href="#">
                <FaTwitter />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
              <a href="#">
                <FaPinterest />
              </a>
            </div>
            <div className="p-3 bg-primary">
              <FaShareAlt />
            </div>
          </div>
        </div>
        <div className="team-content w-full relative py-8 rounded-md">
          <h3 className=" text-2xl font-bold text-black">{item.name}</h3>
          <p className=" text-[#82828a]">{item.job}</p>
        </div>
      </SwiperSlide>
    );
  });
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={60}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="mySwiper transition duration-300"
      >
        {slide}
      </Swiper>
    </>
  );
};

export default Slider;
