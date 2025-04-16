// navbar.jsx
import React from 'react';
import { FaPlus, FaChevronDown, FaGlobe } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-red-1 py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="bg-green-700 p-2 rounded-full">
              <FaPlus className="text-white" />
            </div>
            <span className="font-semibold text-lg">lexend</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-800 hover:text-gray-600">Features</a>
            <a href="#" className="text-gray-800 hover:text-gray-600">Pricing</a>
            <a href="#" className="text-gray-800 hover:text-gray-600">Insights</a>
            <a href="#" className="text-gray-800 hover:text-gray-600">About</a>
            <a href="#" className="text-gray-800 hover:text-gray-600">Contact</a>
            <div className="relative">
              <button className="text-gray-800 hover:text-gray-600 flex items-center">
                More <FaChevronDown className="ml-1" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" className="text-gray-800 hover:text-gray-600">Request a demo</a>
          <a href="#" className="text-gray-800 hover:text-gray-600">Log in</a>
          <a href="#" className="bg-green-700 text-white px-4 py-2 rounded-full hover:bg-green-600">Start free trial</a>
          <div className="flex items-center space-x-2">
            <FaGlobe className="text-gray-800" />
            <button className="text-gray-800 hover:text-gray-600 flex items-center">
              En <FaChevronDown className="ml-1" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
