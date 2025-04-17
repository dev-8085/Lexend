import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaGlobe, FaChevronDown } from "react-icons/fa";
import Logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    // Full-width wrapper with bg color
    <div className="w-full bg-[#F6EEE9]">
      <div className="uc-navbar container mx-auto min-h-[4rem] flex justify-between items-center px-4 xl:justify-around">
        {/* Logo and Nav */}
        <div className="uc-navbar-left flex gap-16">
          <img src={Logo} alt="Company Logo" />

          <div className="uc-navbar-nav hidden lg:flex items-center gap-6 [&>*]:flex [&>*]:items-center [&>*]:gap-1 [&>*]:font-semibold text-base xl:gap-10">
            <Link to="/features">
              Features <IoIosArrowDown />
            </Link>
            <Link to="/products">
              Products <IoIosArrowDown />
            </Link>
            <Link to="/resources">
              Resources <IoIosArrowDown />
            </Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/more">More</Link>
          </div>
        </div>

        {/* Right Side */}
        <div className="uc-navbar-right lg:flex items-center gap-7">
          <RxHamburgerMenu size={23} className="font-bold lg:hidden" />
          <ul className="hidden lg:flex">
            <Link to="/demo" className="font-semibold text-base">
              Request a demo
            </Link>
          </ul>
          <button
            type="button"
            className="hidden lg:flex text-base font-semibold bg-[#12715B] text-white rounded-lg py-3 px-3 leading-none cursor-pointer hover:bg-opacity-90"
          >
            Start free trial
          </button>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <FaGlobe className="text-gray-800" />
              <button className="text-gray-800 hover:text-gray-600 flex items-center">
                En <FaChevronDown className="ml-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
