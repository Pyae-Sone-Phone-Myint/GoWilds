import React, { useEffect, useState } from "react";
import "./about.css";
import "swiper/swiper-bundle.min.css";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterest,
  FaPlay,
  FaShareAlt,
  FaTwitter,
} from "react-icons/fa";
import Slider from "../../components/Slider/Slider";
import {
  GiCampingTent,
  GiMountainRoad,
  GiFishingBoat,
  GiMountainClimbing,
  GiCommercialAirplane,
} from "react-icons/gi";
import { BiPhoneCall } from "react-icons/bi";
import { BsPatchCheckFill } from "react-icons/bs";
import { FaCoins, FaVest } from "react-icons/fa";
import { TfiQuoteRight } from "react-icons/tfi";
import { AiFillStar } from "react-icons/ai";
import slides from "../../components/Slider/team.json";
import { SwiperSlide } from "swiper/react";
import Adventure_gallery from "../../components/Adventure/Adventure_gallery";
import Splides from "../../components/Slider/Splides";
import { SplideSlide } from "@splidejs/react-splide";

const About = () => {
  const [isFirstPhoto, setIsFirstPhoto] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFirstPhoto((prevIsFirstPhoto) => !prevIsFirstPhoto);
    }, 8000);

    return () => {
      clearTimeout(timer);
    };
  }, [isFirstPhoto]);

  useEffect(() => {
    if (!isFirstPhoto) {
      const revertTimer = setTimeout(() => {
        setIsFirstPhoto(true);
      }, 8000);

      return () => {
        clearTimeout(revertTimer);
      };
    }
  }, [isFirstPhoto]);

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

  const services = [
    { name: "Kevin Smith", role: "Customer" },
    { name: "Jessica Brown", role: "Founder & CEO" },
    { name: "Christine Eve", role: "Founder & CEO" },
  ];

  const brands = [
    { id: 1, image: "src/assets/images/brand.png" },
    { id: 2, image: "src/assets/images/brand.png" },
    { id: 3, image: "src/assets/images/brand.png" },
    { id: 4, image: "src/assets/images/brand.png" },
    { id: 5, image: "src/assets/images/brand.png" },
    { id: 6, image: "src/assets/images/brand.png" },
  ];

  const service = services.map((item) => {
    return (
      <SwiperSlide className=" w-fit">
        <div className=" flex items-center gap-5">
          <TfiQuoteRight size={"5rem"} className=" text-primary" />
          <div className=" flex flex-col gap-3">
            <h3 className=" text-xl font-bold">Quality Service</h3>
            <div className=" flex gap-1 text-secondary">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
          </div>
        </div>
        <p className=" text-[#82828a] leading-7 text-xl py-5">
          To take trivial example which of ever undertakes laborious physical
          exercise, except to obtain some advantage from but who has any right
          to find fault with man who chooses to enjoy.
        </p>
        <hr />
        <div className=" flex py-5 items-center gap-8">
          <div className=" w-20 overflow-hidden rounded-full">
            <img src="src/assets/images/testimonial.jpg" alt="" />
          </div>
          <div className="">
            <h4 className=" text-xl font-bold">{item.name}</h4>
            <p className=" text-[#82828a] ">{item.role}</p>
          </div>
        </div>
      </SwiperSlide>
    );
  });

  const brand = brands.map((item) => {
    return (
      <SplideSlide key={item.id}>
        <div className="px-10 py-5 brand-holder">
          <img src={item.image} alt="" />
        </div>
      </SplideSlide>
    );
  });

  return (
    <>
      <img src="src/assets/images/bg-01.jpg" className="fixed-bg" alt="" />
      {/*About Page Hero Section */}
      <div className=" md:min-h-[340px] min-h-[200px] relative flex items-center overflow-hidden z-50">
        <div
          className={`background-animation ${
            isFirstPhoto ? "first-photo" : "second-photo"
          }`}
        ></div>
        <div className=" text-white md:ml-28 ml-10">
          <h1 className=" text-[30px] md:text-[52px] font-[700]">About</h1>
          <p className="text-[18px] md:text-[20px] pt-2">
            People Don't Take, Trips Take People
          </p>
        </div>
      </div>

      {/* Availability */}
      <div className="min-h-[calc(100vh-100px)] relative bg-white z-50">
        <div className="absolute h-screen bg-transparent w-full overflow-hidden">
          <div className="bg-shape-04"></div>
        </div>
        <div className=" flex flex-col md:flex-row min-h-[calc(100vh-100px)] md:items-center md:mx-28 mx-10">
          <div className="flex flex-col md:w-1/2  items-start gap-7 my-28">
            <div className="">
              <span className=" px-5 py-4 bg-[#64ab4513] text-primary rounded-lg font-semibold">
                Availability
              </span>
            </div>
            <h2>
              <span className=" md:text-[48px] font-bold leading-tight">
                Explore Go Wilds Real Adventure & Travels
              </span>
            </h2>
            <div className=" text-[#82828a] leading-7">
              Sit amet consectetur integer tincidunt sceleries noda lesry
              volutpat neque fermentum malesuada scelequecy leocras odio blandit
              rhoncus eues feugiat.
            </div>
            <div className=" flex items-center gap-4">
              <div className="">
                <img
                  src="src/assets/images/airplane.png"
                  className=" w-12"
                  alt="flight"
                />
              </div>
              <div className="">
                <h3>
                  <span className="text-[20px] font-bold">
                    Protect your life
                  </span>
                </h3>
                <p className=" text-[#82828a]">
                  We're here for look even you from start to finish.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className=" p-3 rounded-full bg-secondary cursor-pointer relative hover:bg-primary duration-150 transition text-white">
                <BiPhoneCall size={"1.5rem"} />
              </div>
              <div className="">
                <h3>
                  <span className=" text-[#82828a] text-[14px]">
                    Call experts
                  </span>
                </h3>
                <p className=" font-bold">+92 (03) 68-090</p>
              </div>
              <div className=" cursor-pointer text-white px-5 py-4 rounded-lg duration-150 transition bg-primary hover:bg-[#7ecc5d] relative -bottom-4">
                <a href="/contact">Discover More</a>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 flex flex-wrap gap-5 relative z-30">
            <div className="card md:flex-[40%]  shadow-lg">
              <div className=" w-fit p-3 rounded-full bg-[#eeeded] cursor-pointer relative hover:bg-primary duration-150 transition text-primary">
                <GiCampingTent size={"3.5rem"} />
              </div>
              <h4 className=" font-bold text-[22px] my-5">Tent Camping</h4>
              <p className="text-[#82828a]">
                Sit amet consectetur intege tincidunt sceleries malesuada
                sceleris massa.
              </p>
            </div>
            <div className="card md:flex-[40%]  shadow-lg">
              <div className=" w-fit p-3 rounded-full cursor-pointer relative bg-primary duration-150 transition text-white">
                <GiMountainRoad size={"3.5rem"} />
              </div>
              <h4 className=" font-bold text-[22px] my-5">Mountain Biking</h4>
              <p className="text-[#82828a]">
                Sit amet consectetur intege tincidunt sceleries malesuada
                sceleris massa.
              </p>
            </div>
            <div className="card md:flex-[40%]  shadow-lg">
              <div className=" w-fit p-3 rounded-full bg-[#eeeded] cursor-pointer relative hover:bg-primary duration-150 transition text-primary">
                <GiFishingBoat size={"3.5rem"} />
              </div>
              <h4 className=" font-bold text-[22px] my-5">Fishing & Boat</h4>
              <p className="text-[#82828a]">
                Sit amet consectetur intege tincidunt sceleries malesuada
                sceleris massa.
              </p>
            </div>
            <div className="card md:flex-[40%]  shadow-lg">
              <div className=" w-fit p-3 rounded-full bg-[#eeeded] cursor-pointer relative hover:bg-primary duration-150 transition  text-primary">
                <GiMountainClimbing size={"3.5rem"} />
              </div>
              <h4 className=" font-bold text-[22px] my-5">
                Adventure climbing
              </h4>
              <p className="text-[#82828a]">
                Sit amet consectetur intege tincidunt sceleries malesuada
                sceleris massa.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tours */}
      <div className="min-h-[calc(100vh-100px)] relative bg-blur">
        <div className="flex flex-col md:flex-row md:items-center min-h-[calc(100vh-100px)] md:mx-28 mx-10 md:py-32 py-16">
          <div className="flex flex-col items-start md:flex-[55%] text-white">
            <a
              href="https://www.youtube.com/watch?v=-UbYukTFmFU"
              className=" music-btn hover:scale-95 duration-150 transition relative p-10 bg-primary rounded-full mb-20"
            >
              <FaPlay className=" text-white" size={"2rem"} />
              <img
                src="src/assets/images/arrow-3.png"
                className=" absolute top-20 left-40"
                alt=""
              />
            </a>
            <div className="px-5 py-4 bg-[#f7921e2f] text-secondary rounded-lg font-semibold mb-7">
              <span>Are you ready to travel?</span>
            </div>
            <h2 className=" md:text-[48px] font-bold leading-tight mb-10">
              Ready to travel with real adventure and enjoy natural
            </h2>
            <div className=" cursor-pointer text-white px-5 py-4 rounded-lg duration-150 transition bg-[#7ecc5d] hover:bg-primary relative -bottom-4">
              <a href="/tours">Discover More</a>
            </div>
          </div>
          <div className=" md:flex-[45%] flex text-white flex-wrap flex-col md:flex-row gap-3 mt-16 md:mt-0">
            <div className="tour-card md:flex-[40%] flex-1">
              <div className="drop"></div>
              <div className="flex justify-center">
                <img
                  src="src/assets/images/001-wildlife.png"
                  className=" w-[100px] "
                  alt="deer"
                />
              </div>
              <h4 className=" mt-3 relative z-10">
                Wildlife <br />
                Tours
              </h4>
            </div>
            <div className="tour-card md:flex-[40%] flex-1">
              <div className="drop"></div>
              <div className="flex justify-center">
                <img
                  src="src/assets/images/002-parachute.png"
                  className=" w-[100px]"
                  alt="parachute"
                />
              </div>
              <h4 className=" mt-3 relative z-10">
                Paragliding <br /> Tours
              </h4>
            </div>
            <div className="tour-card md:flex-[40%] flex-1">
              <div className="drop"></div>
              <div className="flex justify-center">
                <img
                  src="src/assets/images/003-adventurer.png"
                  className=" w-[100px]"
                  alt="adventurer"
                />
              </div>
              <h4 className=" mt-3 relative z-10">
                Adventure <br /> Tours
              </h4>
            </div>
            <div className="tour-card md:flex-[40%] flex-1">
              <div className="drop"></div>
              <div className="flex justify-center">
                <svg
                  fill="#ffffff"
                  height="100px"
                  width="100px"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="-51.2 -51.2 614.40 614.40"
                  xml:space="preserve"
                  stroke="#ffffff"
                  transform="matrix(1, 0, 0, 1, 0, 0)rotate(45)"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0" />

                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke="#CCCCCC"
                    stroke-width="1.023996"
                  />

                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g>
                      {" "}
                      <g>
                        {" "}
                        <path d="M509.677,285.627L338.833,108.681c-3.139-3.251-8.477-3.345-11.727-0.207c-3.251,3.14-3.345,8.476-0.207,11.727 l150.733,156.117l-213.347-53.337v-67.255l164.342,99.779c4.175,2.533,9.776,0.819,11.831-3.602 c1.757-3.781,0.34-8.416-3.221-10.579L264.283,136.319V55.351l38.82,40.205c3.139,3.251,8.478,3.344,11.728,0.207 c3.252-3.139,3.343-8.478,0.206-11.728l-53.081-54.976c-0.017-0.018-0.035-0.032-0.052-0.049 c-0.114-0.115-0.234-0.223-0.355-0.332c-0.081-0.073-0.159-0.151-0.243-0.221c-0.144-0.121-0.296-0.231-0.449-0.343 c-0.065-0.048-0.127-0.1-0.195-0.145c-1.33-0.909-2.939-1.443-4.672-1.443c-1.733,0-3.342,0.533-4.672,1.443 c-0.066,0.045-0.129,0.097-0.195,0.145c-0.153,0.111-0.305,0.222-0.449,0.343c-0.084,0.07-0.163,0.148-0.243,0.221 c-0.121,0.108-0.241,0.217-0.355,0.332c-0.017,0.017-0.035,0.031-0.052,0.049L2.303,285.627c-2.538,2.629-3.036,6.756-1.208,9.912 c1.825,3.152,5.647,4.789,9.187,3.896l237.415-59.355v12.723L81.743,436.224c-2.2,2.432-2.761,5.932-1.431,8.929 c1.33,2.998,4.302,4.93,7.581,4.93h53.636v18.247c0,9.452,7.689,17.141,17.141,17.141h17.694c9.452,0,17.141-7.689,17.141-17.141 v-18.247h124.966v18.247c0,9.452,7.689,17.141,17.141,17.141h17.694c9.452,0,17.141-7.689,17.141-17.141v-18.247h53.636 c3.28,0,6.251-1.932,7.581-4.93c1.33-2.997,0.769-6.497-1.431-8.929L264.283,252.804V240.08l237.415,59.355 c4.748,1.161,9.615-2.135,10.235-6.996C512.249,289.967,511.406,287.424,509.677,285.627z M247.695,136.319L76.822,240.063 c-3.915,2.378-5.162,7.479-2.786,11.395c2.377,3.915,7.478,5.161,11.395,2.786l162.264-98.517v67.255L34.349,276.317 L247.695,55.351V136.319z M141.53,432.942v0.553h-34.947L218.027,310.32l-55.516,105.48h-3.84 C149.219,415.801,141.53,423.49,141.53,432.942z M176.918,468.331c0,0.304-0.249,0.553-0.553,0.553H158.67 c-0.304,0-0.553-0.249-0.553-0.553v-35.389c0-0.304,0.249-0.553,0.553-0.553h8.803c0.012,0,0.024,0.002,0.036,0.002 c0.011,0,0.021-0.002,0.032-0.002h8.823c0.304,0,0.553,0.249,0.553,0.553V468.331z M353.308,468.884h-17.694 c-0.304,0-0.553-0.249-0.553-0.553v-35.389c0-0.304,0.249-0.553,0.553-0.553h8.823c0.011,0,0.021,0.002,0.032,0.002 c0.012,0,0.024-0.002,0.036-0.002h8.803c0.304,0,0.553,0.249,0.553,0.553v35.389h0 C353.861,468.635,353.612,468.884,353.308,468.884z M405.397,433.495h-34.947v-0.553c0-9.452-7.689-17.141-17.141-17.141h-3.84 l-55.516-105.48L405.397,433.495z M331.056,416.434c-7.244,2.004-12.584,8.636-12.584,16.508v0.553H193.506v-0.553 c0-7.872-5.34-14.504-12.584-16.508l75.067-142.627L331.056,416.434z" />{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>
                </svg>
              </div>
              <h4 className=" mt-3 relative z-10">
                Hang Gliding <br /> Tours
              </h4>
            </div>
          </div>
        </div>
      </div>

      {/* Who we Are */}
      <div className="flex flex-col lg:flex-row justify-between min-h-[calc(100vh-100px)] relative bg-white z-50 pt-24 md:px-20 px-5 gap-y-10">
        <div className=" flex-[40%]  px-5 pb-0">
          <div className=" overflow-hidden h-full top-rounded">
            <img src="src/assets/images/image-07.jpg" alt="" />
          </div>
        </div>
        <div className=" flex-[60%] flex ">
          <div className="flex flex-col gap-8 md:px-20 ">
            <div className="">
              <span className=" px-5 py-4 bg-[#64ab4513] text-primary rounded-lg font-semibold">
                Who We Are
              </span>
            </div>
            <h2>
              <span className=" md:text-[48px] font-bold leading-tight">
                Great Opportunity For Adventure & Travels
              </span>
            </h2>
            <div className=" text-[#82828a] leading-7 ">
              Sit amet consectetur integer tincidunt sceleries noda lesry
              volutpat neque fermentum malesuada scelequecy leocras odio blandit
              rhoncus eues feugiat.
            </div>
            <div className="bg-white flex md:justify-between justify-center flex-col md:flex-row shadow-xl rounded-lg py-8 px-24 gap-y-5">
              <div className="relative flex justify-center flex-col items-center">
                <div className=" relative w-fit">
                  <div class="progress-bar css">
                    <progress id="css" min="0" max="100" value="50"></progress>
                  </div>
                </div>
                <h4 className=" text-lg font-semibold mt-5">
                  Satisfied Clients
                </h4>
              </div>
              <div className=" h bg-primary md:w-[0.2px] w-0"></div>
              <div className="relative flex justify-center flex-col items-center">
                <div className=" relative w-fit">
                  <div class="progress-bar css">
                    <progress id="css" min="0" max="100" value="50"></progress>
                  </div>
                </div>
                <h4 className=" text-lg font-semibold mt-5">Success Rate</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Members */}
      <div className=" min-h-screen relative bg-white z-50  text-center">
        <div className="absolute h-screen bg-transparent w-full overflow-hidden">
          <div className="bg-shape-10"></div>
        </div>
        <div className="flex flex-col items-center justify-center gap-5 md:pt-24 pt-12 overflow-hidden">
          <div className="">
            <span className=" px-5 py-4 bg-[#64ab4513] text-primary rounded-lg font-semibold">
              Team members
            </span>
          </div>
          <h2>
            <span className=" md:text-[48px] font-bold leading-tight">
              We've Expert Team <br /> Members Meet With Team
            </span>
          </h2>
        </div>
        <div className=" md:px-20 px-5 py-10 overflow-hidden">
          <Slider slide={slide} dSize={3} nav_icon={true} space={"60"} />
        </div>
      </div>

      {/* Who we are */}
      <div className="flex flex-col lg:flex-row justify-center md:justify-between min-h-screen relative bg-white z-50 md:py-24 py-10 md:px-20 px-5 gap-y-10 ">
        <div className=" flex-[50%] flex flex-col gap-8 md:pr-10 ">
          <div className="flex items-end md:flex-row flex-col gap-8">
            <div className="">
              <img
                src="src/assets/images/image-16.jpg"
                className=" w-full h-full object-contain rounded-lg"
                alt=""
              />
            </div>
            <div className="">
              <img
                src="src/assets/images/image-17.jpg"
                className=" w-full h-full object-contain rounded-lg"
                alt=""
              />
            </div>
          </div>
          <div className=" flex justify-center">
            <div className="md:w-[80%]">
              <img
                src="src/assets/images/image-18.jpg"
                className=" w-full h-full object-contain rounded-lg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className=" flex-[40%] flex flex-col md:pl-5">
          <div className="mb-10">
            <span className=" px-5 py-4 bg-[#64ab4513] text-primary rounded-lg font-semibold">
              Who We Are
            </span>
          </div>
          <h2 className=" mb-10">
            <span className=" md:text-[48px] text-[36px] font-bold leading-tight">
              Great Opportunity For Adventure & Travels
            </span>
          </h2>
          <div className="parent gap-14 flex flex-col">
            <div className="child flex items-center md:gap-14 gap-8">
              <div className=" icon-parent flex items-center md:gap-8 gap-3 ">
                <BsPatchCheckFill className=" text-secondary" size={"1.5rem"} />
                <div className="icon_1 relative">
                  <FaVest
                    className="p-5 relative bg-white text-primary border rounded-full"
                    size={"5rem"}
                  />
                </div>
              </div>
              <div className="flex flex-col md:gap-3 gap-1">
                <h4 className=" text-xl font-semibold">Safety First Always</h4>
                <p className="text-[#82828a] leading-7 ">
                  Set perspiciatis unde omnis estenatus voluptatem totarem
                  aperiae.
                </p>
              </div>
            </div>
            <div className="child flex items-center md:gap-14 gap-8">
              <div className=" icon-parent flex items-center md:gap-8 gap-3 ">
                <BsPatchCheckFill className=" text-secondary" size={"1.5rem"} />
                <div className="icon_1 relative">
                  <FaCoins
                    className="p-5 relative bg-white text-primary border rounded-full"
                    size={"5rem"}
                  />
                </div>
              </div>
              <div className="flex flex-col md:gap-3 gap-1">
                <h4 className=" text-xl font-semibold">Low Price & Friendly</h4>
                <p className="text-[#82828a] leading-7 ">
                  Quis autem vel eum iure voluptate velit esse nihile
                  consequatur.
                </p>
              </div>
            </div>
            <div className="child flex items-center md:gap-14 gap-8">
              <div className=" icon-parent flex items-center md:gap-8 gap-3 ">
                <BsPatchCheckFill className=" text-secondary" size={"1.5rem"} />
                <div className=" relative">
                  <GiCommercialAirplane
                    className="p-5 relative bg-white text-primary border rounded-full"
                    size={"5rem"}
                  />
                </div>
              </div>
              <div className="flex flex-col md:gap-3 gap-1">
                <h4 className=" text-xl font-semibold">Trusted Travel Guide</h4>
                <p className="text-[#82828a] leading-7 ">
                  At vero accusamus dignissimos ducimus blanditiis deleniti
                  atque quos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Play */}
      <div className="flex flex-col md:flex-row md:items-center items-start justify-between md:min-h-[340px] min-h-[200px] relative  overflow-hidden z-50 md:px-28 px-5 py-10">
        <div className={`bg-fixed-photo-for-music md:hidden`}></div>
        <div className=" text-white ">
          <h1 className=" text-[30px] md:text-[52px] font-[700]">
            Ready to travel with real <br /> adventure and enjoy natural
          </h1>
        </div>
        <a
          href="https://www.youtube.com/watch?v=JA0g4KYMf_k"
          className="music-btn music-btn-2 hover:scale-95 duration-150 transition relative p-10 bg-white rounded-full "
        >
          <FaPlay className=" text-black" size={"2rem"} />
        </a>
      </div>

      {/* Services */}
      <div className=" bg-white items-start justify-between min-h-screen relative  overflow-hidden z-50 md:px-28 px-5 md:py-40">
        <div className="absolute left-0 h-screen bg-transparent w-full overflow-hidden">
          <div className="bg-shape-05"></div>
        </div>
        <div className="flex flex-col md:flex-row md:items-center items-start justify-between relative  overflow-hidden z-50 pb-16">
          <div className=" md:flex-[50%] flex-1">
            <div className="">
              <img src="src/assets/images/icon-testimonial.png" alt="" />
            </div>
          </div>
          <div className="md:flex-[50%] flex-1 overflow-hidden w-full">
            <Slider slide={service} />
          </div>
        </div>
        <hr />
        <div className=" py-10 pb-40 overflow-hidden">
          <Splides brand={brand} view={5} controller={false}/>
        </div>
      </div>
      <Adventure_gallery />

      <div className="h-[500px] relative bg-black"></div>
    </>
  );
};

export default About;
