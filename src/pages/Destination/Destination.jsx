import React from "react";

const Destination = () => {
  return (
    <div>
      <div className=" md:min-h-[250px] min-h-[200px] mb-20 relative flex items-center justify-center overflow-hidden z-50">
        <div className="landing-img"></div>
        <div className=" text-white absolute bottom-0 left-4">
          <h1 className=" text-[40px] md:text-[70px] font-[700] capitalize">
            Destination
          </h1>
        </div>
      </div>
      <div className="flex flex-wrap px-4 md:flex-row flex-col gap-y-5 md:gap-y-0">
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
  );
};

export default Destination;
