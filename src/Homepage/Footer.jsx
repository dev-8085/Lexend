import React from 'react';
import logo from '../assets/logo.png'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Logo and tagline */}
        <div className="flex flex-col items-center mb-6">
          <div className="mb-2">
            <img 
              src={logo}
              alt="Amazing Web Design Logo" 
              className="h-10"
            />
          </div>
          <p className="text-gray-400 text-sm">It's time to take your business online</p>
        </div>

       {/* Main links as buttons */}
    <div className="flex justify-center space-x-4 mb-6 text-sm">
  <Link to="/terms-of-service">
    <button className="text-gray-400 hover:text-white">Terms of Service</button>
  </Link>
  <Link to="/terms-conditions">
    <button className="text-gray-400 hover:text-white">Terms & Conditions</button>
  </Link>
  <Link to="/privacy-policy">
    <button className="text-gray-400 hover:text-white">Privacy Policy</button>
  </Link>
  <Link to="/refund-cancellation">
    <button className="text-gray-400 hover:text-white">Refund & Cancellation</button>
  </Link>
</div>
        {/* Services links */}
        <div className="text-xs text-gray-500 text-center mb-6 px-4">
          <p className="flex flex-wrap justify-center">
            <span className="px-1">Mobile Application Development</span> |
            <span className="px-1">Develop a app</span> |
            <span className="px-1">App making cost in India</span> |
            <span className="px-1">App Developers</span> |
            <span className="px-1">Applications Development</span> |
            <span className="px-1">eCommerce Website Design</span> |
            <span className="px-1">eCommerce Website price</span> |
            <span className="px-1">App Creation Cost Android Development</span> |
            <span className="px-1">IOS Development</span> |
            <span className="px-1">Make App</span> |
            <span className="px-1">Shopify App Development</span> |
            <span className="px-1">Build eCommerce Website</span> |
            <span className="px-1">Create Clothing Store App</span> |
            <span className="px-1">Grocery App Development</span> |
            <span className="px-1">Website Development For Start-up</span> |
            <span className="px-1">Create Website Like Flipkart</span> |
            <span className="px-1">Create Website Like Amazon</span> |
            <span className="px-1">Create App Like Zomato</span> |
            <span className="px-1">eCommerce Website Solutions</span> |
            <span className="px-1">eCommerce Website Design Cost In India</span> |
            <span className="px-1">eCommerce Web Design</span> |
            <span className="px-1">WordPress Website Development</span> |
            <span className="px-1">Shopify App Development</span> |
            <span className="px-1">Magento App Developer</span> |
            <span className="px-1">Web Design Agency</span> |
            <span className="px-1">Web Developer Company</span> |
            <span className="px-1">Web Development Services</span> |
            <span className="px-1">Create Android App</span> |
            <span className="px-1">How Much It Cost To Make An App In India</span> |
            <span className="px-1">Make App</span> |
            <span className="px-1">Flutter App Development Cost</span> |
            <span className="px-1">Create Your Own App</span> |
            <span className="px-1">eCommerce Website Price</span> |
            <span className="px-1">Create eCommerce App</span> |
            <span className="px-1">Develop App Like Tinder</span> |
            <span className="px-1">Create App Like OLA</span> |
            <span className="px-1">Design App Like Uber</span> |
            <span className="px-1">Get App For My Start-up</span> |
            <span className="px-1">Get App Like Blinkit</span> |
            <span className="px-1">Create App For Pharmacy</span> |
            <span className="px-1">Shopify Shopping App</span> |
            <span className="px-1">Android App Making Cost In India</span> |
            <span className="px-1">Develop A App</span> |
            <span className="px-1">Create An Application</span>
          </p>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm">
          © 2025 AmazingWeb.Design. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;