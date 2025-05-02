import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-black text-white pt-12 pb-6 px-4 border-t border-gray-800">
      <div className="container mx-auto max-w-6xl">
        {/* Floating back to top button */}
        <button 
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-[#05DF73] hover:bg-[#05DF73] text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 z-50"
          aria-label="Back to top"
        >
          <FaArrowUp />
        </button>

        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and company info */}
          <div className="flex flex-col items-center md:items-start">
            <div className="mb-4 transform hover:scale-105 transition duration-300 bg-white p-2 rounded">
              <img src={logo} alt="Amazing Web Design Logo" className="h-12" />
            </div>

            <p className="text-gray-400 text-center md:text-left mb-4">
              It's time to take your business online with our cutting-edge digital solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#05DF73] transition duration-300">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-500 transition duration-300">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition duration-300">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4 relative pb-2 after:absolute after:bottom-0 after:left-0 md:after:left-0 after:w-12 after:h-0.5 after:bg-[#05DF73]">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition duration-300">Home</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition duration-300">Services</Link></li>
              <li><Link to="/portfolio" className="text-gray-400 hover:text-white transition duration-300">Portfolio</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition duration-300">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition duration-300">Contact</Link></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4 relative pb-2 after:absolute after:bottom-0 after:left-0 md:after:left-0 after:w-12 after:h-0.5 after:bg-[#05DF73]">
              Legal
            </h3>
            <ul className="space-y-2">
              <li><Link to="/terms-of-service" className="text-gray-400 hover:text-white transition duration-300">Terms of Service</Link></li>
              <li><Link to="/privacy-policy" className="text-gray-400 hover:text-white transition duration-300">Privacy Policy</Link></li>
              <li><Link to="/refund-cancellation" className="text-gray-400 hover:text-white transition duration-300">Refund Policy</Link></li>
              <li><Link to="/cookie-policy" className="text-gray-400 hover:text-white transition duration-300">Cookie Policy</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4 relative pb-2 after:absolute after:bottom-0 after:left-0 md:after:left-0 after:w-12 after:h-0.5 after:bg-[#05DF73]">
              Newsletter
            </h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates.
            </p>
            <form className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-[#05DF73] text-white"
                required
              />
              <button 
                type="submit" 
                className="bg-[#05DF73] hover:bg-[#05DF73] text-black py-2 px-4 rounded transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Services keywords - animated scroll */}
        <div className="relative overflow-hidden mb-8 py-4 border-t border-b border-gray-800">
          <div className="flex items-center">
            <span className="text-gray-400 whitespace-nowrap mr-4">Our Services:</span>
            <div className="flex-1 overflow-hidden">
              <div className="animate-scroll whitespace-nowrap">
                {[
                  "Mobile App Development", "eCommerce Solutions", "Web Design", 
                  "Shopify Development", "Android & iOS Apps", "UI/UX Design",
                  "WordPress Development", "Custom Software", "Digital Marketing"
                ].map((text, index) => (
                  <span key={index} className="text-gray-400 mx-4 inline-block">
                    {text}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright and bottom links */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-gray-800">
          <div className="text-gray-500 text-sm mb-4 md:mb-0">
            © 2025 AmazingWeb.Design. All Rights Reserved.
          </div>
          <div className="flex space-x-4">
            <Link to="/sitemap" className="text-gray-500 hover:text-white text-sm transition duration-300">
              Sitemap
            </Link>
            <Link to="/careers" className="text-gray-500 hover:text-white text-sm transition duration-300">
              Careers
            </Link>
            <Link to="/faq" className="text-gray-500 hover:text-white text-sm transition duration-300">
              FAQ
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Animation */}
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          display: inline-block;
          animation: scroll 20s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
