import React, { useCallback, useEffect, useMemo, useState } from "react";

import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";

import { HiOutlineLocationMarker } from "react-icons/hi";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { BiMinus, BiPlus } from "react-icons/bi";
import {BsFillCalendarWeekFill, BsFillPersonFill} from "react-icons/bs"
import { RiDeviceRecoverFill } from "react-icons/ri";

const DropDown = ({sort,setSort}) => {
  const [location, setLocation] = useState("Location");
  const [booking, setBooking] = useState("Booking Type");
  const [arrowLocation, setArrowLocation] = useState(true);
  const [arrowBooking, setArrowBooking] = useState(true);
  const [date, setDate] = useState("Date from");
  const [children, setChildren] = useState(0);
  const [youth, setYouth] = useState(0);
  const [adult, setAdult] = useState(0);

  const button = document.querySelector(".tour-click-btn");
  const dropdown = document.querySelector(".dropdown");
  const sortBy = document.querySelector(".sortBy");

  document.addEventListener("click", (event) => {
    if (!button.contains(event.target) && !dropdown.contains(event.target) ) {
      dropdown.classList.add("hidden");
      setArrowLocation(true);
      setArrowBooking(true);
    }
  });

  return (
    <>
      <div className="w-full lg:w-1/5 relative">
        <Menu placement="bottom">
          <MenuHandler>
            <button className=" flex w-full justify-between tour-click-btn py-2 border-b-2 border-gray-300">
              <div
                className=" w-full flex gap-2 items-center"
                onClick={() => {
                  setArrowLocation(!arrowLocation);
                }}
              >
                <div>
                  <HiOutlineLocationMarker
                    size={"2.5rem"}
                    className=" "
                    style={{ color: "#63AB45" }}
                  />
                </div>
                <div className=" text-start  text-gray-600">
                  <p className=" m-0">Destinations</p>
                  <div className="font-bold text-black ">{location}</div>
                </div>
              </div>
              <div className=" " style={{ color: "#63AB45" }}>
                <MdOutlineKeyboardArrowDown
                  size={"1.5rem"}
                  className={`${arrowLocation ? "flex" : "hidden"}`}
                />
                <MdOutlineKeyboardArrowUp
                  size={"1.5rem"}
                  className={`${arrowLocation ? "hidden" : "flex"}`}
                />
              </div>
            </button>
          </MenuHandler>
          <MenuList
            className=" w-[93%]  lg:w-[18%] dropdown rounded-t-none border h-[280px]"
            onClick={() => {
              setArrow(!arrow);
            }}
          >
            <div className=" text-[16px] text-black font-thin">
              - Locations -
            </div>
            <div className=" w-full">
              <h1 className=" text-[15px] text-black mt-2 font-semibold select-none">
                Asia
              </h1>
              <ul className=" w-full ps-2 text-gray-700">
                <li className="w-full ps-2 rounded hover:bg-gray-300 hover:text-black">
                  <button
                    onClick={() => {
                      setLocation("Japan");
                    }}
                    className="text-start w-full py-2 text-[15px]"
                  >
                    Japan
                  </button>
                </li>
                <li className="w-full ps-2 rounded hover:bg-gray-300 hover:text-black">
                  <button
                    onClick={() => {
                      setLocation("Singapore");
                    }}
                    className="text-start w-full py-2 text-[15px]"
                  >
                    Singapore
                  </button>
                </li>
                <li className="w-full  ps-2 rounded hover:bg-gray-300 hover:text-black">
                  <button
                    onClick={() => {
                      setLocation("ThaiLand");
                    }}
                    className="text-start w-full py-2 text-[15px]"
                  >
                    ThaiLand
                  </button>
                </li>
              </ul>
            </div>
            <div className=" w-full">
              <h1 className=" text-[15px] text-black mt-2 font-semibold select-none">
                Europe
              </h1>
              <ul className=" w-full ps-2 text-gray-700">
                <li className="w-full ps-2 rounded hover:bg-gray-300 hover:text-black">
                  <button
                    onClick={() => {
                      setLocation("France");
                    }}
                    className="text-start py-2  w-full text-[15px]"
                  >
                    France
                  </button>
                </li>
                <li className="w-full ps-2 rounded hover:bg-gray-300 hover:text-black">
                  <button
                    onClick={() => {
                      setLocation("Italy");
                    }}
                    className="text-start py-2 w-full text-[15px]"
                  >
                    Italy
                  </button>
                </li>
                <li className="w-full ps-2 rounded hover:bg-gray-300 hover:text-black">
                  <button
                    onClick={() => {
                      setLocation("United Kingdom");
                    }}
                    className="text-start py-2 w-full text-[15px]"
                  >
                    United Kingdom
                  </button>
                </li>
              </ul>
            </div>
          </MenuList>
        </Menu>
      </div>
      <div className="w-full lg:w-1/5 relative">
        <Menu placement="bottom">
          <MenuHandler>
            <button className=" flex w-full justify-between tour-click-btn py-2 border-b-2 border-gray-300">
              <div
                className=" w-full flex gap-2 items-center"
                onClick={() => {
                  setArrowBooking(!arrowBooking);
                }}
              >
                <div>
                  <RiDeviceRecoverFill
                    size={"2.5rem"}
                    className=" text-[#63AB45]"
                    style={{ color: "#63AB45" }}
                  />
                </div>
                <div className=" text-start  text-gray-600">
                  <p className=" m-0">Activity</p>
                  <div className="font-bold text-black ">{booking}</div>
                </div>
              </div>
              <div className=" " style={{ color: "#63AB45" }}>
                <MdOutlineKeyboardArrowDown
                  size={"1.5rem"}
                  className={`${arrowBooking ? "flex" : "hidden"}`}
                />
                <MdOutlineKeyboardArrowUp
                  size={"1.5rem"}
                  className={`${arrowBooking ? "hidden" : "flex"}`}
                />
              </div>
            </button>
          </MenuHandler>
          <MenuList
            className=" w-[93%]  lg:w-[18%] dropdown rounded-t-none border"
            onClick={() => {
              setArrowBooking(!booking);
            }}
          >
            <div
              className={` text-[16px] mb-2  font-thin ${
                booking === "Booking Type" ? "text-black" : "text-gray-600"
              }`}
            >
              - Booking Type -
            </div>
            <div className=" w-full">
              <ul className=" w-full  text-gray-700">
                <li
                  className={`w-full ps-2 rounded hover:bg-gray-100 hover:text-black ${
                    booking === "Adventure"
                      ? "text-black bg-gray-300"
                      : "text-gray-600"
                  }`}
                >
                  <button
                    onClick={() => {
                      setBooking("Adventure");
                    }}
                    className="text-start w-full py-2 text-[15px]"
                  >
                    Adventure
                  </button>
                </li>
                <li
                  className={`w-full ps-2 rounded hover:bg-gray-100 hover:text-black ${
                    booking === "Beache"
                      ? "text-black bg-gray-300"
                      : "text-gray-600"
                  }`}
                >
                  <button
                    onClick={() => {
                      setBooking("Beache");
                    }}
                    className="text-start w-full py-2 text-[15px]"
                  >
                    Beache
                  </button>
                </li>
                <li
                  className={`w-full ps-2 rounded hover:bg-gray-100 hover:text-black ${
                    booking === "Discovery"
                      ? "text-black bg-gray-300"
                      : "text-gray-600"
                  }`}
                >
                  <button
                    onClick={() => {
                      setBooking("Discovery");
                    }}
                    className="text-start w-full py-2 text-[15px]"
                  >
                    Discovery
                  </button>
                </li>
                <li
                  className={`w-full ps-2 rounded hover:bg-gray-100 hover:text-black ${
                    booking === "Mountain Biking"
                      ? "text-black bg-gray-300"
                      : "text-gray-600"
                  }`}
                >
                  <button
                    onClick={() => {
                      setBooking("Mountain Biking");
                    }}
                    className="text-start w-full py-2 text-[15px]"
                  >
                    Mountain Biking
                  </button>
                </li>
                <li
                  className={`w-full ps-2 rounded hover:bg-gray-100 hover:text-black ${
                    booking === "Tent Camping"
                      ? "text-black bg-gray-300"
                      : "text-gray-600"
                  }`}
                >
                  <button
                    onClick={() => {
                      setBooking("Tent Camping");
                    }}
                    className="text-start w-full py-2 text-[15px]"
                  >
                    Tent Camping
                  </button>
                </li>
              </ul>
            </div>
          </MenuList>
        </Menu>
      </div>
      <div className="w-full lg:w-1/5 relative">
        <Menu placement="bottom">
          <MenuHandler>
            <button className=" flex w-full justify-between  tour-click-btn mb-0 py-2 border-b-2 border-gray-300">
              <div className=" w-full flex gap-3 items-center">
                <div>
                  <BsFillCalendarWeekFill
                    size={"2.2rem"}
                    className=" text-[#63AB45]"
                    style={{ color: "#63AB45" }}
                  />
                </div>
                <div className=" text-start  text-gray-600">
                  <p className=" m-0">Date form</p>
                  <input type="date" className="" />
                </div>
              </div>
            </button>
          </MenuHandler>
        </Menu>
      </div>
      <div className="w-full lg:w-1/5 relative">
        <Menu placement="bottom">
          <MenuHandler>
            <button className=" flex w-full items-center gap-3 py-2 border-b-2 border-gray-300">
              <BsFillPersonFill size={"3rem"} className="text-[#7bbc60]" />
              <div className=" text-start  text-gray-600">
                <p className=" m-0">Guests</p>
                <h4 className=" text-lg font-bold text-black">
                  {children + youth + adult}
                </h4>
              </div>
            </button>
          </MenuHandler>
          <MenuList className=" w-[93%]  lg:w-[18%]  rounded-t-none border h-[240px]">
            <ul className=" w-full text-gray-700 px-2 mb-5">
              <li className="border-b border-gray-400 w-full text-lg flex justify-between py-2">
                <div className=" flex gap-4">
                  <div>{children}</div>
                  <h2>Children</h2>
                </div>
                <div className=" flex gap-3">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setChildren(children === 0 ? 0 : children - 1);
                    }}
                    className=" bg-orange-400 px-1 rounded-lg shadow-lg"
                  >
                    <BiMinus color="white" className=" font-bold" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setChildren(children + 1);
                    }}
                    className=" bg-orange-400 px-1 rounded-lg shadow-lg"
                  >
                    <BiPlus color="white" className=" font-bold" />
                  </button>
                </div>
              </li>
              <li className="border-b w-full border-gray-400 text-lg flex justify-between py-3">
                <div className=" flex gap-4">
                  <div>{youth}</div>
                  <h2>Youth</h2>
                </div>
                <div className=" flex gap-3">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setYouth(youth === 0 ? 0 : youth - 1);
                    }}
                    className=" bg-orange-400 px-1 rounded-lg shadow-lg"
                  >
                    <BiMinus color="white" className=" font-bold" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setYouth(youth + 1);
                    }}
                    className=" bg-orange-400 px-1 rounded-lg shadow-lg"
                  >
                    <BiPlus color="white" className=" font-bold" />
                  </button>
                </div>
              </li>
              <li className="border-b w-full border-gray-400 text-lg flex justify-between py-3">
                <div className=" flex gap-4">
                  <div>{adult}</div>
                  <h2>Adult</h2>
                </div>
                <div className=" flex gap-3">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setAdult(adult === 0 ? 0 : adult - 1);
                    }}
                    className=" bg-orange-400 px-1 rounded-lg shadow-lg"
                  >
                    <BiMinus color="white" className=" font-bold" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setAdult(adult + 1);
                    }}
                    className=" bg-orange-400 px-1 rounded-lg shadow-lg"
                  >
                    <BiPlus color="white" className=" font-bold" />
                  </button>
                </div>
              </li>
            </ul>
            <div className=" text-center">
              <button className=" bg-[#72B357] text-white px-6 py-2 rounded-md shadow-lg">
                Apply
              </button>
            </div>
          </MenuList>
        </Menu>
      </div>
      <div className="w-full flex items-center gap-5 lg:w-1/5 ">
        <div className=" items-center hidden  lg:flex">
          <button onClick={() => setSort(!sort)}>
            <img
              src="src/assets/images/filter.png"
              className=" w-[30px]"
              alt=""
            />
          </button>
        </div>
        <button className=" text-white py-3 rounded-lg shadow-lg hover:bg-[#7bbc60] font-bold w-full lg:w-[180px] bg-[#72b357]">
          Search
        </button>
      </div>
    </>
  );
};
export default DropDown;
