import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Logo and tagline */}
        <div className="flex flex-col items-center mb-6 text-center">
          <div className="mb-2">
            <img src={logo} alt="Amazing Web Design Logo" className="h-10 sm:h-12" />
          </div>
          <p className="text-gray-400 text-sm sm:text-base px-4">
            It's time to take your business online
          </p>
        </div>

        {/* Main links as buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4 mb-6 text-sm">
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
        <div className="text-xs text-gray-500 text-center mb-6 px-2 sm:px-4">
          <p className="flex flex-wrap justify-center max-w-5xl mx-auto gap-x-1 gap-y-2">
            {[
              "Mobile Application Development",
              "Develop a app",
              "App making cost in India",
              "App Developers",
              "Applications Development",
              "eCommerce Website Design",
              "eCommerce Website price",
              "App Creation Cost Android Development",
              "IOS Development",
              "Make App",
              "Shopify App Development",
              "Build eCommerce Website",
              "Create Clothing Store App",
              "Grocery App Development",
              "Website Development For Start-up",
              "Create Website Like Flipkart",
              "Create Website Like Amazon",
              "Create App Like Zomato",
              "eCommerce Website Solutions",
              "eCommerce Website Design Cost In India",
              "eCommerce Web Design",
              "WordPress Website Development",
              "Shopify App Development",
              "Magento App Developer",
              "Web Design Agency",
              "Web Developer Company",
              "Web Development Services",
              "Create Android App",
              "How Much It Cost To Make An App In India",
              "Make App",
              "Flutter App Development Cost",
              "Create Your Own App",
              "eCommerce Website Price",
              "Create eCommerce App",
              "Develop App Like Tinder",
              "Create App Like OLA",
              "Design App Like Uber",
              "Get App For My Start-up",
              "Get App Like Blinkit",
              "Create App For Pharmacy",
              "Shopify Shopping App",
              "Android App Making Cost In India",
              "Develop A App",
              "Create An Application"
            ].map((text, index) => (
              <span key={index} className="px-1 whitespace-nowrap">
                {text}
              </span>
            ))}
          </p>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm px-2">
          © 2025 AmazingWeb.Design. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
