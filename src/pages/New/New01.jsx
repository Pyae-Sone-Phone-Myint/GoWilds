import React, { useState } from "react";
import "./News.css";
import { FaRegComments, FaUserCircle } from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

import News01Page1 from "./News01Page1";
import News01Page2 from "./News01Page2";

const New01 = ({ name, setName }) => {
	const [pagination, setPagination] = useState(1);
	return (
		<>
			<section className="">
				<div className=" md:min-h-[250px] bg-white min-h-[200px]  relative flex items-center justify-center overflow-hidden z-50">
					<div className="landing-img"></div>
					<div className=" text-white absolute bottom-20 left-20">
						<h1 className=" text-[20px]   text-white font-bold">
							News 01
						</h1>
						<div className=" text-white text-[16px] flex items-center">
							<h2>Home</h2>
							<span>/</span>
							<h2>News01</h2>
						</div>
					</div>
				</div>
			</section>
			<section className=" bg-gray-50">
				{pagination === 1 ? (
					<News01Page1 name={name} setName={setName} />
				) : (
					<News01Page2 name={name} setName={setName} />
				)}
			</section>
			<div className=" flex px-5 gap-5 mb-3">
				<button
					onClick={() => {
						setPagination(1);
					}}
					className={`border-2 hover:border-green-500 hover:text-green-500 hover:shadow-lg  border-gray-400  text-sm px-4 py-2 rounded ${
						pagination === 2 ? "flex" : "hidden"
					}`}
				>
					Previous
				</button>
				<button
					onClick={() => {
						setPagination(1);
					}}
					className={` border-2 hover:border-green-500 hover:text-green-500 hover:shadow-lg  px-4 border-gray-400  text-sm rounded ${
						pagination === 1 ? "border-green-500 text-green-500" : null
					}`}
				>
					1
				</button>
				<button
					onClick={() => {
						setPagination(2);
					}}
					className={` border-2 hover:border-green-500 hover:text-green-500 hover:shadow-lg  px-4 border-gray-400  text-sm rounded ${
						pagination === 2 ? "border-green-500 text-green-500" : null
					}`}
				>
					2
				</button>
				<button
					onClick={() => setPagination(2)}
					className={`border-2 hover:border-green-500 hover:text-green-500 hover:shadow-lg  border-gray-400  text-sm px-4 py-2 rounded ${
						pagination === 1 ? "flex" : "hidden"
					}`}
				>
					Next
				</button>
			</div>
		</>
	);
};

export default New01;
