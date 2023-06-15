import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import React, { useEffect, useState } from "react";
import "@splidejs/react-splide/css";
import "./splides.css";

const Splides = ({ brand, view = 1, controller = true, center = "center" }) => {
  const [perPage, setPerPage] = useState(1);
  useEffect(() => {
    function updatePerPage() {
      if (window.innerWidth >= 992) {
        setPerPage(view);
      } else if (window.innerWidth >= 768 && window.innerWidth < 992) {
        setPerPage(view-1);
      } else if (window.innerWidth >= 481 && window.innerWidth < 768) {
        setPerPage(view-1);
      } else {
        setPerPage(1);
      }
    }
    updatePerPage();
    window.addEventListener("resize", updatePerPage);
    return () => window.removeEventListener("resize", updatePerPage);
  }, [perPage]);
  return (
    <>
      <Splide
        options={{
          type: "loop",
          // autoplay: true,
          speed: 1500,
          perPage: perPage,
          focus: center,
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
