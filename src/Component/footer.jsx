import React from 'react';
import { Linkedin, Facebook, Twitter, Instagram, Youtube, Globe } from 'lucide-react';
import logo from '../assets/logo-mark.svg'
import appstor from '../assets/appstore.svg'
import playstore from '../assets/playstore.svg'

const Footer = () => {
  return (
    <footer className="bg-white py-15">
      <div className="container mx-auto px-50">
        {/* Main content */}
        <div className="mb-10">
          <div className="flex flex-col md:flex-row">
            {/* Left column with text and app buttons */}
            <div className="md:w-1/4 mb-8 md:mb-0">
              <img src={logo} alt="" />
              <p className="text-gray-700 mb-6">
                This powerful tool eliminates the need to leave Salesforce to get things done as I can create a custom proposal with dynamic pricing tables.
              </p>
              <div className="space-y-2">
                <div className="text-xs font-medium text-gray-500">GET IT ON</div>
                <div className="flex space-x-2">
                <img src={appstor} alt="" />
                <img src={playstore} alt="" />
                </div>
              </div>
            </div>

            {/* Right columns with navigation links */}
            <div className="md:w-3/4 grid grid-cols-2 md:grid-cols-4 gap-8">
              {/* Column 1 */}
              <div>
                <h3 className="font-bold mb-4">About</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-700 text-sm">Pricing</a></li>
                  <li><a href="#" className="text-gray-700 text-sm">Features</a></li>
                  <li><a href="#" className="text-gray-700 text-sm">Integrations</a></li>
                  <li><a href="#" className="text-gray-700 text-sm">Career</a></li>
                  <li><a href="#" className="text-gray-700 text-sm">Contact</a></li>
                  <li><a href="#" className="text-gray-700 text-sm">Contact v2</a></li>
                </ul>
              </div>

              {/* Column 2 */}
              <div>
                <h3 className="font-bold mb-4">Shop</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-700 text-sm">With sidebar</a></li>
                  <li><a href="#" className="text-gray-700 text-sm">Product detail</a></li>
                  <li><a href="#" className="text-gray-700 text-sm">Product detail v2</a></li>
                  <li><a href="#" className="text-gray-700 text-sm">Cart</a></li>
                  <li><a href="#" className="text-gray-700 text-sm">Checkout</a></li>
                  <li><a href="#" className="text-gray-700 text-sm">Order confirmation</a></li>
                </ul>
              </div>

              {/* Column 3 */}
              <div>
                <h3 className="font-bold mb-4">Request a demo</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-700 text-sm">Sign in</a></li>
                  <li><a href="#" className="text-gray-700 text-sm">Sign in v2</a></li>
                  <li><a href="#" className="text-gray-700 text-sm">Sign up</a></li>
                  <li><a href="#" className="text-gray-700 text-sm">Sign up v2</a></li>
                  <li><a href="#" className="text-gray-700 text-sm">Reset password</a></li>
                  <li><a href="#" className="text-gray-700 text-sm">Reset password v2</a></li>
                </ul>
              </div>

              {/* Column 4 */}
              <div>
                <h3 className="font-bold mb-4">Blog</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-700 text-sm">Blog detail</a></li>
                  <li><a href="#" className="text-gray-700 text-sm">FAQ</a></li>
                  <li><a href="#" className="text-gray-700 text-sm">404</a></li>
                  <li><a href="#" className="text-gray-700 text-sm">Coming Soon</a></li>
                  <li><a href="#" className="text-gray-700 text-sm">Terms of service</a></li>
                  <li><a href="#" className="text-gray-700 text-sm">Privacy policy</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Divider line */}
        <hr className="border-t border-gray-300 my-4" />

        {/* Footer bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-4">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-700 text-sm">Lexend © 2025, All rights reserved.</p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <div className="flex space-x-4">
              <a href="#" className="text-gray-700 text-sm">Privacy notice</a>
              <a href="#" className="text-gray-700 text-sm">Legal</a>
              <a href="#" className="text-gray-700 text-sm">Cookie settings</a>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex space-x-4">
                <a href="#" className="text-gray-700"><Linkedin size={16} /></a>
                <a href="#" className="text-gray-700"><Facebook size={16} /></a>
                <a href="#" className="text-gray-700"><Twitter size={16} /></a>
                <a href="#" className="text-gray-700"><Instagram size={16} /></a>
                <a href="#" className="text-gray-700"><Youtube size={16} /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;