import React, { useState } from "react";
import "./Home.css";
import {
  FaArrowUp,
  FaAward,
  FaCoins,
  FaHiking,
  FaStar,
  FaVest,
} from "react-icons/fa";
import slides from "../../Json/popular_activities.json";
import Splides from "../../components/Slider/Splides";
import { SplideSlide } from "@splidejs/react-splide";
import {
  BsCamera,
  BsCameraVideo,
  BsFillChatLeftTextFill,
  BsFillRouterFill,
  BsPatchCheckFill,
} from "react-icons/bs";
import {
  GiCampingTent,
  GiCommercialAirplane,
  GiFishingBoat,
  GiFishingPole,
  GiMountainRoad,
  GiRabbit,
  GiSolarPower,
} from "react-icons/gi";
import { MdLocationOn } from "react-icons/md";
import { BiWorld } from "react-icons/bi";
import { CgGym } from "react-icons/cg";
import Explore_more from "../../components/Explore_more/Explore_more";
import features from "../../Json/feature_tours.json";
import StarRating from "../../components/StarRating/StarRating";
import { AiFillDollarCircle, AiFillStar, AiOutlineHeart } from "react-icons/ai";
import Tour_bgBlur from "../../components/Tour_bgBlur/Tour_bgBlur";
import Adventure_gallery from "../../components/Adventure/Adventure_gallery";
import { ImCross } from "react-icons/im";
import Lazy_loader from "../../components/Slider/lazyLoader/lazy_loader";
import tours from "../../Json/adventure.json";
import { TfiQuoteRight } from "react-icons/tfi";

