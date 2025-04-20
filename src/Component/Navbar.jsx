import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaGlobe, FaChevronDown } from "react-icons/fa";
import Logo from "../assets/logo.svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Track scroll direction
      setShowNavbar(currentScrollY < lastScrollY || currentScrollY <= 0);
      setLastScrollY(currentScrollY);

      // Detect if page has been scrolled at all
      setIsScrolled(currentScrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`
        w-full pb-4
        transition-transform duration-300
        ${showNavbar ? "translate-y-0" : "-translate-y-full"}
        fixed top-0 left-0 z-50
        ${isScrolled ? "bg-white shadow-md" : "bg-[#F6EEE9]"}
      `}
    >
      <div className="uc-navbar container mx-auto min-h-[4rem] flex justify-between items-center px-4 sm:px-6 md:px-10 lg:px-12 xl:justify-around pt-5 relative">
        {/* Left Section */}
        <div className="uc-navbar-left flex gap-6 sm:gap-10 md:gap-16 items-center">
          <img src={Logo} alt="Company Logo" className="w-24 sm:w-28 md:w-32 h-auto object-contain" />

          {/* Desktop nav */}
          <div className="uc-navbar-nav hidden lg:flex items-center gap-2 sm:gap-4 md:gap-6 xl:gap-11 [&>*]:flex [&>*]:items-center [&>*]:font-semibold text-sm md:text-base">
            <Link to="/" className="font-light">Features</Link>
            <Link to="/">Pricing</Link>
            <Link to="/">Insights</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/more">
              More <IoIosArrowDown />
            </Link>
          </div>
        </div>

        {/* Right Section */}
        <div className="uc-navbar-right flex items-center gap-3 sm:gap-4 lg:gap-7">
          {/* Mobile Hamburger */}
          <RxHamburgerMenu
            size={23}
            className="font-bold lg:hidden cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          />

          {/* Desktop CTA */}
          <ul className="hidden lg:flex">
            <Link to="/demo" className="font-semibold text-sm md:text-base">
              Request a demo
            </Link>
          </ul>

          <button
            type="button"
            className="hidden lg:flex text-sm md:text-base font-semibold bg-[#12715B] text-white rounded-lg py-2 md:py-3 px-3 leading-none cursor-pointer hover:bg-opacity-90"
          >
            Start free trial
          </button>

          {/* Desktop language selector */}
          <div className="hidden sm:flex items-center space-x-2">
            <FaGlobe className="text-gray-800" />
            <button className="flex items-center text-sm md:text-base">
              En <FaChevronDown className="ml-1" />
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-white px-6 py-4 flex flex-col gap-4 lg:hidden z-50">
            <Link to="/" onClick={() => setMenuOpen(false)}>Features</Link>
            <Link to="/" onClick={() => setMenuOpen(false)}>Pricing</Link>
            <Link to="/" onClick={() => setMenuOpen(false)}>Insights</Link>
            <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
            <Link to="/more" onClick={() => setMenuOpen(false)}>More</Link>
            <Link to="/demo" onClick={() => setMenuOpen(false)} className="font-semibold">Request a demo</Link>
            <button
              type="button"
              className="text-sm sm:text-base font-semibold bg-[#12715B] text-white rounded-lg py-2 px-4"
              onClick={() => setMenuOpen(false)}
            >
              Start free trial
            </button>
            {/* Mobile language selector */}
            <div className="flex items-center space-x-2 mt-4">
              <FaGlobe className="text-gray-800" />
              <button className="flex items-center text-sm sm:text-base">
                En <FaChevronDown className="ml-1" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
