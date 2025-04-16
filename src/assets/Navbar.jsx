import React, { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="text-xl font-bold text-gray-800">YourLogo</div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
            <li className="hover:text-blue-500 transition-all duration-300 cursor-pointer">Home</li>
            <li className="hover:text-blue-500 transition-all duration-300 cursor-pointer">Shop</li>
            <li className="hover:text-blue-500 transition-all duration-300 cursor-pointer">Contact</li>
            <li className="hover:text-blue-500 transition-all duration-300 cursor-pointer">About</li>
          </ul>

          {/* Mobile Menu Toggle */}
          <div
            className="md:hidden cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className={`w-6 h-0.5 bg-gray-800 mb-1 transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-gray-800 mb-1 transition-all ${menuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-gray-800 transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden bg-white px-4 pt-2 pb-4 space-y-2 transition-all duration-300 ease-in-out ${
          menuOpen ? 'block' : 'hidden'
        }`}
      >
        <p className="hover:text-blue-500 transition-all">Home</p>
        <p className="hover:text-blue-500 transition-all">Shop</p>
        <p className="hover:text-blue-500 transition-all">Contact</p>
        <p className="hover:text-blue-500 transition-all">About</p>
      </div>
    </nav>
  );
};

export default Navbar;
