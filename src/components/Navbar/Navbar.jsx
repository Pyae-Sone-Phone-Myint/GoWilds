import React, { useEffect, useState } from "react";
import {
	FaMapMarkerAlt,
	FaEnvelope,
	FaFacebook,
	FaInstagram,
	FaTwitter,
	FaPinterest,
	FaRegUserCircle,
} from "react-icons/fa";
import {

  BsPersonPlusFill,
  BsPerson,
  BsFillPersonPlusFill,
} from "react-icons/bs";
import { LuShoppingCart, LuSearch } from "react-icons/lu";
import "./navbar.css";
import { Link, NavLink } from "react-router-dom";
import MobileMenuSidebar from "./MobileMenuSiderbar";
import logo from "../../assets/images/logo.png";
const Navbar = () => {

  const [isSearchBoxVisible, setIsSearchBoxVisible] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  // ...
  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      // setIsTop(scrollY === 0);
    };

	const [isTop, setIsTop] = useState(true);
	const [isSearchBoxVisible, setIsSearchBoxVisible] = useState(false);
	const [isProfileOpen, setIsProfileOpen] = useState(false);
	// ...
	const toggleProfile = () => {
		setIsProfileOpen(!isProfileOpen);
	};

	useEffect(() => {
		const handleScroll = () => {
			const scrollY = window.scrollY || document.documentElement.scrollTop;
			setIsTop(scrollY === 0);
		};


		window.addEventListener("scroll", handleScroll);


    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (

    <div className=" shadow-md ">
      {isTop && (
        <div className=" bg-primary text-white navbar leading-7">

    <>
        <div className=" bg-primary text-white navbar leading-7 relative z-10">

          <div className="2xl:w-[68%] xl:w-[97%] w-[100%]  xl:mx-auto upper-nav">
            <div className=" flex lg:justify-between justify-end">
              <div className="lg:flex gap-5 px-4 w-1/2  hidden">
                <div className=" flex items-center  gap-3">
                  <FaMapMarkerAlt className="icon" />
                  <p className=" m-0 text-for-upper-nav">
                    250 Main Street, 2nd Floor, USA
                  </p>
                </div>
                <div className="flex items-center  gap-3">
                  <FaEnvelope className=" icon" />
                  <p className=" m-0 text-for-upper-nav">contact@example.com</p>
                </div>
              </div>
              <div className="flex gap-5 px-4 lg:w-1/2 justify-end py-3 md:py-0 mr-4 md:mr-0">
                <div className=" flex items-center  gap-5">
                  <Link>
                    <span className=" hover:text-secondary duration-300 text-for-upper-nav">
                      Booking Now
                    </span>
                  </Link>
                  <Link>
                    <span className=" hover:text-secondary duration-300 text-for-upper-nav">
                      About
                    </span>
                  </Link>
                  <Link to="/cart" className="navbar-cart-link">
                    <LuShoppingCart className="navbar-cart-icon text-[22px]" />
                    <span className="navbar-cart-badge">0</span>
                  </Link>
                </div>
                <div className="md:flex items-center bg-[#58993d] py-4 px-9 gap-6 ml-2 hidden">
                  <span>
                    <FaFacebook className=" icon" />
                  </span>
                  <span>
                    <FaTwitter className=" icon" />
                  </span>
                  <span>
                    <FaInstagram className=" icon" />
                  </span>
                  <span>
                    <FaPinterest className=" icon" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className=" bg-white   lower-nav leading-7"> 

      <div className=" bg-white   lower-nav leading-7 shadow-lg">
        <div className="2xl:w-[68%] xl:w-[97%] w-[100%]  xl:mx-auto">
          <nav className=" flex items-center">
            <div className="mx-3">
              <Link>
                <img src={logo} className="w-[150px] mx-3" alt="" />
              </Link>
            </div>
            <div className="flex justify-end w-full items-center  mr-5">
              <div className="lg:hidden block pr-8 py-6 text-[#82828A] text-[20px] ">
                <MobileMenuSidebar />
              </div>
              <div className=" lg:flex hidden gap-5 nav-text py-9 text-[#82828A] pr-5">
                <NavLink to={"/"}>
                  <span className=" nav-link-text">Home</span>
                </NavLink>
                <NavLink to={"/tours-page"}>
                  <span className=" nav-link-text">Tours Page</span>
                </NavLink>
                <NavLink to={"/destination"}>
                  <span className=" nav-link-text">Destinations</span>
                </NavLink>
                <div className="nav-dropdown relative">
                  <span className="nav-link-text pr-3 cursor-pointer">Pages</span>
                  <div className="nav-dropdown-content">
                    <NavLink to={"/about"}>
                      <span className="nav-link-text ">About</span>
                    </NavLink>
                    <NavLink to={"/team"}>
                      <span className="nav-link-text ">Team Grid</span>
                    </NavLink>
                    <NavLink to={"/team-carousel"}>
                      <span className="nav-link-text ">Team Carousel</span>
                    </NavLink>
                    <NavLink to={"/gallery"}>
                      <span className="nav-link-text ">Gallery</span>
                    </NavLink>

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	return (
		<>
			{isTop && (
				<div className=" bg-primary text-white navbar leading-7">
					<div className="2xl:w-[68%] xl:w-[97%] w-[100%]  xl:mx-auto upper-nav">
						<div className=" flex lg:justify-between justify-end">
							<div className="lg:flex gap-5 px-4 w-1/2  hidden">
								<div className=" flex items-center  gap-3">
									<FaMapMarkerAlt className="icon" />
									<p className=" m-0 text-for-upper-nav">
										250 Main Street, 2nd Floor, USA
									</p>
								</div>
								<div className="flex items-center  gap-3">
									<FaEnvelope className=" icon" />
									<p className=" m-0 text-for-upper-nav">contact@example.com</p>
								</div>
							</div>
							<div className="flex gap-5 px-4 lg:w-1/2 justify-end py-3 md:py-0 mr-4 md:mr-0">
								<div className=" flex items-center  gap-5">
									<Link>
										<span className=" hover:text-secondary duration-300 text-for-upper-nav">
											Booking Now
										</span>
									</Link>
									<Link>
										<span className=" hover:text-secondary duration-300 text-for-upper-nav">
											About
										</span>
									</Link>
									<Link to="/cart" className="navbar-cart-link">
										<LuShoppingCart className="navbar-cart-icon text-[22px]" />
										<span className="navbar-cart-badge">0</span>
									</Link>
								</div>
								<div className="md:flex items-center bg-[#58993d] py-4 px-9 gap-6 ml-2 hidden">
									<span>
										<FaFacebook className=" icon" />
									</span>
									<span>
										<FaTwitter className=" icon" />
									</span>
									<span>
										<FaInstagram className=" icon" />
									</span>
									<span>
										<FaPinterest className=" icon" />
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
			<div className=" bg-white   lower-nav leading-7">
				<div className="2xl:w-[68%] xl:w-[97%] w-[100%]  xl:mx-auto">
					<nav className=" flex items-center">
						<div className="mx-3">
							<Link>
								<img
									src="src\assets\images\logo.png"
									className="w-[150px] mx-3"
									alt=""
								/>
							</Link>
						</div>
						<div className="flex justify-end w-full items-center  mr-5">
							<div className="lg:hidden block pr-8 py-6 text-[#82828A] text-[20px] ">
								<MobileMenuSidebar />
							</div>
							<div className=" lg:flex hidden gap-5 nav-text py-9 text-[#82828A] pr-5">
								<NavLink to={"/"}>
									<span className=" nav-link-text">Home</span>
								</NavLink>
								<NavLink to={"/tours-page"}>
									<span className=" nav-link-text">Tours Page</span>
								</NavLink>
								<NavLink to={"/destination"}>
									<span className=" nav-link-text">Destinations</span>
								</NavLink>
								<div className="nav-dropdown">
									<span className="nav-link-text pr-3">Pages</span>
									<div className="nav-dropdown-content">
										<NavLink to={"/about"}>
											<span className="nav-link-text ">About</span>
										</NavLink>
										<NavLink to={"/team"}>
											<span className="nav-link-text ">Team</span>
										</NavLink>
										<NavLink to={"/gallery"}>
											<span className="nav-link-text ">Gallery</span>
										</NavLink>
									</div>
								</div>
								<div className=" nav-dropdown">
									<span className=" nav-link-text">News</span>
									<div className="nav-dropdown-content">
										<NavLink to={"/news01"}>
											<span className="nav-link-text ">News01</span>
										</NavLink>
										<NavLink to={"/news02"}>
											<span className="nav-link-text ">News02</span>
										</NavLink>
										<NavLink to={"/news03"}>
											<span className="nav-link-text ">News03</span>
										</NavLink>
									</div>

                  </div>
								<NavLink to={"/contact"}>
									<span className=" nav-link-text">Contacts</span>
								</NavLink>
							</div>

							<div className=" flex gap-5 text-[20px] items-center ">
								<div className="relative">
									<p
										className="search-icon  cursor-pointer"
										onClick={() => setIsSearchBoxVisible(!isSearchBoxVisible)}
									>
										<LuSearch />
									</p>
									{isSearchBoxVisible && (
										<div className="search-box">
											<div className="search-box-pointer"></div>
											<div className="flex items-center py-2 px-3 border m-4  text-[#82828A] text-base">
												<input
													type="text"
													className="w-[150px]"
													placeholder="Search..."
												/>
												<button>
													<LuSearch className="text-primary" />
												</button>
											</div>
										</div>
									)}
								</div>


                <span className="user-circle ">
                  {/* <FaRegUserCircle /> */}
                  <div className="relative">
                    <p
                      className="user-icon  cursor-pointer"
                      onClick={toggleProfile}
                    >
                      <FaRegUserCircle />
                    </p>
                    {isProfileOpen && (
                      <div className="profile-box">
                        <div className="profile-box-pointer"></div>
                        <div className=" py-5 px-4 flex flex-col gap-3 w-[220px] rounded text-[#82828A] text-base">
                          <span className=" profile-text    ">
                            <BsPerson /> Login
                          </span>
                          <span className="profile-text   ">
                            <BsFillPersonPlusFill /> Register
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </span>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );

								<span className="user-circle ">
									{/* <FaRegUserCircle /> */}
									<div className="relative">
										<p
											className="user-icon  cursor-pointer"
											onClick={toggleProfile}
										>
											<FaRegUserCircle />
										</p>
										{isProfileOpen && (
											<div className="profile-box">
												<div className="profile-box-pointer"></div>
												<div className=" py-5 px-4 flex flex-col gap-3 w-[220px] rounded text-[#82828A] text-base">
													<span className=" profile-text    ">
														<BsPerson /> Login
													</span>
													<span className="profile-text   ">
														<BsFillPersonPlusFill /> Register
													</span>
												</div>
											</div>
										)}
									</div>
								</span>
							</div>
						</div>
					</nav>
				</div>
			</div>
		</>
	);

};

export default Navbar;