const Home = () => {
  const [displayCheck, setDisplayCheck] = useState(false);
  const clickHandler = () => {
    setDisplayCheck(true);
  };

  const services = [
    { name: "Kevin Smith", role: "Customer" },
    { name: "Jessica Brown", role: "Founder & CEO" },
    { name: "Christine Eve", role: "Founder & CEO" },
  ];

  const slide = slides.map((item) => {
    return (
      <SplideSlide>
        <div className=" relative content-card min-h-[410px] cursor-pointer">
          <div className="relative min-h-[410px] rounded-lg w-full overflow-hidden">
            <img
              src={item.image}
              className=" absolute h-full w-full left-0 top-0 content-img object-cover"
              alt=""
            />
          </div>
          <div className="absolute bg-white p-8 rounded-lg bottom-5 left-5 right-5">
            <div className="h-[4px] bg-primary w-10 rounded-full mb-4 content-bar"></div>
            <div className="flex justify-between items-center gap-5">
              <h5 className=" text-xl font-bold text-[rgb(28,35,31)] w-3/4">
                {item.title}
              </h5>
              <div className="content-arrow h-[42px] w-[42px] bg-primary rounded-full flex justify-center items-center ">
                <FaArrowUp className=" text-white rotate-45" size={"1rem"} />
              </div>
            </div>
            <div className=" content-para text-base text-[rgb(130,130,130)] leading-6">
              Set unde omnis estenatus voluptatem aperiae.
            </div>
          </div>
          <a
            href="/about"
            className=" absolute w-full h-full top-0 left-0 z-20"
          ></a>
        </div>
      </SplideSlide>
    );
  });

  const service = services.map((item) => {
    return (
      <SplideSlide className=" w-fit">
        <div className="">
          <div className="testimonial-card relative text-xl font-medium text-[rgb(28,35,31)] leading-10  rounded-xl bg-white">
            <div className=" flex gap-1 text-primary mb-4">
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} size={"1.3rem"} />
              ))}
            </div>
            Leverage agile frameworks to provide a robust synopsis for high
            level overviews. Iterative approaches to corporate strategy data
            foster to collaborative thinking.
            <span className="quote-icon w-[100px] h-[100px] z-10 absolute right-0 top-0 bg-primary ">
              <TfiQuoteRight
                className=" text-white absolute top-4 left-10"
                size={"3rem"}
              />
            </span>
            <span className=" arrow">
              <span className="first"></span>
              <span className=" second"></span>
            </span>
          </div>
          <div className=" ml-[160px] mt-10">
            <div className=" flex items-center gap-5">
              <div className=" p-3 rounded-full overflow-hidden border-4 w-fit border-primary">
                <img
                  src={"src/assets/images/testimonial.jpg"}
                  className=" rounded-full w-20"
                  alt="avatar"
                />
              </div>
              <div className="">
                <h2 className=" text-xl font-extrabold mb-2">{item.name}</h2>
                <h3 className=" uppercase tracking-wider text-sm font-medium text-[rgb(130,130,130)]">
                  {item.role}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </SplideSlide>
    );
  });

  const feature = features.map((item) => {
    return (
      <SplideSlide className="feature-card relative w-fit h-fit">
        <div className=" relative cursor-pointer w-fit overflow-hidden ">
          <div className="flex justify-between items-start w-full absolute z-50 p-5">
            <div className="">
              <h3 className=" uppercase bg-[#14B0C3] px-2 py-1 rounded text-white text-xs font-medium mb-1">
                featured
              </h3>
              {item.discount && (
                <div className="">
                  <h3 className=" uppercase text-white bg-secondary text-xs font-medium px-3 py-1 rounded">
                    {item.discount}
                  </h3>
                </div>
              )}
            </div>
            <div className="p-2 items-center flex rounded bg-[rgba(0,0,0,0.4)]">
              <AiOutlineHeart
                size={"1.1rem"}
                className=" text-white hover:text-primary"
              />
            </div>
          </div>
          {/* Image */}
          <div className=" relative overflow-hidden rounded-lg">
            <div className=" bg-[#00000061] w-full h-full absolute"></div>
            <img src={item.image} alt={item.title} />
          </div>
          {/* Content */}
          <div className=" absolute -bottom-[1px] left-0 shadow feature-content w-full px-6 pb-5">
            <div className=" relative bottom-0 left-0 right-0 z-50 ">
              <div className="flex justify-between relative mb-2">
                <div className=" relative w-full">
                  <div className=" uppercase text-secondary text-sm font-medium leading-7 review">
                    {item.rating} by {item.review} reviews
                  </div>
                  <div className=" flex text-secondary absolute top-0 left-0 z-[1] star">
                    <StarRating rate={item.rating} />
                  </div>
                </div>
                <div className="flex gap-3 text-[rgb(203,203,203)]">
                  <div className="relative ">
                    <span className=" absolute bg-primary rounded-full text-xs w-4 h-4 text-center text-white -top-1 -right-2">
                      6
                    </span>
                    <BsCamera
                      onClick={clickHandler}
                      size={"1.2rem"}
                      className=" hover:text-primary transition duration-300"
                    />
                  </div>
                  <a href="https://www.youtube.com/watch?v=MtCMtC50gwY">
                    <BsCameraVideo
                      size={"1.2rem"}
                      className=" hover:text-primary transition duration-300"
                    />
                  </a>
                </div>
              </div>
              <h2 className=" text-xl font-bold leading-7 my-2  text-white feature-title">
                <a
                  href=""
                  className=" hover:text-primary transition duration-300"
                >
                  {item.title}
                </a>
              </h2>
              <div className="flex gap-2 items-center mb-2">
                <MdLocationOn size={"1.2rem"} className=" text-primary" />
                <span className=" text-sm font-medium leading-7 location">
                  Main Street,Brooklyn,NY
                </span>
              </div>
              <div className="flex gap-3">
                <AiFillDollarCircle size={"1.4rem"} className="text-primary" />
                <div className="flex gap-2">
                  <h5 className=" text-sm font-medium leading-7 prize">From</h5>
                  <span className=" text-sm font-medium leading-7 text-primary">
                    {item.prize}
                  </span>
                  <span className=" text-[13px] font-medium leading-7 line-through prize">
                    {item.from}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SplideSlide>
    );
  });

  return (
    <>
      <img src="src/assets/images/Bg_shape/bg-01.jpg" className="fixed-bg" alt="" />
      {/* Popular Activities */}
      <img src="src/assets/images/breadcrumb-01.jpg" alt="" />
      <div className=" min-h-screen relative bg-white">
        <div className="bg-world-photo"></div>
        <div className=" text-center py-32">
          <div className=" mb-10">
            <span className=" px-5 py-4 bg-[#64ab4513] text-primary rounded-lg font-semibold">
              Popular Activities
            </span>
          </div>
          <h2>
            <span className=" md:text-[48px] font-bold leading-tight">
              Explore Real Adventure
            </span>
          </h2>
        </div>
        <div className=" px-5 pb-10">
          <Splides brand={slide} view={4} center="" />
        </div>
      </div>
      {/* About Company */}
      <div className=" relative min-h-screen md:px-20 px-5 py-10 overflow-hidden bg-white">
        <div className="bg-shape-02"></div>
        <div className="flex flex-col lg:flex-row justify-center md:justify-between min-h-screen relative z-50 md:py-24 gap-y-10 ">
          <div className=" flex-[50%] flex flex-col items-end gap-8 md:pr-10 ">
            <div className="relative w-fit">
              <div className=" absolute p-4 bg-primary rounded-lg logo-floating -top-5 z-50">
                <img
                  src="src/assets/images/logo-small-white.png"
                  alt="floating-logo"
                />
              </div>
              <div className="absolute -right-3 -top-1 bg-shaping-dot -z-[1]">
                <img src="src/assets/images/shape-dot.png" alt="bg-shape-dot" />
              </div>

              <div className=" rounded-tr-[50px] overflow-hidden w-fit">
                <a href="/about">
                  <img
                    src="src/assets/images/image-20.jpg"
                    className=" hover:scale-150 transition duration-[5.5s] ease-in"
                    alt=""
                  />
                </a>
              </div>
              <div
                className=" absolute -bottom-10 -left-20 bg-white p-3 rounded-3xl shadow w-60
              "
              >
                <a href="/about">
                  <img
                    src="src/assets/images/image-21.jpg"
                    className=" rounded-3xl hover:scale-150 transition duration-[5.5s] ease-in"
                    alt=""
                  />
                </a>
              </div>
              <div className=" absolute -bottom-20 -right-5 bg-white p-2 rounded-lg shadow">
                <div className="flex items-center p-6 border-secondary border-2 rounded-lg">
                  <h1 className=" text-[60px] font-bold leading-7 text-primary mr-3">
                    28
                  </h1>
                  <p className=" text-lg font-medium leading-6 text-[rgb(130,130,130)]">
                    Year of <br /> experience
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex-[40%] flex flex-col md:pl-5">
            <div className="mb-10">
              <span className=" px-5 py-4 bg-[#64ab4513] text-primary rounded-lg font-semibold">
                About Company
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
                  <BsPatchCheckFill
                    className=" text-secondary"
                    size={"1.5rem"}
                  />
                  <div className="icon_1 relative">
                    <FaVest
                      className="p-5 relative bg-white text-primary border rounded-full"
                      size={"5rem"}
                    />
                  </div>
                </div>
                <div className="flex flex-col md:gap-3 gap-1">
                  <h4 className=" text-xl font-semibold">
                    Safety First Always
                  </h4>
                  <p className="text-[#82828a] leading-7 ">
                    Set perspiciatis unde omnis estenatus voluptatem totarem
                    aperiae.
                  </p>
                </div>
              </div>
              <div className="child flex items-center md:gap-14 gap-8">
                <div className=" icon-parent flex items-center md:gap-8 gap-3 ">
                  <BsPatchCheckFill
                    className=" text-secondary"
                    size={"1.5rem"}
                  />
                  <div className="icon_1 relative">
                    <FaCoins
                      className="p-5 relative bg-white text-primary border rounded-full"
                      size={"5rem"}
                    />
                  </div>
                </div>
                <div className="flex flex-col md:gap-3 gap-1">
                  <h4 className=" text-xl font-semibold">
                    Low Price & Friendly
                  </h4>
                  <p className="text-[#82828a] leading-7 ">
                    Quis autem vel eum iure voluptate velit esse nihile
                    consequatur.
                  </p>
                </div>
              </div>
              <div className="child flex items-center md:gap-14 gap-8">
                <div className=" icon-parent flex items-center md:gap-8 gap-3 ">
                  <BsPatchCheckFill
                    className=" text-secondary"
                    size={"1.5rem"}
                  />
                  <div className=" relative">
                    <GiCommercialAirplane
                      className="p-5 relative bg-white text-primary border rounded-full"
                      size={"5rem"}
                    />
                  </div>
                </div>
                <div className="flex flex-col md:gap-3 gap-1">
                  <h4 className=" text-xl font-semibold">
                    Trusted Travel Guide
                  </h4>
                  <p className="text-[#82828a] leading-7 ">
                    At vero accusamus dignissimos ducimus blanditiis deleniti
                    atque quos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Popular Activity */}
      <div className=" relative bg-white z-10">
        <div className=" mx-5 relative overflow-hidden bg-[#00000035] rounded-3xl">
          <div className="bg-photo"></div>
          <div className=" relative z-10 md:mx-20 mx-3">
            <div className=" text-center pb-10 md:pt-32 pt-24">
              <div className=" mb-10">
                <span className=" px-5 py-4 bg-[#64ab4513] text-secondary rounded-lg font-semibold">
                  Popular Activities
                </span>
              </div>
              <h2>
                <span className=" md:text-[48px] font-bold leading-tight text-white">
                  Feel real adventure and very <br /> close to nature
                </span>
              </h2>
            </div>
            {/* row */}
            <div className="flex md:flex-row flex-col gap-14 pb-64">
              {/* first column */}
              <div className="flex-[30%] bg-white p-7 rounded-xl flex flex-col justify-center">
                <div className="flex item-center  gap-5 cursor-pointer  bg-secondary text-white rounded-lg p-3">
                  <GiCampingTent size={"2.5rem"} />
                  <h3 className=" text-lg font-bold flex w-full items-center">
                    <a href="/tour" className=" w-full">
                      Tent camping
                    </a>
                  </h3>
                </div>
                <div className="flex item-center  gap-5 bg-[#f3f8f6] rounded-lg p-3 hover:bg-secondary hover:text-white transition duration-500 activity-card cursor-pointer mt-5">
                  <BiWorld
                    size={"2.5rem"}
                    className=" text-primary activity-icon transition duration-500"
                  />
                  <h3 className=" text-lg font-bold flex w-full items-center">
                    <a href="/tour" className=" w-full">
                      Adventure travel
                    </a>
                  </h3>
                </div>
                <div className="flex item-center  gap-5 bg-[#f3f8f6] rounded-lg p-3 hover:bg-secondary hover:text-white transition duration-500 activity-card cursor-pointer mt-5">
                  <GiMountainRoad
                    size={"2.5rem"}
                    className=" text-primary activity-icon transition duration-500"
                  />
                  <h3 className=" text-lg font-bold flex w-full items-center">
                    <a href="/tour" className=" w-full">
                      Mountain biking
                    </a>
                  </h3>
                </div>
                <div className="flex item-center  gap-5 bg-[#f3f8f6] rounded-lg p-3 hover:bg-secondary hover:text-white transition duration-500 activity-card cursor-pointer mt-5">
                  <GiCommercialAirplane
                    size={"2.5rem"}
                    className=" text-primary activity-icon transition duration-500"
                  />
                  <h3 className=" text-lg font-bold flex w-full items-center">
                    <a href="/tour" className=" w-full">
                      Discovery world
                    </a>
                  </h3>
                </div>
                <div className="flex item-center  gap-5 bg-[#f3f8f6] rounded-lg p-3 hover:bg-secondary hover:text-white transition duration-500 activity-card cursor-pointer mt-5">
                  <GiFishingBoat
                    size={"2.5rem"}
                    className=" text-primary activity-icon transition duration-500"
                  />
                  <h3 className=" text-lg font-bold flex w-full items-center">
                    <a href="/tour" className=" w-full">
                      Fishing & swimming
                    </a>
                  </h3>
                </div>
                <div className="flex item-center  gap-5 bg-[#f3f8f6] rounded-lg p-3 hover:bg-secondary hover:text-white transition duration-500 activity-card cursor-pointer mt-5">
                  <FaHiking
                    size={"2.2rem"}
                    className=" text-primary activity-icon transition duration-500"
                  />
                  <h3 className=" text-lg font-bold flex w-full items-center">
                    <a href="/tour" className=" w-full">
                      Mountain hiking
                    </a>
                  </h3>
                </div>
              </div>
              {/* second column */}
              <div className="flex-[30%] text-white flex flex-col gap-5">
                <div className=" w-28">
                  <img src="src/assets/images/camp.png" alt="" />
                </div>
                <h2 className=" text-[26px] font-bold leading-9 mb-1">
                  Real adventure & enjoy your dream tours
                </h2>
                <p className=" text-base text-[rgb(221,221,221)] leading-7 mb-3">
                  Sit amet consectetur velit integer tincidunt scelerisque
                  volutpat neque fermeny massa lacus.
                </p>
                <div className="">
                  <img src="src/assets/images/People/people.png" alt="" />
                </div>
                <div className="">
                  <div className="flex justify-between mb-3">
                    <h6 className=" text-lg font-bold">Satisfied Clients</h6>
                    <p className=" text-base font-medium text-[rgb(130,130,130)]">
                      89%
                    </p>
                  </div>
                  <div className="progress-bar-wrapper rounded bg-gray-200">
                    <div className="progress-bar-linear bg-primary rounded h-[12px] w-[89%]"></div>
                  </div>
                </div>
                <div className="">
                  <div className="flex justify-between mb-3">
                    <h6 className=" text-lg font-bold">Success Rate</h6>
                    <p className=" text-base font-medium text-[rgb(130,130,130)]">
                      86%
                    </p>
                  </div>
                  <div className="progress-bar-wrapper rounded bg-gray-200">
                    <div className="progress-bar-linear bg-primary rounded h-[12px] w-[86%]"></div>
                  </div>
                </div>
              </div>
              {/* third column */}
              <div className="flex-[30%]">
                <div className=" rounded-xl overflow-hidden h-full">
                  <img
                    src="src/assets/images/People/image-06.jpg"
                    className=" h-full object-cover"
                    alt="tent-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" rounded-xl overflow-hidden absolute md:-bottom-20 -bottom-36  left-0 right-0 md:mx-20 ">
          <Explore_more />
        </div>
      </div>
      {/* Feature Tours */}
      <div className="relative px-5 py-10 bg-white min-h-screen">
        <div className=" text-center pb-10 md:pt-32 pt-24">
          <div className=" mb-10">
            <span className=" px-5 py-4 bg-[#64ab4513] text-primary rounded-lg font-semibold">
              Featured tours
            </span>
          </div>
          <h2>
            <span className=" md:text-[48px] font-bold leading-tight">
              Amazing tour places around <br /> the world
            </span>
          </h2>
        </div>

        <div className=" relative bg-white z-10">
          <Splides brand={feature} view={4} center="" />
        </div>
        {/* Card Row */}
        <div className=" flex justify-between gap-10 flex-wrap mt-10 mb-20">
          <div className="card-column md:flex-[30%] shadow-md rounded-lg cursor-pointer relative ">
            <div className="flex items-center gap-10 py-5 px-7 relative z-10">
              <div className=" card-icon">
                <GiRabbit size={"3.5rem"} className="" />
              </div>
              <div className="">
                <h3 className=" text-xl font-bold leading-6 card-title">
                  Best Security
                </h3>
                <p className=" leading-7 card-para">
                  When nothing prevents our to we <br /> like best, every
                  pleasure to be.
                </p>
              </div>
            </div>
          </div>
          <div className="card-column md:flex-[30%] shadow-md rounded-lg cursor-pointer relative ">
            <div className="flex items-center gap-10 py-5 px-7 relative z-10">
              <div className=" card-icon">
                <BsFillRouterFill size={"3.5rem"} className="" />
              </div>
              <div className="">
                <h3 className=" text-xl font-bold leading-6 card-title">
                  Free Internet
                </h3>
                <p className=" leading-7 card-para">
                  When nothing prevents our to we <br /> like best, every
                  pleasure to be.
                </p>
              </div>
            </div>
          </div>
          <div className="card-column md:flex-[30%] shadow-md rounded-lg cursor-pointer relative ">
            <div className="flex items-center gap-10 py-5 px-7 relative z-10">
              <div className=" card-icon">
                <GiSolarPower size={"3.5rem"} className="" />
              </div>
              <div className="">
                <h3 className=" text-xl font-bold leading-6 card-title">
                  Solar Energy
                </h3>
                <p className=" leading-7 card-para">
                  When nothing prevents our to we <br /> like best, every
                  pleasure to be.
                </p>
              </div>
            </div>
          </div>
          <div className="card-column md:flex-[30%] shadow-md rounded-lg cursor-pointer relative ">
            <div className="flex items-center gap-10 py-5 px-7 relative z-10">
              <div className=" card-icon">
                <GiMountainRoad size={"3.5rem"} className="" />
              </div>
              <div className="">
                <h3 className=" text-xl font-bold leading-6 card-title">
                  Mountain Biking
                </h3>
                <p className=" leading-7 card-para">
                  When nothing prevents our to we <br /> like best, every
                  pleasure to be.
                </p>
              </div>
            </div>
          </div>
          <div className="card-column md:flex-[30%] shadow-md rounded-lg cursor-pointer relative ">
            <div className="flex items-center gap-10 py-5 px-7 relative z-10">
              <div className=" card-icon">
                <GiFishingPole size={"3.5rem"} className="" />
              </div>
              <div className="">
                <h3 className=" text-xl font-bold leading-6 card-title">
                  Swimming & Fishing
                </h3>
                <p className=" leading-7 card-para">
                  When nothing prevents our to we <br /> like best, every
                  pleasure to be.
                </p>
              </div>
            </div>
          </div>
          <div className="card-column md:flex-[30%] shadow-md rounded-lg cursor-pointer relative ">
            <div className="flex items-center gap-10 py-5 px-7 relative z-10">
              <div className=" card-icon">
                <CgGym size={"3.5rem"} className="" />
              </div>
              <div className="">
                <h3 className=" text-xl font-bold leading-6 card-title">
                  Gym & Yoga
                </h3>
                <p className=" leading-7 card-para">
                  When nothing prevents our to we <br /> like best, every
                  pleasure to be.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Tour_bgBlur check={"check availability"} />
      {/* Destination */}
      <div className="relative bg-white min-h-screen px-5">
        <div className=" text-center pb-10 md:pt-32 pt-24">
          <div className=" pb-4">
            <span className=" px-5 py-4 bg-[#64ab4513] text-primary rounded-lg font-semibold">
              Destination lists
            </span>
          </div>
          <h2>
            <span className=" md:text-[48px] font-bold leading-tight">
              Go Exotic Places
            </span>
          </h2>
        </div>
        {/* Destination Row */}
        <div className="flex flex-wrap md:flex-row flex-col gap-y-5 md:gap-y-0">
          <div className=" md:w-3/12 w-full md:p-5 destination-container relative">
            <div className=" uppercase text-xs font-bold px-7 py-3 bg-secondary absolute z-10 text-white rounded-lg right-10 top-10">
              3 tours
            </div>
            <div className=" absolute z-10 p-10 bottom-0">
              <h4 className=" text-primary text-xl font-normal leading-7">
                Travel to
              </h4>
              <h2 className=" text-white text-[26px] font-bold leading-9">
                Switzerland
              </h2>
            </div>
            <div className=" rounded-lg overflow-hidden relative  h-80 object-cover">
              <div className="absolute bg-[#00000021] w-full h-full z-10"></div>

              <img
                src="src/assets/images/Destination/image-08.jpg"
                className=" object-cover destination-img"
                alt=""
              />
            </div>
          </div>
          <div className=" md:w-6/12  md:p-5 destination-container relative">
            <div className=" uppercase text-xs font-bold px-7 py-3 bg-secondary absolute z-10 text-white rounded-lg right-10 top-10">
              3 tours
            </div>
            <div className=" absolute z-10 p-10 bottom-0">
              <h4 className=" text-primary text-xl font-normal leading-7">
                Travel to
              </h4>
              <h2 className=" text-white text-[26px] font-bold leading-9">
                United Kingdom
              </h2>
            </div>
            <div className=" rounded-lg overflow-hidden relative w-full h-80 object-cover">
              <div className="absolute bg-[#00000021] w-full h-full z-10"></div>

              <img
                src="src/assets/images/Destination/image-10.jpg"
                className=" w-full h-full object-cover destination-img"
                alt=""
              />
            </div>
          </div>
          <div className=" md:w-3/12 w-full md:p-5 destination-container relative">
            <div className=" uppercase text-xs font-bold px-7 py-3 bg-secondary absolute z-10 text-white rounded-lg right-10 top-10">
              3 tours
            </div>
            <div className=" absolute z-10 p-10 bottom-0">
              <h4 className=" text-primary text-xl font-normal leading-7">
                Travel to
              </h4>
              <h2 className=" text-white text-[26px] font-bold leading-9">
                France
              </h2>
            </div>
            <div className=" rounded-lg overflow-hidden relative h-80 object-cover">
              <div className="absolute bg-[#00000021] w-full h-full z-10"></div>

              <img
                src="src/assets/images/Destination/image-09.jpg"
                className=" object-cover destination-img"
                alt=""
              />
            </div>
          </div>
          <div className=" md:w-3/12 w-full md:p-5 destination-container relative">
            <div className=" uppercase text-xs font-bold px-7 py-3 bg-secondary absolute z-10 text-white rounded-lg right-10 top-10">
              1 tours
            </div>
            <div className=" absolute z-10 p-10 bottom-0">
              <h4 className=" text-primary text-xl font-normal leading-7">
                Travel to
              </h4>
              <h2 className=" text-white text-[26px] font-bold leading-9">
                Thailand
              </h2>
            </div>
            <div className=" rounded-lg overflow-hidden relative h-80 object-cover">
              <div className="absolute bg-[#00000021] w-full h-full z-10"></div>

              <img
                src="src/assets/images/Destination/image-11.jpg"
                className=" object-cover destination-img"
                alt=""
              />
            </div>
          </div>
          <div className=" md:w-3/12 w-full md:p-5 destination-container relative">
            <div className=" uppercase text-xs font-bold px-7 py-3 bg-secondary absolute z-10 text-white rounded-lg right-10 top-10">
              2 tours
            </div>
            <div className=" absolute z-10 p-10 bottom-0">
              <h4 className=" text-primary text-xl font-normal leading-7">
                Travel to
              </h4>
              <h2 className=" text-white text-[26px] font-bold leading-9">
                Singapore
              </h2>
            </div>
            <div className=" rounded-lg overflow-hidden relative h-80 object-cover">
              <div className="absolute bg-[#00000021] w-full h-full z-10"></div>

              <img
                src="src/assets/images/Destination/image-12.jpg"
                className=" object-cover destination-img"
                alt=""
              />
            </div>
          </div>
          <div className=" md:w-3/12 w-full md:p-5 destination-container relative">
            <div className=" uppercase text-xs font-bold px-7 py-3 bg-secondary absolute z-10 text-white rounded-lg right-10 top-10">
              2 tours
            </div>
            <div className=" absolute z-10 p-10 bottom-0">
              <h4 className=" text-primary text-xl font-normal leading-7">
                Travel to
              </h4>
              <h2 className=" text-white text-[26px] font-bold leading-9">
                Italy
              </h2>
            </div>
            <div className=" rounded-lg overflow-hidden relative  h-80 object-cover">
              <div className="absolute bg-[#00000021] w-full h-full z-10"></div>

              <img
                src="src/assets/images/Destination/image-13.jpg"
                className=" object-cover destination-img"
                alt=""
              />
            </div>
          </div>
          <div className=" md:w-3/12 w-full md:p-5 destination-container relative">
            <div className=" absolute z-20 p-12 bottom-5 flex flex-col justify-start  items-start gap-4">
              <span className=" uppercase text-xs font-bold px-5 py-3 bg-secondary  text-white rounded-lg ">
                up to 50% off
              </span>

              <h2 className=" text-white text-[26px] font-bold leading-9">
                Members are <br /> Saving up t 50%
              </h2>
              <a
                href="/about"
                className=" py-4 px-8 rounded-lg bg-white font-bold text-sm"
              >
                View Deals
              </a>
            </div>
            <div className=" rounded-lg overflow-hidden relative  h-80">
              <div className="absolute bg-[rgba(98,171,96,0.75)] w-full h-full z-10"></div>
              <img
                src="src/assets/images/Destination/tour-10.jpg"
                className=" h-full object-cover destination-img"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      {/* Achievements */}
      <div className="relative bg-white pt-32 px-32">
        <div className=" w-fit text-center mx-auto relative">
          <span className=" absolute -left-14 -top-5 text-white text-lg font-medium bg-secondary px-5 py-2 -rotate-[20deg]">
            Company Fact
          </span>
          <h1 className=" uppercase md:text-[86px] text-[68px] font-bold leading-[94.6px]">
            Achievements
          </h1>
        </div>

        <div className=" flex items-start justify-between gap-10 relative -bottom-16 z-10">
          <div className=" achievement-card flex flex-col justify-center flex-[20%] items-center shadow-lg py-10 rounded-xl">
            <div className=" achievement-icon p-10 bg-[rgba(100,171,69,0.12)] rounded-full">
              <FaHiking
                size={"5rem"}
                className=" text-primary  ac-icon relative z-10"
              />
            </div>
            <div className=" text-[45px] font-bold leading-7 mt-10 mb-5">
              <span>3500</span>
              <span>+</span>
            </div>
            <div className=" text-lg text-[rgb(130,130,130)] font-medium leading-5">
              Happy Traveler
            </div>
          </div>
          <div className=" achievement-card flex flex-col justify-center flex-[20%] items-center shadow-lg py-10 rounded-xl">
            <div className=" achievement-icon p-10 bg-[rgba(100,171,69,0.12)] rounded-full">
              <GiCampingTent
                size={"5rem"}
                className=" text-primary ac-icon relative z-10"
              />
            </div>
            <div className=" text-[45px] font-bold leading-7 mt-10 mb-5">
              <span>1650</span>
              <span>+</span>
            </div>
            <div className=" text-lg text-[rgb(130,130,130)] font-medium leading-5">
              Tours success
            </div>
          </div>
          <div className=" achievement-card flex flex-col justify-center flex-[20%] items-center shadow-lg py-10 rounded-xl">
            <div className=" achievement-icon p-12 bg-[rgba(100,171,69,0.12)] rounded-full">
              <BsFillChatLeftTextFill
                size={"4rem"}
                className=" text-primary ac-icon relative z-10"
              />
            </div>
            <div className=" text-[45px] font-bold leading-7 mt-10 mb-5">
              <span>99.5</span>
              <span>%</span>
            </div>
            <div className=" text-lg text-[rgb(130,130,130)] font-medium leading-5">
              Positive Reviews
            </div>
          </div>
          <div className=" achievement-card flex flex-col justify-center flex-[20%] items-center shadow-lg py-10 rounded-xl">
            <div className=" achievement-icon p-10 bg-[rgba(100,171,69,0.12)] rounded-full">
              <FaAward
                size={"5rem"}
                className=" text-primary ac-icon relative z-10"
              />
            </div>
            <div className=" text-[45px] font-bold leading-7 mt-10 mb-5">
              <span>62k</span>
              <span>+</span>
            </div>
            <div className=" text-lg text-[rgb(130,130,130)] font-medium leading-5">
              Awards Winning
            </div>
          </div>
        </div>
      </div>
      {/* Testimonials */}
      <div className="relative min-h-screen overflow-hidden">
        <div className="absolute h-screen bg-transparent w-full overflow-hidden">
          <div className="bg-shape-10"></div>
        </div>
        <div className=" md:px-10 px-5 flex flex-col md:flex-row md:items-center items-start justify-between relative  overflow-hidden z-50 pb-16 py-20">
          <div className=" md:flex-[50%] flex-1">
            <div className=" py-32">
              <div className=" mb-10">
                <span className=" px-5 py-4 bg-[#64ab4513] text-primary rounded-lg font-semibold">
                  Our testimonials
                </span>
              </div>
              <h2 className="mb-8">
                <span className=" md:text-[48px] font-bold leading-tight">
                  What they're talking <br /> about our policy
                </span>
              </h2>
              <p className=" text-[rgb(130,130,130)] leading-7 w-[70%] mb-10">
                Lorem Ipsum is simply dummy text of free available in market the
                printing and typesetting industry has been.
              </p>
              <a
                href="/tour"
                className=" bg-primary text-white rounded-md text-base font-bold leading-6 px-8 py-4 cursor-pointer z-10"
              >
                All Testimonials
              </a>
            </div>
          </div>
          <div className="md:flex-[50%] flex-1 overflow-hidden w-full">
            <Splides brand={service} controller={false} />
          </div>
        </div>
      </div>
      {/* Adventure Gallery */}
      <Adventure_gallery />
      <div className="h-[500px] relative bg-black"></div>
      {/* Lazy Loader */}
      <div className={`lazy-loader ${displayCheck ? "" : "hidden"}`}>
        <div
          className=" w-fit absolute right-48 p-5 top-10 cursor-pointer z-20"
          onClick={() => setDisplayCheck(false)}
        >
          <ImCross className="cursor-pointer" />
        </div>
        <Lazy_loader detailImage={tours} />
      </div>
    </>
  );
};

export default Home;