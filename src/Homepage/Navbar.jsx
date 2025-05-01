import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import CallbackForm from "../Homepage/Callback";

const Navbar = () => {
  const [showCallback, setShowCallback] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowNavbar(currentScrollY < lastScrollY || currentScrollY <= 0);
      setLastScrollY(currentScrollY);
      setIsScrolled(currentScrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <div
        className={`
          w-full pb-4
          transition-transform duration-300
          ${showNavbar ? "translate-y-0" : "-translate-y-full"}
          fixed top-0 left-0 z-50
          ${isScrolled ? "bg-white shadow-md" : "bg-[#F6EEE9]"}
        `}
      >
        <div className="uc-navbar container mx-auto min-h-[4rem] flex justify-between items-center px-4 sm:px-6 md:px-10 lg:px-12 pt-5">
          {/* Left Section - Logo */}
          <div className="flex items-center">
            <img 
              src={Logo} 
              alt="Amazing Web.Design Logo" 
              className="w-32 sm:w-40 md:w-48 h-auto object-contain" 
            />
          </div>

          {/* Right Section - CTA buttons */}
          <div className="flex items-center gap-4 sm:gap-6">
            <Link 
              to="/demo" 
              className="font-semibold text-sm md:text-base hover:underline"
            >
              Request a demo
            </Link>
            
            <button
              type="button"
              onClick={() => setShowCallback(!showCallback)}
              className="text-sm md:text-base font-semibold bg-[#12715B] text-white rounded-lg py-2 md:py-3 px-4 hover:bg-opacity-90"
            >
              Start free trial
            </button>
          </div>
        </div>
      </div>

      {/* Callback form */}
      {showCallback && (
        <div className="fixed top-20 left-0 w-full z-40 flex justify-center items-start pt-16 pb-4 px-4 bg-black bg-opacity-50 min-h-screen">
          <div className="relative max-w-md w-full">
            <button 
              onClick={() => setShowCallback(false)}
              className="absolute -top-3 -right-3 bg-white rounded-full p-1 shadow-md"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <CallbackForm />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
