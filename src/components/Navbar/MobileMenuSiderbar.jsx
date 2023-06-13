import React, { useState } from "react";
import { FaBars, FaRegTimesCircle } from "react-icons/fa";
import { FiPlus, FiMinus } from "react-icons/fi";
import "./navbar.css";

const MobileMenuSidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  return (
    <div className="mobile-menu-wrapper">
      <div
        className={`mobile-menu-overlay ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      />
      <div className={`mobile-menu-sidebar ${isMenuOpen ? "open" : ""}`}>
        <div className="mobile-menu-header bg-[#f3f8f6]  ">
          <img
            src="src\assets\images\logo.png"
            className="w-[110px] px-1 "
            alt=""
          />
          <button className="mobile-menu-close" onClick={toggleMenu}>
            <FaRegTimesCircle className="mx-auto" />
          </button>
        </div>
        <ul className="mobile-menu-links px-[25px] pt-[18px] text-[#1C231F]">
          <li>
            <a className="py-3" href="#">
              Home
            </a>
          </li>
          <li>
            <a href="#">Tours page</a>
          </li>
          <li>
            <a href="#">Destination</a>
          </li>
          <li>
            <div
              className="mobile-menu-submenu-header flex items-center justify-between"
              onClick={toggleSubMenu}
            >
              <span>Pages</span>
              {isSubMenuOpen ? (
                <FiMinus className=" cursor-pointer" />
              ) : (
                <FiPlus className=" cursor-pointer" />
              )}
            </div>
            {isSubMenuOpen && (
              <ul
                className={`mobile-menu-submenu-links w-[80%] ml-[20px] mt-3 open  flex flex-col gap-2 ${
                  isSubMenuOpen ? "open" : ""
                }`}
              >
                <span>
                  <a href="/about">About</a>
                </span>
                <span>
                  <a href="/team">Team Grid</a>
                </span>
                <span>
                  <a href="/team-carousel">Team Carousel</a>
                </span>
                <span>
                  <a href="/gallery">Gallery</a>
                </span>
              </ul>
            )}
          </li>
          <li>
            <a href="#">News</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      <button className="mobile-menu-toggle" onClick={toggleMenu}>
        <FaBars />
      </button>
    </div>
  );
};

export default MobileMenuSidebar;
