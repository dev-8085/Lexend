import React from 'react';
import { Linkedin, Facebook, Twitter, Instagram, Youtube, Globe } from 'lucide-react';
import logo from '../assets/logo-mark.svg';
import appstor from '../assets/appstore.svg';
import playstore from '../assets/playstore.svg';

const Footer = () => {
  return (
    <footer className="bg-white pt-10">
      <div className="max-w-7xl mx-auto px-5">
        {/* Divider */}
        <hr className="border-gray-200 mb-30" />

        {/* Top Section */}
        <div className="flex flex-col md:flex-row gap-16 pb-12">
          {/* Left Side */}
          <div className="md:w-1/3">
            <img src={logo} alt="Logo" className="mb-4" />
            <p className="text-gray-700 text-base leading-relaxed mb-6">
              This powerfull tool eliminates the need to leave Salesforce to get things done as I can create a custom proposal with dynamic pricing tables.
            </p>
            <div className="flex space-x-3">
              <img src={playstore} alt="Play Store" className="h-10" />
              <img src={appstor} alt="App Store" className="h-10" />
            </div>
          </div>

          {/* Right Side - Links */}
          <div className="md:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-10">
            {/* Column 1 */}
            <div>
              <h3 className="font-semibold text-base text-black mb-1">About</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="font-semibold text-base text-black mb-1"><a href="#">Pricing</a></li>
                <li className="font-semibold text-base text-black mb-1"><a href="#">Features</a></li>
                <li className="font-semibold text-base text-black mb-1"><a href="#">Integrations</a></li>
                <li className="font-semibold text-base text-black mb-1"><a href="#">Career</a></li>
                <li className="font-semibold text-base text-black mb-1"><a href="#">Contact</a></li>
                <li className="font-semibold text-base text-black mb-1"><a href="#">Contact v2</a></li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h3 className="font-semibold text-base text-black mb-1">Shop</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="font-semibold text-base text-black mb-1"><a href="#">With sidebar</a></li>
                <li className="font-semibold text-base text-black mb-1"><a href="#">Product detail</a></li>
                <li className="font-semibold text-base text-black mb-1"><a href="#">Product detail v2</a></li>
                <li className="font-semibold text-base text-black mb-1"><a href="#">Cart</a></li>
                <li className="font-semibold text-base text-black mb-1"><a href="#">Checkout</a></li>
                <li className="font-semibold text-base text-black mb-1"><a href="#">Order confirmation</a></li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h3 className="font-semibold text-base text-black mb-1">Request a demo</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="font-semibold text-base text-black mb-1"><a href="#">Sign in</a></li>
                <li className="font-semibold text-base text-black mb-1"><a href="#">Sign in v2</a></li>
                <li className="font-semibold text-base text-black mb-1"><a href="#">Sign up</a></li>
                <li className="font-semibold text-base text-black mb-1"><a href="#">Sign up v2</a></li>
                <li className="font-semibold text-base text-black mb-1"><a href="#">Reset password</a></li>
                <li className="font-semibold text-base text-black mb-1"><a href="#">Reset password v2</a></li>
              </ul>
            </div>

            {/* Column 4 */}
            <div>
              <h3 className="font-semibold text-base text-black mb-1">Blog</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="font-semibold text-base text-black mb-1"><a href="#">Blog detail</a></li>
                <li className="font-semibold text-base text-black mb-1"><a href="#">FAQ</a></li>
                <li className="font-semibold text-base text-black mb-1"><a href="#">404</a></li>
                <li className="font-semibold text-base text-black mb-1"><a href="#">Coming Soon</a></li>
                <li className="font-semibold text-base text-black mb-1"><a href="#">Terms of service</a></li>
                <li className="font-semibold text-base text-black mb-1"><a href="#">Privacy policy</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-200 my-6" />

        <div className="max-w-7xl mx-auto px-5">
        <div className="flex flex-row justify-between items-center">
          {/* Left - Copyright text */}
          <div className='py-10'>
            <p className="text-gray-400 text-large ">Lexend © 2025, All rights reserved.</p>
            <a href="#" className="text-black-900 text-large ">Privacy notice</a>
            <a href="#" className="text-gray-900 text-large px-4">Legal</a>
            <a href="#" className="text-gray-900 text-large px-2">Cookie settings</a>
          </div>
          
          

          {/* Right - Social Media Icons */}
          <div className="flex items-center space-x-4">
            <a href="#" aria-label="LinkedIn">
              <Linkedin size={20} className="text-gray-800" />
            </a>
            <a href="#" aria-label="Facebook">
              <Facebook size={20} className="text-gray-800" />
            </a>
            <a href="#" aria-label="Twitter">
              <Twitter size={20} className="text-gray-800" />
            </a>
            <a href="#" aria-label="Instagram">
              <Instagram size={20} className="text-gray-800" />
            </a>
            <a href="#" aria-label="YouTube">
              <Youtube size={20} className="text-gray-800" />
            </a>
            <div className="border-l border-gray-300 h-6 mx-2"></div>
            <div className="flex items-center space-x-1 cursor-pointer">
              <Globe size={16} className="text-gray-800" />
              <span className="text-gray-800 font-medium">English</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-800">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>
          </div>
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
